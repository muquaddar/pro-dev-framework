#!/usr/bin/env node
'use strict';

/**
 * session-start.js — Generic, agent-agnostic session opener.
 *
 * Fires on:
 *   - Layer 1: Claude Code SessionStart hook
 *   - Layer 2: AI instruction at the top of every session (Codex, Antigravity, OpenCode, generic)
 *
 * Effects (idempotent):
 *   - Writes memory/sessions/.current.json (start time, agent, model)
 *   - Verifies AGENT.md exists; warns if missing
 *   - Warns if previous session was not closed (orphan .current.json)
 *   - Detects long dormancy (>14 days since last snapshot) and prints reorient hint
 *
 * Env:
 *   AGENT_NAME    — overrides agent detection (default "agent")
 *   AGENT_MODEL   — for telemetry only (default "unknown")
 *
 * Usage:
 *   node hooks/scripts/session-start.js [project-path] [--reorient]
 */

const fs   = require('fs');
const path = require('path');
const {
  projectRoot, ensureDir, logEvent, withPulseGuard,
  detectAgent, todayUtc,
} = require('./_lib');

function main() {
  const root      = projectRoot(process.argv);
  const reorient  = process.argv.includes('--reorient');
  const agent     = detectAgent();
  const model     = process.env.AGENT_MODEL || 'unknown';
  const sessions  = path.join(root, 'memory', 'sessions');
  const current   = path.join(sessions, '.current.json');

  ensureDir(sessions);

  const result = withPulseGuard(root, 'session-start', () => {
    // Warn about orphaned previous session
    let orphan = null;
    if (fs.existsSync(current)) {
      try { orphan = JSON.parse(fs.readFileSync(current, 'utf-8')); } catch {}
    }

    // Long dormancy detection
    let dormancyDays = null;
    try {
      const files = fs.readdirSync(sessions)
        .filter(f => /^\d{4}-\d{2}-\d{2}-.*\.md$/.test(f))
        .sort();
      if (files.length > 0) {
        const last = files[files.length - 1].slice(0, 10);
        const lastTs = new Date(last + 'T00:00:00Z').getTime();
        dormancyDays = Math.floor((Date.now() - lastTs) / 86400000);
      }
    } catch {}

    // Verify AGENT.md
    const agentMdExists = fs.existsSync(path.join(root, 'AGENT.md'));

    // Write .current.json
    const payload = {
      started_at: new Date().toISOString(),
      agent,
      model,
      reoriented: reorient,
    };
    fs.writeFileSync(current, JSON.stringify(payload, null, 2));

    return { orphan, dormancyDays, agentMdExists };
  });

  if (result.skipped) {
    process.exit(0);
  }

  const { orphan, dormancyDays, agentMdExists } = result;

  console.log('━━━ Session Start ━━━');
  console.log(`  Agent:   ${agent}`);
  console.log(`  Model:   ${model}`);
  console.log(`  Date:    ${todayUtc()}`);
  console.log(`  Project: ${path.basename(root)}`);

  if (orphan) {
    console.log(`  ⚠ Previous session not closed (started ${orphan.started_at}). Overwriting.`);
  }
  if (!agentMdExists) {
    console.log(`  ⚠ AGENT.md not found in project root. Run scaffolding first.`);
  }
  if (dormancyDays !== null && dormancyDays > 14) {
    console.log(`  ⚠ Long dormancy: last session ${dormancyDays} days ago.`);
    console.log(`     Reorient: read AGENT.md, latest 2 snapshots, milestone-plan.md.`);
  }

  logEvent(root, 'session-start', { agent, model, dormancyDays, orphan: !!orphan });
  process.exit(0);
}

try { main(); } catch (e) {
  console.error(`session-start.js: ${e.message}`);
  process.exit(0); // never block the agent
}
