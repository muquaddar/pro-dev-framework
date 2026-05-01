# [PROJECT_NAME] — Project Brain

<!-- scaffolded-with: Pro Dev Framework (PDF) v1.0.0 -->
<!-- generated-by: [cloud-platform | ide-agent] -->
<!-- generated-on: [YYYY-MM-DD] -->

<!--
  ┌─────────────────────────────────────────────────────────────┐
  │  THIS FILE IS THE SINGLE SOURCE OF TRUTH FOR THIS PROJECT.  │
  │                                                             │
  │  Every AI agent reads THIS FILE at session start.           │
  │  Every AI agent updates THIS FILE at session end.           │
  │                                                             │
  │  NEVER delete this file. NEVER move it out of the project   │
  │  root. All agents and harness adapters expect it here.      │
  └─────────────────────────────────────────────────────────────┘

  TEMPLATE INSTRUCTIONS (delete this comment block after filling):
  
  - Replace all [BRACKETED_PLACEHOLDERS] with real values.
  - The Framework Digest below is pre-written. Do NOT modify it
    unless the PDF version changes.
  - The Planning Package Checklist is used by IDE agents on first
    activation to validate that all planning docs exist.
  - The Current State block is updated by every agent at every
    session end. It must remain machine-parseable.
-->

---

## Framework Digest

<!-- 
  This digest is a compressed version of MASTER-GUIDE.md.
  It contains enough rules for ANY agent to follow PDF correctly
  without reading the full guide. ~500 words.
  
  DO NOT MODIFY unless the framework version changes.
-->

### Pro Dev Framework (PDF) v1.0.0 — Compressed Rules

**Architecture.** The framework uses 5 kits: Planning Kit (cloud AI, Stages -1 to 2), Building Kit (IDE agents, Stages 3-5), Content Creation Kit (parallel to building), Maintenance Kit (Stages 6-7), and Update Kit (future). Planning produces a Planning Package (15+ docs). Building consumes it via this file.

**Stages.** (1) Idea Validation: hypothesis → validate → Go/No-Go. (2) Environment: tier + stack selection. (3) Stakeholder Discovery: identify all roles, deep-dive each one atomically, create work streams. (4) Interactive Planning: 7 phases (Discovery, Strategy, UX, UI, Architecture, Security, PRD Synthesis) each with propose → review → refine → confirm loop. (5) Scaffold: Walking Skeleton = M1, always. (6) Build: milestone by milestone, max 2 days each. (7) Verify: tests, review, scorecard. (8) Launch Prep + Post-Launch: maintenance-kit handles these.

**Tiers.** Lite: 2-3 milestones, 1 gate, skip content kit. Standard: 4-8 milestones, 4 gates, TDD 60%. Enterprise: 8-15 milestones, all 7 gates, TDD 80%.

**Gates (STOP and present form).** Go/No-Go (after idea validation). Gate 1 (architecture approval, before any code). Gate 2 (milestone start). Gate 3 (security-sensitive code). Gate 4 (milestone acceptance). Gate 5 (pre-release). Gate 6 (launch readiness, Enterprise). Gate 7 (continue/sunset, Enterprise quarterly).

**Reading Rules.** Read ONLY this file at session start (~600 tokens). Load other docs on-demand. Use the 3-tier codebase index: project-map → module index → symbol index → actual file. Max 5 files and 800 lines per task unless human approves more. Never read MASTER-GUIDE.md again — this digest has all you need.

**Build Rules.** Max 500 lines per file. No circular imports. All endpoints tested. No un-approved dependencies. Drift check every 3 tasks: on-task? in-scope? no rogue deps? not over-engineering? If ANY fails → STOP → tell human.

**Session Rules.** At session START: read this file → read latest session snapshot → read progress.md → announce position. At session END: write session snapshot → update Current State below → update progress.md → if switching platforms, run Switch Protocol (ask target → save state → generate handover).

**Hook Rules.** This project may have hooks wired (see "Active Hooks" section below). If so, the matching script runs automatically (Layer 1 on Claude Code) or you MUST run it in-turn (Layer 2 on every other agent) at the trigger. Hook scripts are pure Node, no deps, no network, exit 0 on non-fatal errors — they never block you. Skipping a Layer 2 hook is the same as skipping the discipline it automates.

**Skills.** Check Skill Pointers below for the skills directory. Discovery: ROOT_INDEX → domain index → specific skill. Never read all skills. Search only when encountering unfamiliar tech or stuck on a pattern. Capture new skills during development via knowledge-capture-template.

**Work Streams.** Code isn't the only stream. Check cross-stream dependencies before starting any milestone. Content and Asset streams run in parallel. Use docs/work-streams.md for status.

**For deeper reference.** If you need full methodology on any topic, search MASTER-GUIDE.md for the section header listed in its Section Directory. Do NOT read the entire file.

