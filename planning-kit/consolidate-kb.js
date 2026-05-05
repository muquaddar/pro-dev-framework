const fs = require('fs');
const path = require('path');

const kbDir = 'd:/MyAIAgency/WorkspaceAddOn/pro-dev-framework/planning-kit/knowledge-base';
const outputDir = 'd:/MyAIAgency/WorkspaceAddOn/pro-dev-framework/planning-kit/consolidated-kit';
const outputFile = path.join(outputDir, 'PDF_KNOWLEDGE_BASE_CONSOLIDATED.md');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(kbDir).filter(f => f.endsWith('.md')).sort();

let consolidatedContent = '# Pro Dev Framework (PDF) — Consolidated Knowledge Base\n\n';
consolidatedContent += '> **Version:** 1.0.0\n';
consolidatedContent += '> **Consolidated Date:** ' + new Date().toISOString().split('T')[0] + '\n\n---\n\n';

files.forEach(file => {
    const content = fs.readFileSync(path.join(kbDir, file), 'utf8');
    const basename = path.basename(file);
    
    consolidatedContent += `\n\n<!-- START_OF_FILE: ${basename} -->\n`;
    consolidatedContent += `\n# FILE: ${basename}\n\n`;
    consolidatedContent += content;
    consolidatedContent += `\n\n<!-- END_OF_FILE: ${basename} -->\n\n---\n`;
});

fs.writeFileSync(outputFile, consolidatedContent);
console.log(`Consolidated ${files.length} files into ${outputFile}`);
