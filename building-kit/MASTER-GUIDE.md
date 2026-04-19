# Pro Dev Framework — MASTER GUIDE

> **Version:** 1.0.0 | **Read this once.** After scaffolding, the agent reads `AGENT.md` instead.

---

## Purpose

This guide teaches any AI coding agent (or human) the complete Pro Dev Framework methodology. It covers:
1. The 8-stage lifecycle and what happens at each stage
2. The 5-kit architecture and which kit to use when
3. The tier system (Lite / Standard / Enterprise)
4. Human gates and approval checkpoints
5. Session management and platform switching
6. Token optimization and progressive disclosure
7. Skill system and on-demand knowledge loading

**After reading this guide once**, the agent creates a project-specific `AGENT.md` that contains a compressed Framework Digest (~500 words). From that point forward, the agent reads ONLY `AGENT.md` at session start — never this guide again.

---

## Section Directory

> **Agent Instruction:** If you need to reference a specific topic from this guide, search for the exact section header below. Do NOT use line numbers — they shift between versions.

| Section | Search For | What You'll Find |
|---|---|---|
| Overview | `## The Platform-Split Architecture` | Why planning goes on cloud, building in IDE |
| Stage -1 | `### Stage -1: Idea Exploration` | Hypothesis loop, Go/No-Go |
| Stage 0 | `### Stage 0: Environment` | Tier selection, project identity |
| Stage 1 | `### Stage 1: Stakeholder Discovery` | Atomic deep dives, work streams |
| Stage 2 | `### Stage 2: Interactive Planning` | 7 phases × 4 sub-steps |
| Stage 3 | `### Stage 3: Scaffold` | Walking Skeleton, first commit |
| Stage 4 | `### Stage 4: Build` | Milestone workflow, drift checks |
| Stage 5 | `### Stage 5: Verify` | Testing, quality scorecard |
| Stage 6 | `### Stage 6: Launch Preparation` | Beta, app store, compliance |
| Stage 7 | `### Stage 7: Post-Launch Operations` | Monitoring, feedback, iteration |
| Tiers | `## Project Tiers` | Lite / Standard / Enterprise settings |
| Gates | `## Human Gates` | All 7 gates, triggers, tier rules |
| Tokens | `## Token Optimization` | 3-tier index, reading budget |
| Skills | `## Skill System` | Skill format, discovery chain, auto-index |
| Switching | `## Switch Protocol` | Session end, handover generation |
| Project Brain | `## AGENT.md — The Project Brain` | What AGENT.md contains |
| Kit Reference | `## Quick Reference: Which Kit` | Which kit for which task |
| Methods | `## Methodology Sources` | McKinsey, ThoughtWorks, Deloitte |

---

## The Platform-Split Architecture

The framework separates **planning** from **building** because they require fundamentally different AI capabilities:

| Capability | Planning Needs | Building Needs |
|---|---|---|
| Conversation depth | ✅ Long brainstorming dialogues | ❌ Short task-focused commands |
| Web search | ✅ Market research, competitor analysis | ❌ Not needed |
| File system access | ❌ Not needed | ✅ Read/write code, config, tests |
| Terminal access | ❌ Not needed | ✅ Run builds, tests, scripts |
| Multi-modal input | ✅ Review mockups, competitor screenshots | ⚠️ Sometimes |
| Cost | Free tiers available | Paid (token-based) |

**Conclusion:** Planning wastes IDE agent capabilities (and money). Building wastes cloud AI's conversational strengths.

### The Split

```
PLANNING (Cloud AI — ChatGPT / Gemini / Claude.ai)
  Stages -1 through 2
  Uses: planning-kit/
  Output: Planning Package (15+ docs saved to project folder)

BUILDING (IDE Agent — Antigravity / Claude Code / Codex CLI / OpenCode)
  Stages 3 through 5
  Uses: building-kit/
  Input: AGENT.md + planning docs

CONTENT (Any platform — parallel to building)
  Runs alongside Stages 3-5
  Uses: content-creation-kit/
  Tracked via: Work Streams in AGENT.md

LAUNCH & MAINTENANCE (IDE + Manual)
  Stages 6 through 7
  Uses: maintenance-kit/
```

