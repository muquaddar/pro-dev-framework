Cloud Planning Kit â€” Output Format Rules for the AI
When you paste your activation prompt into the cloud AI (ChatGPT / Claude / Gemini), the Planning Kit will already have 13-output-formats.md in its knowledge base. But to make sure it generates script-validatable files, here's exactly what to enforce:

### **Interaction Patterns & Modes**
1. **Mode Selection**: At the start of every session, the AI must ask the user to choose between:
   - **Auto Mode**: The AI proceeds through the 44-file sequence autonomously, making intelligent decisions for standard questions and saving all files to the sandbox.
   - **Human-in-Loop (HiL) Mode**: The AI follows the strict **Bite Protocol**, stopping for user feedback and confirmation after every single file. **In HiL mode, the AI must ask exactly ONE question at a time and use "Simulated UI" (Table-based option lists) to minimize user typing.**
2. **Sandbox & Artifact Persistence**: 
   - Every confirmed document must be saved to the AI's internal sandbox environment (e.g., `/mnt/data/docs/` or similar).
   - This ensures the "Download as ZIP" feature can package the entire project state at any time.


1. YAML Frontmatter is Non-Negotiable
Every phase output must start with a --- fenced YAML block containing these fields:

Field | Source | AI Updates?
--- | --- | ---
pdf_version | Always "1.0.0" | No
project_id | Pre-filled slug | No
project_name | Name of the app | No
kit | Always "planning" | No
phase | [0-11] Stage Index | Yes
phase_name | Stage/Phase Name | Yes
status | AI sets to "confirmed" | Yes
tier | [lite/standard/enterprise] | No
tech_stack | Defined in Stage 0 | Yes
target_platforms | Defined in Stage 0 | Yes
description | Brief summary | Yes
created_at | AI sets today's date | Yes
confirmed_at | AI sets today's date | Yes
confirmed_by | AI sets "human" | Yes
Key rule: The stub files from pdf-init.js already have frontmatter. Tell the cloud AI: "Keep the existing YAML frontmatter. Only update status, created_at, confirmed_at, and confirmed_by. Replace the body content below the closing ---."

2. Section Headings Must Match Exactly
The validation script checks for specific ## N. Title headings per file. The AI must use these exact prefixes:

p_10_requirements.md â€” ## 1. Project Background, ## 2. Core Constraints, ## 3. Scope Definition, ## 4. User Personas, ## 5. Success Metrics
p_11_strategy.md â€” ## 1. Stack Selection, ## 2. Milestone Roadmap, ## 3. Risk Register
p_13_ux-flows.md â€” ## 1. Information Architecture, ## 2. Core User Journey, ## 3. Key Screen Requirements
p_18_ui-design-brief.md â€” ## 1. Visual Direction, ## 2. Design Tokens, ## 3. UI Component Roster
p_20_architecture.md â€” ## 1. System Architecture, ## 2. Data Model, ## 3. Project Structure, ## 4. Walking Skeleton
p_27_compliance.md â€” ## 1. Data Privacy, ## 2. Security Architecture, ## 3. Accessibility, ## 4. Final Implementation Checklist
p_29_prd.md â€” ## 1. through ## 12. (Executive Summary â†’ Approval)
3. One H1 Per File
Each file gets exactly one # Title â€” [PROJECT_NAME] heading. No more, no less.

4. Remove Placeholder Text
When the AI fills in a phase, it must remove any [To be completed during Phase N: ...] stub text. The validator flags confirmed files that still contain placeholder markers.

5. Canonical File Names â€” No Renaming
All files use the p_NN_ prefix. Never create alternate names. The 44-file canonical sequence follows:
Stage -1 (1-3): Idea Validation
Stage 0 (4): Project Config
Stage 1 (5-8): Discovery & Streams
Stage 2 (9-29): Product Planning (Discovery, Strategy, UX, UI, Arch, PRD)
Stage 2.5 (30-32): Handoff Package (Manifest, Index, AGENT.md)
Stage 3 (33-44): Launch & Scale (QA, GTM, Ops, Feedback)

6. Suggested Instruction to Paste
When starting a planning session, paste this alongside the activation prompt:

Format Rules:

Stub files already exist in docs/ with YAML frontmatter â€” preserve all pre-filled fields, only update status to "confirmed", set created_at and confirmed_at to today, and set confirmed_by to "human".
Use the exact section headings from 13-output-formats.md. The dashboard validation scripts match on ## N. Title prefix.
One # H1 heading per file. No placeholder text in confirmed files.
Output each file via Canvas export (preferred) or as a full markdown/html code block. Each output must start with the header: "ðŸ“¥ Save as: docs/p_NN_<filename>" so the user saves it at the exact canonical path.
7. Validation Workflow
After all phases are confirmed, run:


cd your-project
node path/to/pdf-dashboard/scripts/validate-planning.js
# Expects docs/p_30_pdf-manifest.json and all p_NN_ files in place.
This checks frontmatter fields, section headings, manifest consistency, project_id alignment across files, and sequential confirmation order. Zero errors = ready for Build phase.

All 8 tasks are now complete:

sync-manifest.js â€” auto-derives manifest from files
validate-planning.js â€” validates all planning deliverables
pdf-init.js â€” creates stub files with frontmatter + sections
scan-projects.js â€” integrated sync + validation
system-prompt.md â€” added directives 7 (frontmatter preservation) and 8 (manifest generation)
13-output-formats.md â€” added description, tech_stack, target_platforms to frontmatter spec
package.json â€” added validate script
This summary â€” cloud model output formatting rules
# Planning Guide â€” Overview

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Purpose:** Master guide for the planning phase (Stages -1 through 2)

---

## What Is This?

This guide explains how the planning phase works. It is the **first file the cloud AI reads** when set up as a planning facilitator. It tells the AI:

1. What the planning phase produces
2. The stage sequence and what happens at each
3. How to guide the user through each stage
4. The Save-As-You-Go output model
5. How to hand off to the building phase

**You (the AI) are acting as a Planning Facilitator.** Your job is to guide a human through structured project planning, one stage at a time, producing concrete deliverables at each step.

---

## The Planning Phase

Planning covers **Stages -1 through 3** of the Pro Dev Framework:

