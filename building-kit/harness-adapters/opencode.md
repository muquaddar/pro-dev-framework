# OpenCode — PDF Harness Adapter

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Agent:** OpenCode (open-source AI coding agent)
> **Auto-Reads:** `AGENTS.md` in project root

---

## Shim File

**File:** `AGENTS.md` (project root)

```markdown
Read AGENT.md for all project context, rules, and current state.
```

OpenCode reads `AGENTS.md` automatically when entering a project directory. This file is shared with Codex CLI — both agents use the same shim.

---

## Concept Mapping

| PDF Concept | OpenCode Equivalent |
|---|---|
| `AGENT.md` | Read via `AGENTS.md` shim |
| Session memory | `memory/sessions/YYYY-MM-DD-opencode.md` |
| Pre-flight checks | Run at session start (after reading AGENT.md) |
| Drift detection | Self-triggered every 3 tasks |
| Human gate | Agent STOPS, prints gate form, waits for input |
| Milestone boundary | Agent announces, requests approval |
| Save session | Agent writes snapshot + updates AGENT.md |
| Switch protocol | Agent saves state → generates handover |
| Planning docs | `docs/*.md` — read on demand |
| Progress tracking | `docs/progress.md` — checkboxes updated per task |
| Terminal commands | Native — full shell access |
| File operations | Native — full read/write/create |
| Git operations | Native — full git access |

---

## Activation Prompt

Paste this into OpenCode on first project setup:

````
You are working on a project managed by the Pro Dev Framework (PDF v1.0.0).

1. Read AGENT.md in the project root — this is your project brain.
2. Read the latest session snapshot in memory/sessions/ (if any).
3. Read docs/progress.md to see task status.
4. Announce your position: "Resuming at [Stage/Milestone/Task]"

Rules:
- Follow the Framework Digest in AGENT.md for all building rules.
- Work ONE task at a time from the current milestone.
- Run drift detection every 3 tasks: Am I on-task? Only scoped files? No unapproved deps?
- At human gates: STOP. Print the gate form. Wait for confirmation.
- At session end: Write session snapshot, update AGENT.md Current State, update progress.md.
- Never skip milestone boundaries without human approval.

Begin by reading AGENT.md now.
````

---

## Session Configuration

### Session Start
```
1. Read AGENTS.md → AGENT.md
2. Read memory/sessions/[latest].md (if exists)
3. Read docs/progress.md
4. Run pre-flight checks:
   □ Uncommitted changes? → commit or stash
   □ Tests passing? → fix before new work
   □ Correct branch for milestone?
5. Announce: "Resuming at Stage [N], Milestone [M], Task [T]"
```

### During Session
```
1. Work tasks from current milestone
2. Every 3 tasks → drift check
3. At gates → STOP → present gate form → wait
```

### Session End
```
1. Write: memory/sessions/YYYY-MM-DD-opencode.md
2. Update: AGENT.md → Current State block
3. Update: docs/progress.md → checkboxes
4. Commit changes
5. If switching platforms → generate handover
```

---

## Resume Protocol

| Scenario | What OpenCode Reads | Token Cost |
|---|---|---|
| **Normal resume** | AGENT.md → latest session → progress.md | ~900 tok |
| **After handoff** | AGENT.md → latest 2 sessions → progress.md | ~1,200 tok |
| **Long dormancy** | AGENT.md → last 2 sessions → milestone-plan | ~1,500 tok |

---

## OpenCode-Specific Considerations

### Model Flexibility

OpenCode supports multiple backend models. PDF imposes no model requirement, but:

| Model Tier | Best For | PDF Suitability |
|---|---|---|
| **Large** (Claude 3.5+, GPT-4o) | Architecture, complex refactors | ✅ Recommended for gates, scaffolding |
| **Medium** (GPT-4o-mini, Claude Haiku) | Implementation tasks | ✅ Good for task-level work within milestones |
| **Small** (local models) | Simple edits, formatting | ⚠️ May struggle with drift detection and gate forms |

**PDF recommendation:** Use a large model for M1 (Walking Skeleton) and gate reviews. Switch to a medium model for routine implementation tasks to save cost.

### Open-Source Advantages

- **No vendor lock-in** — aligned with PDF's agent-agnostic philosophy
- **Local model support** — can run entirely offline
- **Extensible** — custom tools and providers can be added
- **Transparent** — all agent behavior is inspectable

### Configuration File

OpenCode uses a config file for project settings. Add PDF-specific context:

```json
{
  "instructions": "Read AGENT.md for all project context. Follow PDF v1.0.0 methodology.",
  "context": ["AGENT.md", "docs/progress.md"]
}
```

This ensures OpenCode loads project context automatically on every session start.

---

## Known Limitations & Workarounds

| Limitation | Impact | Workaround |
|---|---|---|
| No web search | Can't do research tasks | Use cloud AI for research |
| No image generation | Can't produce UI assets | Use planning docs' HTML prototypes |
| Model-dependent quality | Small models may produce poor output | Use large models for critical milestones |
| Limited multi-file coordination | May struggle with large refactors | Break work into smaller, focused tasks |
| Community-driven updates | Feature set may change between versions | Pin to a stable version for project duration |
