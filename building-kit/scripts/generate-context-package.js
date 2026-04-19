#!/usr/bin/env node

/**
 * generate-context-package.js
 * 
 * Version: PDF v1.0.0 | Kit: Building Kit
 * Stage: 4 (Build)
 * Purpose: Generate a paste-ready context package for agent handover.
 * 
 * Reads the 4 key files defined in cloud-handover-template.md:
 * 1. AGENT.md
 * 2. docs/project-map.md
 * 3. docs/progress.md
 * 4. memory/sessions/[latest].md
 * 
 * Outputs a single text block with section markers and token estimates.
 * 
 * Usage:
 *   node generate-context-package.js                    (output to stdout)
 *   node generate-context-package.js --output handover.md  (output to file)
 *   node generate-context-package.js --project-dir /path/to/project
 */

const fs = require('fs');
const path = require('path');

// --- Configuration ---

const HANDOVER_FILES = [
  { key: 'agent', path: 'AGENT.md', label: 'Project Brain', required: true },
  { key: 'project-map', path: 'docs/project-map.md', label: 'Codebase Navigation (Tier 0)', required: true },
  { key: 'progress', path: 'docs/progress.md', label: 'Progress Tracker', required: true },
  { key: 'snapshot', path: null, label: 'Latest Session Snapshot', required: false }, // resolved dynamically
];

// Rough token estimate: ~1.3 tokens per word, ~4 chars per token
function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

// --- CLI Argument Parsing ---

function parseArgs() {
  const args = process.argv.slice(2);
  const config = { projectDir: process.cwd(), output: null, help: false };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--project-dir' && args[i + 1]) {
      config.projectDir = path.resolve(args[++i]);
    } else if (args[i] === '--output' && args[i + 1]) {
      config.output = args[++i];
    } else if (args[i] === '--help' || args[i] === '-h') {
      config.help = true;
    }
  }

  return config;
}

function printHelp() {
  console.log(`
PDF Context Package Generator v1.0.0

Usage:
  node generate-context-package.js [options]

Options:
  --project-dir <path>  Project root directory (default: current directory).
  --output <file>       Write output to a file instead of stdout.
  --help, -h            Show this help message.

Reads 4 key project files and bundles them into a paste-ready
context package for agent handover. See cloud-handover-template.md
for the full handover protocol.
`);
}

// --- Find Latest Session Snapshot ---

function findLatestSnapshot(projectDir) {
  const sessionsDir = path.join(projectDir, 'memory', 'sessions');

  if (!fs.existsSync(sessionsDir)) return null;

  const files = fs.readdirSync(sessionsDir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse();

  return files.length > 0 ? path.join(sessionsDir, files[0]) : null;
}

// --- Read File Safely ---

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

// --- Generate Package ---

function generatePackage(projectDir) {
  const sections = [];
  let totalTokens = 0;
  const missing = [];

  // Resolve the snapshot path
  const snapshotPath = findLatestSnapshot(projectDir);
  const files = HANDOVER_FILES.map(f => ({
    ...f,
    path: f.key === 'snapshot'
      ? (snapshotPath ? path.relative(projectDir, snapshotPath) : null)
      : f.path,
  }));

  for (const file of files) {
    if (!file.path) {
      if (file.required) {
        missing.push(file.label);
      } else {
        sections.push({
          label: file.label,
          path: '(not found)',
          content: '(No session snapshots found in memory/sessions/)',
          tokens: 0,
        });
      }
      continue;
    }

    const fullPath = path.join(projectDir, file.path);
    const content = readFileSafe(fullPath);

    if (!content) {
      if (file.required) {
        missing.push(`${file.label} (${file.path})`);
      }
      continue;
    }

    const tokens = estimateTokens(content);
    totalTokens += tokens;

    sections.push({
      label: file.label,
      path: file.path,
      content,
      tokens,
    });
  }

  return { sections, totalTokens, missing };
}

// --- Format Output ---

function formatPackage(result, projectDir) {
  let output = '';

  output += `# Context Package — ${path.basename(projectDir)}\n\n`;
  output += `> Generated: ${new Date().toISOString().split('T')[0]}\n`;
  output += `> Total estimated tokens: ~${result.totalTokens}\n\n`;

  if (result.missing.length > 0) {
    output += `## ⚠️ Missing Files\n\n`;
    for (const m of result.missing) {
      output += `- ${m}\n`;
    }
    output += `\n`;
  }

  // Token budget table
  output += `## Token Budget\n\n`;
  output += `| File | Tokens |\n`;
  output += `|---|---|\n`;
  for (const section of result.sections) {
    output += `| ${section.label} (${section.path}) | ~${section.tokens} |\n`;
  }
  output += `| **Total** | **~${result.totalTokens}** |\n\n`;

  output += `---\n\n`;

  // File contents
  for (const section of result.sections) {
    output += `## 📄 ${section.label}\n`;
    output += `<!-- Source: ${section.path} | ~${section.tokens} tokens -->\n\n`;
    output += section.content;
    output += `\n\n---\n\n`;
  }

  // Handover instructions
  output += `## Handover Instructions\n\n`;
  output += `Paste this to the incoming agent:\n\n`;
  output += `\`\`\`\n`;
  output += `I'm switching to you as my coding agent for this project.\n`;
  output += `I've pasted the full context package above. After reading it, confirm:\n`;
  output += `- Your position (Stage, Milestone, Task)\n`;
  output += `- What the next 3 tasks are\n`;
  output += `- Any blockers or open questions from the session notes\n`;
  output += `Once you confirm, we will continue from where the previous session left off.\n`;
  output += `\`\`\`\n`;

  return output;
}

// --- Main ---

function main() {
  const config = parseArgs();

  if (config.help) {
    printHelp();
    return;
  }

  if (!fs.existsSync(config.projectDir)) {
    console.error(`Error: Project directory not found: ${config.projectDir}`);
    process.exit(1);
  }

  const result = generatePackage(config.projectDir);
  const formatted = formatPackage(result, config.projectDir);

  if (config.output) {
    const outputPath = path.resolve(config.output);
    fs.writeFileSync(outputPath, formatted);
    console.log(`📦 Context package written to: ${outputPath}`);
    console.log(`   Total tokens: ~${result.totalTokens}`);
    if (result.missing.length > 0) {
      console.log(`   ⚠️  Missing files: ${result.missing.join(', ')}`);
    }
  } else {
    process.stdout.write(formatted);
  }
}

main();