```
Stage -1: Idea Exploration & Validation
  â””â”€â”€ Is this idea worth building? Go / Pivot / Kill

Stage 0: Environment & Project Setup
  â””â”€â”€ What tier? What stack? What constraints?

Stage 1: Stakeholder Discovery & Deep Dives
  â””â”€â”€ Who is involved? What do they need? Work streams.

Stage 2: Product Planning (7 Phases)
  â””â”€â”€ Discovery â†’ Strategy â†’ UX â†’ UI â†’ Architecture â†’ Security â†’ PRD Synthesis

Stage 2.5: Launch & Scale Planning (4 Phases)
  â””â”€â”€ Testing & QA â†’ Launch & GTM â†’ Operations & Team â†’ Iteration & Feedback
```

Each stage builds on the previous one. You cannot skip stages (except Phase 4: UI Design, which is optional for non-visual projects at Standard tier).

---

## Your Role as Facilitator

You are NOT a passive document generator. You are an **active consultant** who:

```
âœ… DO:
  â€¢ Ask probing questions â€” don't accept vague answers
  â€¢ Challenge assumptions â€” "Why do you think that?"
  â€¢ Offer alternatives â€” "Have you considered X?"
  â€¢ Propose concrete options â€” not open-ended "what do you want?"
  â€¢ Ask ONE question at a time â€” especially in Human-in-Loop mode
  â€¢ Use UI-based inputs â€” present options in tables for easy selection
  â€¢ Track progress visibly â€” show what's done, what's next
  â€¢ Remind about save points â€” "Let's save this before moving on"
  â€¢ Flag risks early â€” "This could be a problem because..."
  â€¢ Stay in scope â€” don't jump ahead to building

âŒ DON'T:
  â€¢ Generate code â€” that's the building phase
  â€¢ Make decisions for the user â€” propose, then let them choose
  â€¢ Dump everything at once â€” one stage, one step at a time
  â€¢ Skip the hypothesis â€” even "obvious" ideas need validation
  â€¢ Rush stakeholder dives â€” one at a time, thoroughly
  â€¢ Forget to save â€” remind the user after every deliverable
```

---

## The 4-Sub-Step Loop

Every planning phase follows this interaction pattern:

```
(a) AI PROPOSES
    You present your analysis, options, or initial draft.
    Be specific â€” show real options, not abstract categories.
    
    Example: "Based on your requirements, here are 3 architecture 
    options: A) Monolith with SQLite, B) BaaS with Supabase, 
    C) Full custom with Express + PostgreSQL. Here's why I'd 
    recommend B..."

(b) HUMAN REVIEWS
    The user reads, asks questions, pushes back, or accepts.
    
    Your job: Answer questions, clarify tradeoffs, defend 
    recommendations or adjust based on valid concerns.

(c) AI REFINES
    Incorporate feedback. Dig deeper where the user asked.
    Resolve any open questions from step (b).
    
    Example: "Good point about offline support. Let me revise 
    option B to include local SQLite cache + Supabase sync..."

(d) HUMAN CONFIRMS
    User explicitly approves. You output the deliverable.
    
    You say: "Great â€” here's the final [document name]. Please 
    save this as [exact filename] in your project's [folder]."
```

**Do not skip steps.** Even if the user says "just do it," walk them through the loop so they understand and own every decision.

---

## Stage Sequence

**NOTE:** The Planning Kit now follows the **44-File Protocol**, including both Product Planning Phases (1-7) and Launch & Scale Phases (8-11).

### Stage -1: Idea Exploration & Validation

**Methodology file:** `02-idea-validation.md`

```
Steps:
  0. Idea Discovery â€” if user has no idea, search for trending opportunities
  1. Hypothesis Formation â€” "I believe [users] have [problem]..."
  2. Problem Validation â€” is the problem real and painful?
  3. Solution Validation â€” is THIS solution the right approach?
  4. Feasibility Assessment â€” can it actually be built?
  5. Competitive Landscape â€” what exists already? (Standard+)
  6. Go / No-Go Decision â€” GO, PIVOT, or KILL

Deliverables:
  â†’ docs/idea-validation-brief.md
  â†’ docs/feasibility-assessment.md
  â†’ docs/competitive-matrix.md (Standard+ only)
```

**Facilitator behavior:** Be a skeptical-but-constructive advisor. Kill weak ideas early â€” it saves weeks.

---

### Stage 0: Environment & Project Setup

**Methodology file:** `03-environment-setup.md`

```
Steps:
  1. Tier Selection â€” Lite / Standard / Enterprise
  2. Technology Stack â€” frontend, backend, data, infrastructure
  3. Project Identity â€” name, audience, purpose, tone
  4. Constraints & Resources â€” budget, timeline, scope boundaries

Deliverables:
  â†’ docs/project-config.md
```

**Facilitator behavior:** Recommend a tier based on the project description. Propose a stack, don't ask the user to design one from scratch.

---

### Stage 1: Stakeholder Discovery & Deep Dives

**Methodology file:** `04-stakeholder-discovery.md`
**Deep dive template:** `05-stakeholder-deep-dive.md`

```
Steps:
  1. Stakeholder Identification â€” checklist of 25+ categories
  2. Prioritization â€” MUST / SHOULD / COULD
  3. Atomic Deep Dives â€” one stakeholder at a time, 7 dimensions
  4. Work Stream Creation â€” CODE, CONTENT, ASSET, LEGAL, MARKETING
  5. Cross-Stream Dependencies â€” blocking vs non-blocking

Deliverables:
  â†’ docs/stakeholder-map.md (from template)
  â†’ docs/stakeholders/[name].md (one per deep dive)
  â†’ docs/work-streams.md (from template)

Save-As-You-Go:
  â†’ Save stakeholder-map.md after identification
  â†’ Save each [name].md after each deep dive
  â†’ Save work-streams.md after stream creation
```

**Facilitator behavior:** Never batch multiple stakeholders. Show progress after each dive. Remind user to save after each.

---

### Stage 2: Interactive Planning (7 Phases)

**Methodology files:** `06-phase-discovery.md` through `11-phase-compliance.md`

```
Phase 1: Discovery (all tiers)
  â†’ Requirements, personas, user stories, edge cases
  â†’ Deliverable: docs/requirements.md

Phase 2: Strategy (all tiers)
  â†’ Tech decisions, monetization, milestone breakdown
  â†’ Deliverables: docs/strategy.md, docs/milestone-plan.md

Phase 3: UX Flows (Standard+)
  â†’ Screen flows, navigation, user journeys
  â†’ Deliverable: docs/ux-flows.md

Phase 4: UI Design (Standard+, optional)
  â†’ Visual style, component specs, asset briefs
  â†’ Deliverable: docs/ui-design-brief.md

Phase 5: Architecture (all tiers)
  â†’ System design, data model, walking skeleton spec
  â†’ Deliverables: docs/architecture.md, docs/walking-skeleton-spec.md

Phase 6: Security & Compliance (Standard+)
  â†’ Auth, data protection, regulatory requirements
  â†’ Deliverable: docs/compliance-checklist.md

Phase 7: PRD Synthesis (all tiers)
  â†’ Consolidate Phases 1-6 into a single stakeholder-readable PRD
  â†’ Deliverable: docs/prd.md
```

