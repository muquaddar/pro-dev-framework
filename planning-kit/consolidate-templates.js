const fs = require('fs');
const path = require('path');

const templatesDir = 'd:/MyAIAgency/WorkspaceAddOn/pro-dev-framework/planning-kit/templates';
const outputDir = 'd:/MyAIAgency/WorkspaceAddOn/pro-dev-framework/planning-kit/consolidated-kit';
const outputFile = path.join(outputDir, 'PDF_TEMPLATES_CONSOLIDATED.md');

const files = ['stakeholder-map.md', 'stakeholder-progress.md', 'work-streams.md'];

let consolidatedContent = '# Pro Dev Framework (PDF) — Consolidated Templates\n\n---\n\n';

files.forEach(file => {
    const content = fs.readFileSync(path.join(templatesDir, file), 'utf8');
    consolidatedContent += `\n# TEMPLATE: ${file}\n\n`;
    consolidatedContent += content;
    consolidatedContent += '\n\n---\n';
});

fs.writeFileSync(outputFile, consolidatedContent);
console.log(`Consolidated ${files.length} templates into ${outputFile}`);
