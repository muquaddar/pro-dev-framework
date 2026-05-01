# Codex CLI — PDF Harness Adapter

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Agent:** OpenAI Codex CLI
> **Auto-Reads:** `AGENTS.md` in project root

---

## Shim File

**File:** `AGENTS.md` (project root)

```markdown
Read AGENT.md for all project context, rules, and current state.
```

Codex CLI automatically reads `AGENTS.md` when entering a project directory. This one-liner redirects it to the universal project brain.

> **Note:** `AGENTS.md` is shared with OpenCode. Both agents read the same shim.

---

## Concept Mapping

| PDF Concept | Codex CLI Equivalent |
|---|---|
| `AGENT.md` | Read via `AGENTS.md` shim |
| Session memory | `memory/sessions/YYYY-MM-DD-codex.md` |
| Pre-flight checks | Run at session start (after reading AGENT.md) |
| Drift detection | Self-triggered every 3 tasks |
| Human gate | Agent STOPS and prints the gate form for review |
| Milestone boundary | Agent announces, requests approval before starting |
| Save session | Agent writes snapshot + updates AGENT.md |
| Switch protocol | Agent saves state → generates handover prompt |
| Planning docs | `docs/*.md` — read on demand per task |
| Progress tracking | `docs/progress.md` — checkboxes updated per task |
| Terminal commands | Native — full shell access |
| File operations | Native — full read/write/create |
| Git operations | Native — full git access |
| Sandbox mode | Codex runs in a sandboxed environment by default |

---

## Activation Prompt

Paste this into Codex CLI on first project setup:

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
4. Codex may auto-execute tasks — ensure human reviews gate outputs
```

### Session End
```
1. Write: memory/sessions/YYYY-MM-DD-codex.md
2. Update: AGENT.md → Current State block
3. Update: docs/progress.md → checkboxes
4. Commit all changes with descriptive message
5. If switching platforms → generate handover
```

---

## Resume Protocol

| Scenario | What Codex Reads | Token Cost |
|---|---|---|
| **Normal resume** | AGENT.md → latest session → progress.md | ~900 tok |
| **After handoff** | AGENT.md → latest 2 sessions → progress.md | ~1,200 tok |
| **Long dormancy** | AGENT.md → last 2 sessions → milestone-plan | ~1,500 tok |

---

## Codex-Specific Considerations

### Sandbox Mode

Codex runs in a sandboxed container by default. This means:
- ✅ Safe to run untrusted commands — no system damage risk
- ⚠️ Network access may be restricted — affects `npm install`, API calls
- ⚠️ File changes are staged — review before committing

**PDF recommendation:** Use Codex's sandbox for all exploratory tasks. Review outputs before committing to git.

### Autonomous Execution

Codex can run in autonomous or interactive mode:

| Mode | When to Use | PDF Compatibility |
|---|---|---|
| **Interactive** | Gates, architecture decisions, milestone starts | ✅ Required for human gates |
| **Autonomous** | Implementation tasks within an approved milestone | ✅ OK if drift checks are enabled |

**Rule:** Never run Codex in fully autonomous mode across milestone boundaries. Gates require human review.

### Task Batching

Codex excels at batch task execution. When working within a single milestone:

```
"Complete these tasks from M2:
- [ ] Create user model with validation
- [ ] Add database migration
- [ ] Write unit tests for user model
- [ ] Update module index

Stop after completing all 4 and run drift detection."
```

---

## Known Limitations & Workarounds

| Limitation | Impact | Workaround |
|---|---|---|
| No web search | Can't do research tasks | Use cloud AI for research; IDE for building |
| Sandbox networking | May block `npm install` | Pre-install deps before entering sandbox, or use network-enabled mode |
| Auto-execution risk | May skip human gates | Always run in interactive mode near gate boundaries |
| Limited context memory | May forget earlier context | Session snapshots bridge the gap |
| No image generation | Can't produce UI assets | Use planning docs' HTML prototypes |
| **No script-hook surface** | **Cannot fire Layer 1 hooks on tool boundaries** | **Use Layer 2 (AI instructions) + Layer 3 (git hooks). See "Hooks" below.** |

---

## Hooks — Layer 2 + Layer 3 (Required for PDF Compliance)

Codex has no `settings.json`-style hook surface. Instead, the agent runs the same generic scripts in-turn (Layer 2), backstopped by git hooks that fire regardless of agent (Layer 3).

### Wire Layer 2 — AI instructions in AGENTS.md

Append to the project's `AGENTS.md` shim:

```markdown
## Active Hooks (Layer 2)

You MUST run these scripts at the matching trigger. They keep session state and drift detection in sync.

| Trigger | Run | When |
|---|---|---|
| First user prompt | `node pro-dev-framework/building-kit/hooks/scripts/session-start.js` | Before reading any project file |
| After every Edit/Write | `node pro-dev-framework/building-kit/hooks/scripts/update-progress.js --file <path>` | Immediately after the tool call |
| Every 3 edits | `node pro-dev-framework/building-kit/hooks/scripts/check-drift.js --threshold 3` | Self-counter |
| After Edit/Write on docs/*.md | `node pro-dev-framework/building-kit/hooks/scripts/validate-doc.js --file <path>` | Immediately |
| Reaching any gate (2/3/4/5) | `node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate N` | Before presenting gate form |
| Editing auth/crypto/secret/* | `node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 3 --scan` | Immediately |
| Session end (switch/done) | `node pro-dev-framework/building-kit/hooks/scripts/capture-session-state.js` | Before final response |

Detail per hook: see `pro-dev-framework/building-kit/hooks/instructions/`.
```

### Wire Layer 3 — git hooks (universal)

```bash
bash pro-dev-framework/building-kit/hooks/git-hooks/install.sh
```

Catches anything missed in-session: doc validation, secret leaks, lint failures, manifest sync.

### Codex-specific notes

- **Sandbox mode:** All hook scripts use Node stdlib only — no network calls — so they work fine inside Codex's network-restricted sandbox.
- **Autonomous mode:** When Codex runs in autonomous mode, the Layer 2 instructions in AGENTS.md are part of its system context. Codex should still execute them between tasks. If you observe drift (Codex skipping hooks), drop back to interactive mode for the affected milestone.
- **Bypass:** Codex sometimes runs a batch of edits in one tool call. The per-edit hook may need to be invoked once at the end of the batch with `--file <last-file>`. The drift check still functions correctly because it counts unique edited files in `active.jsonl`.
