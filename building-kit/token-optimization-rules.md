# Token Optimization Rules

> **Version:** PDF v2.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Utility
> **Purpose:** These rules apply to EVERY session regardless of IDE agent. Reference in `AGENT.md` under Token Rules.
> **What's new in v2.0.0:** Hot Zone Scratchpad, Atomic Fragment Retrieval, Model Routing, Haiku Preprocessing, ADR-to-Skill Autoloop, Cross-Project Shadow Knowledge.

---

## The Tiered Index Strategy

### How It Works

```text
┌─ ALWAYS ──────────────────────────────────────────────┐
│  docs/project-map.md (Tier 0)         ~80 tokens      │
│  → Which domains exist? What's active?                 │
└───────────────────┬───────────────────────────────────┘
                    │ Need file details?
┌─ ON DEMAND ───────▼───────────────────────────────────┐
│  docs/index/[domain].md (Tier 1)      ~200-300 tokens  │
│  → File table, volatility, mini-interface              │
└───────────────────┬───────────────────────────────────┘
                    │ Need full signatures?
┌─ ONLY WHEN WRITING ▼─────────────────────────────────┐
│  docs/index/symbols/[domain].md (Tier 2)  ~150 tokens  │
│  → Full parameter-level signatures                     │
└───────────────────────────────────────────────────────┘
```

### Agent Rules
1. **ALWAYS** check Tier 0 (`docs/project-map.md`) before reading ANY source file.
2. If you need file-level detail → load Tier 1 (`docs/index/[domain].md`).
3. If you need function signatures → load Tier 2 (`docs/index/symbols/[domain].md`).
4. **NEVER** scan directories or read folders blindly.
5. Read ONLY the 1-3 files needed for the current task.

### Task Lenses (Shortcuts)
Before drilling into domain indexes, check if a pre-computed lens exists:
- `docs/lenses/api-endpoint.md` — routes + services + models for API work.
- `docs/lenses/new-screen.md` — pages + components + hooks for UI work.
- `docs/lenses/auth-flow.md` — auth + middleware + sessions.
- `docs/lenses/data-change.md` — models + migrations + seed.

---

## File Reading Budget Per Task

| Task Type | Max Files | Strategy |
|---|---|---|
| Fix a bug | 1-3 | Error file + direct imports |
| Add endpoint | 2-4 | Similar endpoint + model + service |
| Add page/screen | 2-4 | Similar page + API client + hooks |
| Add component | 1-2 | Similar component + types |
| Refactor | 3-5 | Files being refactored only |
| New feature (full stack) | 4-6 | One similar feature as reference |

**If you need to read more than 6 files for a single task, STOP and trigger drift-detection.**

---

## Reading Strategy by File Size

| File Size | Action |
|---|---|
| < 100 lines | Read fully — cheap |
| 100-300 lines | Read fully — acceptable |
| 300-500 lines | Read ONLY if primary file for the task. Otherwise ask which section. |
| > 500 lines | **FILE VIOLATION.** Flag it. Must be split before proceeding. |

---

## Token Budget Comparison

| Scenario (50-file project) | Old flat index | Tiered index |
|---|---|---|
| Session start | 1,200 tokens | 80 tokens |
| Implement auth feature | 2,700 tokens | 430 tokens |
| Know a function signature | ~1,500 (read file) | ~150 (Tier 2) |
| Task with lens available | 2,700 tokens | ~300 tokens |

---

## Context Window Management

| When | Action |
|---|---|
| 45+ minutes into session | Compact/summarize via Switch Protocol |
| After compact | Re-read ONLY the active working file |
| Switching feature areas | Clear + restart session |
| Lost context | Re-read AGENT.md + project-map.md |

---

## Conversation Efficiency

- Don't repeat back code the human just showed you.
- Don't explain what you're about to do — just do it (unless approach is non-obvious).
- When showing changes, show only changed functions, not entire files (or use a patch).
- Suggest compact/summarize when context grows heavy.

---

## v2.0.0 — Advanced Token Strategies

### Strategy 1: Hot Zone Scratchpad (`.claude-state.md`)

Every project MUST maintain a `.claude-state.md` at its root (alongside `CLAUDE.md`). This is a **living file** — update it at the end of each session via the Switch Protocol.

**Session Start (Revised Protocol):**
1. Read `AGENT.md` (always).
2. Read `.claude-state.md` (replaces reading 3–4 individual rule files).
3. Read `docs/project-map.md` (Tier 0) **only if Hot Zones in step 2 are insufficient**.
4. Confirm position.

**Reading Strategy by Zone:**