Users who prefer to do everything in one IDE agent can skip the split. The building-kit contains `phase-prompts/` for IDE-based planning as a fallback.

---

## The 8-Stage Lifecycle

### Stage -1: Idea Exploration & Validation

**Kit:** planning-kit | **Where:** Cloud AI | **Duration:** 30 min – 2 hours
**Methodology:** `planning-kit/knowledge-base/02-idea-validation.md`

Before writing a single line of code, validate whether this idea is worth pursuing. Inspired by McKinsey's hypothesis-driven approach.

```
Step 1: HYPOTHESIS FORMATION
  "I believe [target users] have [this problem], and
   [this solution] will solve it because [this reason]."

Step 2: PROBLEM VALIDATION
  Does this problem actually exist? How painful is it?
  How do people solve it today? Is it growing or shrinking?

Step 3: SOLUTION VALIDATION
  Why this approach vs. alternatives?
  What's the unfair advantage? What's the minimum viable version?

Step 4: FEASIBILITY CHECK
  Technical, resource, legal, and market timing assessment.

Step 5: COMPETITIVE LANDSCAPE (Standard + Enterprise only)
  Direct and indirect competitors. Gap analysis.

Step 6: GO / NO-GO GATE
  ✅ GO     — Proceed to Stage 0
  🔄 PIVOT  — Problem is real, but solution needs rethinking
  ❌ KILL   — Problem isn't real or not feasible
```

**Deliverables saved to project:**
- `docs/idea-validation-brief.md`
- `docs/feasibility-assessment.md`
- `docs/competitive-matrix.md` (Standard+ only)

---

### Stage 0: Environment & Project Setup

**Kit:** planning-kit | **Where:** Cloud AI | **Duration:** 15-30 min
**Methodology:** `planning-kit/knowledge-base/03-environment-setup.md`

Select the project tier, define the technical environment, and establish the project identity.

```
Step 1: TIER SELECTION
  Lite:       Weekend hack, 2-3 milestones, 1 gate
  Standard:   Multi-week product, 4-8 milestones, 4 gates
  Enterprise: Team/compliance, 8-15 milestones, 7 gates

Step 2: ENVIRONMENT DEFINITION
  Language/framework, hosting, database, third-party services

Step 3: PROJECT IDENTITY
  Name, one-line description, target audience, primary goal

Step 4: PERMISSIONS & CONSTRAINTS
  Budget, timeline, team size, regulatory requirements
```

**Deliverables:**
- Environment config captured in the ongoing planning conversation
- Used to inform Stage 1 and Stage 2 decisions

---

### Stage 1: Stakeholder Discovery & Deep Dives

**Kit:** planning-kit | **Where:** Cloud AI | **Duration:** 30 min – 2 hours
**Methodology:** `planning-kit/knowledge-base/04-stakeholder-discovery.md`

Identify every person or role involved in the project — not just developers. Then explore each stakeholder one at a time.

```
Step 1: IDENTIFICATION
  AI brainstorms all potential stakeholders.
  Example for a kids' app:
  - Developer (you + AI agent)
  - Content Creator (word lists, stories)
  - Illustrator (art assets)
  - Voice Actor (audio)
  - Parent (end user — parental controls, privacy)
  - Child (end user — engagement, safety)
  - Legal/COPPA compliance
  - Marketing/App Store

Step 2: PRIORITIZATION
  Rank by impact. Must-have vs. nice-to-have.

Step 3: ATOMIC DEEP DIVES (one at a time)
  For each stakeholder, the AI explores:
  - What does this role need from the project?
  - What does the project need from this role?
  - What are their deliverables and deadlines?
  - What tools/platforms do they use?
  - What are the risks if this role is neglected?

  Progress tracked visibly:
  "Stakeholder Progress: [2/5 complete]
   ✅ Content Creator  ✅ Illustrator
   🔵 Parent/COPPA (next)  ⬜ Marketing  ⬜ Voice Actor"

Step 4: WORK STREAM CREATION
  Group stakeholder needs into parallel tracks:
  - CODE stream: Development milestones
  - CONTENT stream: Writing, editing, localization
  - ASSET stream: Art, audio, video
  - LEGAL stream: Compliance, privacy, accessibility
  - MARKETING stream: App store, launch, growth

Step 5: CROSS-STREAM DEPENDENCY MAP
  "Code M3 (content integration) depends on Content C2 (stories written)"
  "Code M4 (audio playback) depends on Asset A2 (voice recordings)"
```

