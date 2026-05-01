# Hook Setup Guide — Stage 3.5

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 3.5 (Wire Hooks) — between Scaffold and Build
> **Prerequisite:** Walking Skeleton committed (end of Stage 3)
> **Companion to:** [hooks/README.md](hooks/README.md), [harness-adapters/](harness-adapters/)

---

## Why Stage 3.5

The framework spends a lot of words on disciplines the agent must remember: write a session snapshot, run a drift check every 3 tasks, validate planning docs, surface security-sensitive edits, never end a session without saving state. Every one of these is an event the agent has to *remember to do*.

Hooks make those events fire automatically. Stage 3.5 wires them up before Stage 4 (Build) starts, so the disciplines are enforced from the first task instead of being a self-management problem.

This stage takes 10-30 minutes depending on tier. It is one-time per project.

---

## Step 1 — Detect Your Harness

Identify which IDE agent will do the building. Each maps to one harness adapter:

| Agent | Adapter | Layer 1 surface |
|---|---|---|
| Claude Code (CLI) | `harness-adapters/claude-code.md` | `settings.json` hooks |
| Codex CLI | `harness-adapters/codex.md` | none — uses Layer 2 |
| Antigravity | `harness-adapters/antigravity.md` | none — uses Layer 2 |
| OpenCode | `harness-adapters/opencode.md` | none — uses Layer 2 |
| Other / unknown | `harness-adapters/generic.md` | none — uses Layer 2 |

If you plan to use multiple agents on the same project, wire all of them — the script + git hook layers are identical, only the harness-native config differs.

---

## Step 2 — Pick Your Tier Preset

Match the project tier you chose in Stage 0:

| Tier | Preset | Hook count | Setup time |
|---|---|---|---|
| Lite | [hooks/presets/lite.md](hooks/presets/lite.md) | 3 | ~5 min |
| Standard | [hooks/presets/standard.md](hooks/presets/standard.md) | 8 | ~15 min |
| Enterprise | [hooks/presets/enterprise.md](hooks/presets/enterprise.md) | 12+ | ~30 min |

You can start at Lite and graduate later — the scripts are stable, only the wiring changes.

---

## Step 3 — Apply Layer 1 (Harness-Native Script Hooks)

If your harness has a script-hook surface (currently: Claude Code), copy the JSON snippet from your tier preset into the harness's config file:

**Claude Code:**
```bash
# Edit (or create) the project-scoped settings file
mkdir -p .claude
$EDITOR .claude/settings.json
# Paste the snippet from hooks/presets/[tier].md
```

If your harness lacks this surface, **skip to Step 4**. The same scripts will be invoked via Layer 2 instead.

Verify Claude Code is reading your config:
```bash
# Inside Claude Code, run:
/hooks
# Should list the hooks you just added.
```

---

## Step 4 — Apply Layer 2 (AI-Instruction Hooks)

For every harness that has no Layer 1 surface — and as a *backup* for harnesses that do — copy the relevant instruction files into the project's `AGENT.md` "Active Hooks" section.

Files to copy depend on tier:

| Tier | Instruction files |
|---|---|
| Lite | `instructions/session-start.md`, `session-end.md`, `per-edit.md` |
| Standard | + `drift-check.md`, `gate.md` |
| Enterprise | + `security-edit.md` |

Append to `AGENT.md`:

```markdown
## Active Hooks

This project uses event-driven hooks from the building-kit. The agent runs them
in-turn (Layer 2) when the harness lacks a script-hook surface.

| Trigger | Script | Run via |
|---|---|---|
| Session start | `hooks/scripts/session-start.js` | First prompt of every session |
| Session end | `hooks/scripts/capture-session-state.js` | Switch / done / context full |
| After each edit | `hooks/scripts/update-progress.js` | After every Edit/Write tool call |
| Every 3 edits | `hooks/scripts/check-drift.js --threshold 3` | Per-edit counter |
| Doc edited | `hooks/scripts/validate-doc.js` | After Edit/Write on docs/*.md |
| Gate boundary | `hooks/scripts/gate-check.js --gate N` | Before presenting gate form |

Full instructions: see `pro-dev-framework/building-kit/hooks/instructions/`.
```

