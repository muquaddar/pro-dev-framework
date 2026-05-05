#!/usr/bin/env node

/**
 * generate-codebase-index.js
 *
 * Version: PDF v2.0.0 | Kit: Building Kit
 * Stage: 4 (Build) / 5 (Verify)
 * Purpose: Per-project codebase index generator.
 * Run from project root: node path/to/generate-codebase-index.js
 *
 * Generates:
 * - docs/project-map.md (Tier 0)
 * - docs/index/[domain].md (Tier 1)
 * - docs/index/symbols/[domain].md (Tier 2 — now includes line ranges for Atomic Fragment Retrieval)
 *
 * Features:
 * - .gitignore-aware file walking (reads project's .gitignore)
 * - Import/dependency analysis (builds consumer graph)
 * - Regex-based signature extraction (TS, JS, Python, Dart, C#, Go)
 * - Volatility detection via git log (falls back to mtime)
 * - v2.0.0: Line ranges [L{start}–L{end}] in Tier 2 for Atomic Fragment Retrieval
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- Configuration ---
const CONFIG = {
  sourceDirectories: ['src', 'lib', 'app', 'Assets/_Project/Scripts'],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.py', '.dart', '.cs', '.go', '.rs', '.java', '.kt'],
  // Fallback ignore patterns used ONLY when no .gitignore exists
  fallbackIgnorePatterns: [
    'node_modules', '.git', '__pycache__', '.next', 'dist', 'build',
    'coverage', '.dart_tool', '.flutter-plugins', 'bin', 'obj',
    '.env', 'package-lock.json', 'pubspec.lock', 'poetry.lock'
  ],
  maxLines: 500,
  warnLines: 400,
  outputDir: 'docs',
  gitBlameRecencyDays: 30,
};

// --- .gitignore Parser ---

/**
 * Parses .gitignore file and returns a matcher function.
 * Supports: plain patterns, directory patterns (ending in /), negation (!),
 * wildcards (*), double wildcards (**), and comments (#).
 */
function loadGitignore(projectRoot) {
  const gitignorePath = path.join(projectRoot, '.gitignore');
  const patterns = [];

  // Always ignore .git directory
  patterns.push({ pattern: '.git', isNegation: false, isDirectory: true });

  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, 'utf-8');
    for (let line of content.split('\n')) {
      line = line.trim();
      if (!line || line.startsWith('#')) continue;

      const isNegation = line.startsWith('!');
      if (isNegation) line = line.substring(1);

      const isDirectory = line.endsWith('/');
      if (isDirectory) line = line.slice(0, -1);

      patterns.push({ pattern: line, isNegation, isDirectory });
    }
    return { patterns, source: '.gitignore' };
  }

  // No .gitignore — use fallback patterns
  for (const p of CONFIG.fallbackIgnorePatterns) {
    patterns.push({ pattern: p, isNegation: false, isDirectory: false });
  }
  return { patterns, source: 'fallback' };
}

/**
 * Convert a gitignore pattern to a regex for matching.
 */
function patternToRegex(pattern) {
  let regexStr = pattern
    .replace(/[.+^${}()|[\]\\]/g, '\\$&') // escape regex special chars (except * and ?)
    .replace(/\*\*/g, '{{GLOBSTAR}}')       // placeholder for **
    .replace(/\*/g, '[^/]*')                // * matches anything except /
    .replace(/\?/g, '[^/]')                 // ? matches single char except /
    .replace(/\{\{GLOBSTAR\}\}/g, '.*');    // ** matches everything including /

  // If pattern doesn't contain a slash, it can match at any depth
  if (!pattern.includes('/')) {
    regexStr = '(?:^|/)' + regexStr + '(?:/|$)';
  } else {
    regexStr = '(?:^)' + regexStr + '(?:/|$)';
  }
  return new RegExp(regexStr);
}

function shouldIgnore(relativePath, ignoreRules) {
  let ignored = false;
  const normalizedPath = relativePath.replace(/\\/g, '/');

  for (const rule of ignoreRules.patterns) {
    const regex = patternToRegex(rule.pattern);
    if (regex.test(normalizedPath) || regex.test('/' + normalizedPath)) {
      ignored = !rule.isNegation;
    }
  }
  return ignored;
}

// --- Helpers ---

function isSourceFile(filePath) {
  return CONFIG.extensions.includes(path.extname(filePath));
}

function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

