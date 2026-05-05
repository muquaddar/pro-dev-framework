#!/usr/bin/env node

/**
 * generate-project-state.js
 *
 * Version: PDF v2.0.0 | Kit: Building Kit
 * Stage: 4 (Build)
 * Purpose: Bootstrap or refresh .claude-state.md for any project.
 *
 * What it does:
 *   - Reads AGENT.md for current position (stage, milestone, task)
 *   - Reads docs/project-map.md for ACTIVE domains (hot zone candidates)
 *   - Reads docs/adr-log.md for active decisions and known gotchas
 *   - Reads git log for recently touched files (last 7 days = Hot, 8-30 days = Warm, 30+ = Cold)
 *   - Writes .claude-state.md using the claude-state-template structure
 *
 * Usage:
 *   node path/to/generate-project-state.js                  (run from project root)
 *   node path/to/generate-project-state.js --project-dir /path/to/project
 *   node path/to/generate-project-state.js --force          (overwrite existing state)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- Config ---

const HOT_DAYS = 7;
const WARM_DAYS = 30;
const MAX_HOT_FILES = 8;
const MAX_WARM_FILES = 10;
const SOURCE_DIRS = ['lib', 'src', 'app'];

// --- CLI Args ---

function parseArgs() {
  const args = process.argv.slice(2);
  const config = { projectDir: process.cwd(), force: false };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--project-dir' && args[i + 1]) config.projectDir = path.resolve(args[++i]);
    if (args[i] === '--force') config.force = true;
  }
  return config;
}

// --- File helpers ---

function readSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf-8'); } catch { return null; }
}

function today() {
  return new Date().toISOString().split('T')[0];
}

// --- Git: recently changed files ---

function getRecentFiles(projectDir, maxDaysAgo) {
  try {
    const since = new Date(Date.now() - maxDaysAgo * 86400000).toISOString().split('T')[0];
    const out = execSync(
      `git log --since="${since}" --name-only --pretty=format: -- ${SOURCE_DIRS.join(' ')}`,
      { cwd: projectDir, encoding: 'utf-8', timeout: 8000, stdio: ['pipe', 'pipe', 'ignore'] }
    );
    const files = out.split('\n')
      .map(l => l.trim())
      .filter(l => l && (l.endsWith('.dart') || l.endsWith('.ts') || l.endsWith('.py') || l.endsWith('.cs')));
    // Deduplicate and count frequency (more commits = hotter)
    const freq = {};
    for (const f of files) freq[f] = (freq[f] || 0) + 1;
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).map(([f]) => f);
  } catch {
    return [];
  }
}

// --- Parse AGENT.md for current position ---

function parseAgentMd(content) {
  if (!content) return { stage: '?', milestone: '?', task: 'Unknown — check AGENT.md' };

  const stageMatch = content.match(/[Ss]tage[:\s]+(\d+)[^a-zA-Z]*([^\n]*)/);
  const milestoneMatch = content.match(/[Mm]ilestone[:\s]+(\d+)[^a-zA-Z]*([^\n]*)/);
  const taskMatch = content.match(/[Cc]urrent\s+[Tt]ask[:\s]+([^\n]+)/);

  return {
    stage: stageMatch ? `${stageMatch[1]} — ${stageMatch[2].trim()}`.replace(/\s+/g, ' ') : '?',
    milestone: milestoneMatch ? `${milestoneMatch[1]} — ${milestoneMatch[2].trim()}`.replace(/\s+/g, ' ') : '?',
    task: taskMatch ? taskMatch[1].trim() : 'Check AGENT.md for current task',
  };
}

// --- Parse docs/adr-log.md for ADRs ---

function parseAdrLog(content) {
  if (!content) return { adrs: [], gotchas: [] };

  const adrs = [];
  const gotchas = [];

  const blocks = content.split(/\n(?=## ADR-)/);
  for (const block of blocks) {
    const idMatch = block.match(/## (ADR-\d+)[^\n]*/);
    if (!idMatch) continue;

    const id = idMatch[1];
    const titleMatch = block.match(/## ADR-\d+\s+[—–-]\s+([^\n]+)/);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';
    const statusMatch = block.match(/\*\*Status:\*\*\s*([^\n]+)/);
    const status = statusMatch ? statusMatch[1].trim() : 'Unknown';

    if (!status.toLowerCase().includes('deprecated') && !status.toLowerCase().includes('superseded')) {
      adrs.push({ id, title });
    }

    // Extract consequences with (-) as gotchas
    const consequenceMatches = block.matchAll(/- \(-\)\s+([^\n]+)/g);
    for (const m of consequenceMatches) {
      gotchas.push(`${id}: ${m[1].trim()}`);
    }
  }

  return { adrs, gotchas };
}