The agent reads this section on session-start (because it's in AGENT.md) and treats it as required behavior, not suggestion.

---

## Step 5 — Apply Layer 3 (Git Hooks)

Layer 3 is harness-independent and runs no matter who commits — agent, human, or another tool. Always install for Standard and Enterprise tiers; optional but recommended for Lite.

```bash
bash pro-dev-framework/building-kit/hooks/git-hooks/install.sh
```

Verify:
```bash
ls -la .git/hooks/pre-commit .git/hooks/post-commit
# Both should be executable.
```

For Enterprise tier, also add the cron jobs from `hooks/presets/enterprise.md`.

---

## Step 6 — Verify End-to-End

Run a throwaway session to confirm hooks fire correctly.

```bash
# 1. Open a session
node pro-dev-framework/building-kit/hooks/scripts/session-start.js
# Expect: "━━━ Session Start ━━━" with agent / model / project info.
# Verify file: cat memory/sessions/.current.json

# 2. Simulate an edit
echo "test" > /tmp/dummy && node pro-dev-framework/building-kit/hooks/scripts/update-progress.js --file /tmp/dummy
# Verify: cat memory/sessions/active.jsonl

# 3. Run drift check
node pro-dev-framework/building-kit/hooks/scripts/check-drift.js --threshold 0
# Expect: "✓ no drift across N edits"

# 4. Close the session
node pro-dev-framework/building-kit/hooks/scripts/capture-session-state.js
# Verify: ls memory/sessions/  → see today's snapshot file

# 5. Test pre-commit on a doc with a placeholder
echo "[TODO]" > docs/test-doc.md && git add docs/test-doc.md
git commit -m "test"
# Expect: pre-commit fails on the [TODO] marker.
rm docs/test-doc.md && git reset HEAD docs/test-doc.md
```

If any step fails, check `memory/hooks.log` and the script's stderr.

---

## Step 7 — Document Active Hooks in AGENT.md

Make the hook surface discoverable to every future agent that opens the project. Add or update the "Active Hooks" section in `AGENT.md` (the AGENT.md template ships with this section pre-stubbed):

```markdown
## Active Hooks

| Layer | Trigger | Script | Notes |
|---|---|---|---|
| 1 | SessionStart | session-start.js | claude-code only |
| 1 | Stop | capture-session-state.js | claude-code only |
| 1 | PostToolUse Edit\|Write | update-progress.js + check-drift.js | claude-code only |
| 2 | First user prompt | session-start.js | all other agents |
| 2 | Session-end signal | capture-session-state.js | all other agents |
| 3 | git pre-commit | validate-doc.js + secret-scan + lint | all agents |
| 3 | git post-commit | manifest sync | all agents |

Disable temporarily (debugging only):
- Layer 1: rename .claude/settings.json to settings.json.disabled
- Layer 2: remove this section from AGENT.md
- Layer 3: chmod -x .git/hooks/pre-commit .git/hooks/post-commit

Hook log: memory/hooks.log
```

---

## Risks & Guardrails

| Risk | Mitigation in shipped scripts |
|---|---|
| Hook crash blocks the agent | Every script wraps `main()` in try/catch and exits 0 on error. |
| Infinite loop (hook writes file → triggers PostToolUse → fires hook) | Each script writes a marker in `memory/.hook-pulses/` and skips re-entry. |
| Hook output bloats agent context | Scripts print one summary line; detail goes to `memory/hooks.log`. |
| Stale state when a hook fails silently | `git-hooks/post-commit` always rebuilds the manifest, even if in-session hooks missed events. |
| Secrets in snapshots | `capture-session-state.js` only summarizes `git diff --name-only` — never reads file contents. `pre-commit` greps for common secret patterns. |
| Hook fires while editing the framework itself | All scripts are no-ops outside a project root with `AGENT.md`. |

---

## When to Skip Stage 3.5

Stage 3.5 is appropriate for any project that will run more than one session. Skip it only when:
- The project is a one-shot script you'll never revisit.
- You're working in a sandboxed evaluator that has no filesystem persistence.

In every other case, the 10-minute setup pays back the first time the agent forgets to write a session snapshot.

---

## See Also

- [hooks/README.md](hooks/README.md) — three-layer architecture
- [hooks/events.md](hooks/events.md) — full event catalog
- [hooks/presets/](hooks/presets/) — tier-specific bundles
- [harness-adapters/](harness-adapters/) — agent-specific config snippets
- [rules/session-management.md](rules/session-management.md) — Switch Protocol (what hooks automate)
- [rules/drift-detection.md](rules/drift-detection.md) — Drift loop (what hooks automate)