| Zone | Definition | Action |
|---|---|---|
| Hot | Listed in `.claude-state.md` Hot Zones | Read fully — these are the active files |
| Warm | Tier 1 index shows ACTIVE volatility | Read Tier 1 index, then file if needed |
| Cold | Not touched in 3+ milestones | **Never read source.** Use Tier 2 signature only |
| Dead | `.claude-state.md` Cold Archive list | Skip entirely. Treat as external library |

Bootstrap: run `node pro-dev-framework/building-kit/scripts/generate-project-state.js` once per project to create `.claude-state.md`.

---

### Strategy 2: Atomic Fragment Retrieval

The Tier 2 symbol index now includes **line ranges** for every exported symbol (generated by `generate-codebase-index.js` v2.0.0).

**How to use it:**

Instead of reading a whole file, read only the fragment needed:
```
Tier 2 shows:
  saveImage [L24–L67]
  
Agent action:
  Read lib/features/camera/services/storage_service.dart lines 24–67
  (145-line file → 43 lines read = 70% token reduction)
```

**Rule:** For files >200 lines, ALWAYS use line-range reads unless you are refactoring the entire file.

Ghost Stubs: when reading a fragment, the 5 lines above and below are "ghost context." Request `lines (start-5)–(end+5)` for the first read of any fragment.

---

### Strategy 3: Model Routing by Task Complexity

Route tasks to the cheapest model that can solve them.

| Task Type | Model | Reason |
|---|---|---|
| Code discovery, grep, "where is X?" | Haiku | Pure lookup, no reasoning needed |
| Read a file, summarize a module | Haiku | Compression task |
| Fix a bug, add a function | Sonnet | Implementation requires reasoning |
| Multi-file refactor, architecture decision | Sonnet/Opus | Cross-file coherence needed |
| Novel design, security review, Gate decisions | Opus | Highest-stakes judgement |

**In Claude Code:** Use `/model` to switch. Develop a habit of switching to Haiku for exploration, back to Sonnet before writing.

---

### Strategy 4: Haiku Preprocessing (Semantic Compression)

For large files outside your Hot Zone that you need a summary of, use a Haiku pass first.

**Trigger:** You need context from a file >300 lines that is NOT in your Hot Zone.

**Protocol:**
1. Tell the agent: "Give me a 5-line summary of `[file]` — purpose, key classes, key methods, known gotchas."
2. Agent reads file with Haiku, outputs summary.
3. Main task continues with the 5-line summary instead of the full file.

**Token math:** 400-line file ≈ 3,200 tokens. 5-line Haiku summary ≈ 80 tokens. **96% reduction** for background context.

---

### Strategy 5: ADR-to-Skill Autoloop

When a Human Gate approves a significant pattern or architectural decision, that knowledge should **automatically** flow into the agency's skill library.

**Protocol:**
1. Add `#teach` tag to any ADR entry in `docs/adr-log.md` that represents a reusable pattern.
2. Run `node pro-dev-framework/building-kit/scripts/adr-to-skill.js` from the project root.
3. Script generates a skill stub in `WorkspaceAddOn/agency-knowledge/` — review and finalize.
4. Skill is now available to ALL future projects.

**What qualifies for `#teach`:**
- A platform-specific workaround (e.g., "GPS PRIORITY_HIGH_ACCURACY on Android")
- A constraint that surprised the team (e.g., "sqflite requires manual migration versioning")
- A decision that rejected common alternatives (the rejected alternatives are the lesson)

---

### Strategy 6: Cross-Project Shadow Knowledge

Before starting a new feature, check whether the agency already solved it.

**Protocol:**
1. Check `WorkspaceAddOn/pro-dev-framework/building-kit/agency-knowledge/_index.md`.
2. If a relevant entry exists, inject it as context — don't re-discover.
3. After solving a novel problem, run ADR-to-Skill to add it.

**Rule:** Reading the agency knowledge index (~200 tokens) MUST happen before searching for how to implement any feature you haven't built in this project before.

---

### v2.0.0 Token Budget (Updated)

| Scenario (50-file Flutter project) | v1.0.0 | v2.0.0 | Reduction |
|---|---|---|---|
| Session start | 1,200 tokens | 300 tokens | **75%** |
| Implement feature (known pattern) | 2,700 tokens | 400 tokens | **85%** |
| Implement feature (novel) | 2,700 tokens | 700 tokens | **74%** |
| Read a large background file | 3,200 tokens | 80 tokens | **97%** |
| Cross-project pattern reuse | 15,000 tokens | 200 tokens | **99%** |
