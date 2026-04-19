# Cloud Handover Prompt Template

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Purpose:** A token-efficient prompt to paste into a new agent session (cloud or local) to transfer context with minimal token usage.
> **When to use:** At the start of a completely new chat when resuming work.

---

## The Handover Package

The incoming agent needs exactly **4 files** to have full context. Nothing else.

### Token Budget for Handover

| File | Tokens | Purpose |
|---|---|---|
| `AGENT.md` | ~500-600 | Architecture, rules, current state, what's next |
| `docs/project-map.md` | ~80-150 | Where everything lives (Tier 0) |
| `docs/progress.md` | ~200-400 | What's done, what's remaining |
| `memory/sessions/[latest-snapshot].md` | ~200-300 | Transition-specific context from the last session |
| **Total** | **~1,000-1,450** | Full context in minimal tokens |

Compare to: pasting all specs, reading all files, explaining the project from scratch — easily **5,000-15,000 tokens**.

---

## Handover Prompt Template

Copy and paste this exact prompt to the **incoming agent** at the start of the first session.

````markdown
I'm switching to you as my coding agent for this project.

Read these 4 files in order:
1. `AGENT.md` — full project context, architecture, and rules (read first!)
2. `docs/project-map.md` — codebase navigation (Tier 0 index)
3. `docs/progress.md` — what's done, what's next
4. `memory/sessions/[latest-snapshot].md` — transition notes from the previous session

After reading, confirm the following before modifying any code:
- Your position (Stage, Milestone, Task)
- What the next 3 tasks are
- Any blockers or open questions from the session notes

Once you confirm, we will continue from where the previous session left off.
````

### Why Only 4 Files?

| What you might think to include | Why you DON'T need it |
|---|---|
| Full phase specs | Already distilled into AGENT.md architecture section |
| All rule files | Agent discovers rules via `.agent-rules/` as needed |
| All Tier 1 indexes | Agent loads on-demand per task from project-map |
| Source code files | Agent navigates via index, reads per-task |

---

## Mid-Milestone Handover (Emergency)

If you must switch agents mid-milestone (agent broken, context exhausted, hardware failure, etc.):

1. **Outgoing agent:** Make sure a session snapshot is saved right now.
2. **Git:** Commit whatever is stable, stash or revert incomplete work.
3. **Incoming agent:** Use the prompt above to read the 4-file package.
4. **Extra step:** Instruct the incoming agent to read the *specific file(s)* being worked on.
5. **Re-anchor:** Explicitly state: _"Continue from [exact task]. The active file is [path]. Read it now."_
