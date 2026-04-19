#!/usr/bin/env node

/**
 * index-runner.js
 * 
 * Version: PDF v1.0.0 | Kit: Building Kit
 * Stage: 4 (Build) / 5 (Verify)
 * Purpose: Unified CLI entry point for all PDF index generation scripts.
 * 
 * Usage:
 *   node index-runner.js --codebase                  Generate codebase index (Tier 0/1/2)
 *   node index-runner.js --skills --skills-dir <path> Generate skill indexes
 *   node index-runner.js --context                   Generate context package (stdout)
 *   node index-runner.js --context --output <file>   Generate context package (file)
 *   node index-runner.js --all --skills-dir <path>   Run all generators
 *   node index-runner.js --help                      Show this help
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// --- Script Paths ---

const SCRIPTS_DIR = __dirname;
const SCRIPTS = {
  codebase: path.join(SCRIPTS_DIR, 'generate-codebase-index.js'),
  skills: path.join(SCRIPTS_DIR, 'generate-skill-index.js'),
  context: path.join(SCRIPTS_DIR, 'generate-context-package.js'),
};

// --- CLI Argument Parsing ---

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    codebase: false,
    skills: false,
    context: false,
    all: false,
    skillsDir: null,
    output: null,
    projectDir: null,
    verbose: false,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--codebase': config.codebase = true; break;
      case '--skills': config.skills = true; break;
      case '--context': config.context = true; break;
      case '--all': config.all = true; break;
      case '--skills-dir': config.skillsDir = args[++i]; break;
      case '--output': config.output = args[++i]; break;
      case '--project-dir': config.projectDir = args[++i]; break;
      case '--verbose': case '-v': config.verbose = true; break;
      case '--help': case '-h': config.help = true; break;
    }
  }

  if (config.all) {
    config.codebase = true;
    config.skills = true;
    config.context = true;
  }

  return config;
}

function printHelp() {
  console.log(`
PDF Index Runner v1.0.0 — Unified CLI for all PDF generators

Usage:
  node index-runner.js [generators] [options]

Generators:
  --codebase            Run generate-codebase-index.js (Tier 0/1/2 indexes)
  --skills              Run generate-skill-index.js (skill library indexes)
  --context             Run generate-context-package.js (handover bundle)
  --all                 Run all generators

Options:
  --skills-dir <path>   Required for --skills. Path to skill files directory.
  --output <file>       For --context. Write output to file (default: stdout).
  --project-dir <path>  Project root (default: current directory).
  --verbose, -v         Show detailed output from each script.
  --help, -h            Show this help message.

Examples:
  node index-runner.js --codebase
  node index-runner.js --skills --skills-dir ./skills
  node index-runner.js --context --output handover.md
  node index-runner.js --all --skills-dir ./skills
`);
}

// --- Script Executor ---

function runScript(scriptPath, extraArgs = [], label = '') {
  if (!fs.existsSync(scriptPath)) {
    console.error(`  ❌ Script not found: ${scriptPath}`);
    return false;
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  Running: ${label || path.basename(scriptPath)}`);
  console.log(`${'═'.repeat(60)}\n`);

  try {
    const cmd = `node "${scriptPath}" ${extraArgs.join(' ')}`;
    execSync(cmd, {
      stdio: 'inherit',
      cwd: process.cwd(),
      timeout: 60000,
    });
    return true;
  } catch (error) {
    console.error(`  ❌ ${label} failed with exit code ${error.status}`);
    return false;
  }
}

// --- Main ---

function main() {
  const config = parseArgs();

  if (config.help) {
    printHelp();
    return;
  }

  if (!config.codebase && !config.skills && !config.context) {
    console.error('Error: Specify at least one generator (--codebase, --skills, --context, --all).');
    console.error('Use --help for usage.\n');
    process.exit(1);
  }

  // Validate skill requirements
  if (config.skills && !config.skillsDir) {
    console.error('Error: --skills-dir is required when using --skills.');
    process.exit(1);
  }

  console.log('🔧 PDF Index Runner v1.0.0\n');

  const results = [];

  // Change to project directory if specified
  if (config.projectDir) {
    const resolved = path.resolve(config.projectDir);
    if (!fs.existsSync(resolved)) {
      console.error(`Error: Project directory not found: ${resolved}`);
      process.exit(1);
    }
    process.chdir(resolved);
    console.log(`  Project: ${resolved}`);
  }

  // Run codebase indexer
  if (config.codebase) {
    const args = config.verbose ? ['--verbose'] : [];
    const success = runScript(SCRIPTS.codebase, args, 'Codebase Index Generator');
    results.push({ name: 'Codebase', success });
  }

  // Run skill indexer
  if (config.skills) {
    const args = ['--skills-dir', config.skillsDir];
    if (config.verbose) args.push('--verbose');
    const success = runScript(SCRIPTS.skills, args, 'Skill Index Generator');
    results.push({ name: 'Skills', success });
  }

  // Run context package generator
  if (config.context) {
    const args = [];
    if (config.output) args.push('--output', config.output);
    if (config.projectDir) args.push('--project-dir', config.projectDir);
    const success = runScript(SCRIPTS.context, args, 'Context Package Generator');
    results.push({ name: 'Context', success });
  }

  // Summary
  console.log(`\n${'═'.repeat(60)}`);
  console.log('  Summary');
  console.log(`${'═'.repeat(60)}\n`);

  let allPassed = true;
  for (const r of results) {
    const icon = r.success ? '✅' : '❌';
    console.log(`  ${icon} ${r.name}`);
    if (!r.success) allPassed = false;
  }

  console.log('');

  if (!allPassed) {
    process.exit(1);
  }
}

main();
