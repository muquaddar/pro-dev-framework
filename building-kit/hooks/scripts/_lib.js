'use strict';

const fs   = require('fs');
const path = require('path');

const HOOK_LOG = 'memory/hooks.log';
const PULSE_DIR = 'memory/.hook-pulses';

function projectRoot(argv) {
  return argv[2] && !argv[2].startsWith('--') ? argv[2] : process.cwd();
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function logEvent(root, script, payload) {
  try {
    ensureDir(path.join(root, 'memory'));
    const line = JSON.stringify({
      ts: new Date().toISOString(),
      script,
      ...payload,
    }) + '\n';
    fs.appendFileSync(path.join(root, HOOK_LOG), line);
  } catch {
    // Logging failure must not block the agent.
  }
}

function withPulseGuard(root, script, fn) {
  const pulseDir = path.join(root, PULSE_DIR);
  const pulseFile = path.join(pulseDir, `${script}.pulse`);
  if (fs.existsSync(pulseFile)) {
    // Re-entry: another instance of this hook is in flight. Skip.
    return { skipped: true };
  }
  ensureDir(pulseDir);
  fs.writeFileSync(pulseFile, String(process.pid));
  try {
    return fn();
  } finally {
    try { fs.unlinkSync(pulseFile); } catch {}
  }
}

function safeReadJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch {
    return fallback;
  }
}

function detectAgent() {
  // Best-effort agent detection by env-var convention.
  if (process.env.AGENT_NAME)     return process.env.AGENT_NAME;
  if (process.env.CLAUDE_CODE)    return 'claude-code';
  if (process.env.CODEX_CLI)      return 'codex';
  if (process.env.ANTIGRAVITY)    return 'antigravity';
  if (process.env.OPENCODE)       return 'opencode';
  return 'agent';
}

function todayUtc() {
  return new Date().toISOString().slice(0, 10);
}

function readAgentMd(root) {
  const file = path.join(root, 'AGENT.md');
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf-8');
}

function replaceBlock(content, startMarker, endMarker, replacement) {
  const start = content.indexOf(startMarker);
  if (start === -1) return content;
  const endIdx = content.indexOf(endMarker, start + startMarker.length);
  if (endIdx === -1) return content;
  return content.slice(0, start + startMarker.length) +
         '\n' + replacement.trim() + '\n' +
         content.slice(endIdx);
}

module.exports = {
  HOOK_LOG, PULSE_DIR,
  projectRoot, ensureDir, logEvent, withPulseGuard,
  safeReadJson, detectAgent, todayUtc, readAgentMd, replaceBlock,
};
