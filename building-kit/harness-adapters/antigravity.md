# Antigravity — PDF Harness Adapter

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Agent:** Antigravity (Google DeepMind)
> **Auto-Reads:** Workspace files on demand (no single auto-read file)

---

## Shim File

Antigravity does not auto-read a specific file like `CLAUDE.md` or `AGENTS.md`. Instead, it relies on the **user's first message** or workspace context to orient itself.

**Create both shim files** so the project is compatible with all agents:

**File:** `CLAUDE.md` (project root)
```markdown
Read AGENT.md for all project context, rules, and current state.
```

**File:** `AGENTS.md` (project root)
```markdown
Read AGENT.md for all project context, rules, and current state.
```

For Antigravity specifically, use the **Activation Prompt** below on first use.

---

## Concept Mapping

| PDF Concept | Antigravity Equivalent |
|---|---|
| `AGENT.md` | `view_file` → read AGENT.md on first message |
| Session memory | `memory/sessions/YYYY-MM-DD-antigravity.md` |
| Pre-flight checks | Agent runs checks after reading AGENT.md |
| Drift detection | Self-triggered every 3 tasks |
| Human gate | Agent STOPS, presents gate form inline, waits for user response |
| Milestone boundary | Agent announces, waits for approval |
| Save session | Agent writes snapshot via `write_to_file` + updates AGENT.md |
| Switch protocol | Agent saves state → generates handover based on target |
| Planning docs | `docs/*.md` — read on demand via `view_file` |
| Progress tracking | `docs/progress.md` — updated via file edit tools |
| Terminal commands | `run_command` tool — full shell access |
| File operations | `view_file`, `write_to_file`, `replace_file_content` |
| Git operations | Via `run_command` — full git access |
| Web search | `search_web` tool — available for research tasks |
| Image generation | `generate_image` tool — available for UI assets |
| Browser testing | `browser_subagent` tool — available for visual verification |
| Knowledge Items | Antigravity persistent context — bridges sessions automatically |

---

## Activation Prompt

Paste this into Antigravity on first project setup:

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
1. User pastes activation prompt (first time) or says "continue"
2. Agent reads AGENT.md via view_file
3. Agent reads memory/sessions/[latest].md (if exists)
4. Agent reads docs/progress.md
5. Run pre-flight checks:
   □ Uncommitted changes? → run_command: git status
   □ Tests passing? → run_command: npm test / flutter test
   □ Correct branch? → run_command: git branch --show-current
6. Announce: "Resuming at Stage [N], Milestone [M], Task [T]"
```

### During Session
```
1. Work tasks from current milestone
2. Every 3 tasks → drift check
3. At gates → STOP → present gate form inline → wait for user reply
4. Use browser_subagent for visual verification of UI changes
```

### Session End
```
1. Ask: "Where will you continue next?"
2. Write: memory/sessions/YYYY-MM-DD-antigravity.md (via write_to_file)
3. Update: AGENT.md → Current State block (via replace_file_content)
4. Update: docs/progress.md → checkboxes (via replace_file_content)
5. If cloud target → output paste-ready handover prompt
6. If IDE target → confirm files saved
7. If done for today → save + show all resume options
```

---

## Resume Protocol

| Scenario | What Antigravity Reads | Token Cost |
|---|---|---|
| **Normal resume** | AGENT.md → latest session → progress.md | ~900 tok |
| **After handoff** | AGENT.md → latest 2 sessions → progress.md | ~1,200 tok |
| **Long dormancy** | AGENT.md → last 2 sessions → milestone-plan | ~1,500 tok |
| **Knowledge Items available** | May skip session files if KIs cover context | ~600 tok |

> **Antigravity advantage:** Knowledge Items (KIs) persist across conversations automatically. If the project has been worked on recently, Antigravity may already have context.

---

## Antigravity-Specific Strengths

### Web Search During Building
Unlike other IDE agents, Antigravity has `search_web`. This enables:
- Looking up API documentation mid-task
- Researching error messages and stack traces
- Checking package compatibility and latest versions

### Browser Testing
Antigravity's `browser_subagent` tool can:
- Open locally running dev servers
- Navigate through UI flows
- Take screenshots for verification
- Record browser sessions as video

**PDF recommendation:** Use browser testing after completing UI-related milestones to verify the prototype matches planning docs.

### Image Generation
Antigravity's `generate_image` tool can produce:
- UI mockup iterations
- Asset placeholders for development
- Visual design explorations

### Persistent Context (Knowledge Items)
Antigravity stores curated knowledge across conversations. This means:
- Project patterns and conventions persist without re-explaining
- Common debugging patterns are remembered
- You can say "continue from yesterday" and it may already know the context

---

## Known Limitations & Workarounds

| Limitation | Impact | Workaround |
|---|---|---|
| No auto-read file | Must manually orient each session | Use activation prompt or "continue" |
| Context truncation in long sessions | May lose early conversation context | Session snapshots in memory/ bridge the gap |
| Sequential tool execution | Some operations slower than parallel | Plan file edits to minimize calls |
| Browser tool requires running server | Can't test static files directly | Use `npm run dev` or equivalent first |
| Planning mode may trigger unnecessary plans | Agent may over-plan simple tasks | Say "don't plan, just do it" for trivial changes |
