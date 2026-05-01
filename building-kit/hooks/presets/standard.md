# Standard Tier Hook Preset (8 hooks)

> **Right for:** Multi-week product, parallel work streams, real gates. Goal: full automation of session/drift/gate disciplines without leaving room for the agent to forget.

Includes everything from [Lite](lite.md) plus 5 more.

| # | Event | Script | Layer (Claude Code) | Layer (other agents) |
|---|---|---|---|---|
| 1 | session-start | `scripts/session-start.js` | `SessionStart` | `instructions/session-start.md` |
| 2 | session-end | `scripts/capture-session-state.js` | `Stop` | `instructions/session-end.md` |
| 3 | task-complete / file-edit | `scripts/update-progress.js` | `PostToolUse` matcher `Edit\|Write` | `instructions/per-edit.md` |
| 4 | drift-check (every 3 edits) | `scripts/check-drift.js --threshold 3` | `PostToolUse` matcher `Edit\|Write` | `instructions/drift-check.md` |
| 5 | planning-doc-edited | `scripts/validate-doc.js` | `PostToolUse` matcher `Edit\|Write` on `docs/*.md` | AI instruction in adapter |
| 6 | pre-commit | `git-hooks/pre-commit` | git hook (Layer 3) | git hook (Layer 3) |
| 7 | post-commit | `git-hooks/post-commit` | git hook (Layer 3) | git hook (Layer 3) |
| 8 | milestone gate (2/4/5) | `scripts/gate-check.js --gate N` | AI instruction at gate boundary | `instructions/gate.md` |

## Claude Code config snippet

Append to `.claude/settings.json`:

```json
{
  "hooks": {
    "SessionStart": [
      { "hooks": [{ "type": "command", "command": "node pro-dev-framework/building-kit/hooks/scripts/session-start.js" }] }
    ],
    "Stop": [
      { "hooks": [{ "type": "command", "command": "node pro-dev-framework/building-kit/hooks/scripts/capture-session-state.js" }] }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "node pro-dev-framework/building-kit/hooks/scripts/update-progress.js" },
          { "type": "command", "command": "node pro-dev-framework/building-kit/hooks/scripts/check-drift.js --threshold 3" }
        ]
      },
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "node pro-dev-framework/building-kit/hooks/scripts/validate-doc.js" }
        ]
      }
    ]
  }
}
```

## Git hooks (all agents)

```bash
bash pro-dev-framework/building-kit/hooks/git-hooks/install.sh
```

## Gate hook (all agents)

Wired via AI instruction (no harness fires "I just hit a gate"). Add to AGENT.md "Active Hooks" → reference `instructions/gate.md`.

## Cost

- Adds ~30 ms per file edit (drift + validate-doc).
- Adds ~100 ms per commit (pre-commit + post-commit).
- ~2-3 KB additional disk per session (drift log entries).
