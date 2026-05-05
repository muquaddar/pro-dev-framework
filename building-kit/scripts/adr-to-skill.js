#!/usr/bin/env node

/**
 * adr-to-skill.js
 *
 * Version: PDF v2.0.0 | Kit: Building Kit
 * Stage: 4 (Build) / 5 (Verify)
 * Purpose: ADR-to-Skill Autoloop — converts #teach-tagged ADR entries into
 *          reusable skill files in the agency-knowledge library.
 *
 * How it works:
 *   1. Reads docs/adr-log.md from the project
 *   2. Finds ADR entries tagged with #teach
 *   3. For each unprocessed ADR, generates a skill stub in agency-knowledge/
 *   4. Marks the ADR as processed by adding #skill-generated tag
 *
 * Usage:
 *   node path/to/adr-to-skill.js                             (from project root)
 *   node path/to/adr-to-skill.js --project-dir /path         (explicit path)
 *   node path/to/adr-to-skill.js --agency-dir /path          (explicit agency dir)
 *   node path/to/adr-to-skill.js --dry-run                   (preview, no writes)
 *
 * Tagging convention in adr-log.md:
 *   Add `#teach` to an ADR's Status line to mark it for skill generation:
 *   **Status:** Accepted #teach
 *
 *   After generation, the script adds `#skill-generated` to prevent re-processing:
 *   **Status:** Accepted #teach #skill-generated
 */

const fs = require('fs');
const path = require('path');

// --- Config ---

const TEACH_TAG = '#teach';
const GENERATED_TAG = '#skill-generated';
const DEFAULT_AGENCY_DIR = path.resolve(__dirname, '..', 'agency-knowledge');

// --- CLI Args ---

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    projectDir: process.cwd(),
    agencyDir: DEFAULT_AGENCY_DIR,
    dryRun: false,
  };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--project-dir' && args[i + 1]) config.projectDir = path.resolve(args[++i]);
    if (args[i] === '--agency-dir' && args[i + 1]) config.agencyDir = path.resolve(args[++i]);
    if (args[i] === '--dry-run') config.dryRun = true;
  }
  return config;
}

// --- Helpers ---

function readSafe(filePath) {
  try { return fs.readFileSync(filePath, 'utf-8'); } catch { return null; }
}

function writeSafe(filePath, content, dryRun) {
  if (dryRun) {
    console.log(`  [DRY RUN] Would write: ${filePath}`);
    return;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50);
}

// --- Parse ADR blocks ---

