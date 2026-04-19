# Token Optimization Rules

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Utility
> **Purpose:** These rules apply to EVERY session regardless of IDE agent. Reference in `AGENT.md` under Token Rules.

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
