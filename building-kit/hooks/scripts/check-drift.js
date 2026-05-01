#!/usr/bin/env node
'use strict';

/**
 * check-drift.js — Generic drift detector.
 *
 * Fires on:
 *   - Layer 1: Claude Code PostToolUse on Edit/Write (interval-counted)
 *   - Layer 2: AI instruction every 3 tasks
 *   - Layer 3: cron every 30 min (--interval)
 *
 * Checks (configurable via --check):
 *   scope  — modified files vs. milestone scope (from docs/milestone-plan.md)
 *   size   — any file > 500 lines
 *   deps   — package.json / requirements.txt / pyproject.toml / pubspec.yaml modified
 *   all    — run all of the above (default)
 *
 * Effects:
 *   - Reads memory/sessions/active.jsonl for recent edit set
 *   - Prints flag list to stdout (one line per flag)
 *   - Logs to memory/hooks.log
 *   - Exit code 0 always (do not block agent — the agent decides what to do)
 *
 * Usage:
 *   node hooks/scripts/check-drift.js [project-path] [--check scope|size|deps|all] [--threshold N] [--interval]
 */

const fs   = require('fs');
const path = require('path');
const {
  projectRoot, logEvent, withPulseGuard,
} = require('./_lib');

const SIZE_LIMIT = 500;
const DEP_FILES  = ['package.json', 'requirements.txt', 'pyproject.toml', 'pubspec.yaml', 'Cargo.toml', 'go.mod'];

function argValue(flag, def) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : def;
}

function readActiveEdits(root) {
  const file = path.join(root, 'memory', 'sessions', 'active.jsonl');
  if (!fs.existsSync(file)) return [];
  const out = new Set();
  for (const line of fs.readFileSync(file, 'utf-8').trim().split('\n')) {
    try {
      const ev = JSON.parse(line);
      if (ev.kind === 'edit' && ev.file) out.add(ev.file);
    } catch {}
  }
  return Array.from(out);
}

function readMilestoneScope(root) {
  // Best-effort: scan docs/milestone-plan.md for current-milestone file globs.
  // If absent, return null (skip scope check).
  const file = path.join(root, 'docs', 'milestone-plan.md');
  if (!fs.existsSync(file)) return null;
  const content = fs.readFileSync(file, 'utf-8');
  // Look for a fenced "scope:" block under the active milestone
  const m = content.match(/active.*?milestone[\s\S]*?scope:\s*([\s\S]*?)(\n---|\n##|$)/i);
  if (!m) return null;
  return m[1].split('\n').map(s => s.replace(/^[\s\-*]+/, '').trim()).filter(Boolean);
}

function checkScope(root, edits) {
  const scope = readMilestoneScope(root);
  if (!scope) return [];
  const flags = [];
  for (const f of edits) {
    const inScope = scope.some(rule => f.startsWith(rule.replace(/\*+$/, '')));
    if (!inScope) flags.push(`scope: edited "${f}" outside current milestone scope`);
  }
  return flags;
}

function checkSize(root, edits) {
  const flags = [];
  for (const f of edits) {
    const abs = path.join(root, f);
    if (!fs.existsSync(abs)) continue;
    try {
      const lines = fs.readFileSync(abs, 'utf-8').split('\n').length;
      if (lines > SIZE_LIMIT) flags.push(`size: "${f}" is ${lines} lines (limit ${SIZE_LIMIT})`);
    } catch {}
  }
  return flags;
}

function checkDeps(root, edits) {
  const flags = [];
  for (const f of edits) {
    const base = path.basename(f);
    if (DEP_FILES.includes(base)) {
      flags.push(`deps: dependency manifest "${f}" was modified — confirm new deps were approved`);
    }
  }
  return flags;
}

function main() {
  const root      = projectRoot(process.argv);
  const check     = argValue('--check', 'all');
  const threshold = parseInt(argValue('--threshold', '0'), 10);
  const isInterval = process.argv.includes('--interval');

  const result = withPulseGuard(root, 'check-drift', () => {
    const edits = readActiveEdits(root);

    // Threshold gate: if threshold set and edit count below threshold, skip check.
    if (threshold > 0 && edits.length < threshold && !isInterval) {
      return { skipped: true, reason: `edit-count ${edits.length} < threshold ${threshold}` };
    }

    const flags = [];
    if (check === 'all' || check === 'scope') flags.push(...checkScope(root, edits));
    if (check === 'all' || check === 'size')  flags.push(...checkSize(root, edits));
    if (check === 'all' || check === 'deps')  flags.push(...checkDeps(root, edits));

    return { flags, editCount: edits.length };
  });

  if (result.skipped) {
    if (result.reason) console.log(`check-drift: skip (${result.reason})`);
    process.exit(0);
  }

  if (result.flags.length === 0) {
    console.log(`check-drift: ✓ no drift across ${result.editCount} edits`);
  } else {
    console.log(`check-drift: ⚠ ${result.flags.length} flag(s)`);
    for (const f of result.flags) console.log('  - ' + f);
  }

  logEvent(root, 'check-drift', result);
  process.exit(0);
}

try { main(); } catch (e) {
  console.error(`check-drift.js: ${e.message}`);
  process.exit(0);
}