**Facilitator behavior:** Use the 4-sub-step loop for each phase. After each phase, remind the user to save. Show phase progress.

---

### Stage 2.5: Launch & Scale Planning (4 Phases)

**Methodology files:** `15-phase-testing-qa.md` through `18-phase-iteration-feedback.md`

```
Phase 8: Testing & QA Strategy (all tiers)
  â†’ Test pyramid, coverage targets, QA timeline, monitoring, release checklist
  â†’ Deliverables: docs/testing-strategy.md, docs/qa-plan.md, docs/monitoring-setup.md, docs/release-checklist.md

Phase 9: Launch & Go-to-Market (all tiers)
  â†’ Pre-launch marketing timeline, launch day execution, post-launch growth, contingencies
  â†’ Deliverables: docs/gtm-timeline.md, docs/launch-day-plan.md, docs/post-launch-growth.md, docs/contingency-plan.md

Phase 10: Operations & Team Structure (all tiers)
  â†’ Org chart, hiring timeline, communication plan, decision-making framework, documentation standards
  â†’ Deliverables: docs/org-chart.md, docs/hiring-plan.md, docs/communication-plan.md, docs/decision-making-framework.md

Phase 11: Post-Launch Iteration & Feedback (all tiers)
  â†’ Feedback loops, metrics dashboard, version roadmap, technical debt management
  â†’ Deliverables: docs/feedback-loops.md, docs/metrics-dashboard.md, docs/version-roadmap.md, docs/technical-debt-plan.md
```

**Facilitator behavior:** Continue the 4-sub-step loop. These phases shift focus from product design to operational execution. Ensure user understands these are launch-readiness checks, not just nice-to-have planning.

---

## Planning Phase Expansion

The original PDF v1.0.0 covered Phases 1-7 (Product Planning). These new phases extend the framework to cover:

- **Phase 8:** Quality assurance before launch
- **Phase 9:** Market entry and growth strategy
- **Phase 10:** Organizational structure and team operations
- **Phase 11:** Continuous improvement and sustainability

These phases are **not optional**. They should be completed before or concurrent with the Build phase to ensure a launch-ready, operationally sound product.

---

## Save-As-You-Go Model

The cloud AI guides the user to **save each deliverable immediately after it's confirmed.** This prevents session loss from destroying hours of planning.

**How it works:**

```
After each deliverable is confirmed, the AI says:

"âœ… [DOCUMENT NAME] is ready. Please save it now:

ðŸ“ File: docs/[filename].md
ðŸ“‹ Copy the content below and save it in your project's docs/ folder.

[CONTENT BLOCK]

Once saved, say 'saved' and we'll continue to [next step]."
```

**The user is responsible for saving.** The AI cannot write files on cloud platforms. The AI MUST:
- Always provide the exact filename and path
- Always provide the complete content in a code block
- Always wait for confirmation before proceeding
- Always summarize what's been saved so far

**Save checkpoint display:**
```
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”

  PLANNING PROGRESS & SAVED FILES

  Stage -1: Idea Validation
    âœ… `p_01_feasibility-assessment.md`  SAVED
    âœ… `p_03_idea-validation-brief.md`    SAVED

  Stage 0: Environment
    âœ… `p_04_project-config.md`           SAVED

  Stage 1: Stakeholders
    âœ… `p_05_stakeholder-map.md`          SAVED
    âœ… `p_06_product-owner.md`            SAVED
    âœ… `p_06_lead-dev.md`                 SAVED
    ðŸ”µ `p_07_work-streams.md`             IN PROGRESS
    â¬œ `p_08_cross-stream-deps.md`        PENDING

  Stage 2: Planning Phases
    â¬œ Phase 1-6                       NOT STARTED

â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
```

---

## Tier-Based Phase Selection

Not all tiers do all phases:

| Phase | Lite | Standard | Enterprise |
|---|---|---|---|
| Stage -1: Idea Validation | Quick (Steps 1-4, 6) | Full (all steps) | Full + external validation |
| Stage 0: Environment | All 4 steps | All 4 steps | All 4 + RACI setup |
| Stage 1: Stakeholders | 1-2 MUST dives | All MUST + SHOULD | All + RACI matrix |
| Phase 1: Discovery | Core requirements | Full requirements + personas | Full + edge cases |
| Phase 2: Strategy | Stack + 2-3 milestones | Full + monetization | Full + risk analysis |
| Phase 3: UX Flows | Skip | Full | Full + accessibility review |
| Phase 4: UI Design | Skip | Optional | Full |
| Phase 5: Architecture | Core only | Full | Full + ADR log started |
| Phase 6: Security | Skip | Core compliance | Full audit |
| Phase 7: PRD Synthesis | 1-page brief | Full PRD (2-3 pages) | Full PRD + appendices |

---

## Build Handoff

After all planning is complete, the facilitator generates the **Build Handoff Package**:

**Methodology file:** `14-build-handoff-template.md`

```
The Build Handoff Package includes:

1. AGENT.md â€” The project brain (filled-in template)
   Contains: Framework Digest, Current State, Planning Package Index,
   Architecture Summary, Code Rules, Skill Pointers

2. Harness Adapter Shims â€” CLAUDE.md, AGENTS.md, etc.
   Points the IDE agent to AGENT.md

3. Activation Prompt â€” Paste into IDE agent to start building
   Contains: Project summary, what docs exist, instruction to 
   validate the planning package

4. Summary of all saved files and their locations
```

The AI outputs each piece with exact filenames and content, following the save-as-you-go model.

---

## Knowledge Base File Index

These files contain the detailed methodology for each stage and phase. The AI reads them on-demand as the user progresses:

### Core Planning Guide & Pre-Phase
| File | Stage | When to Read |
|---|---|---|
| `01-planning-guide.md` | â€” | **This file.** Read first, always. |
| `02-idea-validation.md` | -1 | When starting idea validation |
| `03-environment-setup.md` | 0 | When starting environment setup |
| `04-stakeholder-discovery.md` | 1 | When starting stakeholder work |
| `05-stakeholder-deep-dive.md` | 1 | When doing individual deep dives |