**Deliverables:**
- `docs/stakeholder-map.md`
- `docs/stakeholders/[name].md` (one per stakeholder deep dive)
- `docs/work-streams.md`

---

### Stage 2: Interactive Planning (7 Phases)

**Kit:** planning-kit | **Where:** Cloud AI | **Duration:** 1-4 hours
**Methodology:** `planning-kit/knowledge-base/06-phase-discovery.md` through `11-phase-compliance.md`

Six structured phases, each following a 4-sub-step loop:

```
For each phase:
  (a) AI PROPOSES    → presents initial analysis / options
  (b) HUMAN REVIEWS  → accepts, modifies, or rejects
  (c) AI REFINES     → incorporates feedback, digs deeper
  (d) HUMAN CONFIRMS → final approval, move to next phase
```

| Phase | Focus | Key Outputs | Tier |
|---|---|---|---|
| **Phase 1: Discovery** | Requirements gathering, personas, user stories | `docs/requirements.md` | All |
| **Phase 2: Strategy** | Tech stack, monetization, milestone breakdown | `docs/strategy.md`, `docs/milestone-plan.md` | All |
| **Phase 3: UX Flows** | Screen flows, navigation, user journeys | `docs/ux-flows.md` | Standard+ |
| **Phase 4: UI Design** | Visual style, component specs, asset briefs | `docs/ui-design-brief.md` | Standard+ (optional) |
| **Phase 5: Architecture** | System design, data model, walking skeleton | `docs/architecture.md`, `docs/walking-skeleton-spec.md` | All |
| **Phase 6: Security & Compliance** | Auth, data protection, regulatory | `docs/compliance-checklist.md` | Standard+ |

**At the end of Stage 2:**
- Cloud AI generates `AGENT.md` (project brain with Framework Digest)
- Cloud AI generates agent shims (`CLAUDE.md`, `AGENTS.md`)
- Cloud AI outputs the activation prompt for the IDE agent
- User saves all files to project directory

**► HUMAN GATE 1: Architecture Approval** — before any code is written.

---

### Stage 3: Scaffold

**Kit:** building-kit | **Where:** IDE Agent | **Duration:** 1-4 hours

Create the Walking Skeleton — a thin, end-to-end slice that proves the architecture works. Inspired by ThoughtWorks' inception methodology.

```
Step 1: READ PLANNING DOCS
  Agent reads AGENT.md (always)
  Agent reads docs/walking-skeleton-spec.md (for this stage)

Step 2: CREATE WALKING SKELETON
  Initialize project with chosen stack
  Wire up: UI → API → Database → back to UI
  One feature working end-to-end (even if minimal)

Step 3: CONFIGURE
  .env, .gitignore, linting, formatting, CI/CD

Step 4: INITIALIZE ADR LOG
  First entry: "ADR-001: Why [technology choice]"

Step 5: VERIFY END-TO-END
  Run the skeleton. Does data flow through all layers?

Step 6: COMMIT
  First commit with passing tests (if TDD enabled)
```

**This is always Milestone M1.** No exceptions.

---

### Stage 4: Build

**Kit:** building-kit | **Where:** IDE Agent | **Duration:** Days to weeks

Work through milestones sequentially. Each milestone follows this workflow:

```
► HUMAN GATE 2: Milestone Start (before each milestone)

For each milestone:
  1. Read milestone-plan.md for scope
  2. Break into tasks (max 2 days per milestone)
  3. For each task:
     a. Read relevant module index (Tier 1)
     b. Implement
     c. Write tests (if TDD enabled)
     d. Drift check every 3 tasks
  4. Update docs/progress.md

► HUMAN GATE 3: Security-Sensitive Code (triggered by agent when needed)

Work Streams:
  While CODE stream builds, CONTENT and ASSET streams
  progress in parallel. Check cross-stream dependencies
  before starting any milestone that depends on non-code work.
```