---

## Current State

<!--
  This block is updated by EVERY agent at EVERY session end.
  It must remain machine-parseable. Keep the exact format below.

  The block between HOOK:CURRENT-STATE markers is rewritten by
  hooks/scripts/capture-session-state.js — do not hand-edit
  fields inside the markers; edit fields outside them.
-->

- **Stage:** [N] — [STAGE_NAME]
- **Milestone:** M[N] — [MILESTONE_NAME]
- **Tasks:** [X/Y] complete
- **Tier:** [Lite | Standard | Enterprise]
- **Blocking:** [none | gate-N | dependency-description]
- **Work Streams:**
  - CODE: M[N] — [X/Y] tasks
  - CONTENT: C[N] — [status]
  - ASSET: A[N] — [status]
  - LEGAL: L[N] — [status]

<!-- HOOK:CURRENT-STATE:START -->
- **Last Agent:** [agent-name]
- **Last Session:** [memory/sessions/YYYY-MM-DD-agent.md]
- **Last Updated:** [YYYY-MM-DDTHH:MM:SSZ]
<!-- HOOK:CURRENT-STATE:END -->

---

## Project Summary

<!--
  Filled during planning. 2-3 paragraphs max.
  From: Stage -1 (Idea Validation) + Stage 0 (Environment Setup)
-->

**Name:** [PROJECT_NAME]
**One-liner:** [One sentence describing what this project does]
**Target Audience:** [Who is this for?]
**Primary Goal:** [The single most important outcome]
**Tier:** [Lite | Standard | Enterprise]
**Stack:** [e.g., Flutter + Firebase + Supabase]

[2-3 paragraph summary of the project: what it does, why it exists, what makes it unique. Written during Idea Validation.]

---

## Planning Package Index

<!--
  The IDE agent reads this table to know WHICH planning docs exist
  and WHEN to read them. Docs are loaded on-demand, not all at once.
  
  After cloud planning, every row should have a real file path.
  The Validation Checklist below confirms they all exist.
-->

| Doc | Path | Read When |
|---|---|---|
| Idea Validation | `docs/idea-validation-brief.md` | If questioning project direction |
| Feasibility | `docs/feasibility-assessment.md` | If questioning technical viability |
| Competitive Matrix | `docs/competitive-matrix.md` | If analyzing competitors (Standard+) |
| Stakeholder Map | `docs/stakeholder-map.md` | When adding features affecting non-dev roles |
| Stakeholder Briefs | `docs/stakeholders/[name].md` | When working on that stakeholder's needs |
| Work Streams | `docs/work-streams.md` | When checking cross-stream dependencies |
| Requirements | `docs/requirements.md` | Before starting any milestone |
| Strategy | `docs/strategy.md` | If questioning tech stack or approach |
| Milestone Plan | `docs/milestone-plan.md` | Before each milestone (Gate 2) |
| UX Flows | `docs/ux-flows.md` | When implementing screens (Standard+) |
| UI Design Brief | `docs/ui-design-brief.md` | When implementing visuals (Standard+) |
| Architecture | `docs/architecture.md` | When making structural decisions |
| Walking Skeleton | `docs/walking-skeleton-spec.md` | For Milestone M1 ONLY |
| Compliance | `docs/compliance-checklist.md` | Before Stage 6 (Launch) |

---

## Planning Package Validation Checklist

<!--
  The IDE agent runs this checklist on FIRST ACTIVATION.
  It checks that each required file exists before starting Stage 3.
  
  Mark files as N/A if they don't apply to this project's tier.
  The agent should report any missing files and refuse to proceed
  until the package is complete (or human explicitly overrides).
-->

```
Required (All Tiers):
- [ ] docs/idea-validation-brief.md
- [ ] docs/stakeholder-map.md
- [ ] docs/work-streams.md
- [ ] docs/requirements.md
- [ ] docs/strategy.md
- [ ] docs/milestone-plan.md
- [ ] docs/architecture.md
- [ ] docs/walking-skeleton-spec.md

Required (Standard + Enterprise):
- [ ] docs/ux-flows.md
- [ ] docs/compliance-checklist.md

Optional:
- [ ] docs/feasibility-assessment.md
- [ ] docs/competitive-matrix.md
- [ ] docs/ui-design-brief.md

Shims (at least one for your agent):
- [ ] CLAUDE.md (for Claude Code)
- [ ] AGENTS.md (for Codex / OpenAI agents)
- [ ] .gemini/settings.json or AGENT.md in root (for Antigravity)

Hooks (Stage 3.5 — wired before Stage 4 starts):
- [ ] Layer 2 instructions present in this file's "Active Hooks" section
- [ ] Layer 3 git hooks installed (.git/hooks/pre-commit, post-commit)
- [ ] Layer 1 settings.json hooks (Claude Code only — optional)
- [ ] Verified end-to-end (session-start.js → capture-session-state.js produces snapshot)
```