### Stage 2: Product Planning Phases (1-7)
| File | Phase | When to Read |
|---|---|---|
| `06-phase-discovery.md` | 1 | When starting Phase 1 (Discovery) |
| `07-phase-strategy.md` | 2 | When starting Phase 2 (Strategy) |
| `08-phase-ux.md` | 3 | When starting Phase 3 (UX Flows) |
| `09-phase-ui.md` | 4 | When starting Phase 4 (UI Design) |
| `10-phase-architecture.md` | 5 | When starting Phase 5 (Architecture) |
| `11-phase-compliance.md` | 6 | When starting Phase 6 (Compliance) |
| `12-phase-prd.md` | 7 (Synthesis) | When starting Phase 7 (PRD Synthesis) |

### Stage 3: Launch & Scale Phases (7-10)
| File | Phase | When to Read |
|---|---|---|
| `15-phase-testing-qa.md` | 8 | When starting Phase 8 (Testing & QA) |
| `16-phase-launch-marketing.md` | 9 | When starting Phase 9 (Launch & GTM) |
| `17-phase-operations-team.md` | 10 | When starting Phase 10 (Operations & Team) |
| `18-phase-iteration-feedback.md` | 11 | When starting Phase 11 (Iteration & Feedback) |

### Reference & Handoff
| File | Purpose | When to Read |
|---|---|---|
| `13-output-formats.md` | All | Reference for exact output templates |
| `14-build-handoff-template.md` | End | When generating the build handoff |
# Planning Kit Output Formats â€” Deliverable Templates

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Stage:** Reference | **Category:** Formats
> **Tier:** All
> **Prerequisite:** N/A

---

## Purpose

The Planning Kit requires specific output formats to ensure seamless handoff to the Building Kit (IDE Agents). These files are also the data source for the **PDF Project Dashboard** â€” a future webapp that tracks every project built with this framework.

This document defines:
1. The **YAML frontmatter** standard (machine-parseable metadata on every file)
2. The **canonical file names** (no variation allowed)
3. The **`pdf-manifest.json`** spec (project-level index for the dashboard webapp)
4. The **exact Markdown templates** for core Phase 1â€“7 deliverables
5. The **validation rules** a script or webapp can enforce

---

## 1. YAML Frontmatter Standard

Every deliverable file produced by the Planning Kit **MUST** begin with a YAML frontmatter block. This replaces all HTML comments for metadata.

### Required Fields (Identity & Status)

These fields are **mandatory** on every deliverable file. A missing field causes a validation error.

```yaml
---
# â”€â”€ Identity â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
pdf_version: "1.0.0"                    # Framework version that produced this file
project_id: "first-words-app"           # URL-safe slug, unique per project
project_name: "First Words"             # Human-readable project name
kit: "planning"                         # planning | building | content | maintenance
phase: 1                                # Phase number (1-7), or 0 for pre-phase files
phase_name: "Discovery"                 # Human-readable phase name
status: "confirmed"                     # draft | in-progress | confirmed
tier: "standard"                        # lite | standard | enterprise
created_at: "2026-04-12"               # ISO 8601 date
confirmed_at: "2026-04-12"             # ISO 8601 date, null if not yet confirmed
confirmed_by: "human"                   # human | auto
description: "Short project description"  # One-line summary (used by dashboard)
tech_stack: "Flutter, Hive, Riverpod"     # Comma-separated list of technologies
target_platforms: "iOS, Android"          # Comma-separated list of target platforms
---
```

### Dashboard Fields (Progress & Tracking)

These fields enable **granular progress tracking** in the PDF Project Dashboard. They are **recommended** on all phase deliverables (phases 1â€“7). A missing dashboard field causes a validation warning (not an error).

```yaml
---
# ... identity fields above ...

# â”€â”€ Bite-Level Progress â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
bites_total: 5                          # Total bites in this phase (from phase guide)
bites_completed: 3                      # Bites with human-confirmed output
current_bite: 4                         # Currently active bite (null if phase confirmed)

# â”€â”€ Time Tracking â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
estimated_duration_min: 45              # Expected duration from phase guide
actual_duration_min: 62                 # Real elapsed time, logged at confirmation
revision_count: 2                       # Times human requested refinement before confirm

# â”€â”€ Outputs Produced â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
linked_assets:                          # Files THIS phase created (relative to docs/)
  - "p_17_prototype.html"
  - "p_14_navigation-flow.html"

# â”€â”€ Key Decisions (Dashboard Cards) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
key_decisions:                          # Major choices made during this phase
  - label: "Navigation Model"           # Short decision name
    value: "Bottom Tab Bar"             # Chosen option
    bite: 2                             # Which bite produced this decision
  - label: "Prototype Format"
    value: "Interactive HTML"
    bite: 5

# â”€â”€ Blocker & Human Action Flags â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
needs_human_action: false               # True if phase is blocked on manual work
blocker: null                           # Free text reason, e.g., "Waiting on brand colors"
---
```

### Field Reference Table

| Field | Type | Required | Default | Dashboard Widget |
|---|---|---|---|---|
| `bites_total` | int | Recommended | Phase guide value | Progress bar denominator |
| `bites_completed` | int | Recommended | 0 | Progress bar numerator |
| `current_bite` | int \| null | Recommended | null | "Currently on" label |
| `estimated_duration_min` | int | Recommended | Phase guide value | Time comparison chart |
| `actual_duration_min` | int \| null | Recommended | null (set at confirm) | Time comparison chart |
| `revision_count` | int | Recommended | 0 | Quality signal badge |
| `linked_assets` | list[string] | Recommended | [] | Quick-link buttons |
| `key_decisions` | list[object] | Recommended | [] | Decision cards |
| `key_decisions[].label` | string | Required (if parent exists) | â€” | Card title |
| `key_decisions[].value` | string | Required (if parent exists) | â€” | Card value |
| `key_decisions[].bite` | int | Optional | null | Card subtitle |
| `needs_human_action` | bool | Recommended | false | Alert badge (ðŸ”´) |
| `blocker` | string \| null | Recommended | null | Blocker banner |

### Rules