**Rules enforced during build:**
- Max 500 lines per file (split if exceeded)
- No circular imports
- All endpoints tested
- No un-approved dependencies
- Stay on-task (drift detection every 3 tasks or 30 min)

---

### Stage 5: Verify

**Kit:** building-kit | **Where:** IDE Agent | **Duration:** Hours per milestone

```
Step 1: TEST SUITE
  Run all tests. Fix failures before proceeding.

Step 2: CODE REVIEW
  Agent reviews own code against rules/code-architecture.md

Step 3: SECURITY SCAN
  Check for exposed secrets, SQL injection, XSS

Step 4: QUALITY SCORECARD
  Fill in docs/quality-scorecard.md:
  - Test coverage %
  - Lint warnings count
  - File size violations
  - Circular dependencies
  - Security findings

► HUMAN GATE 4: Milestone Acceptance
```

---

### Stage 6: Launch Preparation

**Kit:** maintenance-kit | **Where:** IDE + Manual | **Duration:** Days

```
Step 1: FINAL COMPLIANCE VERIFICATION
  Review content-creation-kit/checklists/compliance-review.md
  COPPA, GDPR-K, accessibility — all green?

Step 2: BETA TEST PROGRAM
  Follow maintenance-kit/launch-prep/beta-test-plan.md
  Recruit testers, define metrics, collect feedback

Step 3: APP STORE / DEPLOYMENT
  Follow maintenance-kit/launch-prep/app-store-submission.md
  Store listing, screenshots, privacy policy, review prep

Step 4: GO-TO-MARKET
  Follow maintenance-kit/launch-prep/go-to-market.md
  Launch timeline, channels, messaging

► HUMAN GATE 5: Pre-Release Approval
► HUMAN GATE 6: Launch Readiness (all streams green) — Enterprise only
```

---

### Stage 7: Post-Launch Operations

**Kit:** maintenance-kit | **Where:** IDE + Manual | **Duration:** Ongoing

```
Step 1: MONITORING
  Error tracking, performance, analytics

Step 2: FEEDBACK COLLECTION
  User reviews, support tickets, usage analytics

Step 3: CONTENT UPDATES
  New content, seasonal updates, localization

Step 4: ITERATION
  Feature requests → prioritize → plan → build mini-cycle

Step 5: RETROSPECTIVE
  What worked, what didn't, what to change

► HUMAN GATE 7: Continue / Sunset Decision (quarterly) — Enterprise only
```

---

## Project Tiers

### Lite (Weekend Hack)

| Aspect | Setting |
|---|---|
| Timeline | 1 day idea-to-launch |
| Planning stages | -1 (quick), 0, skip 1, 2 (phases 1, 2, 5 only) |
| Milestones | 2-3 |
| Gates | Go/No-Go + Gate 1 only |
| Stakeholder dives | 1-2 key roles |
| Work streams | Code only |
| TDD | No |
| Content Kit | Skip |
| Maintenance Kit | Skip |
| Session memory | Optional |

### Standard (Multi-Week Product)

| Aspect | Setting |
|---|---|
| Timeline | 2-6 weeks |
| Planning stages | All (-1 through 2), Phase 4 optional if non-visual |
| Milestones | 4-8 |
| Gates | Go/No-Go + Gates 1, 2, 4, 5 |
| Stakeholder dives | All identified |
| Work streams | Code + 1-2 non-code |
| TDD | Recommended (60% coverage) |
| Content Kit | Recommended |
| Maintenance Kit | Core only (beta test + basic launch) |
| Session memory | Recommended |

### Enterprise (Team / Compliance)

| Aspect | Setting |
|---|---|
| Timeline | Months |
| Planning stages | All, all mandatory |
| Milestones | 8-15 |
| Gates | All 7 |
| Stakeholder dives | All + formal RACI matrix |
| Work streams | All identified |
| TDD | Mandatory (80% coverage) |
| Content Kit | Required |
| Maintenance Kit | Full |
| Session memory | Mandatory |

---

## Human Gates