function countLines(filePath) {
  const content = readFileContent(filePath);
  return content ? content.split('\n').length : 0;
}

function extractDomain(filePath) {
  const parts = filePath.replace(/\\/g, '/').split('/');
  const srcIndex = parts.findIndex(p => CONFIG.sourceDirectories.some(d => d.split('/').includes(p)));
  
  if (srcIndex >= 0 && parts.length > srcIndex + 1) {
    const skipDirs = ['features', 'modules', 'packages', 'Scripts'];
    let domainIndex = srcIndex + 1;
    if (skipDirs.includes(parts[domainIndex]) && parts.length > domainIndex + 1) {
      domainIndex++;
    }
    return parts[domainIndex];
  }
  return 'root';
}

// --- Import/Dependency Analysis ---

/**
 * Extract import paths from a source file.
 * Returns an array of relative import strings (not node_modules packages).
 */
function extractImports(filePath) {
  const content = readFileContent(filePath);
  if (!content) return [];

  const ext = path.extname(filePath);
  const imports = [];

  if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
    // ES import: import { X } from './path' or import X from './path'
    const esImportRegex = /import\s+(?:[\s\S]*?)\s+from\s+['"]([^'"]+)['"]/g;
    // Require: const X = require('./path')
    const requireRegex = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

    let match;
    while ((match = esImportRegex.exec(content)) !== null) {
      if (match[1].startsWith('.')) imports.push(match[1]);
    }
    while ((match = requireRegex.exec(content)) !== null) {
      if (match[1].startsWith('.')) imports.push(match[1]);
    }
  } else if (ext === '.py') {
    // from .module import X  or  from module import X
    const fromImportRegex = /^from\s+(\.\S+)\s+import/gm;
    // import .module
    const importRegex = /^import\s+(\.\S+)/gm;

    let match;
    while ((match = fromImportRegex.exec(content)) !== null) {
      imports.push(match[1]);
    }
    while ((match = importRegex.exec(content)) !== null) {
      imports.push(match[1]);
    }
  } else if (ext === '.dart') {
    // import 'package:myapp/path.dart' or import '../relative.dart'
    const dartImportRegex = /import\s+['"](?!(?:dart:|package:(?!.*\/src\/)))([^'"]+)['"]/g;
    let match;
    while ((match = dartImportRegex.exec(content)) !== null) {
      imports.push(match[1]);
    }
  } else if (ext === '.cs') {
    // using ProjectNamespace.Module;  (can't resolve to files without project knowledge)
    // We capture the namespace as a rough proxy
    const usingRegex = /^using\s+([\w.]+);/gm;
    let match;
    while ((match = usingRegex.exec(content)) !== null) {
      if (!match[1].startsWith('System') && !match[1].startsWith('Microsoft')) {
        imports.push(match[1]);
      }
    }
  } else if (ext === '.go') {
    // import "path/to/package" or grouped imports
    const goImportRegex = /import\s+(?:\(\s*([\s\S]*?)\s*\)|"([^"]+)")/g;
    let match;
    while ((match = goImportRegex.exec(content)) !== null) {
      if (match[2]) {
        imports.push(match[2]);
      } else if (match[1]) {
        const lines = match[1].split('\n');
        for (const line of lines) {
          const m = line.match(/"([^"]+)"/);
          if (m) imports.push(m[1]);
        }
      }
    }
  }

  return imports;
}

/**
 * Resolve a relative import path to a project-relative file path.
 * e.g., from 'src/features/auth/auth.service.ts', import './auth.types' → 'src/features/auth/auth.types.ts'
 */
function resolveImportPath(importerFilePath, importPath) {
  const importerDir = path.dirname(importerFilePath);
  const candidates = [
    path.join(importerDir, importPath),
    ...CONFIG.extensions.map(ext => path.join(importerDir, importPath + ext)),
    path.join(importerDir, importPath, 'index.ts'),
    path.join(importerDir, importPath, 'index.js'),
  ];

  for (const candidate of candidates) {
    const normalized = candidate.replace(/\\/g, '/');
    if (fs.existsSync(normalized)) {
      return path.relative(process.cwd(), normalized).replace(/\\/g, '/');
    }
  }
  // Return as-is if can't resolve
  return null;
}

/**
 * Build a full dependency graph: { filePath: [files it imports] }
 * Then invert to get consumer counts: { filePath: [files that import it] }
 */