---

## Architecture Summary

<!--
  Key architectural decisions ONLY. Do NOT duplicate architecture.md.
  3-5 bullet points covering the most important patterns.
  Agent reads this for quick orientation; reads architecture.md for depth.
-->

- **Pattern:** [e.g., Feature-first folder structure]
- **State Management:** [e.g., Riverpod for Flutter / Zustand for React]
- **Data Layer:** [e.g., Supabase with offline-first sync]
- **API Style:** [e.g., REST with typed client / GraphQL / tRPC]
- **Key Constraint:** [e.g., Must work offline, max 5MB initial bundle]

---

## Code Rules

<!--
  Stack-specific conventions pulled from Phase 2 (Strategy).
  These are enforced during every build task.
-->

- **Max file size:** 500 lines (split into modules if exceeded)
- **Naming convention:** [e.g., snake_case for files, PascalCase for classes]
- **Import style:** [e.g., absolute imports only, barrel files for public API]
- **Test convention:** [e.g., co-located __tests__/ or test/ mirror]
- **Error handling:** [e.g., Result type pattern, never throw raw exceptions]
- **Logging:** [e.g., structured JSON logs via winston/pino]
- **Formatting:** [e.g., Prettier with project .prettierrc]
- **Linting:** [e.g., ESLint strict + custom rules in .eslintrc]

---

## Skill Pointers

<!--
  Points agents to the skill library for on-demand technique loading.
  Filled during scaffolding based on the project's tech stack.
-->

- **Skills Root:** [path-to-skills]/ROOT_INDEX.md
- **Project Stack Domains:** [e.g., flutter, dart, firebase]
- **Pre-loaded Skills (read at scaffold):**
  - [e.g., riverpod-patterns.md — state management]
  - [e.g., go-router.md — navigation]
- **Discovery Method:** Search ROOT_INDEX.md for domain → read domain index → read specific skill
- **Capture New Skills:** Use `memory/knowledge-capture-template.md` when discovering reusable patterns

---

## Index Pointers

<!--
  Where to find the codebase indexes.
  Created during Stage 3 (Scaffold) and updated as code grows.
-->

- **Project Map (Tier 0):** `docs/project-map.md` — read FIRST before any code
- **Module Indexes (Tier 1):** `docs/index/[module-name].md` — read for target module only
- **Symbol Indexes (Tier 2):** `docs/index/symbols/[file-name].md` — read for target file only
- **Skill Indexes:** See Skill Pointers above

---

## Milestone Overview

<!--
  Summary table from milestone-plan.md. NOT the full plan.
  Gives the agent a quick view of scope and progress.
  Updated as milestones complete.
-->

| Milestone | Name | Effort | Status | Stream Deps |
|---|---|---|---|---|
| M1 | Walking Skeleton | 1 day | ⬜ Not started | None |
| M2 | [NAME] | [EFFORT] | ⬜ Not started | [DEPS] |
| M3 | [NAME] | [EFFORT] | ⬜ Not started | [DEPS] |
| M4 | [NAME] | [EFFORT] | ⬜ Not started | [DEPS] |

---

## Session History

<!--
  Pointer to session snapshots. Agents read the LATEST one at session start.
  This list is updated automatically at session end.
-->

| Date | Agent | Stage | Milestone | Snapshot |
|---|---|---|---|---|
| [YYYY-MM-DD] | [Agent] | [N] | M[N] | `memory/sessions/[file].md` |

---

## Framework Reference

<!--
  Where to find the framework files if the agent needs deeper context.
  Normally the Framework Digest above is sufficient.
-->

- **Framework Location:** [path-to-pro-dev-framework/]
- **MASTER-GUIDE:** [path]/building-kit/MASTER-GUIDE.md (search by section header, never read fully)
- **Gates:** [path]/building-kit/gates/GATE-0N.md
- **Rules:** [path]/building-kit/rules/[rule-name].md
- **Phase Prompts:** [path]/building-kit/phase-prompts/phase-0N.md (for IDE-based planning only)
- **Content Kit:** [path]/content-creation-kit/
- **Maintenance Kit:** [path]/maintenance-kit/

---

## Active Hooks

<!--
  Wired during Stage 3.5 (see building-kit/hook-setup-guide.md).
  Lists every hook active on this project so agents and humans both
  know what fires automatically.

  Pick the tier preset that matches Project Tier above:
  - Lite      → 3 hooks  (session-start, session-end, per-edit)
  - Standard  → 8 hooks  (+ drift, doc-validate, gate, pre/post-commit)
  - Enterprise→ 12+ hooks (+ security-edit, cron drift, milestone-tag, Gate 7)

  The script names below stay the same regardless of agent. Only the
  invocation channel (Layer 1/2/3) varies. Agents on Layer 2 MUST run
  the script in-turn at the matching trigger; on Layer 1 (Claude Code)
  the harness fires it for you.