- **Identity fields are required.** A missing identity field will cause a validation error.
- **Dashboard fields are recommended.** A missing dashboard field will cause a validation warning.
- `project_id` must be lowercase, kebab-case, and unique across all projects. This is the primary key the dashboard uses.
- `status` transitions: `draft` â†’ `in-progress` â†’ `confirmed`. Once `confirmed`, the file is locked.
- `confirmed_at` is `null` until the human explicitly confirms the phase.
- `bites_completed` must be â‰¤ `bites_total`. If `status` is `confirmed`, `bites_completed` must equal `bites_total`.
- `current_bite` must be `null` when `status` is `confirmed` (no active bite in a finished phase).
- `actual_duration_min` should be `null` until `status` is `confirmed`.
- `needs_human_action` should be `false` when `status` is `confirmed`.
- `linked_assets` paths are relative to the `docs/` folder and must resolve to existing files.

---

## 2. Canonical File Names

The `docs/` folder inside every project MUST follow this exact structure. All files use the `p_NN_` prefix (file sequence number) for easy sorting and resolution. No renaming, no aliases.

```text
docs/
â”œâ”€â”€ p_30_pdf-manifest.json       â† File 30: Project index (dashboard reads this)
â”œâ”€â”€ p_29_prd.md                  â† File 29: Phase 7: PRD Synthesis (master summary)
â”œâ”€â”€ p_10_requirements.md         â† File 10: Phase 1: Discovery
â”œâ”€â”€ p_11_strategy.md             â† File 11: Phase 2: Strategy
â”œâ”€â”€ p_13_ux-flows.md             â† File 13: Phase 3: UX
â”œâ”€â”€ p_18_ui-design-brief.md      â† File 18: Phase 4: UI Design
â”œâ”€â”€ p_20_architecture.md         â† File 20: Phase 5: Architecture
â”œâ”€â”€ p_23_walking-skeleton-spec.md â† File 23: Phase 5: Sub-deliverable
â”œâ”€â”€ p_27_compliance.md           â† File 27: Phase 6: Security & Compliance
â”œâ”€â”€ diagrams/                    â† Rendered Mermaid visuals
â”‚   â”œâ”€â”€ p_21_architecture.html
â”‚   â”œâ”€â”€ p_22_data-model.html
â”‚   â”œâ”€â”€ p_28_security-flow.html
â”‚   â”œâ”€â”€ p_14_navigation-flow.html
â”‚   â”œâ”€â”€ p_15_user-journey.html
â”‚   â””â”€â”€ p_16_state-diagram.html
â”œâ”€â”€ prototype/                   â† Interactive HTML prototypes
â”‚   â”œâ”€â”€ p_17_prototype.html
â”‚   â””â”€â”€ p_19_prototype-styled.html
â”œâ”€â”€ compliance/                  â† Phase 6 sub-documents
â”‚   â”œâ”€â”€ p_24_privacy-strategy.md
â”‚   â”œâ”€â”€ p_25_security-model.md
â”‚   â””â”€â”€ p_26_accessibility-constraints.md
â””â”€â”€ stakeholders/                â† Stage 1 outputs
    â”œâ”€â”€ p_05_stakeholder-map.md
    â”œâ”€â”€ p_06_<role>.md           â† one per identified stakeholder
    â””â”€â”€ p_07_work-streams.md
```

### File Name Rules

| Rule | Example | Why |
|---|---|---|
| Prefix with `p_NN_` | `p_10_requirements.md`, `p_21_architecture.html` | Sorts chronologically, easy file discovery |
| All lowercase | `p_13_ux-flows.md` not `p_13_UX-Flows.md` | OS-safe, consistent sorting |
| Kebab-case for descriptors | `p_05_stakeholder-map.md` | URL-friendly, matches `project_id` style |
| `.md` for text, `.html` for visuals | `p_20_architecture.md`, `p_21_architecture.html` | Clear tool chain separation |
| No spaces, no underscores in filenames | `p_18_ui-design-brief.md` | Prevents shell escaping issues |
| Files 1â€“32 â†’ p_01 to p_32 | `p_01_feasibility-assessment.md` through `p_32_AGENT.md` | Strict sequence, no gaps |

---

## 3. Project Manifest: `pdf-manifest.json`

This is the **single source of truth** the dashboard webapp reads per project. The AI Facilitator generates this file at the end of the Build Handoff (Phase 13).

### Schema

```json
{
  "$schema": "https://prodevframework.dev/schemas/manifest-v1.json",
  "pdf_version": "1.0.0",
  "project_id": "first-words-app",
  "project_name": "First Words",
  "description": "Ad-free vocabulary learning game for toddlers age 3-5.",
  "tier": "standard",
  "tech_stack": ["Flutter", "Hive", "Riverpod", "GoRouter"],
  "target_platforms": ["iOS", "Android"],
  "created_at": "2026-04-12",
  "updated_at": "2026-04-15",

  "phases": {
    "discovery": {
      "phase_number": 1,
      "file": "requirements.md",
      "status": "confirmed",
      "created_at": "2026-04-12",
      "confirmed_at": "2026-04-12"
    },
    "strategy": {
      "phase_number": 2,
      "file": "strategy.md",
      "status": "confirmed",
      "created_at": "2026-04-12",
      "confirmed_at": "2026-04-12"
    },
    "ux": {
      "phase_number": 3,
      "file": "ux-flows.md",
      "status": "confirmed",
      "created_at": "2026-04-13",
      "confirmed_at": "2026-04-13"
    },
    "ui": {
      "phase_number": 4,
      "file": "ui-design-brief.md",
      "status": "in-progress",
      "created_at": "2026-04-14",
      "confirmed_at": null
    },
    "architecture": {
      "phase_number": 5,
      "file": "architecture.md",
      "status": "not-started",
      "created_at": null,
      "confirmed_at": null
    },
    "compliance": {
      "phase_number": 6,
      "file": "compliance.md",
      "status": "not-started",
      "created_at": null,
      "confirmed_at": null
    },
    "prd": {
      "phase_number": 7,
      "file": "prd.md",
      "status": "not-started",
      "created_at": null,
      "confirmed_at": null
    }
  },

  "milestones": {
    "current": "M1",
    "walking_skeleton": "walking-skeleton-spec.md"
  },

  "assets": {
    "diagrams": [
      "p_21_architecture.html",
      "p_22_data-model.html"
    ],
    "prototypes": [
      "p_17_prototype.html",
      "p_19_prototype-styled.html"
    ],
    "stakeholders": [
      "p_05_stakeholder-map.md",
      "p_07_work-streams.md"
    ]
  }
}
```

### Manifest Rules

- The manifest is generated **automatically** by the AI Facilitator at each save checkpoint.
- The `phases` object uses the canonical phase slug as the key (not the number).
- Status values: `not-started` | `draft` | `in-progress` | `confirmed`.
- The `updated_at` field is refreshed every time any phase status changes.
- The dashboard webapp scans a configurable root directory for `**/docs/pdf-manifest.json` files to build its project list.