function buildDependencyGraph(allFileInfos) {
  const graph = {};       // file → [files it imports]
  const consumers = {};   // file → [files that import it]

  // Initialize
  for (const info of allFileInfos) {
    graph[info.path] = [];
    consumers[info.path] = [];
  }

  const allPaths = new Set(allFileInfos.map(f => f.path));

  for (const info of allFileInfos) {
    const imports = extractImports(path.resolve(process.cwd(), info.path));
    
    for (const imp of imports) {
      const resolved = resolveImportPath(info.path, imp);
      if (resolved && allPaths.has(resolved)) {
        graph[info.path].push(resolved);
        if (consumers[resolved]) {
          consumers[resolved].push(info.path);
        }
      }
    }
  }

  return { graph, consumers };
}

// --- Export & Signature Extraction ---

function extractExports(filePath) {
  try {
    const content = readFileContent(filePath);
    const exports = [];
    const ext = path.extname(filePath);

    if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
      const exportRegex = /export\s+(?:default\s+)?(?:async\s+)?(?:function|class|const|let|var|interface|type|enum)\s+(\w+)/g;
      let match;
      while ((match = exportRegex.exec(content)) !== null) {
        exports.push(match[1]);
      }
    } else if (ext === '.py') {
      const defRegex = /^(?:def|class)\s+(\w+)/gm;
      let match;
      while ((match = defRegex.exec(content)) !== null) {
        if (!match[1].startsWith('_')) exports.push(match[1]);
      }
    } else if (ext === '.dart') {
      const dartRegex = /^(?:class|mixin|extension|enum)\s+(\w+)/gm;
      let match;
      while ((match = dartRegex.exec(content)) !== null) {
        if (!match[1].startsWith('_')) exports.push(match[1]);
      }
    } else if (ext === '.cs') {
      const csRegex = /public\s+(?:partial\s+)?(?:class|interface|enum|struct|record)\s+(\w+)/g;
      let match;
      while ((match = csRegex.exec(content)) !== null) {
        exports.push(match[1]);
      }
    } else if (ext === '.go') {
      // Go: exported names start with uppercase
      const goRegex = /^(?:func|type|var|const)\s+([A-Z]\w*)/gm;
      let match;
      while ((match = goRegex.exec(content)) !== null) {
        exports.push(match[1]);
      }
    }

    return exports.slice(0, 5).join(', ') || '—';
  } catch {
    return '—';
  }
}

/**
 * Convert a character offset in file content to a 1-based line number.
 */
function offsetToLine(content, offset) {
  return content.slice(0, offset).split('\n').length;
}

/**
 * Estimate the end line of a function/method starting at startLine.
 * Scans forward for the closing brace of the first block encountered,
 * or falls back to startLine + MAX_FN_LINES if no block is found.
 */
function estimateEndLine(content, startOffset) {
  const MAX_FN_LINES = 60;
  const lines = content.slice(startOffset).split('\n');
  let depth = 0;
  let foundOpen = false;

  for (let i = 0; i < lines.length && i < MAX_FN_LINES; i++) {
    for (const ch of lines[i]) {
      if (ch === '{') { depth++; foundOpen = true; }
      if (ch === '}') { depth--; }
    }
    if (foundOpen && depth <= 0) {
      return offsetToLine(content, startOffset) + i;
    }
  }
  // Fallback: single-line or arrow function
  return offsetToLine(content, startOffset) + Math.min(lines.length - 1, MAX_FN_LINES);
}

