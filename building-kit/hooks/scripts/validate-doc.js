#!/usr/bin/env node
'use strict';

/**
 * validate-doc.js — Generic planning-doc validator.
 *
 * Fires on:
 *   - Layer 1: Claude Code PostToolUse on `docs/*.md` or `AGENT.md`
 *   - Layer 3: pre-commit git hook
 *
 * Checks (per file):
 *   - Has H1 heading
 *   - No leftover [PLACEHOLDER] / [TODO] markers
 *   - No unresolved merge conflict markers
 *   - YAML frontmatter valid (if present) — top block delimited by --- ... ---
 *   - Length sanity: not 0 bytes, not > 50KB
 *
 * AGENT.md additional checks (--agent-md):
 *   - "Current State" block markers present
 *   - "Active Hooks" section present
 *
 * Effects:
 *   - Logs result to memory/hooks.log
 *   - Exit 0 on PostToolUse layer; exit 1 on pre-commit failure if --strict
 *
 * Usage:
 *   node hooks/scripts/validate-doc.js [project-path] --file docs/requirements.md
 *   node hooks/scripts/validate-doc.js [project-path] --agent-md
 *   node hooks/scripts/validate-doc.js [project-path] --all-docs --strict
 */

const fs   = require('fs');
const path = require('path');
const {
  projectRoot, logEvent,
} = require('./_lib');

function argValue(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}

function listDocs(root) {
  const dir = path.join(root, 'docs');
  if (!fs.existsSync(dir)) return [];
  const out = [];
  function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.md')) out.push(path.relative(root, p));
    }
  }
  walk(dir);
  return out;
}

function validateOne(root, rel) {
  const abs = path.join(root, rel);
  const errs = [];
  if (!fs.existsSync(abs)) {
    errs.push('file does not exist');
    return errs;
  }

  const content = fs.readFileSync(abs, 'utf-8');
  if (content.length === 0)        errs.push('empty file');
  if (content.length > 50_000)     errs.push(`oversized (${content.length} bytes)`);
  if (!/^#\s+\S/m.test(content))   errs.push('missing H1 heading');
  if (/\[PLACEHOLDER\]|\[TODO\]/.test(content))
    errs.push('contains [PLACEHOLDER] or [TODO] markers');
  if (/^<{7}|^={7}|^>{7}/m.test(content))
    errs.push('unresolved merge conflict markers');

  // YAML frontmatter sanity (if present)
  if (content.startsWith('---\n')) {
    const end = content.indexOf('\n---', 4);
    if (end === -1) errs.push('frontmatter not closed');
  }

  return errs;
}

function validateAgentMd(root) {
  const abs = path.join(root, 'AGENT.md');
  const errs = validateOne(root, 'AGENT.md');
  if (!fs.existsSync(abs)) return errs;
  const content = fs.readFileSync(abs, 'utf-8');
  if (!content.includes('<!-- HOOK:CURRENT-STATE:START -->'))
    errs.push('missing <!-- HOOK:CURRENT-STATE:START --> marker');
  if (!content.includes('## Active Hooks') && !content.includes('## Hooks'))
    errs.push('missing "## Active Hooks" section');
  return errs;
}

function main() {
  const root     = projectRoot(process.argv);
  const file     = process.env.CLAUDE_HOOK_FILE || argValue('--file');
  const agentMd  = process.argv.includes('--agent-md');
  const allDocs  = process.argv.includes('--all-docs');
  const strict   = process.argv.includes('--strict');

  const targets = [];
  if (file) targets.push({ rel: file, isAgentMd: file === 'AGENT.md' });
  if (agentMd) targets.push({ rel: 'AGENT.md', isAgentMd: true });
  if (allDocs) {
    for (const d of listDocs(root)) targets.push({ rel: d, isAgentMd: false });
    targets.push({ rel: 'AGENT.md', isAgentMd: true });
  }

  if (targets.length === 0) {
    console.log('validate-doc: no target (use --file, --agent-md, or --all-docs)');
    process.exit(0);
  }

  let totalErrs = 0;
  const report = [];
  for (const t of targets) {
    const errs = t.isAgentMd ? validateAgentMd(root) : validateOne(root, t.rel);
    if (errs.length === 0) {
      report.push({ file: t.rel, ok: true });
    } else {
      totalErrs += errs.length;
      report.push({ file: t.rel, ok: false, errs });
    }
  }

  for (const r of report) {
    if (r.ok) {
      console.log(`validate-doc: ✓ ${r.file}`);
    } else {
      console.log(`validate-doc: ✗ ${r.file}`);
      for (const e of r.errs) console.log('    - ' + e);
    }
  }

  logEvent(root, 'validate-doc', { totalErrs, report });

  if (strict && totalErrs > 0) process.exit(1);
  process.exit(0);
}

try { main(); } catch (e) {
  console.error(`validate-doc.js: ${e.message}`);
  process.exit(0);
}