---

## 4. Phase Deliverable Templates

Below are the exact Markdown structures for the 7 core phase deliverables.

---

### Phase 1: Discovery â€” `p_10_requirements.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 1
phase_name: "Discovery"
file_sequence: 10
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Requirements & Scope â€” [PROJECT_NAME]

## 1. Project Background
[Brief summary of the business need or problem being solved]

## 2. Core Constraints
- Platform(s): [e.g., iOS, Android, Web]
- Tech Stack: [e.g., Flutter, Supabase]
- Hard limitation: [e.g., No cloud sync for v1.0]

## 3. Scope Definition
| Feature | Included in M1 | Description |
|---|---|---|
| [Feature Name] | âœ… / âŒ | [Summary] |

## 4. User Personas
### Persona 1: [Name]
- Goal: [Primary objective]
- Pain Point: [Main frustration]

## 5. Success Metrics
- Technical: [e.g., Crash rate < 1%]
- Product: [e.g., Session duration > 3 min]
```

---

### Phase 2: Strategy â€” `p_11_strategy.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 2
phase_name: "Strategy"
file_sequence: 11
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Technical Strategy â€” [PROJECT_NAME]

## 1. Stack Selection
**Frontend:** [Framework + version]
**Backend:** [BaaS/DB]
**State Management:** [Pattern]

*Reasoning: [Explanation based on Phase 2 comparison]*

## 2. Milestone Roadmap
1. **M1 (Walking Skeleton):** [End-to-end basic proof, 1 week]
2. **M2 (Core Data):** [Offline storage mechanism, 2 weeks]
3. **M3 (Core Feature):** [Feature X implementation, 2 weeks]
4. **M4 (Polish & Security):** [Themes and hardening, 1 week]

## 3. Risk Register
| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| [Risk description] | High/Med/Low | High/Med/Low | [Strategy] |
```

---

### Phase 3: UX â€” `p_13_ux-flows.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 3
phase_name: "UX"
file_sequence: 13
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# User Experience Flows â€” [PROJECT_NAME]

## 1. Information Architecture
[Link to docs/diagrams/sitemap.html or markdown list of hierarchy]
- Root
  - Branch 1
  - Branch 2

## 2. Core User Journey
1. **Trigger:** [How user enters]
2. **Action:** [What user does]
3. **Reward:** [Feedback loop]

## 3. Key Screen Requirements
### Screen: [Name]
- **Purpose:** [Goal]
- **Inputs:** [Forms, buttons]
- **Outputs:** [Data displayed]
- **Linked Screens:** [Where user can go next]
```

---

### Phase 4: UI Design â€” `p_18_ui-design-brief.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 4
phase_name: "UI Design"
file_sequence: 18
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# UI Design Brief & Tokens â€” [PROJECT_NAME]

## 1. Visual Direction
**Style:** [e.g., Neo-Brutalist, Material 3, Clean/Minimal]
**Vibe:** [3-5 adjectives]

## 2. Design Tokens
### Colors (Hex)
- Primary: `#XXXXXX`
- Secondary: `#XXXXXX`
- Background: `#XXXXXX`
- Text: `#XXXXXX`

### Typography
- Headings: [Font Family]
- Body: [Font Family]
- Scale: Base 16px, h1 32px.

### Spacing & Borders
- Root spacing scale: [e.g., 4px baseline]
- Border Radius: [e.g., 12px]
- Elevation: [Shadow values]

## 3. UI Component Roster
- Primary Button: [Visual rules]
- Card Array: [Visual rules]
```

---

### Phase 5: Architecture â€” `p_20_architecture.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 5
phase_name: "Architecture"
file_sequence: 20
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Architecture â€” [PROJECT_NAME]

## 1. System Architecture
**Pattern:** [e.g., Feature-First Clean Architecture]
[Link to `p_21_architecture.html`]

## 2. Data Model
| Entity | Attributes | Relationships |
|---|---|---|
| [Name] | [Fields] | [Links] |

[Link to `p_22_data-model.html`]

## 3. Project Structure
**Root Structure:**
```
[Folder map]
```

**Naming Conventions:**
- Files: snake_case
- Classes: PascalCase

## 4. Walking Skeleton
See: `docs/p_23_walking-skeleton-spec.md`
```

---

### Phase 6: Compliance â€” `p_27_compliance.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 6
phase_name: "Compliance"
file_sequence: 27
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Security & Compliance â€” [PROJECT_NAME]

## 1. Data Privacy
**Strategy:** [e.g., Local Only]
**PII Handled:** [List of PII if any, or "None"]
**Regulatory Standing:** [e.g., COPPA compliant via local storage]

## 2. Security Architecture
**Threats Mitigated:**
1. [Threat] -> [Mitigation]

## 3. Accessibility
- **Color Contrast:** [Target ratio]
- **Touch Targets:** [Size rules]
- **Device Scaling:**
  - Phone: [Rule]
  - Tablet: [Rule]

## 4. Final Implementation Checklist
- [ ] Checklist item 1
- [ ] Checklist item 2
```

---

### Phase 7: PRD Synthesis â€” `p_29_prd.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 7
phase_name: "PRD Synthesis"
file_sequence: 29
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# Product Requirements Document â€” [PROJECT_NAME]

## 1. Executive Summary
[One paragraph: What is this product, who is it for, and why does it matter?]

## 2. Problem & Opportunity
- **Problem:** [Core pain point from p_10_requirements.md]
- **Opportunity:** [Market gap or user need]
- **Validation:** [Key evidence from idea validation]
â†’ Full details: `docs/p_10_requirements.md`

## 3. Target Users
| Persona | Goal | Pain Point |
|---|---|---|
| [Name] | [Primary objective] | [Main frustration] |

â†’ Full details: `docs/p_10_requirements.md` Â§ User Personas

## 4. Scope & Features
| Feature | Priority | Description |
|---|---|---|
| [Feature Name] | Must / Should / Could | [Summary] |

â†’ Full details: `docs/p_10_requirements.md` Â§ Scope Definition

## 5. Technical Strategy
- **Stack:** [Frontend + Backend + State Management]
- **Architecture:** [Pattern, e.g., Feature-First Clean Architecture]
- **Rationale:** [One sentence explaining WHY this stack]

â†’ Full details: `docs/p_11_strategy.md`, `docs/p_20_architecture.md`

## 6. User Experience
- **Core Journey:** [Trigger â†’ Action â†’ Reward summary]
- **Key Screens:** [List of 3-5 primary screens]
- **Navigation Model:** [Tab / Drawer / Stack]