function extractSignatures(filePath) {
  try {
    const content = readFileContent(filePath);
    const signatures = [];
    const ext = path.extname(filePath);

    if (['.ts', '.tsx'].includes(ext)) {
      const sigRegex = /export\s+(?:async\s+)?function\s+(\w+)\s*(\([^)]*\))(?:\s*:\s*([^\n{]+))?/g;
      let match;
      while ((match = sigRegex.exec(content)) !== null) {
        const startLine = offsetToLine(content, match.index);
        signatures.push({
          name: match[1],
          params: match[2],
          returnType: (match[3] || 'void').trim(),
          startLine,
          endLine: estimateEndLine(content, match.index),
        });
      }
    } else if (ext === '.py') {
      const sigRegex = /^def\s+(\w+)\s*(\([^)]*\))(?:\s*->\s*([^\n:]+))?/gm;
      let match;
      while ((match = sigRegex.exec(content)) !== null) {
        if (!match[1].startsWith('_')) {
          const startLine = offsetToLine(content, match.index);
          // Python: find next def/class at same or lower indent as end estimate
          signatures.push({
            name: match[1],
            params: match[2],
            returnType: (match[3] || 'None').trim(),
            startLine,
            endLine: startLine + 30, // Python: conservative estimate without brace counting
          });
        }
      }
    } else if (ext === '.dart') {
      // Dart: classes and public top-level functions/methods
      const classRegex = /^(?:abstract\s+)?class\s+(\w+)/gm;
      let match;
      while ((match = classRegex.exec(content)) !== null) {
        const startLine = offsetToLine(content, match.index);
        signatures.push({
          name: match[1],
          params: '()',
          returnType: 'class',
          startLine,
          endLine: estimateEndLine(content, match.index),
        });
      }
      // Public methods (return type + name + params)
      const fnRegex = /^\s{2,}((?:Future<[^>]+>|Stream<[^>]+>|[\w<>?[\]]+))\s+(\w+)\s*(\([^)]*\))/gm;
      while ((match = fnRegex.exec(content)) !== null) {
        if (!match[2].startsWith('_') && match[2] !== match[2].toUpperCase()) {
          const startLine = offsetToLine(content, match.index);
          signatures.push({
            name: match[2],
            params: match[3],
            returnType: match[1],
            startLine,
            endLine: estimateEndLine(content, match.index),
          });
        }
      }
    } else if (ext === '.cs') {
      const sigRegex = /public\s+(?:static\s+)?(?:async\s+)?(\w[\w<>?]*)\s+(\w+)\s*(\([^)]*\))/g;
      let match;
      while ((match = sigRegex.exec(content)) !== null) {
        if (!['class', 'interface', 'enum', 'struct', 'record', 'new', 'override'].includes(match[1])) {
          const startLine = offsetToLine(content, match.index);
          signatures.push({
            name: match[2],
            params: match[3],
            returnType: match[1],
            startLine,
            endLine: estimateEndLine(content, match.index),
          });
        }
      }
    } else if (ext === '.go') {
      const sigRegex = /^func\s+(?:\(\w+\s+\*?\w+\)\s+)?([A-Z]\w*)\s*(\([^)]*\))(?:\s*(\([^)]*\)|[\w.*[\]]+))?/gm;
      let match;
      while ((match = sigRegex.exec(content)) !== null) {
        const startLine = offsetToLine(content, match.index);
        signatures.push({
          name: match[1],
          params: match[2],
          returnType: (match[3] || '').trim() || 'void',
          startLine,
          endLine: estimateEndLine(content, match.index),
        });
      }
    }

    return signatures;
  } catch {
    return [];
  }
}

// --- Volatility Detection ---

/**
 * Try git log first for accurate recency. Fall back to file mtime.
 */