function parseAdrBlocks(content) {
  const blocks = [];
  const rawBlocks = content.split(/\n(?=## ADR-)/);

  for (const block of rawBlocks) {
    const idMatch = block.match(/## (ADR-\d+)\s*[—–-]?\s*([^\n]*)/);
    if (!idMatch) continue;

    const id = idMatch[1];
    const title = idMatch[2].replace(/#\w+/g, '').trim();
    const statusMatch = block.match(/\*\*Status:\*\*\s*([^\n]+)/);
    const status = statusMatch ? statusMatch[1] : '';

    const hasTeach = status.includes(TEACH_TAG);
    const hasGenerated = status.includes(GENERATED_TAG);

    if (!hasTeach) continue;

    // Extract sections
    const contextMatch = block.match(/\*\*Context:\*\*\s*([\s\S]*?)(?=\*\*Decision:|$)/);
    const decisionMatch = block.match(/\*\*Decision:\*\*\s*([\s\S]*?)(?=\*\*Alternatives|$)/);
    const alternativesMatch = block.match(/\*\*Alternatives considered:\*\*\s*([\s\S]*?)(?=\*\*Consequences:|$)/);
    const consequencesMatch = block.match(/\*\*Consequences:\*\*\s*([\s\S]*?)(?=\n---|\n## |$)/);

    blocks.push({
      id,
      title,
      status: status.trim(),
      alreadyGenerated: hasGenerated,
      raw: block,
      context: contextMatch ? contextMatch[1].trim() : '',
      decision: decisionMatch ? decisionMatch[1].trim() : '',
      alternatives: alternativesMatch ? alternativesMatch[1].trim() : '',
      consequences: consequencesMatch ? consequencesMatch[1].trim() : '',
    });
  }

  return blocks;
}

// --- Generate skill file content ---

function generateSkillContent(adr, projectName, projectDir) {
  const positiveConsequences = adr.consequences
    .split('\n')
    .filter(l => l.match(/^\s*-\s*\(\+\)/))
    .map(l => l.replace(/^\s*-\s*\(\+\)\s*/, '').trim());

  const negativeConsequences = adr.consequences
    .split('\n')
    .filter(l => l.match(/^\s*-\s*\(-\)/))
    .map(l => l.replace(/^\s*-\s*\(-\)\s*/, '').trim());

  const rejectedAlternatives = adr.alternatives
    .split('\n')
    .filter(l => l.match(/rejected/i))
    .map(l => l.replace(/^\s*-\s*/, '').trim());

  let content = `# Skill: ${adr.title}\n\n`;
  content += `> **Source:** ${projectName} ${adr.id} | **Kit:** Building Kit\n`;
  content += `> **Category:** Agency Knowledge | **Added:** ${today()}\n`;
  content += `> **Tags:** {{add-relevant-tags e.g. flutter, android, database, auth}}\n\n`;
  content += `---\n\n`;

  content += `## When to Apply\n\n`;
  content += `Use this skill when: {{FILL IN — describe the trigger condition. e.g., "implementing camera integration on Android" or "adding a new database entity"}}\n\n`;
  content += `---\n\n`;

  content += `## The Decision\n\n`;
  content += `${adr.decision || '_Fill in from ADR._'}\n\n`;
  content += `---\n\n`;

  content += `## Why This Choice\n\n`;
  if (positiveConsequences.length > 0) {
    for (const p of positiveConsequences) {
      content += `- ${p}\n`;
    }
  } else {
    content += `_Fill in from ADR consequences._\n`;
  }
  content += `\n---\n\n`;

  if (rejectedAlternatives.length > 0) {
    content += `## What NOT to Use (and Why)\n\n`;
    for (const r of rejectedAlternatives) {
      content += `- ${r}\n`;
    }
    content += `\n---\n\n`;
  }

  content += `## Gotchas / Traps\n\n`;
  if (negativeConsequences.length > 0) {
    for (const n of negativeConsequences) {
      content += `- ⚠️ ${n}\n`;
    }
  } else {
    content += `- _Fill in from ADR consequences (-) lines._\n`;
  }
  content += `\n---\n\n`;

  content += `## Example Pattern\n\n`;
  content += `\`\`\`dart\n`;
  content += `// TODO: Add a minimal code example demonstrating the pattern.\n`;
  content += `// Keep it under 30 lines — just enough to show the key structure.\n`;
  content += `\`\`\`\n\n`;
  content += `---\n\n`;

  content += `## Source Project Context\n\n`;
  content += `- **Project:** ${projectName}\n`;
  content += `- **ADR:** ${adr.id} in \`${path.relative(process.cwd(), projectDir)}/docs/adr-log.md\`\n`;
  content += `- **Context:** ${adr.context ? adr.context.slice(0, 200) + (adr.context.length > 200 ? '…' : '') : '_See ADR._'}\n`;

  return content;
}

// --- Mark ADR as generated in the original file ---

function markAsGenerated(adrLogPath, adrId, dryRun) {
  const content = readSafe(adrLogPath);
  if (!content) return;

  const updated = content.replace(
    new RegExp(`(## ${adrId}[^]*?\\*\\*Status:\\*\\*\\s*)([^\\n]+)`),
    (match, prefix, statusLine) => {
      if (statusLine.includes(GENERATED_TAG)) return match;
      return `${prefix}${statusLine.trim()} ${GENERATED_TAG}`;
    }
  );

  if (updated === content) {
    console.log(`  ⚠️  Could not mark ${adrId} as generated (check ADR format)`);
    return;
  }

  writeSafe(adrLogPath, updated, dryRun);
}

// --- Update agency knowledge index ---

function updateAgencyIndex(agencyDir, skillFile, adr, projectName, dryRun) {
  const indexPath = path.join(agencyDir, '_index.md');
  const relSkillPath = path.relative(agencyDir, skillFile).replace(/\\/g, '/');

  let indexContent = readSafe(indexPath) || '';

  const entryLine = `| [${adr.title}](${relSkillPath}) | ${projectName} ${adr.id} | ${today()} | {{tags}} |\n`;

  if (indexContent.includes(relSkillPath)) {
    console.log(`  ℹ️  Index already contains entry for ${path.basename(skillFile)}`);
    return;
  }

  // Find the table and append a row
  if (indexContent.includes('|---|')) {
    indexContent = indexContent.replace(
      /(\|---|[^\n]*\n)/,
      `$1${entryLine}`
    );
  } else {
    indexContent += `\n${entryLine}`;
  }

  writeSafe(indexPath, indexContent, dryRun);
}

// --- Main ---

function main() {
  const config = parseArgs();
  const { projectDir, agencyDir, dryRun } = config;

  console.log(`🔄 PDF ADR-to-Skill Autoloop v2.0.0\n`);
  if (dryRun) console.log(`  [DRY RUN MODE — no files will be written]\n`);

  const adrLogPath = path.join(projectDir, 'docs', 'adr-log.md');
  const adrLogContent = readSafe(adrLogPath);

  if (!adrLogContent) {
    console.error(`Error: docs/adr-log.md not found at: ${adrLogPath}`);
    console.log(`  Run from the project root, or pass --project-dir <path>`);
    process.exit(1);
  }

  const projectName = path.basename(projectDir);
  const adrs = parseAdrBlocks(adrLogContent);

  if (adrs.length === 0) {
    console.log(`  No #teach-tagged ADRs found in docs/adr-log.md`);
    console.log(`  To tag an ADR for skill generation, add #teach to its Status line:`);
    console.log(`  **Status:** Accepted #teach`);
    return;
  }

  console.log(`  Found ${adrs.length} ADR(s) tagged with ${TEACH_TAG}\n`);

  let generated = 0;
  let skipped = 0;

  for (const adr of adrs) {
    if (adr.alreadyGenerated) {
      console.log(`  ⏭️  ${adr.id} — already generated (${GENERATED_TAG} present)`);
      skipped++;
      continue;
    }

    const slug = slugify(`${projectName}-${adr.id}-${adr.title}`);
    const skillFileName = `${slug}.md`;
    const skillFilePath = path.join(agencyDir, skillFileName);

    console.log(`  ✍️  Generating skill: ${skillFileName}`);
    console.log(`      Source: ${adr.id} — ${adr.title}`);

    const skillContent = generateSkillContent(adr, projectName, projectDir);
    writeSafe(skillFilePath, skillContent, dryRun);

    markAsGenerated(adrLogPath, adr.id, dryRun);
    updateAgencyIndex(agencyDir, skillFilePath, adr, projectName, dryRun);

    console.log(`      ✅ Written → ${path.relative(process.cwd(), skillFilePath)}`);
    generated++;
  }

  console.log(`\n📊 Summary:`);
  console.log(`  Generated: ${generated} skill(s)`);
  console.log(`  Skipped (already done): ${skipped}`);

  if (generated > 0 && !dryRun) {
    console.log(`\nNext steps:`);
    console.log(`  1. Open generated skill files in: ${agencyDir}`);
    console.log(`  2. Fill in "When to Apply" and "Example Pattern" sections`);
    console.log(`  3. Update tags in the agency knowledge index`);
    console.log(`  4. Commit: git commit -am "feat(skills): add agency knowledge from ${projectName} ADRs"`);
  }
}

main();