| Gate | Stage | Trigger | Decision |
|---|---|---|---|
| **Go/No-Go** | After -1 | Idea validation complete | GO / PIVOT / KILL |
| **Gate 1** | After 2 | Planning complete | Approve architecture |
| **Gate 2** | During 4 | Before each milestone | Approve milestone scope |
| **Gate 3** | During 4 | Agent detects security-sensitive code | Approve approach |
| **Gate 4** | After 5 | Milestone verification done | Accept milestone |
| **Gate 5** | During 6 | Pre-release checks done | Approve release |
| **Gate 6** | During 6 | All streams green | Approve launch (Enterprise) |
| **Gate 7** | During 7 | Quarterly review | Continue / Sunset (Enterprise) |

**Gate rules:**
- Agent STOPS and presents a gate form. Never auto-proceeds.
- Gate form contains: what was done, what's next, risks, and a clear decision to make.
- Lite tier: Only Go/No-Go + Gate 1.
- Standard: Go/No-Go + Gates 1, 2, 4, 5.
- Enterprise: All 7.

---

## Token Optimization & Progressive Disclosure

### The 3-Tier Codebase Index

```
Tier 0: PROJECT MAP (~80 tokens)
  One-page directory tree with one-line descriptions.
  Agent reads this FIRST, before touching any code.

Tier 1: MODULE INDEX (~200-300 tokens each)
  Per-module file listing: exports, dependencies, patterns.
  Agent reads ONLY for the module being worked on.

Tier 2: SYMBOL INDEX (~150 tokens each)
  Per-file function/class listing with signatures.
  Agent reads ONLY when working inside a specific file.
```

### Reading Budget

```
RULE: Read the MINIMUM needed for the current task.

Before reading ANY code file, read the index first:
  project-map.md → module index → symbol index → actual file

Max files read per task: 5 (unless human approves more)
Max total lines read per task: 800
If you need more: ask the human, explain why
```

### What Gets Loaded When

```
ALWAYS (every session):
  AGENT.md ........................... ~600 tokens

ON DEMAND (only at that step):
  gates/GATE-0N.md ................... ~200 tokens
  phase-prompts/phase-0N.md .......... ~400 tokens
  docs/project-map.md ................ ~80 tokens
  docs/index/[module].md ............. ~200 tokens
  memory/sessions/[latest].md ........ ~300 tokens
  skills/ROOT_INDEX.md ............... ~50 tokens
  skills/[domain]_index.md ........... ~150 tokens
  skills/[domain]/[skill].md ......... ~400 tokens (avg)

NEVER (unless human asks):
  This file (MASTER-GUIDE.md) ........ ~2500 tokens
  All other guides ................... not needed
```

---

## Skill System

Skills are standalone knowledge files that teach agents specific techniques, patterns, and domain expertise. Instead of stuffing every technique into MASTER-GUIDE.md, they live in a shared skill library and are loaded **only when relevant**.

### What Is a Skill?

A skill is a focused markdown file (~200-600 tokens) that covers ONE specific technique:

```
Examples:
- "How to implement infinite scroll in React"
- "Flutter Riverpod state management patterns"
- "PostgreSQL query optimization"
- "COPPA compliance for children's apps"
- "Building accessible color contrast systems"
```

Skills are **never read proactively.** They are pulled on-demand when the agent encounters a task that matches the skill's domain.

### Skill File Format

Every skill file must include a standard YAML frontmatter block:

```yaml
---
domain: flutter                     # Primary domain (matches index categories)
subdomain: state-management         # Narrower classification
keywords: [riverpod, provider, bloc, state]  # Search terms
complexity: intermediate            # beginner | intermediate | advanced
token-cost: ~350                    # Approximate token count if loaded
version: 1.0.0                     # Skill version
last-verified: 2026-04-01          # When the skill was last verified accurate
applicable-stacks: [flutter, dart]  # Which rule-templates this applies to
---
```

Below the frontmatter: the actual skill content (instructions, patterns, code examples).

### The 3-Level Skill Discovery Chain

Skills are organized in a progressive disclosure hierarchy, just like the codebase index:

