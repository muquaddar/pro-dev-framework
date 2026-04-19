Cloud Planning Kit — Output Format Rules for the AI
When you paste your activation prompt into the cloud AI (ChatGPT / Claude / Gemini), the Planning Kit will already have 13-output-formats.md in its knowledge base. But to make sure it generates script-validatable files, here's exactly what to enforce:

1. YAML Frontmatter is Non-Negotiable
Every phase output must start with a --- fenced YAML block containing these fields:

Field	Source	AI Updates?
pdf_version	Pre-filled by pdf-init.js	No
project_id	Pre-filled	No
project_name	Pre-filled	No
kit	Always "planning"	No
phase	Pre-filled (1-7)	No
phase_name	Pre-filled	No
status	AI sets to "confirmed"	Yes
tier	Pre-filled	No
tech_stack	Pre-filled	No
target_platforms	Pre-filled	No
description	Pre-filled	No
created_at	AI sets today's date	Yes (if null)
confirmed_at	AI sets today's date	Yes
confirmed_by	AI sets "human"	Yes
Key rule: The stub files from pdf-init.js already have frontmatter. Tell the cloud AI: "Keep the existing YAML frontmatter. Only update status, created_at, confirmed_at, and confirmed_by. Replace the body content below the closing ---."

2. Section Headings Must Match Exactly
The validation script checks for specific ## N. Title headings per file. The AI must use these exact prefixes:

p_10_requirements.md — ## 1. Project Background, ## 2. Core Constraints, ## 3. Scope Definition, ## 4. User Personas, ## 5. Success Metrics
p_11_strategy.md — ## 1. Stack Selection, ## 2. Milestone Roadmap, ## 3. Risk Register
p_13_ux-flows.md — ## 1. Information Architecture, ## 2. Core User Journey, ## 3. Key Screen Requirements
p_18_ui-design-brief.md — ## 1. Visual Direction, ## 2. Design Tokens, ## 3. UI Component Roster
p_20_architecture.md — ## 1. System Architecture, ## 2. Data Model, ## 3. Project Structure, ## 4. Walking Skeleton
p_27_compliance.md — ## 1. Data Privacy, ## 2. Security Architecture, ## 3. Accessibility, ## 4. Final Implementation Checklist
p_29_prd.md — ## 1. through ## 12. (Executive Summary → Approval)
3. One H1 Per File
Each file gets exactly one # Title — [PROJECT_NAME] heading. No more, no less.

4. Remove Placeholder Text
When the AI fills in a phase, it must remove any [To be completed during Phase N: ...] stub text. The validator flags confirmed files that still contain placeholder markers.

5. Canonical File Names — No Renaming
All files use the p_NN_ prefix. Never create alternate names. The 32 canonical files are:
p_01_feasibility-assessment.md, p_02_competitive-matrix.md, p_03_idea-validation-brief.md,
p_04_project-config.md, p_05_stakeholder-map.md, p_06_<role>.md (dynamic, one per stakeholder),
p_07_work-streams.md, p_08_cross-stream-deps.md, p_09_platform-research.md,
p_10_requirements.md, p_11_strategy.md, p_12_milestone-plan.md, p_13_ux-flows.md,
p_14_navigation-flow.html, p_15_user-journey.html, p_16_state-diagram.html, p_17_prototype.html,
p_18_ui-design-brief.md, p_19_prototype-styled.html, p_20_architecture.md,
p_21_architecture.html, p_22_data-model.html, p_23_walking-skeleton-spec.md,
p_24_privacy-strategy.md, p_25_security-model.md, p_26_accessibility-constraints.md,
p_27_compliance.md, p_28_security-flow.html, p_29_prd.md,
p_30_pdf-manifest.json, p_31_index.md, p_32_AGENT.md (root only).

6. Suggested Instruction to Paste
When starting a planning session, paste this alongside the activation prompt:

Format Rules:

Stub files already exist in docs/ with YAML frontmatter — preserve all pre-filled fields, only update status to "confirmed", set created_at and confirmed_at to today, and set confirmed_by to "human".
Use the exact section headings from 13-output-formats.md. The dashboard validation scripts match on ## N. Title prefix.
One # H1 heading per file. No placeholder text in confirmed files.
Output each file via Canvas export (preferred) or as a full markdown/html code block. Each output must start with the header: "📥 Save as: docs/p_NN_<filename>" so the user saves it at the exact canonical path.
7. Validation Workflow
After all phases are confirmed, run:


cd your-project
node path/to/pdf-dashboard/scripts/validate-planning.js
# Expects docs/p_30_pdf-manifest.json and all p_NN_ files in place.
This checks frontmatter fields, section headings, manifest consistency, project_id alignment across files, and sequential confirmation order. Zero errors = ready for Build phase.

All 8 tasks are now complete:

sync-manifest.js — auto-derives manifest from files
validate-planning.js — validates all planning deliverables
pdf-init.js — creates stub files with frontmatter + sections
scan-projects.js — integrated sync + validation
system-prompt.md — added directives 7 (frontmatter preservation) and 8 (manifest generation)
13-output-formats.md — added description, tech_stack, target_platforms to frontmatter spec
package.json — added validate script
This summary — cloud model output formatting rules