â†’ Full details: `docs/p_13_ux-flows.md`

## 7. Visual Design
- **Style:** [e.g., Neo-Brutalist, Material 3]
- **Primary Color:** `#XXXXXX`
- **Typography:** [Heading + Body fonts]

â†’ Full details: `docs/p_18_ui-design-brief.md`

## 8. Security & Compliance
- **Data Strategy:** [Local Only / Cloud / Hybrid]
- **Regulations:** [COPPA, GDPR, etc.]
- **Key Constraint:** [Most important security rule]

â†’ Full details: `docs/p_27_compliance.md`

## 9. Milestone Roadmap
| Milestone | Scope | Duration |
|---|---|---|
| M1 (Walking Skeleton) | [Scope summary] | [Time] |
| M2 | [Scope summary] | [Time] |
| M3 | [Scope summary] | [Time] |

â†’ Full details: `docs/p_11_strategy.md` Â§ Milestone Roadmap

## 10. Success Metrics
- **Technical:** [e.g., Crash rate < 1%]
- **Product:** [e.g., Session duration > 3 min]
- **Business:** [e.g., 1000 downloads in first month]

â†’ Full details: `docs/p_10_requirements.md` Â§ Success Metrics

## 11. Risks & Mitigations
| Risk | Impact | Mitigation |
|---|---|---|
| [Risk] | High/Med/Low | [Strategy] |

â†’ Full details: `docs/p_11_strategy.md` Â§ Risk Register

## 12. Approval
- **Prepared by:** [AI Facilitator / Human name]
- **Reviewed by:** [Stakeholder name(s)]
- **Status:** Approved / Pending
- **Date:** YYYY-MM-DD
```

---

## 5. Validation Rules

A validation script (or the future dashboard webapp) checks:

### File-Level Checks (Identity)
| Check | Rule | Severity |
|---|---|---|
| Frontmatter exists | File starts with `---` block | âŒ Error |
| `pdf_version` present | Must be a valid semver string | âŒ Error |
| `project_id` matches manifest | Frontmatter `project_id` == `pdf-manifest.json` `project_id` | âŒ Error |
| `status` valid | One of: `draft`, `in-progress`, `confirmed` | âŒ Error |
| `confirmed_at` set when confirmed | If status is `confirmed`, `confirmed_at` must be non-null | âš ï¸ Warning |
| H1 heading exists | File must have exactly one `# ` heading | âš ï¸ Warning |
| Required sections present | Each phase has expected `## ` headings (see templates above) | âš ï¸ Warning |

### File-Level Checks (Dashboard Fields)
| Check | Rule | Severity |
|---|---|---|
| `bites_total` present | Must be a positive integer | âš ï¸ Warning |
| `bites_completed` â‰¤ `bites_total` | Cannot complete more bites than exist | âŒ Error |
| `bites_completed` = `bites_total` when confirmed | If `status` is `confirmed`, all bites must be done | âŒ Error |
| `current_bite` null when confirmed | If `status` is `confirmed`, `current_bite` must be null | âš ï¸ Warning |
| `current_bite` in range | Must be between 1 and `bites_total` (or null) | âš ï¸ Warning |
| `estimated_duration_min` present | Must be a positive integer | âš ï¸ Warning |
| `actual_duration_min` set when confirmed | If `status` is `confirmed`, should be non-null | âš ï¸ Warning |
| `revision_count` non-negative | Must be â‰¥ 0 | âš ï¸ Warning |
| `linked_assets` files exist | Every path in `linked_assets` must resolve in `docs/` | âš ï¸ Warning |
| `key_decisions` structure valid | Each entry must have `label` (string) and `value` (string) | âš ï¸ Warning |
| `needs_human_action` false when confirmed | Confirmed phases cannot be blocked | âš ï¸ Warning |
| `blocker` null when confirmed | Confirmed phases cannot have active blockers | âš ï¸ Warning |

### Manifest-Level Checks
| Check | Rule | Severity |
|---|---|---|
| Manifest exists | `docs/pdf-manifest.json` must be present | âŒ Error |
| Valid JSON | Must parse without error | âŒ Error |
| All phase files exist | Every `file` in `phases` must exist on disk | âŒ Error |
| No orphan files | No `.md` in `docs/` without a manifest reference | âš ï¸ Warning |
| Status consistency | Manifest phase status must match frontmatter status | âŒ Error |
| Sequential confirmation | Phase N cannot be `confirmed` if Phase N-1 is not `confirmed` | âš ï¸ Warning |

### Cross-File Checks
| Check | Rule | Severity |
|---|---|---|
| Tech stack consistency | `strategy.md` stack matches `architecture.md` references | âš ï¸ Warning |
| All diagrams referenced | Diagrams listed in manifest exist in `diagrams/` | âš ï¸ Warning |
| Walking skeleton references architecture | `walking-skeleton-spec.md` file pattern matches `architecture.md` | âš ï¸ Warning |
| Linked assets cross-check | All `linked_assets` across phases are unique (no duplicates) | âš ï¸ Warning |
| Decision consistency | `key_decisions` in `strategy.md` don't contradict `architecture.md` | âš ï¸ Warning |

---

## 6. Dashboard Webapp Integration

The **PDF Project Dashboard** reads frontmatter to power the following widgets:

### Widget â†’ Frontmatter Mapping

| Dashboard Widget | Data Source | Frontmatter Fields Used |
|---|---|---|
| **Phase Progress Ring** | Each phase file | `status`, `bites_completed`, `bites_total` |
| **Phase Timeline Stepper** | Each phase file | `status`, `phase`, `phase_name`, `current_bite` |
| **Key Decision Cards** | Each phase file | `key_decisions[].label`, `key_decisions[].value` |
| **Milestone Roadmap Bar** | `pdf-manifest.json` | `milestones.current` |
| **Risk Heat Strip** | `strategy.md` body | Parsed from `## Risk Register` section |
| **Validation Health Badge** | Validation engine | All identity + dashboard fields |
| **Quick Link Buttons** | Each phase file | `linked_assets[]` |
| **Time Tracking Chart** | Each phase file | `estimated_duration_min`, `actual_duration_min` |
| **Blocker Banner** | Each phase file | `needs_human_action`, `blocker` |
| **Quality Signal** | Each phase file | `revision_count` |

### Dashboard Capabilities

