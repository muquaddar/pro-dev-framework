# PDF (Pro-Dev Framework) — Complete User Journey & Getting Started Guide

> **Version:** PDF v2.0.0 | **Kit:** Complete Framework  
> **Created:** 2026-05-01  
> **Last Updated:** 2026-05-01

---

## Table of Contents

1. [The Big Picture](#the-big-picture)
2. [Complete Lifecycle](#complete-lifecycle)
3. [Working with the PDF Dashboard](#working-with-the-pdf-dashboard)
4. [Getting Started: Step-by-Step](#getting-started-step-by-step)
5. [Planning Phase (Cloud AI)](#planning-phase-cloud-ai)
6. [Build Handoff](#build-handoff)
7. [Building Phase (IDE)](#building-phase-ide)
8. [Launch & Operations](#launch--operations)
9. [Token Optimization (v2.0.0)](#token-optimization-v20)
10. [Quick Reference: Which Kit for What](#quick-reference-which-kit-for-what)

---

## The Big Picture

The Pro-Dev Framework splits development into two worlds with a hard handoff between them:

```
┌────────────────────────────────┐      ┌────────────────────────────────┐
│   📋 PLANNING WORLD            │      │   🔨 BUILDING WORLD             │
│   Cloud AI (ChatGPT / Claude)  │─────▶│   IDE Agent (Claude Code)       │
│   Conversational, no files     │      │   File access, terminal, git    │
│   Stages -1 → 2                │      │   Stages 3 → 7                 │
│   Output: 15+ planning docs    │      │   Input: AGENT.md + all docs    │
│        + pdf-manifest.json     │      │   + agency knowledge            │
└────────────────────────────────┘      └────────────────────────────────┘
             
         Human Gate 1 is the bridge.
         Dashboard tracks progress across both.
```

---

## Complete Lifecycle

```
IDEA
  │
  ▼
Stage -1  Idea validation         Cloud AI           ~30 min
  │       Go/No-Go decision
  │
  ▼
Stage 0   Project config          Cloud AI           ~15 min
  │       Tier, stack, constraints
  │
  ▼
Stage 1   Stakeholder discovery   Cloud AI           ~1-2 hours
  │       Deep dives per stakeholder
  │
  ▼
Stage 2   Interactive planning    Cloud AI           ~2-4 hours
  │       6 phases × bite-sized loops
  │       Output: 15+ confirmed docs + pdf-manifest.json
  │
  ▼
── GATE 1 ── Architecture approval ──────────────────────────
  │         (Human signs off on architecture + milestones)
  │
  ▼
Stage 3   Scaffold                Claude Code        ~1 session
  │       Walking skeleton (M1) + project setup
  │
  ▼
Stage 4   Build                   Claude Code        weeks
  │       Milestone by milestone
  │       Gate 2 (start) → Gate 3 (security) → Gate 4 (accept)
  │
  ▼
Stage 5   Verify                  Claude Code        ~1 session/milestone
  │       Quality scorecard + fitness functions
  │
  ▼
Stage 6   Launch prep             Mixed              ~1 week
  │       Beta → store → Gate 5 → Gate 6
  │
  ▼
Stage 7   Post-launch ops         Ongoing
          Monitoring → feedback → iteration → Gate 7 quarterly

✅ Launch!
```

---

## Working with the PDF Dashboard

The PDF Dashboard is a web application that provides portfolio-level visibility across all your projects.

### Dashboard Overview

The dashboard displays:
- **Project Cards** — one per project with progress bars
- **Phase Status** — which planning phases are confirmed
- **Validation Status** — any YAML schema errors or missing files
- **Milestone Progress** — building progress (which milestones are done)
- **Hot Zones** — current active files per project
- **Agency Knowledge** — cross-project patterns and learnings

```
┌──────────────────────────────────────────────────────────────┐
│  📊 PDF Project Dashboard                                    │
│                                                              │
│  ┌──────────────────────────────┐  ┌──────────────────────┐ │
│  │ 📱 geo-tag-pro               │  │ 🆕 New Project       │ │
│  │ Standard tier | Flutter      │  │ [Create Project]     │ │
│  │ Stage 6 — Launch             │  │                      │ │
│  │ ██████████░░░░ 87%           │  │                      │ │
│  │ Phases: ✅✅✅✅✅✅           │  │                      │ │
│  │ Validation: ✅ All clear     │  │                      │ │
│  │ Milestones: 8/10 done        │  │                      │ │
│  │ Hot zones: 3 files           │  │                      │ │
│  │                              │  │                      │ │
│  │ [View] [Edit] [Metrics]      │  │                      │ │
│  └──────────────────────────────┘  └──────────────────────┘ │
│                                                              │
│  ┌──────────────────────────────┐  ┌──────────────────────┐ │
│  │ 📷 scanner-pro               │  │ 🔨 WorkspaceAddOn    │ │
│  │ Standard tier | Flutter      │  │ Enterprise | Multi   │ │
│  │ Stage 4 — Build              │  │ Stage 4 — Build      │ │
│  │ ████░░░░░░░░░░░░░░░ 40%      │  │ ██████████░░░░░░░░░ 58%│
│  │ Phases: ✅✅✅⬜⬜⬜           │  │ Phases: ✅✅✅✅⬜⬜   │ │
│  │ Validation: ⚠️ 2 warnings     │  │ Validation: ✅ OK    │ │
│  │ Milestones: 4/8 done         │  │ Milestones: 6/15 done│ │
│  │                              │  │                      │ │
│  │ [View] [Edit] [Metrics]      │  │ [View] [Edit]        │ │
│  └──────────────────────────────┘  └──────────────────────┘ │
│                                                              │
│  Filters: [By Stage] [By Tier] [By Validation Status]       │
│  Options: [New Project] [Export] [Settings]                 │
└──────────────────────────────────────────────────────────────┘
```

### Dashboard Features

**Project Creation Wizard**
- Click "New Project" → step-by-step setup
- Generates project folder structure
- Initializes `AGENT.md` stub + `.claude-state.md`
- Creates `docs/pdf-manifest.json`

**Phase Progress Tracking**
- Visual indicator (colored bars) for each of 6 planning phases
- Gray = not started
- Yellow = in progress
- Green = confirmed

**Validation Dashboard**
- Scans `docs/` for YAML frontmatter errors
- Checks `pdf-manifest.json` consistency
- Flags missing required files
- Shows file count, LOC count, hot zones

**Milestone Tracker**
- Shows completed vs. remaining milestones per project
- Drill-down to see task list
- View quality scorecard (coverage, lint, security)

**Agency Knowledge View**
- Browse all cross-project skills (from `agency-knowledge/` directory)
- Search by tag (flutter, database, android, etc.)
- See which project contributed each skill

**Hot Zone Visualization**
- Shows currently active files per project (from `.claude-state.md`)
- Highlights which features are being worked on
- Helps coordinate across parallel streams

---

## Getting Started: Step-by-Step

### Step 1: Access the Dashboard

Open the PDF Dashboard webapp (URL from your team/deployment).

### Step 2: Create a New Project

Click **[New Project]** → fill in the wizard:

```
Project Name:     _________________________
Project ID:       _________________________ (auto-kebab-case)
Tier:             [ ] Lite  [ ] Standard  [x] Enterprise
Tech Stack:       _________________________
Target Platforms: _________________________
Deadline:         _________________________
```

The dashboard creates:
```
your-project-folder/
├── AGENT.md (stub)
├── .claude-state.md (template)
├── docs/
│   └── pdf-manifest.json
├── .agent-rules/ (empty, will be populated)
└── .gitignore
```

### Step 3: Configure Planning Kit (Cloud AI)

**For ChatGPT Custom GPT:**
1. Go to ChatGPT → "Create a GPT"
2. Upload all files from `pro-dev-framework/planning-kit/knowledge-base/` (14 files)
3. Name it "PDF Planning Assistant"
4. Save as "Only me" or organization-wide

**For Claude Project:**
1. Go to claude.ai → "Create a project"
2. Upload files from `pro-dev-framework/planning-kit/` (knowledge-base + templates + system-prompt)
3. Add to context: the 14 knowledge-base files + system-prompt.md
4. Name: "PDF Planning"

**For Gemini Gem:**
1. Go to gemini.google.com → "Create a Gem"
2. Upload the same planning files
3. Name: "PDF Planning"

### Step 4: Start Planning in Cloud AI

Go to your newly configured Cloud GPT/Project/Gem and paste this activation prompt:

```
I'm starting a new project using the PDF (Pro-Dev Framework).

Project Name: [YOUR PROJECT NAME]
Project ID: [your-project-id]
Tier: [Lite | Standard | Enterprise]
Tech Stack: [e.g., Flutter + sqflite]
Target Platforms: [e.g., iOS, Android]
Deadline: [e.g., 2026-07-01]

Let's start with STAGE -1: IDEA VALIDATION.

Ask me the key questions to validate:
1. Problem: Does this problem actually exist?
2. Solution: Is my proposed solution the right one?
3. Feasibility: Can I build this with my constraints?
4. Market: Who else is doing this?

Then give me a Go/No-Go recommendation.
```

The AI will walk you through Stage -1 (30 min) → Stage 0 (15 min) → Stage 1 (deep dives) → Stage 2 (6 interactive planning phases).

---

## Planning Phase (Cloud AI)

### Stage -1: Idea Validation (~30 min)

The AI asks you:
- What problem are you solving?
- For whom?
- Does this problem actually exist? (evidence?)
- Is your solution the right one?
- Can you build it within your constraints (budget, time, team)?
- Who else is doing this? (competitive scan)

**Output:** A Go/No-Go decision.

### Stage 0: Project Config (~15 min)

The AI captures:
- Official project name
- Unique project ID (kebab-case, e.g., `geo-tag-pro`)
- Tier (Lite / Standard / Enterprise)
- Tech stack (e.g., Flutter + sqflite + BLoC)
- Target platforms (iOS, Android, web, etc.)
- Key constraints (budget, deadline, compliance reqs)

**Output:** `p_04_project-config.md`

### Stage 1: Stakeholder Discovery (~1-2 hours)

The AI helps you identify ALL stakeholders — not just developers:
- End user
- Support team
- Legal reviewer
- Marketing lead
- Compliance authority
- Platform gatekeeper (App Store, etc.)

For each stakeholder, you have a deep-dive conversation. The AI generates a stakeholder profile.

**Output:** 
- `p_05_stakeholder-map.md` (registry)
- `p_06_[role].md` (one per stakeholder deep-dive)
- `p_07_work-streams.md` (parallel work tracks)
- `p_08_cross-stream-deps.md` (dependencies between streams)

### Stage 2: Interactive Planning (~2-4 hours)

This is 6 planning phases. Each phase is broken into "bites" (3–6 focused conversations). Each bite follows the same loop:

```
AI Proposes → You Review → AI Refines → You Confirm → SAVE
```

#### Phase 1: Discovery
**What's decided:** User personas, requirements (MoSCoW), scope lock

**Questions the AI asks:**
- Who are the core users?
- What are their pain points?
- What's the MVP? Nice-to-have? Out of scope?
- How will you measure success?

**Output:** `p_10_requirements.md`

#### Phase 2: Strategy
**What's decided:** Tech stack, business model, milestone plan, risk register

**The AI presents 2-3 stack options** for comparison (e.g., Flutter vs. React Native vs. native). You pick one.

**Output:** `p_11_strategy.md` + `p_12_milestone-plan.md`

#### Phase 3: UX
**What's decided:** Screen map, user journeys, wireframes

**Deliverables:**
- Screen inventory (list of all screens)
- Core user journey (end-to-end flow)
- Wireframes (Mermaid flowcharts or sketches)
- Error states + edge cases

**Output:** `p_13_ux-flows.md` + interactive HTML prototype (`p_17_prototype.html`)

#### Phase 4: UI Design
**What's decided:** Visual direction, design tokens, component roster

**Deliverables:**
- Color palette + typography
- Spacing/sizing tokens
- Component library (buttons, cards, forms, etc.)
- Responsive design strategy

**Output:** `p_18_ui-design-brief.md` + styled prototype (`p_19_prototype-styled.html`)

#### Phase 5: Architecture
**What's decided:** System architecture, data model, walking skeleton spec

**Deliverables:**
- System block diagram (API, database, frontend, external services)
- E-R diagram (data model)
- Folder structure for code
- Walking skeleton specification (M1 — thin end-to-end slice)

**Output:** `p_20_architecture.md` + `p_23_walking-skeleton-spec.md`

#### Phase 6: Compliance
**What's decided:** Privacy policy, security model, accessibility plan

**Deliverables:**
- GDPR / COPPA / CCPA compliance checklist
- Data flow diagram (where data lives, who has access)
- Authentication & encryption strategy
- WCAG 2.1 Level AA accessibility plan

**Output:** `p_27_compliance.md`

### After All 6 Phases: PRD Synthesis

The AI consolidates all 6 phases into a PRD (Product Requirements Document) that stakeholders can read.

**Output:** `p_29_prd.md` (human-readable, all requirements in one place)

### Dashboard Upload

After each phase is confirmed, the dashboard's validation script checks:
- ✅ YAML frontmatter present and valid
- ✅ Section headings match spec
- ✅ No placeholder text
- ✅ `pdf-manifest.json` updated

If all green, the project card updates with a green checkmark for that phase.

---

## Build Handoff

### What Happens at Gate 1

You review the complete planning output:
- All 6 phases confirmed
- PRD read and approved
- Milestone plan realistic
- Risks identified

You sign off: **"Gate 1 Approved — Ready to build."**

### The AI Generates AGENT.md

The Planning Kit AI generates the **AGENT.md** (project brain for the IDE):

```markdown
# AGENT.md — geo-tag-pro

## Framework Digest (PDF v2.0.0)
[Compressed rules for building — copied from framework-digest.md]

## Current State
- Stage: 3 (Scaffold)
- Milestone: M1 — Walking Skeleton
- Task: Initialize project structure

## Architecture Summary
[From p_20_architecture.md — copied]

## Milestone Overview
[From p_12_milestone-plan.md]

## Token Rules
[From token-optimization-rules.md]

## Active ADRs
[Will be populated as you discover decisions during build]

## Session History
[Will be updated via Switch Protocol]
```

You save this to your project root: `your-project-folder/AGENT.md`

### Set Up for Building

1. Copy `AGENT.md` to project root
2. Run `generate-project-state.js` → creates `.claude-state.md`
3. Copy relevant `.agent-rules/` templates
4. Run `generate-codebase-index.js` (after first commit)
5. Commit everything: `git commit -am "chore: initialize PDF project"`

---

## Building Phase (IDE)

### Starting a Session

Open Claude Code (or your IDE agent), point it at your project folder.

Give it this prompt:

```
Read AGENT.md and .claude-state.md, then confirm your position.
```

Claude responds:

```
Resuming Stage 4, Milestone 3 — GPS Overlay Features.

Current Position:
- Stage: 4 (Build)
- Milestone: M3 — GPS + Photo Metadata
- Task: Implement GPS accuracy selector

Hot Zones (active files, read fully):
- lib/features/location/bloc/location_bloc.dart
- lib/features/location/screens/location_screen.dart

Next task: Add PRIORITY_HIGH_ACCURACY option to location provider.

Ready to start?
```

That's it — **no need to explain context again.** The agent already has it.

### The Per-Task Loop

Before writing code for **any file**:

1. **Is it in Hot Zones?** (.claude-state.md tells you)
   - YES → Read it fully
   - NO → Use Tier 2 line range (Atomic Fragment Retrieval)

2. **Is this a novel feature?** (something you haven't built in this project before)
   - YES → Agent checks `agency-knowledge/_index.md` first
   - This might save hours by injecting a pattern from geo-tag-pro

3. **Implement → Test → Update index**
   - Write the code
   - Run tests (TDD if Standard+)
   - Update `docs/index/` if file structure changed
   - Commit

4. **Drift check every 3 tasks** (every 30 min)
   - Am I still on the approved task list?
   - Are these changes in-scope for this milestone?
   - Did I accidentally introduce an unapproved dependency?

### Token Optimization (v2.0.0)

**Session start cost:**
- Old way (v1.0.0): 1,200 tokens (reading 4-5 rule files)
- New way (v2.0.0): 300 tokens (reading `.claude-state.md` only)

**Reading files:**
- Hot Zone file: read fully (no cost penalty, it's important)
- Large Cold file (>200 lines): read only the Tier 2 line range (e.g., `lines 45–89`)
  - 145-line file fully: ~1,160 tokens
  - 145-line file lines 45–89: ~350 tokens
  - **70% savings**

**Reusing patterns from other projects:**
- First time solving a problem: discover + implement (2,700 tokens)
- Subsequent projects: inject agency knowledge (200 tokens)
- **Savings: 92%**

### Gates During Build

**Gate 2 (Milestone Start)** — Before starting a milestone:
- Human reviews the task list
- Human checks: scope realistic? dependencies clear? risks noted?
- Human approves → agent begins

**Gate 3 (Security)** — Agent triggers if touching:
- Authentication / authorization
- Encryption / data at rest
- Payment processing
- User privacy / sensitive data

Agent STOPS. You review. You approve. Agent proceeds.

**Gate 4 (Milestone Acceptance)** — After milestone is done:
- Agent fills `docs/quality-scorecard.md`:
  - Test coverage: 60%+ (Standard), 80%+ (Enterprise)
  - Lint warnings: 0
  - Files over 500 lines: 0
  - Circular imports: 0
  - Security findings: 0 P0/P1
- Architectural fitness functions pass:
  - No file > 500 lines
  - No circular imports
  - All HTTP endpoints tested
  - Data model matches `docs/data-model.md`
- Human reviews + signs off

### Ending a Session

```
You: switch
```

Agent:
1. Saves `memory/sessions/[date]-claude-code.md` (session snapshot)
2. Updates `AGENT.md` → Current State block
3. Updates `docs/progress.md` with completed tasks
4. Updates `.claude-state.md` → refresh Hot Zones, add any new Gotchas discovered
5. If solved a novel pattern: "Tag the ADR with `#teach`, then run `adr-to-skill.js` to add to agency knowledge"
6. Asks: "Where next?" (Claude Code, ChatGPT, Antigravity, Done?)

You respond, and Claude generates a platform-specific handover:
- For cloud AI: Paste-ready context block
- For IDE: Confirmation that all files are saved and ready for next session

---

## Launch & Operations

### Stage 6: Launch Preparation

**Where:** Maintenance Kit + Claude Code + Manual

The Maintenance Kit guides you through:

#### Compliance Final Check
- GDPR: consent, data retention, right to erasure
- Accessibility: WCAG 2.1 Level AA
- App Store / Play Store: age rating, content policy
- Security: all passwords hashed, SSL/TLS, secure headers

#### Beta Testing
- Beta user recruitment (internal team + select external users)
- TestFlight (iOS) / Play Store internal testing (Android)
- Feedback collection + bug triage

#### Store Submission
- App Store listing (screenshots, description, keywords)
- Play Store listing (same)
- Privacy policy + terms of service

#### Gate 5: Pre-Release Approval
You review a pre-launch checklist. Human approves.

#### Gate 6: Launch Readiness
All work streams (code, content, marketing, legal, ops) must be green. Human approves.

### Stage 7: Post-Launch Operations

#### Monitoring
- Error tracking (Sentry, Firebase Crashlytics)
- Crash rates, ANRs
- Core feature instrumentation

#### Feedback Loop
- User feedback collection (in-app, email, reviews)
- Support tickets
- Feature requests

#### Iteration Cycle
- Weekly triage of feedback
- Prioritize: bugs → quick wins → major features
- Each iteration is a mini-cycle through Gates 2-4

#### Gate 7: Quarterly Continue/Sunset
Every 90 days: Is this project still viable? Continue → Next quarter. Sunset → Archive.

---

## Quick Reference: Which Kit for What

| Situation | Which Kit | File/Command |
|---|---|---|
| **Starting an idea** | Planning Kit | Paste activation prompt to cloud AI |
| **6 planning phases** | Planning Kit | 14 files in `knowledge-base/` |
| **Creating new project** | Dashboard | Click [New Project] → wizard |
| **Starting IDE session** | Building Kit | Read `AGENT.md` + `.claude-state.md` |
| **Writing code** | Building Kit | Use token optimization rules |
| **Task lens (e.g., "add BLoC feature")** | Building Kit | `docs/lenses/flutter-bloc-feature.md` |
| **Finding a cross-project pattern** | Agency Knowledge | `agency-knowledge/_index.md` |
| **Creating a new skill** | Agency Knowledge | Tag ADR with `#teach` → run `adr-to-skill.js` |
| **Pre-release checklist** | Maintenance Kit | `launch-prep/` files |
| **Beta testing** | Maintenance Kit | `launch-prep/beta-test-plan.md` |
| **Post-launch monitoring** | Maintenance Kit | `post-launch/monitoring-setup.md` |
| **Writing content** | Content Creation Kit | `guides/` for each role |
| **Content review workflow** | Content Creation Kit | `templates/review-workflow.md` |

---

## Framework Status — Everything is Ready

| Component | Status | Location |
|---|---|---|
| **Planning Kit** | ✅ Complete | `pro-dev-framework/planning-kit/` |
| **Building Kit** | ✅ Complete | `pro-dev-framework/building-kit/` |
| **Token Optimization v2.0.0** | ✅ Complete | `building-kit/token-optimization-rules.md` |
| **Agency Knowledge System** | ✅ Complete | `building-kit/agency-knowledge/` + 4 skills from geo-tag-pro |
| **PDF Dashboard** | ✅ Complete | Deployed (check team wiki for URL) |
| **Content Creation Kit** | ✅ Complete | `pro-dev-framework/content-creation-kit/` |
| **Maintenance Kit** | ✅ Complete | `pro-dev-framework/maintenance-kit/` |
| **Update Kit** | ✅ Complete | `pro-dev-framework/update-kit/` |
| **Helper Scripts** | ✅ Complete | `building-kit/scripts/` |
| **Documentation** | ✅ Complete | This file + all embedded guides |

---

## Troubleshooting

### "Agent doesn't know about my project"
→ Confirm you've saved `AGENT.md` to project root and given the agent the session start prompt.

### "Hot zones are outdated"
→ At the end of each session, run the Switch Protocol. The agent updates `.claude-state.md` automatically.

### "The Planning Kit AI isn't asking good questions"
→ Check that you uploaded ALL 14 files from `planning-kit/knowledge-base/` to your cloud GPT/Project.

### "Files are too large to read"
→ Check `docs/project-map.md` Tier 0. Any 🚨 warnings? Use `line ranges` from Tier 2 instead of reading full files.

### "I want to reuse a pattern from geo-tag-pro"
→ Check `pro-dev-framework/building-kit/agency-knowledge/_index.md`. If a matching skill exists, inject it into `.claude-state.md`.

---

## Next Steps

1. **Open the PDF Dashboard** — See all projects in one view
2. **Create a new project** — Click [New Project], fill wizard
3. **Load the Planning Kit** — Upload to ChatGPT/Claude/Gemini
4. **Start planning** → Paste activation prompt
5. **After Gate 1** → Move to IDE for building

Good luck! 🚀

