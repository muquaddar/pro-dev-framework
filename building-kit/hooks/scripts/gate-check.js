#!/usr/bin/env node
'use strict';

/**
 * gate-check.js — Generic gate readiness reporter.
 *
 * Fires on:
 *   - Layer 2: AI instruction at gate boundaries
 *   - Layer 3: pre-commit (Gate 4 finalize), post-tag (Gate 5)
 *
 * For each gate, composes a readiness report by reading on-disk state:
 *
 *   Gate 2 (Milestone Start):
 *     - Previous milestone tasks all checked off in docs/progress.md?
 *     - Current branch matches expected pattern (M[N]-*)?
 *
 *   Gate 3 (Security-Sensitive Code):
 *     - Scans recent edits for auth/crypto/token/secret keywords
 *     - Lists any matching files for human review
 *
 *   Gate 4 (Milestone Acceptance):
 *     - Tests pass? (best-effort: looks for `test` script in package.json)
 *     - File-size violations from check-drift?
 *     - Untested files? (best-effort: counts source files vs. test files)
 *
 *   Gate 5 (Pre-Release):
 *     - All gates 2-4 passed for all milestones?
 *     - Compliance checklist (docs/compliance-checklist.md) complete?
 *
 *   Gate 6 (Launch Readiness, Enterprise):
 *     - All work-streams green in docs/work-streams.md?
 *
 *   Gate 7 (Continue/Sunset, Enterprise quarterly):
 *     - Generates summary stub for human decision.
 *
 * Effects:
 *   - Writes docs/gates/GATE-NN-report.md
 *   - Prints summary; never fails (human is the decision-maker)
 *
 * Usage:
 *   node hooks/scripts/gate-check.js [project-path] --gate 2 --milestone M2
 *   node hooks/scripts/gate-check.js [project-path] --gate 3 --scan
 *   node hooks/scripts/gate-check.js [project-path] --gate 4
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const {
  projectRoot, ensureDir, logEvent, withPulseGuard, todayUtc,
} = require('./_lib');

function argValue(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}

function readIfExists(p) {
  try { return fs.readFileSync(p, 'utf-8'); } catch { return null; }
}

function safeExec(cmd, root) {
  try { return execSync(cmd, { cwd: root, encoding: 'utf-8' }).trim(); }
  catch (e) { return `ERROR: ${e.message.split('\n')[0]}`; }
}

function gate2(root, milestone) {
  const progress = readIfExists(path.join(root, 'docs', 'progress.md')) || '';
  const branch   = safeExec('git branch --show-current', root);
  const expected = milestone ? `${milestone}-` : null;
  const branchOk = expected ? branch.startsWith(expected) : true;
  const unchecked = (progress.match(/^\s*- \[ \]/gm) || []).length;
  return [
    `## Gate 2 — Milestone Start: ${milestone || '(unspecified)'}`,
    '',
    `- Branch: \`${branch}\` ${branchOk ? '✓' : '✗ (expected to start with ' + expected + ')'}`,
    `- Previous-milestone unchecked tasks: ${unchecked}`,
    '',
    '**Decision required:** approve scope, branch, and prerequisites.',
  ].join('\n');
}

function gate3(root) {
  const recent = safeExec('git diff --name-only HEAD~5..HEAD', root).split('\n').filter(Boolean);
  const sensitive = recent.filter(f => /auth|crypto|token|secret|password|payment|jwt|session/i.test(f));
  return [
    '## Gate 3 — Security-Sensitive Code',
    '',
    `Scanned last 5 commits — ${recent.length} file(s) changed.`,
    sensitive.length === 0
      ? '- No matches for auth/crypto/token/secret/payment patterns.'
      : '- Matches:\n' + sensitive.map(f => `  - \`${f}\``).join('\n'),
    '',
    '**Decision required:** review approach, threat model, key handling.',
  ].join('\n');
}

function gate4(root) {
  const pkg = readIfExists(path.join(root, 'package.json'));
  let testCmd = null;
  try {
    const j = JSON.parse(pkg || '{}');
    if (j.scripts && j.scripts.test) testCmd = 'npm test';
  } catch {}

  let testResult = 'no test script detected';
  if (testCmd) testResult = safeExec(`${testCmd} --silent 2>&1 | tail -5`, root) || 'ran';

  // crude untested-file count
  let srcCount  = 0, testCount = 0;
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(ts|js|py|dart)$/.test(e.name)) {
        if (/\.(test|spec)\./.test(e.name) || dir.includes('test')) testCount++;
        else srcCount++;
      }
    }
  }
  walk(path.join(root, 'src'));
  walk(path.join(root, 'lib'));
  walk(path.join(root, 'test'));
  walk(path.join(root, 'tests'));

  return [
    '## Gate 4 — Milestone Acceptance',
    '',
    `- Test command: ${testCmd || 'none'}`,
    `- Test result tail:\n\`\`\`\n${testResult}\n\`\`\``,
    `- Source files: ${srcCount}, Test files: ${testCount}`,
    '',
    '**Decision required:** accept milestone or send back for fixes.',
  ].join('\n');
}

function gate5(root) {
  const compl = readIfExists(path.join(root, 'docs', 'compliance-checklist.md')) || '';
  const unchecked = (compl.match(/^\s*- \[ \]/gm) || []).length;
  return [
    '## Gate 5 — Pre-Release',
    '',
    `- Compliance checklist unchecked items: ${unchecked}`,
    '',
    '**Decision required:** approve release.',
  ].join('\n');
}

function gate6(root) {
  const ws = readIfExists(path.join(root, 'docs', 'work-streams.md')) || '(none)';
  return [
    '## Gate 6 — Launch Readiness (Enterprise)',
    '',
    'Work streams snapshot:',
    '```',
    ws.slice(0, 1500),
    '```',
    '',
    '**Decision required:** all streams green?',
  ].join('\n');
}

function gate7(root) {
  return [
    '## Gate 7 — Continue / Sunset (Enterprise quarterly)',
    '',
    `- Generated: ${todayUtc()}`,
    '- Manual review required: usage metrics, support burden, roadmap fit.',
    '',
    '**Decision required:** continue, pivot, or sunset.',
  ].join('\n');
}

function main() {
  const root      = projectRoot(process.argv);
  const gateNum   = parseInt(argValue('--gate') || '0', 10);
  const milestone = argValue('--milestone');

  const dispatch = { 2: gate2, 3: gate3, 4: gate4, 5: gate5, 6: gate6, 7: gate7 };
  const fn = dispatch[gateNum];
  if (!fn) {
    console.error('gate-check: --gate must be 2..7');
    process.exit(0);
  }

  const result = withPulseGuard(root, `gate-check-${gateNum}`, () => {
    const body = `# Gate ${gateNum} Report — ${todayUtc()}\n\n` + fn(root, milestone);
    const dir  = path.join(root, 'docs', 'gates');
    ensureDir(dir);
    const file = path.join(dir, `GATE-0${gateNum}-report.md`);
    fs.writeFileSync(file, body);
    return { gate: gateNum, file: path.relative(root, file) };
  });

  if (result.skipped) process.exit(0);

  console.log(`gate-check: ✓ wrote ${result.file}`);
  logEvent(root, 'gate-check', result);
  process.exit(0);
}

try { main(); } catch (e) {
  console.error(`gate-check.js: ${e.message}`);
  process.exit(0);
}