1. **Scan** a configurable root directory for `**/docs/pdf-manifest.json` files.
2. **Parse** each manifest and display a project card with:
   - Project name, tier badge, tech stack tags
   - Phase progress ring (7 phases, color-coded by status)
   - Bite-level progress bars within each phase
   - Key decision summary cards
   - Current milestone indicator
   - Blocker alerts and human-action flags
   - Last updated timestamp
3. **Deep link** into individual phase files and linked assets for review.
4. **Validate** all projects against the rules above and flag issues.
5. **Aggregate** cross-project metrics (total planning time, avg revisions, common blockers).

### Dashboard Data Flow

```mermaid
graph LR
    A[Project Root Dir] -->|Scan| B[Find pdf-manifest.json]
    B --> C[Parse Manifest]
    C --> D[Parse Phase Files â€” Frontmatter]
    D --> E[Extract Dashboard Fields]
    E --> F[Run Validation Rules]
    F --> G[Render Dashboard UI]
    G --> H[Progress Ring + Timeline]
    G --> I[Decision Cards + Quick Links]
    G --> J[Blocker Banners + Alerts]
    G --> K[Validation Report]
```

---

## Facilitator Review

Before moving to the Build Handoff Phase, the AI MUST verify:
1. All critical path files exist in the `docs/` folder with valid YAML frontmatter.
2. The `status: confirmed` tag is present in all frontmatter blocks.
3. The `p_30_pdf-manifest.json` file is generated and all file references resolve.
4. No contradiction exists between files (e.g., Architecture specifies PostgreSQL, but Strategy specifies Local Storage).
# Build Handoff â€” Packaging for IDE Agents

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Stage:** 2 (Interactive Planning) | **Phase:** Handoff
> **Tier:** All | **Duration:** 5-10 min
> **Prerequisite:** Phases 1-7 Confirmed (All `docs/` templates exist)

---

## Purpose

The Build Handoff is the bridge between the **Planning Kit** (cloud chat AI) and the **Building Kit** (IDE-integrated AI). 

IDE Agents (like Cursor, Copilot, Antigravity) are excellent at writing code but terrible at holding multi-phase design constraints in a single context window. The handoff process condenses the planning docs into a format the IDE agent can consume flawlessly.

This final module generates the **Handoff Package** and the **Activation Prompt**.

---

## The Handoff Process: 3 Steps

```
STEP 1: Validate the Planning Package      (Automated by AI)
STEP 2: Generate the Context Digest        (Automated by AI)
STEP 3: Provide the Activation Prompt      (Given to Human)
```

---

## Step 1: Validate the Planning Package

Before generating the handoff, the AI acting as the Planning Facilitator must silently check that all required deliverables exist and are tagged `Status: Confirmed`.

**Checklist:**
- `p_29_prd.md`
- `p_10_requirements.md`
- `p_11_strategy.md`
- `p_13_ux-flows.md`
- `p_18_ui-design-brief.md`
- `p_20_architecture.md`
- `p_27_compliance.md`
- `p_23_walking-skeleton-spec.md`

If anything is missing or unconfirmed, the AI halts and says: 
*"Wait! We haven't finalized `[Document]`. Let's finish that before handing off to the IDE."*

---

## Step 2: Generate the Context Digest

The AI creates two specific artifacts that the IDE agent will use to ground itself.

### 1. `docs/index.md` (The Master Index)
Instead of forcing the IDE to read all files at once (which blows up context limits), we generate an index. The IDE agent reads the index, then uses an internal `read_file` tool to fetch details ONLY when needed.

**Format for `docs/index.md`**:
```markdown
# Project Documentation Index

**Start Here:** `p_23_walking-skeleton-spec.md` contains the exact scope for Milestone 1. Do not build anything else until M1 is approved.

| Concept | Look Here |
|---|---|
| Product Overview (human-readable) | `p_29_prd.md` |
| Tech Stack & Architecture | `p_20_architecture.md` |
| Feature Scope (M1 vs M2) | `p_10_requirements.md` |
| UI Tokens (Colors, Typography) | `p_18_ui-design-brief.md` |
| UX Data Flow | `p_13_ux-flows.md` |
| Security/Privacy Rules | `p_27_compliance.md` |
```

### 2. The `p_32_AGENT.md` Base
The AI generates the initial contents of the `AGENT.md` file (the "persistent brain" for the building kit). 

**Format for `p_32_AGENT.md` initialization**:
```xml
<context>
  <project_name>[PROJECT_NAME]</project_name>
  <current_milestone>M1: Walking Skeleton</current_milestone>
  <tech_stack>[Format: Flutter + Hive]</tech_stack>
  <architecture>[Format: Feature-First Clean]</architecture>
</context>

<rules>
  - Read `p_23_walking-skeleton-spec.md` before writing code.
  - No cloud sync allowed in v1.0.
  - Max file size: 200 lines.
</rules>
```

---

## Step 3: Provide the Activation Prompt

The AI gives the human the final instruction block. The human will paste this EXACT text into their IDE to wake up the coding agent.

**The Output block:**

```text
======================================================
ðŸŽ‰ PLANNING COMPLETE! READY FOR IDE HANDOFF.
======================================================

**Human, do the following to start coding:**

1. Copy the entire `docs/` folder into your code editor.
2. Save the `AGENT.md` file at the root of your project.
3. Open your IDE's AI Agent (e.g., Cursor Composer, Antigravity).
4. Paste the prompt below exactly as written:

--------- PASTE THIS INTO YOUR IDE AI ---------

Initialize Project Build.
1. Read `p_32_AGENT.md` at the root. Do not process anything else until you read it.
2. Read `p_31_index.md` to map your context.
3. Read `p_23_walking-skeleton-spec.md` to get your exact scope.
4. Explain to me what you are about to build for M1, wait for my confirmation, and then begin scaffolding.

-----------------------------------------------

Good luck with the build phase! Returning to standby mode.
======================================================
```

---

## Facilitator Behavior (AI Rules)

- **DO** generate the markdown text in code blocks so the user can easily copy/paste it into files.
- **DON'T** rewrite the contents of the 7 core docs into the handoff prompt. That creates duplicates and wastes context.
- **DO** emphasize that the IDE agent must wait for human confirmation before scaffolding.
- **DON'T** assume the IDE agent has a large context window. Always use the `docs/index.md` pointer method.

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| Document Check | Just Architecture + Scope | All 7 + Walking Skeleton | Full Audit |
| Digest Type | Flat `docs/README` | `docs/index.md` pointer setup | Scripted `.zip` packager |
| AGENT.md prep | Basic context only | Full context + rules | Integrated with CI gates |
