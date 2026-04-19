#!/usr/bin/env node

/**
 * generate-skill-index.js
 * 
 * Version: PDF v1.0.0 | Kit: Building Kit
 * Stage: 4 (Build)
 * Purpose: Auto-generate skill indexes by scanning a skills directory.
 * 
 * Generates:
 * - ROOT_INDEX.md (lists all domains)
 * - [domain]_index.md (lists all skills within that domain)
 * 
 * Usage:
 *   node generate-skill-index.js --skills-dir /path/to/skills
 *   node generate-skill-index.js --skills-dir ./skills --verbose
 * 
 * Validates each skill file's YAML frontmatter per skill-file-format.md.
 */

const fs = require('fs');
const path = require('path');

// --- Configuration ---

const VALID_DOMAINS = [
  'flutter', 'web', 'backend', 'python', 'database', 'devops',
  'security', 'compliance', 'design', 'testing', 'performance',
  'windows-desktop', 'unity', 'general'
];

const VALID_COMPLEXITY = ['beginner', 'intermediate', 'advanced'];

const STALE_THRESHOLD_DAYS = 180;

// --- CLI Argument Parsing ---

function parseArgs() {
  const args = process.argv.slice(2);
  const config = { skillsDir: null, verbose: false, help: false };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--skills-dir' && args[i + 1]) {
      config.skillsDir = args[++i];
    } else if (args[i] === '--verbose' || args[i] === '-v') {
      config.verbose = true;
    } else if (args[i] === '--help' || args[i] === '-h') {
      config.help = true;
    }
  }

  return config;
}

function printHelp() {
  console.log(`
PDF Skill Index Generator v1.0.0

Usage:
  node generate-skill-index.js --skills-dir <path> [options]

Options:
  --skills-dir <path>   Required. Path to the skills directory.
  --verbose, -v         Show detailed output for each file.
  --help, -h            Show this help message.

The skills directory should contain subdirectories named by domain:
  skills/
  ├── flutter/
  │   ├── riverpod-patterns.md
  │   └── go-router-basics.md
  ├── web/
  │   └── nextjs-app-router.md
  └── security/
      └── oauth2-pkce-flow.md

Each .md file must have YAML frontmatter per skill-file-format.md.
`);
}

// --- YAML Frontmatter Parser ---

/**
 * Extract YAML frontmatter from a markdown file.
 * Returns { valid: boolean, data: object, errors: string[] }
 */
