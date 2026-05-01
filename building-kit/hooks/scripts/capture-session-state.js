#!/usr/bin/env node
'use strict';

/**
 * capture-session-state.js — Generic session-end snapshot writer.
 *
 * Fires on:
 *   - Layer 1: Claude Code Stop hook
 *   - Layer 2: AI instruction at session end (all other harnesses)
 *
 * Effects (idempotent):
 *   - Reads memory/sessions/.current.json (start time, agent)
 *   - Composes memory/sessions/active.jsonl rollup into a snapshot file
 *   - Writes memory/sessions/YYYY-MM-DD-[agent].md
 *   - Updates AGENT.md → Current State block (between markers)
 *   - Deletes .current.json on success
 *
 * Snapshot follows memory/session-snapshot-template.md structure.
 *
 * Usage:
 *   node hooks/scripts/capture-session-state.js [project-path] [--handover]
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const {
  projectRoot, ensureDir, logEvent, withPulseGuard,
  detectAgent, todayUtc, readAgentMd, replaceBlock,
} = require('./_lib');

const CURRENT_STATE_START = '<!-- HOOK:CURRENT-STATE:START -->';
const CURRENT_STATE_END   = '<!-- HOOK:CURRENT-STATE:END -->';

function gitChangedFiles(root) {
  try {
    const out = execSync('git diff --name-only HEAD', { cwd: root, encoding: 'utf-8' });
    return out.trim().split('\n').filter(Boolean).slice(0, 30);
  } catch {
    return [];
  }
}

function gitLastCommit(root) {
  try {
    const out = execSync('git log -1 --pretty=%h%x09%s', { cwd: root, encoding: 'utf-8' });
    const [hash, msg] = out.trim().split('\t');
    return { hash, msg };
  } catch {
    return { hash: 'n/a', msg: 'n/a' };
  }
}

function rollupActiveLog(root) {
  const file = path.join(root, 'memory', 'sessions', 'active.jsonl');
  if (!fs.existsSync(file)) return { taskCount: 0, files: [] };
  const lines = fs.readFileSync(file, 'utf-8').trim().split('\n').filter(Boolean);
  const files = new Set();
  let taskCount = 0;
  for (const line of lines) {
    try {
      const ev = JSON.parse(line);
      if (ev.kind === 'edit' && ev.file) files.add(ev.file);
      if (ev.kind === 'task-complete') taskCount++;
    } catch {}
  }
  return { taskCount, files: Array.from(files) };
}

function buildSnapshot({ agent, model, started, ended, durationMin, taskCount, files, commit, handover }) {
  const tasksLine    = taskCount > 0 ? taskCount + ' tasks logged' : 'No tasks logged';
  const filesBlock   = files.length ? files.map(f => '  - ' + f).join('\n') : '  - (none recorded)';
  const handoverNote = handover ? '\n> **Mode:** Handover snapshot — agent is switching platforms.\n' : '';

  return `# Session Snapshot — ${ended.slice(0, 10)} — ${agent}
${handoverNote}
## Identity
- **Agent:** ${agent}
- **Model:** ${model}
- **Started:** ${started}
- **Ended:** ${ended}
- **Duration:** ${durationMin} min

## Activity
- **Tasks completed:** ${tasksLine}
- **Files changed:**
${filesBlock}

## Git
- **Last commit:** \`${commit.hash}\` — ${commit.msg}

## Context for Next Agent
<!-- Free-form notes by the agent. Hook leaves this empty by design. -->


## Open Blockers
<!-- Agent fills in. -->


## Next 3 Tasks
<!-- Agent fills in from docs/progress.md. -->

`;
}

function buildCurrentStateBlock({ agent, ended, snapshotPath }) {
  return `- **Last Agent:** ${agent}
- **Last Session:** \`${snapshotPath}\`
- **Last Updated:** ${ended}`;
}

function main() {
  const root      = projectRoot(process.argv);
  const handover  = process.argv.includes('--handover');
  const sessions  = path.join(root, 'memory', 'sessions');
  const current   = path.join(sessions, '.current.json');

  ensureDir(sessions);

  const result = withPulseGuard(root, 'capture-session-state', () => {
    const startInfo = fs.existsSync(current)
      ? JSON.parse(fs.readFileSync(current, 'utf-8'))
      : { started_at: new Date().toISOString(), agent: detectAgent(), model: 'unknown' };

    const ended       = new Date();
    const started     = new Date(startInfo.started_at);
    const durationMin = Math.max(0, Math.round((ended - started) / 60000));
    const agent       = startInfo.agent || detectAgent();
    const model       = startInfo.model || 'unknown';

    const { taskCount } = rollupActiveLog(root);
    const files         = gitChangedFiles(root);
    const commit        = gitLastCommit(root);

    const snapshotName = `${todayUtc()}-${agent}.md`;
    const snapshotPath = path.join('memory', 'sessions', snapshotName);
    const snapshotAbs  = path.join(root, snapshotPath);

    // Idempotent: if snapshot for today+agent already exists, append a numeric suffix.
    let finalAbs  = snapshotAbs;
    let finalRel  = snapshotPath;
    let n = 2;
    while (fs.existsSync(finalAbs)) {
      finalRel = path.join('memory', 'sessions', `${todayUtc()}-${agent}-${n}.md`);
      finalAbs = path.join(root, finalRel);
      n++;
    }

    const snapshot = buildSnapshot({
      agent, model,
      started: started.toISOString(),
      ended:   ended.toISOString(),
      durationMin, taskCount, files, commit, handover,
    });
    fs.writeFileSync(finalAbs, snapshot);

    // Update AGENT.md Current State block (between markers)
    const agentMd = readAgentMd(root);
    if (agentMd && agentMd.includes(CURRENT_STATE_START)) {
      const block   = buildCurrentStateBlock({
        agent,
        ended: ended.toISOString(),
        snapshotPath: finalRel.replace(/\\/g, '/'),
      });
      const updated = replaceBlock(agentMd, CURRENT_STATE_START, CURRENT_STATE_END, block);
      fs.writeFileSync(path.join(root, 'AGENT.md'), updated);
    }

    // Cleanup
    try { fs.unlinkSync(current); } catch {}
    try { fs.unlinkSync(path.join(sessions, 'active.jsonl')); } catch {}

    return { finalRel, agent, durationMin, taskCount };
  });

  if (result.skipped) process.exit(0);

  console.log('━━━ Session Snapshot Saved ━━━');
  console.log(`  File:      ${result.finalRel}`);
  console.log(`  Agent:     ${result.agent}`);
  console.log(`  Duration:  ${result.durationMin} min`);
  console.log(`  Tasks:     ${result.taskCount}`);

  logEvent(root, 'capture-session-state', result);
  process.exit(0);
}

try { main(); } catch (e) {
  console.error(`capture-session-state.js: ${e.message}`);
  process.exit(0); // never block the agent
}