// --- Parse docs/project-map.md for active domains ---

function parseProjectMap(content) {
  if (!content) return [];
  const active = [];
  const rows = content.matchAll(/\|\s*(\S+)\s*\|\s*\d+\s*\|\s*\d+\s*\|\s*`[^`]+`\s*\|\s*(ACTIVE)/g);
  for (const m of rows) active.push(m[1]);
  return active;
}

// --- Build .claude-state.md content ---

function buildStateFile(config) {
  const { projectDir } = config;
  const projectName = path.basename(projectDir);

  const agentMd = readSafe(path.join(projectDir, 'AGENT.md'));
  const projectMapMd = readSafe(path.join(projectDir, 'docs', 'project-map.md'));
  const adrLogMd = readSafe(path.join(projectDir, 'docs', 'adr-log.md'));

  const position = parseAgentMd(agentMd);
  const { adrs, gotchas } = parseAdrLog(adrLogMd);
  const activeDomains = parseProjectMap(projectMapMd);

  // Git-based zone detection
  const hotFiles = getRecentFiles(projectDir, HOT_DAYS).slice(0, MAX_HOT_FILES);
  const warmFiles = getRecentFiles(projectDir, WARM_DAYS)
    .filter(f => !hotFiles.includes(f))
    .slice(0, MAX_WARM_FILES);

  const hotSet = new Set(hotFiles);
  const warmSet = new Set(warmFiles);

  // Cold: source dirs NOT in hot or warm, or not in active domains
  const coldCandidates = [
    'android/', 'ios/', 'build/', '.dart_tool/', 'windows/', 'linux/', 'macos/', 'web/',
  ];

  // --- Build markdown ---

  let md = `# Project State — ${projectName}\n\n`;
  md += `> **Version:** PDF v2.0.0 | **Kit:** Building Kit\n`;
  md += `> **Purpose:** Living session scratchpad. Load at session start instead of reading all agent-rules files.\n`;
  md += `> **Last updated:** ${today()} by generate-project-state.js\n\n`;
  md += `---\n\n`;

  // Current Position
  md += `## Current Position\n\n`;
  md += `- **Stage:** ${position.stage}\n`;
  md += `- **Milestone:** ${position.milestone}\n`;
  md += `- **Active Task:** ${position.task}\n`;
  md += `- **Blockers:** none\n\n`;
  md += `---\n\n`;

  // Hot Zones
  md += `## Hot Zones (read fully at session start)\n\n`;
  if (hotFiles.length > 0) {
    md += `| File | Why Hot | Last Touched |\n`;
    md += `|---|---|---|\n`;
    for (const f of hotFiles) {
      md += `| \`${f}\` | Recently modified | ${today()} |\n`;
    }
  } else {
    md += `_No files modified in the last ${HOT_DAYS} days. Add manually as you begin work._\n`;
    md += `\n| File | Why Hot | Last Touched |\n`;
    md += `|---|---|---|\n`;
    md += `| \`lib/features/.../\` | Current feature | — |\n`;
  }
  md += `\n---\n\n`;

  // Warm Zones
  md += `## Warm Zones (read Tier 1 index, then file only if needed)\n\n`;
  if (warmFiles.length > 0) {
    for (const f of warmFiles) {
      md += `- \`${f}\` — modified in last ${WARM_DAYS} days\n`;
    }
  } else {
    md += `- \`lib/shared/services/\` — shared services (add as needed)\n`;
    md += `- \`lib/app/routes.dart\` — navigation (update when adding screens)\n`;
  }
  md += `\n---\n\n`;

  // Cold Archive
  md += `## Cold Archive (never read source — use Tier 2 signatures only)\n\n`;
  for (const c of coldCandidates) {
    md += `- \`${c}\` — platform layer, no source changes expected\n`;
  }
  md += `- \`build/\` — generated, never read\n`;
  md += `\n---\n\n`;

  // Known Gotchas (from ADR consequences)
  md += `## Known Gotchas\n\n`;
  if (gotchas.length > 0) {
    for (const g of gotchas) {
      md += `- ${g}\n`;
    }
  } else {
    md += `- _None recorded yet. Add surprises here as you discover them._\n`;
  }
  md += `\n---\n\n`;

  // Patterns We Use
  md += `## Patterns We Use\n\n`;
  md += `| Concern | Choice | Notes |\n`;
  md += `|---|---|---|\n`;
  md += `| State management | _see AGENT.md_ | — |\n`;
  md += `| Local DB | _see AGENT.md_ | — |\n`;
  md += `| Navigation | _see AGENT.md_ | — |\n`;
  md += `| HTTP client | _see AGENT.md_ | — |\n`;
  md += `| Testing | _see AGENT.md_ | — |\n`;
  md += `\n---\n\n`;

  // Active ADRs
  md += `## Active ADRs\n\n`;
  if (adrs.length > 0) {
    for (const adr of adrs) {
      md += `- **${adr.id}** — ${adr.title} — see \`docs/adr-log.md\`\n`;
    }
  } else {
    md += `- _No ADRs found. Run after populating docs/adr-log.md._\n`;
  }
  md += `\n---\n\n`;

  // Agency Knowledge Applied
  md += `## Agency Knowledge Applied\n\n`;
  md += `_Check \`WorkspaceAddOn/pro-dev-framework/building-kit/agency-knowledge/_index.md\` before starting novel features._\n\n`;
  md += `- _None applied yet. Add entries after injecting cross-project knowledge._\n`;
  md += `\n---\n\n`;

  // Session Notes
  md += `## Session Notes (clear each session)\n\n`;
  md += `_In-flight notes for the current session. Clear via Switch Protocol._\n\n`;
  md += `- \n`;

  return md;
}