-->

| Layer | Trigger | Script | Notes |
|---|---|---|---|
| 1 | SessionStart | `hooks/scripts/session-start.js` | Claude Code only |
| 1 | Stop | `hooks/scripts/capture-session-state.js` | Claude Code only |
| 1 | PostToolUse Edit\|Write | `hooks/scripts/update-progress.js` | Claude Code only |
| 1 | PostToolUse Edit\|Write (every 3) | `hooks/scripts/check-drift.js --threshold 3` | Claude Code only — Standard+ |
| 2 | First user prompt of session | `hooks/scripts/session-start.js` | All other agents |
| 2 | After every Edit/Write | `hooks/scripts/update-progress.js --file <path>` | All other agents |
| 2 | Every 3 edits | `hooks/scripts/check-drift.js --threshold 3` | All other agents — Standard+ |
| 2 | After Edit/Write on docs/*.md | `hooks/scripts/validate-doc.js --file <path>` | All agents — Standard+ |
| 2 | Reaching any gate (2/3/4/5) | `hooks/scripts/gate-check.js --gate N` | All agents — Standard+ |
| 2 | Editing auth/crypto/secret files | `hooks/scripts/gate-check.js --gate 3 --scan` | All agents — Enterprise |
| 2 | Session end (switch / done) | `hooks/scripts/capture-session-state.js` | All other agents |
| 3 | git pre-commit | `hooks/git-hooks/pre-commit` | All agents — Standard+ |
| 3 | git post-commit | `hooks/git-hooks/post-commit` | All agents — Standard+ |
| 3 | cron every 30 min | `hooks/scripts/check-drift.js --interval` | All agents — Enterprise |

**Disable temporarily** (debugging only):
- Layer 1: `mv .claude/settings.json .claude/settings.json.disabled`
- Layer 2: remove this section from AGENT.md
- Layer 3: `chmod -x .git/hooks/pre-commit .git/hooks/post-commit`

**Hook log:** `memory/hooks.log` (one JSON line per fire)
**Setup guide:** `[path-to-pro-dev-framework]/building-kit/hook-setup-guide.md`
**Per-hook detail:** `[path-to-pro-dev-framework]/building-kit/hooks/instructions/`

---

## Harness Adapter Shims

<!--
  Copy the appropriate shim file to your PROJECT ROOT so the agent
  finds AGENT.md automatically. Each shim is short but includes:
  
  1. Directive to read AGENT.md
  2. Framework location (for gates, rules, phase-prompts)
  3. Skills location (for on-demand skill loading)
  4. Agent-specific instructions
  5. Reference to full harness adapter for detailed mappings
  
  Pick ONE based on your IDE agent. Delete the others.
-->

### CLAUDE.md (for Claude Code CLI)

```markdown
# Project Instructions

Read `AGENT.md` in this directory — it is the project brain containing all context, rules, and state.

## Locations
- **Framework:** [path-to-pro-dev-framework]/building-kit/
- **Skills:** [path-to-skills]/ROOT_INDEX.md
- **Adapter:** [path-to-pro-dev-framework]/building-kit/harness-adapters/claude-code.md

## Claude Code Specifics
- Use `TodoRead` / `TodoWrite` for session memory when available
- Use `WebFetch` for documentation lookups when available
- Prefer `grep_search` over full file reads for large files
- On session end: always run the Switch Protocol from AGENT.md Framework Digest
```

### AGENTS.md (for Codex / OpenAI agents)

```markdown
# Project Instructions

Read `AGENT.md` in this directory — it is the project brain containing all context, rules, and state.

## Locations
- **Framework:** [path-to-pro-dev-framework]/building-kit/
- **Skills:** [path-to-skills]/ROOT_INDEX.md
- **Adapter:** [path-to-pro-dev-framework]/building-kit/harness-adapters/codex.md

## Codex Specifics
- Prefer sandbox execution for testing code changes
- Use `apply_patch` for multi-file edits
- On session end: always run the Switch Protocol from AGENT.md Framework Digest
```

### .gemini/settings.json (for Antigravity)

```json
{
  "agentFile": "AGENT.md"
}
```

Antigravity reads `AGENT.md` natively — no separate shim file needed. The Framework Reference section inside AGENT.md provides all paths. For agent-specific patterns, see: `[path-to-pro-dev-framework]/building-kit/harness-adapters/antigravity.md`

### .opencode (for OpenCode)

```markdown
Read `AGENT.md` in this directory — it is the project brain containing all context, rules, and state.

Framework: [path-to-pro-dev-framework]/building-kit/
Skills: [path-to-skills]/ROOT_INDEX.md
Adapter: [path-to-pro-dev-framework]/building-kit/harness-adapters/opencode.md
```
