# Pro Dev Framework (PDF) v1.0.0 — Implementation Plan

A modular, agent-agnostic development methodology organized into **5 specialized kits** — separating planning, building, content, maintenance, and updates for maximum clarity and zero vendor lock-in.

---

## Location

```
d:\MyAIAgency\WorkspaceAddOn\pro-dev-framework\
```

---

## Design Philosophy

| Principle | What It Means |
|---|---|
| **Hypothesis-First** | Every project starts as a testable hypothesis, not a certainty to build (McKinsey). |
| **Stakeholder-Centric** | Discover ALL stakeholders (not just developers), deep-dive each one individually (Deloitte). |
| **Atomic Iteration** | Never batch multiple stakeholders or concerns into one discussion. One topic per session. |
| **Agent-Agnostic** | Zero agent-specific syntax in core files. Agent idioms live ONLY in `harness-adapters/`. |
| **Human-Gated** | Mandatory checkpoints where the agent STOPS. Count scales by project tier (Lite=1, Standard=4, Enterprise=7). |
| **Tiered Complexity** | 3 project tiers (Lite / Standard / Enterprise) determine which stages and gates apply. |
| **Walking Skeleton** | M1 is always a thin end-to-end slice proving the architecture works (ThoughtWorks). |
| **Platform-Split** | Planning on cloud platforms (free, conversational). Building on IDE agents (file access, terminal). |
| **Portable State** | Universal State Protocol ensures seamless switching between any platform/agent at any time. |
| **Machine-Parseable** | YAML frontmatter on every deliverable + `pdf-manifest.json` per project for script validation and dashboard integration. |

---

## Core Architecture: 5 Specialized Kits

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  📋 PLANNING KIT          (Stages -1 to 2)                  │
│  Where: Cloud AI (ChatGPT / Gemini / Claude)                │
│  Who: Founder, PM, Product Owner                            │
│  What: Idea validation, stakeholders, architecture          │
│  Output: 15+ planning docs with YAML frontmatter            │
│          + pdf-manifest.json → project folder               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔨 BUILDING KIT           (Stages 3 to 5)                  │
│  Where: IDE Agents (Antigravity / Claude Code / Codex)      │
│  Who: Developer + AI Agent                                  │
│  What: Scaffold, code, test, review                         │
│  Input: Reads AGENT.md + planning docs                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🎨 CONTENT CREATION KIT   (Parallel to Stages 3-5)         │
│  Where: Any platform                                        │
│  Who: Content writers, illustrators, voice actors, legal    │
│  What: Content pipelines, asset specs, style guides,        │
│        compliance checklists, review workflows              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🚀 MAINTENANCE KIT        (Stages 6 to 7)                  │
│  Where: IDE + Cloud + Manual                                │
│  Who: Developer, QA, Marketing, Support                     │
│  What: Launch prep, beta testing, app store, monitoring,    │
│        feedback loops, iteration cycles                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔄 UPDATE KIT             (Post v1.0)                       │
│  Where: TBD                                                 │
│  Who: TBD                                                   │
│  What: Version upgrades, feature additions, refactoring     │
│  Status: Placeholder for future release                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## The 8-Stage Lifecycle

