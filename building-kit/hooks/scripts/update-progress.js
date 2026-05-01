#!/usr/bin/env node
'use strict';

/**
 * update-progress.js — Generic per-edit progress recorder.
 *
 * Fires on:
 *   - Layer 1: Claude Code PostToolUse on Edit/Write
 *   - Layer 2: AI instruction "after every Edit/Write call"
 *
 * Effects (idempotent):
 *   - Appends an event to memory/sessions/active.jsonl
 *   - Optionally checks off a matching line in docs/progress.md if the
 *     agent passes --task "<task description>"
 *
 * Env / args:
 *   CLAUDE_HOOK_FILE   — path of file edited (set by Claude Code)
 *   --file <path>      — fallback if CLAUDE_HOOK_FILE not set
 *   --task "<text>"    — checks off matching unchecked line in docs/progress.md
 *
 * Usage:
 *   node hooks/scripts/update-progress.js [project-path] --file src/foo.ts
 *   node hooks/scripts/update-progress.js [project-path] --task "implement login"
 */

const fs   = require('fs');
const path = require('path');
const {
  projectRoot, ensureDir, logEvent, withPulseGuard, detectAgent,
} = require('./_lib');

function argValue(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}

function appendActiveLog(root, ev) {
  const dir  = path.join(root, 'memory', 'sessions');
  ensureDir(dir);
  fs.appendFileSync(path.join(dir, 'active.jsonl'), JSON.stringify(ev) + '\n');
}

function checkOffTask(root, taskText) {
  const file = path.join(root, 'docs', 'progress.md');
  if (!fs.existsSync(file)) return false;
  const original = fs.readFileSync(file, 'utf-8');
  const escaped  = taskText.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re       = new RegExp(`^(\\s*)- \\[ \\] (.*${escaped}.*)$`, 'im');
  const updated  = original.replace(re, '$1- [x] $2');
  if (updated === original) return false;
  fs.writeFileSync(file, updated);
  return true;
}

function main() {
  const root = projectRoot(process.argv);
  const file = process.env.CLAUDE_HOOK_FILE || argValue('--file');
  const task = argValue('--task');
  const agent = detectAgent();

  const result = withPulseGuard(root, 'update-progress', () => {
    const out = { agent, file: null, taskChecked: false };

    if (file) {
      appendActiveLog(root, {
        ts: new Date().toISOString(),
        kind: 'edit',
        file,
        agent,
      });
      out.file = file;
    }

    if (task) {
      out.taskChecked = checkOffTask(root, task);
      appendActiveLog(root, {
        ts: new Date().toISOString(),
        kind: 'task-complete',
        task,
        checked: out.taskChecked,
        agent,
      });
    }

    return out;
  });

  if (result.skipped) process.exit(0);

  if (result.file)        console.log(`update-progress: edit ${result.file}`);
  if (result.taskChecked) console.log(`update-progress: ✓ checked off "${task}"`);

  logEvent(root, 'update-progress', result);
  process.exit(0);
}

try { main(); } catch (e) {
  console.error(`update-progress.js: ${e.message}`);
  process.exit(0);
}