function parseFrontmatter(content, filePath) {
  const errors = [];
  const warnings = [];

  // Check for frontmatter delimiters
  if (!content.startsWith('---')) {
    return { valid: false, data: null, errors: ['No YAML frontmatter found'], warnings };
  }

  const endIndex = content.indexOf('---', 3);
  if (endIndex === -1) {
    return { valid: false, data: null, errors: ['Unterminated YAML frontmatter'], warnings };
  }

  const yamlBlock = content.substring(3, endIndex).trim();
  const data = {};

  // Simple YAML parser for flat key-value and arrays
  let currentKey = null;
  for (const line of yamlBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Array item
    if (trimmed.startsWith('- ') && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(trimmed.substring(2).trim().replace(/^["']|["']$/g, ''));
      continue;
    }

    // Key-value pair
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex > 0) {
      const key = trimmed.substring(0, colonIndex).trim();
      let value = trimmed.substring(colonIndex + 1).trim();

      // Handle inline arrays: [item1, item2]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
        data[key] = value;
        currentKey = key;
        continue;
      }

      // Handle quoted strings
      value = value.replace(/^["']|["']$/g, '');

      // Handle numeric values
      if (/^\d+$/.test(value)) {
        value = parseInt(value, 10);
      }

      data[key] = value;
      currentKey = key;
    }
  }

  // --- Validation ---

  const requiredFields = [
    'domain', 'subdomain', 'keywords', 'complexity',
    'token_cost', 'version', 'last_verified', 'applicable_stacks'
  ];

  // Also accept underscore variants
  const fieldAliases = {
    'token-cost': 'token_cost',
    'last-verified': 'last_verified',
    'applicable-stacks': 'applicable_stacks',
  };

  // Normalize aliases
  for (const [alias, canonical] of Object.entries(fieldAliases)) {
    if (data[alias] && !data[canonical]) {
      data[canonical] = data[alias];
      delete data[alias];
    }
  }

  for (const field of requiredFields) {
    if (!data[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  if (errors.length > 0) {
    return { valid: false, data, errors, warnings };
  }

  // Domain validation
  if (!VALID_DOMAINS.includes(data.domain)) {
    warnings.push(`Unknown domain: "${data.domain}" (not in standard list)`);
  }

  // Complexity validation
  if (!VALID_COMPLEXITY.includes(data.complexity)) {
    errors.push(`Invalid complexity: "${data.complexity}" (must be: ${VALID_COMPLEXITY.join(', ')})`);
  }

  // Token cost range
  if (typeof data.token_cost === 'number' && (data.token_cost < 50 || data.token_cost > 1000)) {
    warnings.push(`token_cost ${data.token_cost} is outside recommended range (50-1000)`);
  }

  // Keywords validation
  if (Array.isArray(data.keywords)) {
    if (data.keywords.length < 3) warnings.push('Less than 3 keywords');
    if (data.keywords.length > 8) warnings.push('More than 8 keywords');
  }

  // Staleness check
  if (data.last_verified) {
    const verifiedDate = new Date(data.last_verified);
    const daysSince = (Date.now() - verifiedDate.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince > STALE_THRESHOLD_DAYS) {
      warnings.push(`Stale: last verified ${Math.floor(daysSince)} days ago`);
    }
  }

  return { valid: errors.length === 0, data, errors, warnings };
}

// --- File Walker ---

function findSkillFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip hidden directories
      if (!item.startsWith('.')) {
        results.push(...findSkillFiles(fullPath));
      }
    } else if (item.endsWith('.md') && !item.includes('_index') && item !== 'ROOT_INDEX.md') {
      results.push(fullPath);
    }
  }

  return results;
}

// --- Title Extraction ---

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function extractDescription(content) {
  // Look for "## Problem" section and take the first line
  const match = content.match(/##\s+Problem\s*\n+(.+)/);
  return match ? match[1].trim() : null;
}

// --- Index Generators ---

function generateDomainIndex(domain, skills) {
  let output = `# ${domain} — Skill Index\n\n`;
  output += `> Auto-generated by generate-skill-index.js\n`;
  output += `> Last updated: ${new Date().toISOString().split('T')[0]}\n`;
  output += `> Skills: ${skills.length}\n\n`;

  output += `| Skill | Complexity | Tokens | Stacks | Description |\n`;
  output += `|---|---|---|---|---|\n`;

  for (const skill of skills) {
    const stacks = Array.isArray(skill.data.applicable_stacks)
      ? skill.data.applicable_stacks.join(', ')
      : skill.data.applicable_stacks || '—';
    const desc = skill.description || '—';
    const relativePath = skill.relativePath.replace(/\\/g, '/');

    output += `| [${skill.title}](${relativePath}) | ${skill.data.complexity} | ~${skill.data.token_cost} | ${stacks} | ${desc} |\n`;
  }

  // Warnings section
  const staleSkills = skills.filter(s => s.warnings.some(w => w.includes('Stale')));
  if (staleSkills.length > 0) {
    output += `\n### ⚠️ Stale Skills (last verified > ${STALE_THRESHOLD_DAYS} days ago)\n\n`;
    for (const skill of staleSkills) {
      output += `- ${skill.title} (${skill.data.last_verified})\n`;
    }
  }

  return output;
}

function generateRootIndex(domainMap) {
  let output = `# Skill Library — ROOT INDEX\n\n`;
  output += `> Auto-generated by generate-skill-index.js\n`;
  output += `> Last updated: ${new Date().toISOString().split('T')[0]}\n\n`;

  const totalSkills = Object.values(domainMap).reduce((sum, skills) => sum + skills.length, 0);
  output += `**Total skills:** ${totalSkills} across ${Object.keys(domainMap).length} domains\n\n`;

  output += `| Domain | Skills | Index File |\n`;
  output += `|---|---|---|\n`;

  const sortedDomains = Object.keys(domainMap).sort();
  for (const domain of sortedDomains) {
    const count = domainMap[domain].length;
    output += `| ${domain} | ${count} | [${domain}_index.md](${domain}_index.md) |\n`;
  }

  output += `\n## Discovery Chain\n\n`;
  output += `\`\`\`\n`;
  output += `1. Read this file (ROOT_INDEX.md) → find relevant domain\n`;
  output += `2. Read domain index ([domain]_index.md) → find matching skill\n`;
  output += `3. Read skill file → apply the technique\n`;
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

  if (!config.skillsDir) {
    console.error('Error: --skills-dir is required. Use --help for usage.');
    process.exit(1);
  }

  const skillsDir = path.resolve(config.skillsDir);

  if (!fs.existsSync(skillsDir)) {
    console.error(`Error: Skills directory not found: ${skillsDir}`);
    process.exit(1);
  }

  console.log('📚 PDF Skill Index Generator v1.0.0\n');
  console.log(`  Skills directory: ${skillsDir}`);

  // Find all skill files
  const files = findSkillFiles(skillsDir);
  console.log(`  Found: ${files.length} skill files\n`);

  if (files.length === 0) {
    console.log('  No skill files found. Create .md files with YAML frontmatter.');
    return;
  }

  // Parse all skill files
  const domainMap = {};
  let validCount = 0;
  let errorCount = 0;
  let warningCount = 0;

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const result = parseFrontmatter(content, filePath);
    const relativePath = path.relative(skillsDir, filePath);
    const title = extractTitle(content) || path.basename(filePath, '.md');
    const description = extractDescription(content);

    if (config.verbose) {
      console.log(`  ${relativePath}`);
    }

    if (!result.valid) {
      errorCount++;
      console.log(`  ❌ ${relativePath}: ${result.errors.join(', ')}`);
      continue;
    }

    validCount++;

    if (result.warnings.length > 0) {
      warningCount += result.warnings.length;
      if (config.verbose) {
        for (const w of result.warnings) {
          console.log(`     ⚠️  ${w}`);
        }
      }
    }

    const domain = result.data.domain;
    if (!domainMap[domain]) domainMap[domain] = [];

    domainMap[domain].push({
      filePath,
      relativePath,
      title,
      description,
      data: result.data,
      warnings: result.warnings,
    });
  }

  console.log('');

  // Generate domain indexes
  for (const [domain, skills] of Object.entries(domainMap)) {
    const indexContent = generateDomainIndex(domain, skills);
    const indexPath = path.join(skillsDir, `${domain}_index.md`);
    fs.writeFileSync(indexPath, indexContent);
    console.log(`  ✅ ${domain}_index.md (${skills.length} skills)`);
  }

  // Generate ROOT_INDEX.md
  const rootContent = generateRootIndex(domainMap);
  const rootPath = path.join(skillsDir, 'ROOT_INDEX.md');
  fs.writeFileSync(rootPath, rootContent);
  console.log(`  ✅ ROOT_INDEX.md`);

  // Summary
  console.log(`\n📊 Summary:`);
  console.log(`  Domains: ${Object.keys(domainMap).length}`);
  console.log(`  Valid skills: ${validCount}`);
  console.log(`  Errors (skipped): ${errorCount}`);
  console.log(`  Warnings: ${warningCount}`);
  console.log('\n✅ Skill index generation complete.');
}

main();