```
Level 0: ROOT_INDEX.md (~50 tokens)
  Lists all skill categories/domains.
  Read this FIRST when looking for a skill.
  
  Categories:
  ├── Flutter & Mobile Development
  ├── Web & Frontend
  ├── Backend & API
  ├── Data Science & AI
  ├── DevOps & Infrastructure
  ├── Security & Compliance
  ├── Design & UX
  └── Domain-Specific (legal, education, gaming, etc.)

Level 1: DOMAIN INDEX (e.g., flutter_index.md) (~100-200 tokens)
  Lists all skills within that domain.
  Each entry: skill name + one-line description + file path.

Level 2: SKILL FILE (e.g., riverpod-patterns.md) (~200-600 tokens)
  The actual skill content.
  Read ONLY when the task requires this specific skill.
```

**The agent never reads all skills.** Discovery path:
1. Hit a task that might benefit from a skill → check ROOT_INDEX
2. Find relevant domain → read domain index
3. Find matching skill → read that ONE skill file
4. Apply the technique → continue building

### When to Search for Skills

```
SEARCH for a skill when:
  □ Starting work with an unfamiliar technology
  □ Implementing a pattern you haven't used before
  □ A task mentions a specific library/framework
  □ Human says "use the skill for [X]" or "check skills for [X]"
  □ Current approach isn't working — look for alternative patterns

DO NOT search for skills when:
  □ You already know the pattern well
  □ The task is trivially simple
  □ You searched for the same skill earlier in this session
```

### Integration with the Codebase Index

Skills complement the codebase index. They work together:

```
Codebase Index tells you:  WHERE things are in THIS project
Skill Index tells you:     HOW to do things across ANY project

Example workflow:
  1. Read project-map.md → find the auth module
  2. Read module-index: auth/ → see current patterns
  3. Realize you need OAuth2 PKCE flow
  4. Search skill index → find "oauth2-pkce-flow.md"
  5. Read the skill → apply the pattern to this project
```

### Auto-Generated Skill Indexes

The `scripts/generate-skill-index.js` script auto-generates domain indexes by:
1. Scanning all `.md` files in the configured skills directory
2. Parsing YAML frontmatter from each file
3. Grouping by `domain` field
4. Generating one `[domain]_index.md` file per domain
5. Updating `ROOT_INDEX.md` with all discovered domains

Run manually: `node scripts/generate-skill-index.js --skills-dir [path]`
Or via the unified runner: `node scripts/index-runner.js --skills`

### Creating New Skills During a Project

When the agent discovers a useful pattern during development, it can capture it as a new skill:

```
1. Create file: [skills-dir]/[domain]/[skill-name].md
2. Add standard frontmatter (domain, keywords, complexity, etc.)
3. Write the technique: problem → solution → code example → gotchas
4. Run generate-skill-index.js to update the index
5. Log in memory/knowledge-capture-template.md
```

This builds an ever-growing knowledge base across projects.

### AGENT.md Skill Pointers

AGENT.md includes a `Skill Pointers` section so agents know where to look:

```markdown
## Skill Pointers
- Skills Root: [path-to-skills]/ROOT_INDEX.md
- Project Stack Skills: flutter, dart
- Pre-loaded (read at scaffold): riverpod-patterns.md, go-router.md
- Discovery method: grep_search on ROOT_INDEX.md or domain index
```

---

## Switch Protocol

When the user says "switch", "hand over", "I'm done", or ends a session:

### Step 1: Ask Target

```
"Where would you like to continue?"
  A) ChatGPT Web       → I'll generate a paste-ready handover prompt
  B) Gemini Web         → Same — paste-ready handover
  C) Claude.ai Web      → Same — paste-ready handover
  D) Claude Code CLI    → I'll save files. It reads them automatically.
  E) Codex CLI          → Same — file-based handover
  F) Antigravity        → Same — file-based handover
  G) Other / Undecided  → I'll save files + give you a generic prompt
  H) Done for today     → I'll save everything for next time
```

### Step 2: Save State (always)

```
(1) Write session snapshot → memory/sessions/[date]-[agent].md
(2) Update AGENT.md → Current State block
(3) Update docs/progress.md → task checkboxes
```

