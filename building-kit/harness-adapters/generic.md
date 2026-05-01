# Generic Agent — PDF Harness Adapter

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Agent:** Any AI agent with file access and terminal
> **Auto-Reads:** Varies — see setup below

---

## When to Use This Adapter

Use this generic adapter when:
- Your agent is not listed (Claude Code, Codex, Antigravity, OpenCode)
- You're using a new or experimental AI coding agent
- You're using a self-hosted or custom agent setup
- You want a minimal, universal starting point

**Minimum requirements:** The agent must be able to:
1. ✅ Read files from the filesystem
2. ✅ Write/create files
3. ✅ Run terminal commands
4. Optional: Git operations (recommended but not required)

---

## Shim Files

Create **both** shim files to maximize compatibility:

**File:** `CLAUDE.md` (project root)
```markdown
Read AGENT.md for all project context, rules, and current state.
```

**File:** `AGENTS.md` (project root)
```markdown
Read AGENT.md for all project context, rules, and current state.
```

If your agent auto-reads a different file (e.g., `.agent`, `RULES.md`, `.cursorrules`), create a shim with that name too:

```markdown
Read AGENT.md for all project context, rules, and current state.
```

---

## Concept Mapping

| PDF Concept | Generic Implementation |
|---|---|
| `AGENT.md` | Read manually or via shim at session start |
| Session memory | `memory/sessions/YYYY-MM-DD-[agent-name].md` |
| Pre-flight checks | Agent reads and runs checklist manually |
| Drift detection | Agent self-checks every 3 tasks |
| Human gate | Agent STOPS, presents gate criteria, waits |
| Milestone boundary | Agent announces, waits for approval |
| Save session | Agent creates snapshot file + edits AGENT.md |
| Switch protocol | Agent saves state → outputs handover text |
| Planning docs | `docs/*.md` — read on demand |
| Progress tracking | `docs/progress.md` — edit checkboxes |
| Terminal commands | Use agent's command execution capability |
| File operations | Use agent's file read/write capability |
| Git operations | Via terminal if supported |

---

## Activation Prompt

Paste this into any agent on first project setup:

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

This prompt is **universal** — it works with any agent that can read files. The agent self-orients from AGENT.md.

---

## Session Configuration

### Session Start
```
1. Agent reads AGENT.md (via shim or manual instruction)
2. Agent reads memory/sessions/[latest].md (if exists)
3. Agent reads docs/progress.md
4. Pre-flight:
   □ Uncommitted changes? → commit or stash
   □ Tests passing? → fix before new work
   □ Correct branch?
5. Announce position
```

### During Session
```
1. Work ONE task at a time
2. Every 3 tasks → drift check
3. At gates → STOP → present gate → wait
```

### Session End
```
1. Write: memory/sessions/YYYY-MM-DD-[agent-name].md
2. Update: AGENT.md → Current State
3. Update: docs/progress.md
4. If the agent cannot write files:
   → Output the session snapshot as a markdown code block
   → Tell the user to save it manually
```

---

## Resume Protocol

| Scenario | What to Read | Token Cost |
|---|---|---|
| **Normal resume** | AGENT.md → latest session → progress.md | ~900 tok |
| **After handoff** | AGENT.md → latest 2 sessions → progress.md | ~1,200 tok |
| **Long dormancy** | AGENT.md → last 2 sessions → milestone-plan | ~1,500 tok |

---

## Adapting for Specific Agents

### If Your Agent Has a Config File

Many agents support project-level configuration (`.cursor/rules`, `.windsurfrules`, etc.). Add:

```
Read AGENT.md at the start of every session for project context,
coding rules, and current state. Follow the Pro Dev Framework
(PDF v1.0.0) methodology described within.
```

### If Your Agent Has No File Access

If the agent is chat-only (no filesystem):
1. Copy the contents of AGENT.md
2. Paste into the conversation as context
3. The agent operates from the pasted context
4. At session end, the agent outputs a session snapshot as text
5. You manually save it to `memory/sessions/`