function calculateVolatility(filePath) {
  // Try git log for accurate last-modified date
  try {
    const result = execSync(
      `git log -1 --format="%at" -- "${filePath}"`,
      { encoding: 'utf-8', timeout: 5000, stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    if (result) {
      const lastCommitTimestamp = parseInt(result, 10) * 1000;
      const daysSince = (Date.now() - lastCommitTimestamp) / (1000 * 60 * 60 * 24);
      if (daysSince < CONFIG.gitBlameRecencyDays) return 'ACTIVE';
      return 'STABLE';
    }
  } catch {
    // git not available or not a git repo — fall through to mtime
  }

  // Fallback: file modification time
  try {
    const stats = fs.statSync(filePath);
    const daysSinceModified = (Date.now() - stats.mtimeMs) / (1000 * 60 * 60 * 24);
    if (daysSinceModified < CONFIG.gitBlameRecencyDays) return 'ACTIVE';
    return 'STABLE';
  } catch {
    return 'STABLE';
  }
}

// --- Walker ---

function walkDirectory(dir, ignoreRules, projectRoot, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(projectRoot, fullPath);

    if (shouldIgnore(relativePath, ignoreRules)) continue;

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDirectory(fullPath, ignoreRules, projectRoot, fileList);
    } else if (isSourceFile(fullPath)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// --- Generators ---

function generateTier0(domainMap, depInfo) {
  let output = `# Project Map — ${path.basename(process.cwd())}\n\n`;
  output += `> Tier 0 — Auto-generated by generate-codebase-index.js\n`;
  output += `> Last updated: ${new Date().toISOString().split('T')[0]}\n\n`;
  output += `**Active Milestone:** [check docs/progress.md]\n\n`;
  output += `## Domains\n\n`;
  output += `| Domain | Files | Total Lines | Index File | Status |\n`;
  output += `|---|---|---|---|---|\n`;

  for (const [domain, files] of Object.entries(domainMap)) {
    const totalLines = files.reduce((sum, f) => sum + f.lines, 0);
    const hasActive = files.some(f => f.volatility === 'ACTIVE');
    const status = hasActive ? 'ACTIVE' : 'STABLE';
    output += `| ${domain} | ${files.length} | ${totalLines} | \`docs/index/${domain}.md\` | ${status} |\n`;
  }

  output += `\n## Warnings\n\n`;
  const warnings = [];
  for (const [domain, files] of Object.entries(domainMap)) {
    for (const file of files) {
      if (file.lines > CONFIG.warnLines) {
        warnings.push(`⚠️ \`${file.path}\` is ${file.lines} lines (limit: ${CONFIG.maxLines})`);
      }
    }
  }
  if (warnings.length > 0) {
    output += warnings.join('\n') + '\n';
  } else {
    output += 'No warnings.\n';
  }

  return output;
}

function generateTier1(domain, files, consumers) {
  let output = `# ${domain} Module Index\n\n`;
  output += `> Tier 1 — Auto-generated by generate-codebase-index.js\n`;
  output += `> Last updated: ${new Date().toISOString().split('T')[0]}\n\n`;
  output += `## Files\n\n`;
  output += `| File | Lines | Volatility | Impact | Mini-Interface |\n`;
  output += `|---|---|---|---|---|\n`;

  for (const file of files) {
    const consumerCount = (consumers[file.path] || []).length;
    const impactLabel = consumerCount >= 10 ? `CRITICAL (${consumerCount})` :
                        consumerCount >= 5  ? `HIGH (${consumerCount})` :
                        consumerCount >= 1  ? `${consumerCount} consumers` : '—';
    output += `| \`${file.path}\` | ${file.lines} | ${file.volatility} | ${impactLabel} | ${file.exports} |\n`;
  }

  // Dependency impact section
  const criticalFiles = files
    .filter(f => (consumers[f.path] || []).length >= 3)
    .sort((a, b) => (consumers[b.path] || []).length - (consumers[a.path] || []).length);

  if (criticalFiles.length > 0) {
    output += `\n### Dependency Impact\n\n`;
    output += '```\n';
    for (const file of criticalFiles) {
      const cons = consumers[file.path] || [];
      const level = cons.length >= 10 ? 'CRITICAL' : cons.length >= 5 ? 'HIGH' : 'MODERATE';
      const consumerList = cons.slice(0, 5).map(c => path.basename(c)).join(', ');
      const extra = cons.length > 5 ? `, +${cons.length - 5} more` : '';
      output += `${path.basename(file.path)} [${level} — ${cons.length} consumers]: ${consumerList}${extra}\n`;
    }
    output += '```\n';
  }

  return output;
}

function generateTier2(domain, files) {
  let output = `# ${domain} — Symbol Index\n\n`;
  output += `> Tier 2 — Auto-generated by generate-codebase-index.js v2.0.0\n`;
  output += `> Last updated: ${new Date().toISOString().split('T')[0]}\n`;
  output += `> v2.0.0: Line ranges [L{start}–L{end}] enable Atomic Fragment Retrieval.\n`;
  output += `> Agent rule: For files >200 lines, read only the required line range, not the full file.\n\n`;

  for (const file of files) {
    if (file.signatures.length === 0) continue;
    output += `## ${file.path} (${file.lines} lines)\n\n`;
    for (const sig of file.signatures) {
      const lineRange = (sig.startLine && sig.endLine)
        ? ` [L${sig.startLine}–L${sig.endLine}]`
        : '';
      output += `### ${sig.name}${lineRange}\n`;
      output += `\`\`\`\nInput:  ${sig.params}\nOutput: ${sig.returnType}\n\`\`\`\n\n`;
    }
  }

  return output || `# ${domain} — Symbol Index\n\nNo extractable signatures found. Read source files directly.\n`;
}

// --- Main ---

function main() {
  console.log('🔍 PDF Codebase Index Generator v2.0.0\n');

  const projectRoot = process.cwd();

  // Load .gitignore rules
  const ignoreRules = loadGitignore(projectRoot);
  console.log(`  Ignore source: ${ignoreRules.source} (${ignoreRules.patterns.length} rules)`);

  // Find source files
  let allFiles = [];
  for (const srcDir of CONFIG.sourceDirectories) {
    if (fs.existsSync(srcDir)) {
      console.log(`  Scanning: ${srcDir}/`);
      allFiles = allFiles.concat(walkDirectory(srcDir, ignoreRules, projectRoot));
    }
  }

  if (allFiles.length === 0) {
    console.log('  ⚠️  No source files found in:', CONFIG.sourceDirectories.join(', '));
    console.log('  Edit CONFIG.sourceDirectories to match your project.');
    return;
  }

  console.log(`  Found: ${allFiles.length} source files\n`);

  // Phase 1: Analyze each file
  console.log('  Analyzing files...');
  const allFileInfos = [];
  for (const filePath of allFiles) {
    const relativePath = path.relative(projectRoot, filePath).replace(/\\/g, '/');
    const domain = extractDomain(relativePath);
    const lines = countLines(filePath);
    const exports = extractExports(filePath);
    const volatility = calculateVolatility(filePath);
    const signatures = extractSignatures(filePath);

    allFileInfos.push({ path: relativePath, domain, lines, exports, volatility, signatures });
  }

  // Phase 2: Build dependency graph
  console.log('  Building dependency graph...');
  const { consumers } = buildDependencyGraph(allFileInfos);

  // Count resolved dependencies
  const totalDeps = Object.values(consumers).reduce((sum, c) => sum + c.length, 0);
  console.log(`  Resolved: ${totalDeps} import relationships\n`);

  // Group by domain
  const domainMap = {};
  for (const info of allFileInfos) {
    if (!domainMap[info.domain]) domainMap[info.domain] = [];
    domainMap[info.domain].push(info);
  }

  // Create output directories
  const dirs = ['docs', 'docs/index', 'docs/index/symbols'];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  // Generate Tier 0
  const tier0 = generateTier0(domainMap, consumers);
  fs.writeFileSync('docs/project-map.md', tier0);
  console.log('  ✅ docs/project-map.md (Tier 0)');

  // Generate Tier 1 + Tier 2 per domain
  for (const [domain, files] of Object.entries(domainMap)) {
    const tier1 = generateTier1(domain, files, consumers);
    fs.writeFileSync(`docs/index/${domain}.md`, tier1);
    console.log(`  ✅ docs/index/${domain}.md (Tier 1)`);

    const tier2 = generateTier2(domain, files);
    fs.writeFileSync(`docs/index/symbols/${domain}.md`, tier2);
    console.log(`  ✅ docs/index/symbols/${domain}.md (Tier 2)`);
  }

  // Report
  console.log(`\n📊 Summary:`);
  console.log(`  Domains: ${Object.keys(domainMap).length}`);
  console.log(`  Files: ${allFiles.length}`);
  const totalLines = allFileInfos.reduce((sum, f) => sum + f.lines, 0);
  console.log(`  Total lines: ${totalLines}`);
  console.log(`  Import relationships: ${totalDeps}`);

  // High-impact files
  const highImpactFiles = allFileInfos
    .filter(f => (consumers[f.path] || []).length >= 5)
    .sort((a, b) => (consumers[b.path] || []).length - (consumers[a.path] || []).length);

  if (highImpactFiles.length > 0) {
    console.log(`\n  🔗 HIGH-IMPACT FILES (≥5 consumers):`);
    highImpactFiles.forEach(f => console.log(`     ${f.path}: ${consumers[f.path].length} consumers`));
  }

  const overLimit = allFileInfos.filter(f => f.lines > CONFIG.maxLines);
  if (overLimit.length > 0) {
    console.log(`\n  🚨 FILES OVER ${CONFIG.maxLines} LINES (MUST SPLIT):`);
    overLimit.forEach(f => console.log(`     ${f.path}: ${f.lines} lines`));
  }

  const nearLimit = allFileInfos.filter(f => f.lines > CONFIG.warnLines && f.lines <= CONFIG.maxLines);
  if (nearLimit.length > 0) {
    console.log(`\n  ⚠️  FILES APPROACHING LIMIT (>${CONFIG.warnLines} lines):`);
    nearLimit.forEach(f => console.log(`     ${f.path}: ${f.lines} lines`));
  }

  console.log('\n✅ Index generation complete.');
}

main();