### Step 3: Generate Handover

- **Cloud target (A-C):** Generate complete paste-ready handover prompt with Framework Digest, project context, current state, work done, what to do next, and instructions for the cloud AI to output a session snapshot when done.
- **File target (D-F):** Confirm files saved. Provide fallback activation prompt.
- **Done for today (H):** Save state. Show all resume options.

### Step 4: Never End Without Saving

If user tries to close without triggering the switch protocol:
> "Before you go — let me save your session state. Where will you continue next?"

---

## AGENT.md — The Project Brain

After scaffolding, `AGENT.md` is the ONLY file the agent reads at session start. It contains:

```markdown
# [Project Name] — Project Brain
<!-- scaffolded-with: PDF v1.0.0 -->

## Framework Digest
[~500 words: compressed rules from this guide]
[Enough for any agent to follow PDF correctly]

## Current State
- Stage: [N]
- Milestone: M[N] — [name]
- Tasks: [X/Y] complete
- Last Agent: [name]
- Last Session: memory/sessions/[file]
- Blocking: [none / gate / dependency]

## Planning Package Index
| Doc | Read When |
|---|---|
| docs/requirements.md | Before starting any milestone |
| docs/architecture.md | When making structural decisions |
| ... | ... |

## Architecture Summary
[Key decisions — NOT a copy of architecture.md]

## Code Rules
[Stack-specific: file size limits, patterns, conventions]

## Skill Pointers
- Skills Root: [path-to-skills]/ROOT_INDEX.md
- Project Stack Skills: [stack domains, e.g., flutter, dart]
- Pre-loaded (read at scaffold): [key skills for this stack]
- Discovery method: grep_search on ROOT_INDEX.md or domain index

## Index Pointers
- Codebase: docs/project-map.md
- Modules: docs/index/[module].md
- Skills: [path-to-skills]/ROOT_INDEX.md
```

**An agent that reads ONLY AGENT.md can follow PDF correctly.** Every other file is supplementary detail loaded on demand.

---

## Quick Reference: Which Kit, When

| I need to... | Kit | Key file |
|---|---|---|
| Validate an idea | planning-kit | knowledge-base/02-idea-validation.md |
| Plan a project on cloud AI | planning-kit | system-prompt.md + knowledge-base/ |
| Set up a ChatGPT Custom GPT | planning-kit | platform-setup/chatgpt-setup.md |
| Start building in an IDE | building-kit | AGENT.md + activation-prompt-template.md |
| Understand the full system | building-kit | This file (MASTER-GUIDE.md) |
| Add a harness adapter | building-kit | harness-adapters/README.md |
| Find a skill for a task | building-kit | [skills-dir]/ROOT_INDEX.md |
| Create a new skill | building-kit | skill-file-format.md |
| Rebuild skill indexes | building-kit | scripts/generate-skill-index.js |
| Write content for the project | content-creation-kit | guides/content-writer.md |
| Brief an illustrator | content-creation-kit | guides/illustrator.md |
| Check COPPA/GDPR compliance | content-creation-kit | checklists/compliance-review.md |
| Prepare for launch | maintenance-kit | launch-prep/beta-test-plan.md |
| Handle post-launch ops | maintenance-kit | post-launch/monitoring-setup.md |
| Switch to a different platform | building-kit | rules/session-management.md |
| Resume after a long break | building-kit | resume-protocol.md |

---

## Methodology Sources

| Pattern | Source | How We Use It |
|---|---|---|
| Hypothesis → Validate → Go/No-Go | McKinsey | Stage -1: Idea Exploration |
| MECE Decomposition | McKinsey | Each stakeholder analyzed individually |
| Stakeholder Deep-Dive Interviews | Deloitte | Iterative one-at-a-time sessions |
| Walking Skeleton | ThoughtWorks | M1 always = thin end-to-end slice |
| Full Lifecycle (incl. post-launch) | Accenture ADM | Stages 6-7 added |
| Diverge Then Converge | IDEO | Phase 1 diverges → Phase 2 converges |
| RACI-like Role Mapping | Deloitte/Accenture | Stakeholder Map with role assignments |