### If Your Agent Has No Terminal Access

Some agents can read/write files but cannot run commands:
- Skip pre-flight checks that require terminal (git status, test runs)
- Manually run tests and report results to the agent
- Agent focuses on file creation and editing only

---

## Creating a Custom Adapter

If you use an agent frequently, promote this generic adapter to a dedicated one:

1. Copy this file as `[agent-name].md`
2. Replace the concept mapping table with agent-specific equivalents
3. Document any auto-read behavior (which file the agent looks for)
4. Add agent-specific best practices and limitations
5. Submit a PR to include it in the framework

### Adapter Template

```markdown
# [Agent Name] — PDF Harness Adapter

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Agent:** [Agent Name] ([Vendor])
> **Auto-Reads:** [file or "none"]

## Shim File
[What file to create and where]

## Concept Mapping
| PDF Concept | [Agent] Equivalent |
|---|---|

## Activation Prompt
[Copy-paste prompt]

## Session Configuration
[Start / during / end]

## Resume Protocol
[Table]

## Known Limitations & Workarounds
[Table]
```

---

## Known Limitations (Generic)

| Limitation | Impact | Workaround |
|---|---|---|
| No auto-read file | Must manually orient each session | Use activation prompt every time |
| Unknown capabilities | Can't predict what the agent supports | Test each PDF concept individually |
| No session persistence | Agent forgets between sessions | Session snapshots are critical — never skip |
| Variable output quality | Depends entirely on the agent's model | Use large models for gates and architecture |
| **Unknown hook surface** | **Cannot assume Layer 1 script hooks** | **Default to Layer 2 + Layer 3. See "Hooks" below.** |

---

## Hooks — Layer 2 + Layer 3 (Default for Unknown Agents)

A generic agent has no documented script-hook surface. Use the same scripts as every other adapter, invoked in-turn by the agent (Layer 2) plus harness-independent git hooks (Layer 3).

### Wire Layer 2 — AI instructions in AGENT.md

Append to the project's `AGENT.md`:

```markdown
## Active Hooks (Layer 2)

These scripts MUST be run at the matching trigger. They are pure Node — no dependencies, no network — and exit 0 on non-fatal errors so they never block you.

| Trigger | Run | When |
|---|---|---|
| Session start (first prompt) | `node pro-dev-framework/building-kit/hooks/scripts/session-start.js` | Before reading project files |
| After any file Edit/Write | `node pro-dev-framework/building-kit/hooks/scripts/update-progress.js --file <path>` | Immediately |
| Every 3 file edits | `node pro-dev-framework/building-kit/hooks/scripts/check-drift.js --threshold 3` | Self-counter |
| After Edit/Write on docs/*.md | `node pro-dev-framework/building-kit/hooks/scripts/validate-doc.js --file <path>` | Immediately |
| Reaching any gate (2/3/4/5) | `node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate N` | Before presenting gate form |
| Session end (switch / done) | `node pro-dev-framework/building-kit/hooks/scripts/capture-session-state.js` | Before final response |

Detail per hook: see `pro-dev-framework/building-kit/hooks/instructions/`.
```

### Wire Layer 3 — git hooks (universal)

```bash
bash pro-dev-framework/building-kit/hooks/git-hooks/install.sh
```

### Adapting hooks for an agent without terminal access

If the generic agent can read/write files but cannot invoke a terminal:

- The hook scripts cannot run in-session.
- Layer 3 git hooks still run (they fire when *you* commit, regardless of agent).
- The agent still must **manually** write `memory/sessions/YYYY-MM-DD-[agent].md` at session end, following the format in `memory/session-snapshot-template.md`.
- Drift detection becomes manual: every 3 edits the agent self-asks the four questions in `rules/drift-detection.md` and reports flags inline.

### Adapting hooks for a chat-only agent (no filesystem)

- Hook *output* is what you paste into the chat: at session end, run the scripts yourself in your terminal and paste their stdout into the conversation as context.
- The agent operates from the pasted snapshot. You manually save its outputs to `memory/sessions/`.
