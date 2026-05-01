# Lite Tier Hook Preset (3 hooks)

> **Right for:** Solo dev, weekend project, single-platform agent. Goal: don't lose state between sessions.

| # | Event | Script | Layer (Claude Code) | Layer (other agents) |
|---|---|---|---|---|
| 1 | session-start | `scripts/session-start.js` | `SessionStart` | AI instruction (`instructions/session-start.md`) |
| 2 | session-end | `scripts/capture-session-state.js` | `Stop` | AI instruction (`instructions/session-end.md`) |
| 3 | task-complete / file-edit | `scripts/update-progress.js` | `PostToolUse` matcher `Edit\|Write` | AI instruction (`instructions/per-edit.md`) |

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
          { "type": "command", "command": "node pro-dev-framework/building-kit/hooks/scripts/update-progress.js" }
        ]
      }
    ]
  }
}
```

## Other agents (Codex / Antigravity / OpenCode / generic)

Copy these three instruction files into the project's AGENT.md "Active Hooks" section, or into the agent's native config:

- `instructions/session-start.md`
- `instructions/session-end.md`
- `instructions/per-edit.md`

The scripts are identical across agents; only the trigger mechanism differs.

## What's not included

- No git hooks (use Standard preset for those).
- No drift checks (agent self-counts as before).
- No gate-check automation (agent assembles gate forms by hand).
- No security keyword scan.

## Cost

- Per session start: ~20 ms
- Per session end: ~50 ms (plus git commit)
- Per file edit: ~10 ms
- Disk: ~5 KB per snapshot
