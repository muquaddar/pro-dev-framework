# Claude Code — PDF Harness Adapter

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Agent:** Claude Code (Anthropic CLI)
> **Auto-Reads:** `CLAUDE.md` in project root

---

## Shim File

**File:** `CLAUDE.md` (project root)

```markdown
Read AGENT.md for all project context, rules, and current state.
```

Claude Code automatically reads `CLAUDE.md` when entering a project directory. This one-liner redirects it to the universal project brain.

---

## Concept Mapping

| PDF Concept | Claude Code Equivalent |
|---|---|
| `AGENT.md` | Read via `CLAUDE.md` shim → `cat AGENT.md` |
| Session memory | `memory/sessions/YYYY-MM-DD-claude-code.md` |
| Pre-flight checks | Run at session start (after reading AGENT.md) |
| Drift detection | Self-triggered every 3 tasks or 30 min |
| Human gate | Agent STOPS, prints gate form, waits for `/confirm` |
| Milestone boundary | Agent announces, waits for `/start M[N]` |
| Save session | Agent writes snapshot + updates AGENT.md Current State |
| Switch protocol | Agent asks target → saves state → generates handover |
| Planning docs | `docs/*.md` — read on demand per task |
| Progress tracking | `docs/progress.md` — checkboxes updated per task |
| ADR logging | `memory/adr-template.md` → `docs/adr-log.md` |
| Skill lookup | Search `WorkspaceAddOn/` skill index by domain tag |
| Terminal commands | Native — full shell access |
| File operations | Native — full read/write/create |
| Git operations | Native — full git access |

---

## Activation Prompt

Paste this into Claude Code on first project setup:

````
You are working on a project managed by the Pro Dev Framework (PDF v1.0.0).

1. Read AGENT.md in the project root — this is your project brain.
2. Read the latest session snapshot in memory/sessions/ (if any).
3. Read docs/progress.md to see task status.
4. Announce your position: "Resuming at [Stage/Milestone/Task]"

Rules:
- Follow the Framework Digest in AGENT.md for all building rules.
- Work ONE task at a time from the current milestone.
- Run drift detection every 3 tasks: Am I on-task? Modifying only scoped files? No unapproved deps?
- At human gates: STOP. Print the gate form. Wait for confirmation.
- At session end: Write session snapshot, update AGENT.md Current State, update progress.md.
- Never skip milestone boundaries without human approval.

Begin by reading AGENT.md now.
````

---

## Session Configuration

### Session Start
```
1. Read CLAUDE.md → AGENT.md
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
2. Every 3 tasks → drift check:
   □ On approved task list?
   □ Only modifying scoped files?
   □ No unapproved dependencies?
   □ Not over-engineering?
   → If ANY fails → STOP → report to human
3. At gates → STOP → present gate form → wait
```

### Session End
```
1. Ask: "Where will you continue next?"
2. Write: memory/sessions/YYYY-MM-DD-claude-code.md
3. Update: AGENT.md → Current State block
4. Update: docs/progress.md → checkboxes
5. If cloud target → generate paste-ready handover
6. If IDE target → confirm files saved
7. If done for today → save + show resume options
```

---

## Resume Protocol

| Scenario | What Claude Code Reads | Token Cost |
|---|---|---|
| **Normal resume** | AGENT.md → latest session → progress.md | ~900 tok |
| **After handoff from another agent** | AGENT.md → latest 2 sessions → progress.md | ~1,200 tok |
| **After long dormancy (>2 weeks)** | AGENT.md → last 2 sessions → stakeholder-map → milestone-plan | ~1,500 tok |

---

## Known Limitations & Workarounds

| Limitation | Impact | Workaround |
|---|---|---|
| No web search | Can't do Phase 1 research in IDE | Use cloud AI for planning (recommended path) |
| No image generation | Can't produce UI mockups | Use the HTML prototypes from planning docs |
| Context resets between sessions | Loses conversation history | Session snapshots in `memory/sessions/` bridge the gap |
| No built-in timer | Can't auto-trigger 30 min drift check | Agent self-counts tasks (every 3) |
| Rate limits on long sessions | May get throttled | Break work into focused 1-2 hour sessions |

---

## Claude Code-Specific Best Practices

1. **Use `/` commands sparingly** — Claude Code supports slash commands but PDF methodology doesn't require them
2. **Commit frequently** — Claude Code has native git; commit after each task completion
3. **Use `TodoWrite` for progress** — Map to `docs/progress.md` updates
4. **Leverage multi-file edits** — Claude Code excels at coordinated changes across files
5. **Trust the AGENT.md** — Don't re-read MASTER-GUIDE.md after scaffolding; AGENT.md has everything needed