```
╔══════════════════════════════════════════════════════════════╗
║  📋 PLANNING KIT — Cloud Platforms                          ║
║  Free tier. Conversational. Web search. Multi-modal.        ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  STAGE -1: IDEA EXPLORATION & VALIDATION                     ║
║    Hypothesis → Problem Validation → Solution Validation     ║
║    → Feasibility Check → Market/Competitive Scan             ║
║    ──► GO/NO-GO GATE: Pursue, Pivot, or Kill                 ║
║                                                              ║
║  STAGE 0: ENVIRONMENT + PROJECT SETUP                        ║
║    Tier Selection → Stack Definition → Identity → Constraints║
║                                                              ║
║  STAGE 1: STAKEHOLDER DISCOVERY & DEEP DIVES                 ║
║    Identify ALL stakeholders → Deep dive EACH one            ║
║    → Work Stream creation → Cross-stream dependency map      ║
║                                                              ║
║  STAGE 2: PLAN — INTERACTIVE (7 phases × bite-sized loops)   ║
║    Discovery → Strategy → UX → UI → Architecture → Security ║
║    → PRD Synthesis                                           ║
║    Each phase: AI Proposes → Human Reviews → AI Refines      ║
║                → Human Confirms → SAVE                       ║
║    ──► HUMAN GATE 1: Full Architecture Approval              ║
║                                                              ║
║        📦 Output: BUILD HANDOFF PACKAGE (becomes AGENT.md)   ║
║        📦 Output: pdf-manifest.json (dashboard index)        ║
╠══════════════════════════════════════════════════════════════╣
║  🔨 BUILDING KIT — IDE Agents                               ║
║  File access. Terminal. Git. Code generation.                ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  STAGE 3: SCAFFOLD                                           ║
║    Walking Skeleton → Config → ADR Log → Verify e2e → Commit║
║                                                              ║
║  STAGE 4: BUILD (dynamic milestone count)                    ║
║    Milestone by Milestone → Per-Task Workflow                ║
║    ──► HUMAN GATE 2: Milestone Start (before each)           ║
║    ──► HUMAN GATE 3: Security-Sensitive Code (agent triggers)║
║                                                              ║
║  STAGE 5: VERIFY (per milestone)                             ║
║    TDD → Eval Loops → Code Review → Security Scan            ║
║    ──► HUMAN GATE 4: Milestone Acceptance                    ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║  🚀 MAINTENANCE KIT — IDE + Cloud + Manual                  ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  STAGE 6: LAUNCH PREPARATION                                 ║
║    Compliance → Beta Test → App Store → Marketing            ║
║    ──► HUMAN GATE 5: Pre-Release Approval                    ║
║    ──► HUMAN GATE 6: Launch Readiness (all streams green)    ║
║                                                              ║
║  STAGE 7: POST-LAUNCH OPERATIONS                             ║
║    Monitoring → Feedback → Content Updates → Iteration       ║
║    ──► HUMAN GATE 7: Continue / Sunset Decision (quarterly)  ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

**🎨 Content Creation Kit** runs in **parallel** with Stages 3-5, tracked via dedicated work streams.

---

## Project Tier System

| Dimension | Lite | Standard | Enterprise |
|---|---|---|---|
| **Target** | Weekend hack, prototype | Multi-week shipping product | Team / compliance / production |
| **Idea Validation** | Quick 30-min hypothesis check | Full validation with market scan | Full + competitive analysis + business case |
| **Planning Phases** | 1, 2, 5 only | All 6 (Phase 4 optional if non-visual) | All 6, all mandatory |
| **Stakeholder Deep Dives** | 1-2 key stakeholders | All identified stakeholders | All + formal RACI matrix |
| **Work Streams** | Code only | Code + 1-2 non-code streams | All identified streams |
| **Human Gates** | Gate 1 only | Gates 1, 2, 4, 5 | All 7 |
| **Milestones** | 2-3 | 4-8 | 8-15 |
| **TDD** | No | Recommended (60%) | Mandatory (80%) |
| **Content Kit** | Optional | Recommended | Required |
| **Maintenance Kit** | Skip | Core only | Full |
| **Session Memory** | Optional | Recommended | Mandatory |
| **Estimated time** | 1 day idea-to-launch | 2-6 weeks | Months |

---

## 6 Interactive Planning Phases (Stage 2)

Each phase is broken into focused **"bites"** (3-6 per phase). Each bite is one conversation turn following the loop: **AI Proposes → Human Reviews → AI Refines → Human Confirms → SAVE**.

| Phase | Output File | Bites | Key Content |
|---|---|---|---|
| **1. Discovery** | `requirements.md` | 5 | Platform research, personas, MoSCoW requirements, user stories, scope lock |
| **2. Strategy** | `strategy.md` | 4 | Stack decisions (2-3 options each), business model, milestone plan (quick wins), risk register |
| **3. UX** | `ux-flows.md` | 6 | Screen map, user journeys, wireframes, states/errors, Mermaid flowcharts (HTML), interactive prototype (HTML) |
| **4. UI Design** | `ui-design-brief.md` | 5 | Design direction, token system, component roster, screen-size adaptation, styled prototype (HTML) |
| **5. Architecture** | `architecture.md` | 3 | System architecture, state management brainstorm, E-R data model brainstorm, walking skeleton spec |
| **6. Compliance** | `compliance.md` | 4 | Data privacy, security/auth, accessibility (WCAG), final compliance checklist |

### Key Design Patterns in All Phase Files

1. **2-3 Options Always** — Every major decision presents compared alternatives with star-rating tables
2. **Research-First** — Phase 1 requires real platform research before requirements
3. **Human Activities** — Optional manual tasks at ⚡Quick / ⏱️Medium / 🔬Deep tiers
4. **Save-As-You-Go** — AI reminds user to save after every confirmed deliverable
5. **Visual Deliverables** — Mermaid flowcharts rendered as standalone HTML
6. **Facilitator Behavior Blocks** — Explicit AI DO/DON'T rules per phase
7. **Tier Adjustments Table** — Every file ends with a Lite/Standard/Enterprise matrix

---

## Deliverable Standardization

> Added April 2026. Ensures all planning output files are machine-parseable for script validation and a future PDF Project Dashboard webapp.

### YAML Frontmatter (on every deliverable)

```yaml
---
pdf_version: "1.0.0"
project_id: "first-words-app"           # kebab-case, unique per project
project_name: "First Words"
kit: "planning"                         # planning | building | content | maintenance
phase: 1                                # Phase number (0-6)
phase_name: "Discovery"
status: "confirmed"                     # draft | in-progress | confirmed
tier: "standard"                        # lite | standard | enterprise
created_at: "2026-04-12"
confirmed_at: "2026-04-12"
confirmed_by: "human"                   # human | auto
---
```

### Canonical File Names

```
docs/
├── pdf-manifest.json            ← Project index (dashboard reads this)
├── requirements.md              ← Phase 1
├── strategy.md                  ← Phase 2
├── ux-flows.md                  ← Phase 3
├── ui-design-brief.md           ← Phase 4
├── architecture.md              ← Phase 5
├── walking-skeleton-spec.md     ← Phase 5 sub-deliverable
├── compliance.md                ← Phase 6
├── diagrams/                    ← Mermaid → HTML visuals
├── prototype/                   ← Interactive HTML prototypes
└── stakeholders/                ← Stakeholder outputs
```

### pdf-manifest.json (per project)

Machine-readable index of all phases, statuses, assets. Generated at Build Handoff.
The future **PDF Project Dashboard** webapp will scan for `**/docs/pdf-manifest.json` across a root directory to build its project list.

### Validation Rules

File-level checks (frontmatter exists, fields valid), manifest-level checks (all referenced files exist, status consistency), and cross-file checks (tech stack consistency between strategy and architecture). Full spec in `planning-kit/knowledge-base/13-output-formats.md`.

---

## Human Gates (7 gates)

| Gate | When | Who Decides | Required For |
|---|---|---|---|
| **Go/No-Go** | After Stage -1 | Human | All tiers |
| **GATE 1** | After Stage 2 (planning complete) | Human | All tiers |
| **GATE 2** | Before each milestone | Human | Standard, Enterprise |
| **GATE 3** | Security-sensitive code | Agent triggers | Standard, Enterprise |
| **GATE 4** | Milestone acceptance | Human | Standard, Enterprise |
| **GATE 5** | Pre-release approval | Human | Standard, Enterprise |
| **GATE 6** | Launch readiness (all streams green) | Human | Enterprise |
| **GATE 7** | Continue / sunset (quarterly) | Human | Enterprise |

---

## Dynamic Milestone Sizing

### Rules
1. No milestone exceeds 2 focused build days.
2. Each milestone produces something testable / demo-able.
3. Milestones are dependency-ordered.
4. M1 is ALWAYS a Walking Skeleton (thin end-to-end slice).
5. Non-code streams have their own milestone tracks.
6. Cross-stream dependencies are explicit and tracked.

### Count by Tier
- **Lite:** 2-3 milestones
- **Standard:** 4-8 milestones
- **Enterprise:** 8-15 milestones

---

## Quality & Self-Improvement System

### Pre-Flight Checks (per session)
- Uncommitted changes? → commit or stash
- Test suite passing? → fix before new work
- Index stale vs. git log? → regenerate
- Correct branch for milestone?
- Previous session memory reviewed?

### Drift Detection (every 3 tasks or 30 min)
- Current work is on approved task list?
- Not modifying files outside milestone scope?
- No new un-approved dependencies introduced?
- Not over-engineering beyond task requirement?
- If ANY fails → STOP → tell human

### Switch Protocol (session end / agent handoff)
Agent asks target platform → saves state (snapshot + AGENT.md + progress) → generates platform-specific handover (paste-ready for cloud, auto-saved for IDE).

### Quality Scorecard — per milestone
Tracks: test coverage, lint warnings, file size violations, circular deps, security findings.

### Architectural Fitness Functions
Automated checks: no file > 500 lines, no circular imports, all endpoints tested, schema matches data-model.md.

---

## Complete File List

All files under `d:\MyAIAgency\WorkspaceAddOn\pro-dev-framework\`.

---

### Root Files

| # | File | Purpose | Status |
|---|---|---|---|
| 1 | `README.md` | Framework overview, quick start, architecture | ✅ Done |
| 2 | `VERSION` | Semantic version (1.0.0) | ✅ Done |
| 3 | `CHANGELOG.md` | Release history | ✅ Done |
| 4 | `HANDOVER.md` | Continuation prompt for new AI sessions | ✅ Done (needs update) |
| 5 | `implementation_plan.md` | This file | ✅ Done |

---

### 📋 Planning Kit (`planning-kit/`)

#### Knowledge Base (`planning-kit/knowledge-base/`) — 14 files

| # | File | Purpose | Status |
|---|---|---|---|
| 6 | `01-planning-guide.md` | Planning methodology overview | ✅ Done |
| 7 | `02-idea-validation.md` | Stage -1: Hypothesis loop, Go/Pivot/Kill | ✅ Done |
| 8 | `03-environment-setup.md` | Stage 0: Tier selection, stack, identity | ✅ Done |
| 9 | `04-stakeholder-discovery.md` | Stage 1: Stakeholder identification | ✅ Done |
| 10 | `05-stakeholder-deep-dive.md` | Stage 1: Per-stakeholder template | ✅ Done |
| 11 | `06-phase-discovery.md` | Phase 1: Research, personas, requirements | ✅ Done |
| 12 | `07-phase-strategy.md` | Phase 2: Stack, biz model, milestones, risks | ✅ Done |
| 13 | `08-phase-ux.md` | Phase 3: Screen map, journeys, wireframes, prototype | ✅ Done |
| 14 | `09-phase-ui.md` | Phase 4: Design direction, tokens, components | ✅ Done |
| 15 | `10-phase-architecture.md` | Phase 5: System arch, E-R, state mgmt, skeleton | ✅ Done |
| 16 | `11-phase-compliance.md` | Phase 6: Privacy, security, accessibility | ✅ Done |
| 17 | `12-phase-prd.md` | Phase 7: PRD Synthesis — consolidate phases 1-6 into stakeholder-readable PRD | ✅ Done |
| 18 | `13-output-formats.md` | YAML frontmatter spec, canonical file names, pdf-manifest.json, validation rules, dashboard integration | ✅ Done |
| 19 | `14-build-handoff-template.md` | Build handoff protocol, AGENT.md generator | ✅ Done |

#### Templates (`planning-kit/templates/`) — 3 files

| # | File | Purpose | Status |
|---|---|---|---|
| 20 | `stakeholder-map.md` | Stakeholder register + RACI template | ✅ Done |
| 21 | `work-streams.md` | Parallel stream tracker + dependencies | ✅ Done |
| 22 | `stakeholder-progress.md` | Deep dive session tracker | ✅ Done |

#### Setup (`planning-kit/`) — 2 files

| # | File | Purpose | Status |
|---|---|---|---|
| 23 | `README.md` | How to set up and use the Planning Kit | ✅ Done |
| 24 | `system-prompt.md` | Universal AI facilitator system prompt | ✅ Done |

#### Platform Setup (`planning-kit/platform-setup/`) — 3 files

| # | File | Purpose | Status |
|---|---|---|---|
| 25 | `chatgpt-setup.md` | Custom GPT creation guide (step-by-step) | ✅ Done |
| 26 | `claude-setup.md` | Claude Project creation guide | ✅ Done |
| 27 | `gemini-setup.md` | Gemini Gem creation guide | ✅ Done |

---

### 🔨 Building Kit (`building-kit/`)

#### Core Brain — 2 files

| # | File | Purpose | Status |
|---|---|---|---|
| 28 | `MASTER-GUIDE.md` | The definitive framework reference (~790 lines) | ✅ Done |
| 29 | `AGENT.md` | Project brain template (index + digest + state) | ✅ Done |

#### Harness Adapters (`building-kit/harness-adapters/`) — 6 files

| # | File | Purpose | Status |
|---|---|---|---|
| 30 | `README.md` | Adapter selection guide | ✅ Done |
| 31 | `claude-code.md` | Claude Code CLI mapping | ✅ Done |
| 32 | `codex.md` | OpenAI Codex CLI mapping | ✅ Done |
| 33 | `antigravity.md` | Antigravity/Gemini mapping | ✅ Done |
| 34 | `opencode.md` | OpenCode mapping | ✅ Done |
| 35 | `generic.md` | Filesystem-only fallback | ✅ Done |

#### Gates (`building-kit/gates/`) — 3 files

> Go/No-Go and GATE-01 are handled by the Planning Kit (`02-idea-validation.md` and `14-build-handoff-template.md`).

| # | File | Purpose | Status |
|---|---|---|---|
| 36 | `GATE-02-milestone.md` | Milestone start approval | ✅ Done |
| 37 | `GATE-03-security.md` | Security-sensitive code review | ✅ Done |
| 38 | `GATE-04-acceptance.md` | Milestone acceptance | ✅ Done |

#### Rules (`building-kit/rules/`) — 10 files

| # | File | Purpose | Status |
|---|---|---|---|
| 39 | `code-architecture.md` | 500-line limit, modular, feature-first | ✅ Done |
| 40 | `git-workflow.md` | Commits, branches, PR conventions | ✅ Done |
| 41 | `debugging.md` | Error handling, logging philosophy | ✅ Done |
| 42 | `testing.md` | TDD mandate, coverage targets | ✅ Done |
| 43 | `dependencies.md` | Package management, version pinning | ✅ Done |
| 44 | `security.md` | Sandboxing, least-agency principles | ✅ Done |
| 45 | `multi-agent.md` | Parallel agent instance rules | ✅ Done |
| 46 | `drift-detection.md` | Self-correction protocol | ✅ Done |
| 47 | `fitness-functions.md` | Architectural verification checks | ✅ Done |
| 48 | `session-management.md` | Switch Protocol (mandatory session end) | ✅ Done |

#### Rule Templates (`building-kit/rule-templates/`) — 5 files

| # | File | Purpose | Status |
|---|---|---|---|
| 49 | `web-app.md` | React/Next.js/Vue conventions | ✅ Done |
| 50 | `flutter.md` | Flutter/Dart conventions | ✅ Done |
| 51 | `python.md` | Python/FastAPI conventions | ✅ Done |
| 52 | `windows-desktop.md` | C#/WPF/WinUI conventions | ✅ Done |
| 53 | `unity.md` | Unity/C# game conventions | ✅ Done |

#### Utility Files (`building-kit/`) — 5 files

> `resume-protocol.md`, `activation-prompt-template.md`, and `final-files-to-copy.md` removed — covered by harness adapters and `14-build-handoff-template.md`.

| # | File | Purpose | Status |
|---|---|---|---|
| 54 | `scaffolding-guide.md` | 8-stage scaffold flow | ✅ Done |
| 55 | `stack-setup-guide.md` | Harness-adapter-aware setup | ✅ Done |
| 56 | `token-optimization-rules.md` | 3-tier index + multi-model budgets | ✅ Done |
| 57 | `troubleshooting.md` | Error recovery, agent drift | ✅ Done |
| 58 | `preflight-checklist.md` | Session start checks | ✅ Done |

#### Doc Templates (`building-kit/docs/`) — 15 files

| # | File | Purpose | Status |
|---|---|---|---|
| 59 | `project-map.md` | Tier 0 codebase index | ✅ Done |
| 60 | `index/module-index-template.md` | Tier 1 module index | ✅ Done |
| 61 | `index/symbols/symbol-index-template.md` | Tier 2 symbol index | ✅ Done |
| 62 | `lenses/api-endpoint.md` | Task lens: API work | ✅ Done |
| 63 | `lenses/new-screen.md` | Task lens: UI screen | ✅ Done |
| 64 | `lenses/auth-flow.md` | Task lens: Auth changes | ✅ Done |
| 65 | `lenses/data-change.md` | Task lens: Schema changes | ✅ Done |
| 66 | `progress.md` | Task tracking template | ✅ Done |
| 67 | `milestone-checklist.md` | Pre-release checklist | ✅ Done |
| 68 | `api-spec.md` | API documentation template | ✅ Done |
| 69 | `data-model.md` | Data schema template | ✅ Done |
| 70 | `screen-map.md` | UI screens + components template | ✅ Done |
| 71 | `module-map.md` | Module interfaces template | ✅ Done |
| 72 | `adr-log.md` | Architecture Decision Record index | ✅ Done |
| 73 | `quality-scorecard.md` | Per-milestone quality tracking | ✅ Done |

#### Memory Templates (`building-kit/memory/`) — 6 files

> Merged: `handoff-template.md` into `session-snapshot-template.md`. Merged: `context-package-template.md` + `cloud-handover-prompt-template.md` into `cloud-handover-template.md`. Merged: `session-template.md` + `knowledge-capture-template.md` into `session-learning-template.md`.

| # | File | Purpose | Status |
|---|---|---|---|
| 74 | `framework-digest.md` | Layer 0: Compressed rules (~500 words) | ✅ Done |
| 75 | `session-snapshot-template.md` | Layer 2: Per-session state + handoff for next agent | ✅ Done |
| 76 | `cloud-handover-template.md` | Layer 3: Paste-ready context package for cloud switches | ✅ Done |
| 77 | `session-learning-template.md` | Per-session notes + reusable patterns captured | ✅ Done |
| 78 | `adr-template.md` | Architecture Decision Record | ✅ Done |
| 79 | `retrospective-template.md` | Post-milestone learning | ✅ Done |

#### Scripts & CI/CD (`building-kit/scripts/`, `building-kit/ci-cd/`) — 7 files

| # | File | Purpose | Status |
|---|---|---|---|
| 80 | `skill-file-format.md` | Standard frontmatter spec for skills | ✅ Done |
| 81 | `scripts/generate-codebase-index.js` | Auto-index code (3-tier) | ✅ Done |
| 82 | `scripts/generate-skill-index.js` | Auto-index skills | ✅ Done |
| 83 | `scripts/generate-context-package.js` | Generate state bundle | ✅ Done |
| 84 | `scripts/index-runner.js` | Unified runner for all scripts | ✅ Done |
| 85 | `ci-cd/github-actions-test.yml` | Test + lint on push | ✅ Done |
| 86 | `ci-cd/README.md` | CI/CD adaptation guide | ✅ Done |

---

### 🎨 Content Creation Kit (`content-creation-kit/`) — 12 files

| # | File | Purpose | Status |
|---|---|---|---|
| 87 | `README.md` | How content work integrates with building | ⬜ Not started |
| 88 | `guides/content-writer.md` | Writing workflows, tone, structure | ⬜ Not started |
| 89 | `guides/illustrator.md` | Art specs, style guides, deliverables | ⬜ Not started |
| 90 | `guides/voice-actor.md` | Audio specs, recording guidelines | ⬜ Not started |
| 91 | `guides/legal-compliance.md` | COPPA, GDPR-K, accessibility review | ⬜ Not started |
| 92 | `templates/content-pipeline.md` | Content creation workflow tracker | ⬜ Not started |
| 93 | `templates/asset-pipeline.md` | Art/audio/video asset tracker | ⬜ Not started |
| 94 | `templates/style-guide.md` | Visual + written style reference | ⬜ Not started |
| 95 | `templates/review-workflow.md` | Content review + approval process | ⬜ Not started |
| 96 | `checklists/content-review.md` | Writing quality checklist | ⬜ Not started |
| 97 | `checklists/asset-review.md` | Art/audio quality checklist | ⬜ Not started |
| 98 | `checklists/compliance-review.md` | Legal + accessibility checklist | ⬜ Not started |

---

### 🚀 Maintenance Kit (`maintenance-kit/`) — 12 files

| # | File | Purpose | Status |
|---|---|---|---|
| 99 | `README.md` | Launch + operations overview | ⬜ Not started |
| 100 | `launch-prep/beta-test-plan.md` | Beta program design | ⬜ Not started |
| 101 | `launch-prep/app-store-submission.md` | Store listing + review prep | ⬜ Not started |
| 102 | `launch-prep/go-to-market.md` | Marketing launch plan | ⬜ Not started |
| 103 | `launch-prep/compliance-final.md` | Final compliance verification | ⬜ Not started |
| 104 | `post-launch/monitoring-setup.md` | Error tracking, analytics | ⬜ Not started |
| 105 | `post-launch/feedback-collection.md` | User feedback pipelines | ⬜ Not started |
| 106 | `post-launch/iteration-workflow.md` | Feature request → build cycle | ⬜ Not started |
| 107 | `post-launch/retrospective.md` | Team/project retrospective | ⬜ Not started |
| 108 | `gates/GATE-05-release.md` | Pre-release approval | ⬜ Not started |
| 109 | `gates/GATE-06-launch.md` | Launch readiness (all streams green) | ⬜ Not started |
| 110 | `gates/GATE-07-continue.md` | Quarterly continue/sunset | ⬜ Not started |

---

### 🔄 Update Kit (`update-kit/`) — 1 file

| # | File | Purpose | Status |
|---|---|---|---|
| 111 | `README.md` | Placeholder for future release | ⬜ Not started |

---

## Execution Milestones

### M0 — Root Files ✅ COMPLETE
- [x] Directory structure (5 kits)
- [x] README.md, VERSION, CHANGELOG.md, HANDOVER.md

### M1 — Core Brain (building-kit) ✅ COMPLETE
- [x] MASTER-GUIDE.md (~790 lines)
- [x] AGENT.md template

### M2 — Planning Methodology (planning-kit/knowledge-base) ✅ COMPLETE
- [x] 14 knowledge-base files (01 through 14)
- [x] All output templates migrated to YAML frontmatter standard
- [x] pdf-manifest.json spec defined in 13-output-formats.md
- [x] PRD Synthesis phase added (12-phase-prd.md)
- [x] Validation rules defined (file-level, manifest-level, cross-file)

### M3 — Planning Templates (planning-kit/templates) ✅ COMPLETE
- [x] stakeholder-map.md, work-streams.md, stakeholder-progress.md

### M4 — Planning Kit Setup ✅ COMPLETE
- [x] planning-kit/README.md, system-prompt.md
- [x] 3 platform-setup guides (chatgpt, claude, gemini)

### M5 — Harness Adapters (building-kit) ✅ COMPLETE
- [x] README.md + 5 adapter files (claude-code, codex, antigravity, opencode, generic)

### M6 — Gates + Rules (building-kit) ✅ COMPLETE
- [x] 3 gate files (GATE-02, 03, 04)
- [x] 10 rule files
- [x] 5 stack rule-templates

### M7 — Utility Files (building-kit) ✅ COMPLETE
- [x] scaffolding-guide, stack-setup, token-optimization, troubleshooting, preflight-checklist

### M8 — Index + Doc Templates (building-kit/docs) ✅ COMPLETE
- [x] 3-tier codebase index templates
- [x] 4 task lenses
- [x] All doc templates (progress, milestones, api-spec, data-model, screen-map, module-map, etc.)
- [x] quality-scorecard.md

### M9 — Content Creation Kit
- [ ] README.md + 4 role guides
- [ ] 4 templates + 3 checklists
- **Done when:** A content creator can independently follow the pipeline

### M10 — Maintenance Kit
- [ ] README.md + 4 launch-prep files + 4 post-launch files
- [ ] 3 gate files (Gates 5-7)
- **Done when:** Full launch-to-operations lifecycle documented

### M11 — State Protocol + Memory + Scripts (building-kit) ✅ COMPLETE
- [x] 6 memory templates (after merges)
- [x] skill-file-format.md
- [x] 4 scripts + 2 CI/CD files
- Scripts verified: all 3 pass `--help` test

### M12 — Update Kit + Final Polish
- [ ] update-kit/README.md
- [ ] All internal links verified
- [ ] Version stamp PDF v1.0.0 on all files
- [ ] Zero agent-specific syntax in core files
- [ ] Build Handoff → AGENT.md validation
- **Done when:** Framework passes all verification checks

---

## Redundancy Cleanup Log

Files removed during optimization:

| Removed | Reason |
|---|---|
| `building-kit/phase-prompts/` (8 files) | Planning is cloud-only. Planning Kit has complete methodology. |
| `building-kit/gates/GO-NO-GO.md` | Handled by `02-idea-validation.md` in Planning Kit |
| `building-kit/gates/GATE-01-architecture.md` | Handled by `14-build-handoff-template.md` in Planning Kit |
| `building-kit/resume-protocol.md` | Covered in each harness adapter's Resume Protocol section |
| `building-kit/activation-prompt-template.md` | Covered in each harness adapter's Activation Prompt section |
| `building-kit/final-files-to-copy.md` | Covered by `14-build-handoff-template.md` |
| `building-kit/memory/handoff-template.md` | Merged into `session-snapshot-template.md` |
| `building-kit/memory/context-package-template.md` | Merged into `cloud-handover-template.md` |
| `building-kit/memory/cloud-handover-prompt-template.md` | Merged into `cloud-handover-template.md` |
| `building-kit/memory/session-template.md` | Merged into `session-learning-template.md` |
| `building-kit/memory/knowledge-capture-template.md` | Merged into `session-learning-template.md` |

**Total removed: 16 files. Original 127 → 111 (after PRD addition).**

---

## Total File Count

| Kit | Files | Status |
|---|---|---|
| Root | 5 | ✅ 5/5 |
| 📋 Planning Kit | 22 | ✅ 22/22 |
| 🔨 Building Kit | 59 | ✅ 59/59 |
| 🎨 Content Creation Kit | 12 | ⬜ 0/12 |
| 🚀 Maintenance Kit | 12 | ⬜ 0/12 |
| 🔄 Update Kit | 1 | ⬜ 0/1 |
| **Total** | **111** | **86/111 (~77%)** |

---

## Future: PDF Project Dashboard Webapp

A planned interactive web application to track all projects built with this framework. Design decisions made in `13-output-formats.md`:

- Scans `**/docs/pdf-manifest.json` across a configurable root directory
- Renders project cards with: name, tier badge, tech stack, phase progress bar
- Deep links into individual phase files
- Runs validation checks and flags issues
- Data source: YAML frontmatter in every deliverable + pdf-manifest.json per project

---

## Verification Plan

### Manual Review
1. All cross-references valid between kit files
2. AGENT.md has zero agent-specific syntax
3. Every harness adapter maps all concepts correctly
4. Tier system consistent — Lite user never sees Enterprise-only content
5. Stage -1 validation prompt works when pasted into external AI
6. Walking Skeleton milestone template applies to web, mobile, and CLI projects
7. Planning Kit: System prompt + 14 knowledge files uploaded to ChatGPT Custom GPT produces working facilitator
8. Save-as-you-go: Each stage outputs exact filename + copy-ready content
9. Switch Protocol: Agent generates complete handover for target platform
10. YAML frontmatter: Validation script can parse all deliverables without errors

### User Acceptance Tests
1. **Lite:** Weekend project. Go/No-Go + Gate 1 only. Planning < 1 hour.
2. **Standard:** Full planning. 4-8 milestones. All stakeholders deep-dived.
3. **Enterprise:** All streams, all gates, compliance, launch prep, post-launch.
4. **Cloud-to-CLI test:** Plan in ChatGPT → save files → open IDE → agent reads AGENT.md → validates package → begins Stage 3.
5. **Switch Protocol test:** Build in Antigravity → say "switch to ChatGPT" → paste handover → brainstorm → return to IDE → agent picks up decisions.
6. **Dashboard test:** Run validation script on a project's `docs/` folder → all files parse, all frontmatter valid, manifest consistent.