// --- Main ---

function main() {
  const config = parseArgs();
  const { projectDir, force } = config;

  if (!fs.existsSync(projectDir)) {
    console.error(`Error: Project directory not found: ${projectDir}`);
    process.exit(1);
  }

  const outputPath = path.join(projectDir, '.claude-state.md');

  if (fs.existsSync(outputPath) && !force) {
    console.log(`⚠️  .claude-state.md already exists at: ${outputPath}`);
    console.log(`   Use --force to regenerate (overwrites your manual edits).`);
    console.log(`   To refresh Hot/Warm zones only, edit the file manually or re-run with --force.`);
    return;
  }

  console.log(`🔍 PDF Project State Generator v2.0.0\n`);
  console.log(`  Project: ${projectDir}`);

  const content = buildStateFile(config);
  fs.writeFileSync(outputPath, content, 'utf-8');

  console.log(`\n✅ .claude-state.md written to: ${outputPath}`);
  console.log(`\nNext steps:`);
  console.log(`  1. Open .claude-state.md and fill in "Patterns We Use" from AGENT.md`);
  console.log(`  2. Verify Hot/Warm zones match your current work`);
  console.log(`  3. Add .claude-state.md to .gitignore (it's session-local state)`);
  console.log(`  4. Reference it in CLAUDE.md: "Read .claude-state.md at session start"`);
}

main();
