# Enterprise Tier Hook Preset (12+ hooks)

> **Right for:** Compliance, audit trail, multi-agent traceability, cross-team coordination. Goal: every framework rule is enforced by something other than agent discipline.

Includes everything from [Standard](standard.md) plus 4+ more.

| # | Event | Script | Layer |
|---|---|---|---|
| 1-8 | (Standard set) | (see [standard.md](standard.md)) | — |
| 9 | drift-check 30-min wall-clock | `scripts/check-drift.js --interval` | cron (Layer 3) |
| 10 | security-sensitive edit (Gate 3) | `scripts/gate-check.js --gate 3 --scan` | `PostToolUse` w/ path filter (Claude Code) or `instructions/security-edit.md` (others) |
| 11 | milestone-tag-pushed | `scripts/gate-check.js --gate 4 --finalize` | git post-tag hook (Layer 3) — already in `git-hooks/post-commit` |
| 12 | branch-created | log to `memory/branches.log` | git post-checkout hook (Layer 3) |
| 13 | quarterly continue/sunset (Gate 7) | `scripts/gate-check.js --gate 7 --quarterly` | cron (Layer 3) |

## Claude Code config snippet

Append to `.claude/settings.json` (additions on top of Standard):

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 3 --scan-if-sensitive" }
        ]
      }
    ]
  }
}
```

(Use the existing `gate-check.js --gate 3 --scan` script. The `--scan-if-sensitive` flag is a no-op stub today; the script itself reads recent edits and only acts when a sensitive path is touched.)

## Cron jobs (Linux/Mac)

```cron
# Every 30 min — wall-clock drift backstop
*/30 * * * * cd /path/to/project && node pro-dev-framework/building-kit/hooks/scripts/check-drift.js --interval

# First Monday of each quarter at 9am — Gate 7
0 9 1 1,4,7,10 * cd /path/to/project && node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 7 --quarterly
```

## Cron jobs (Windows / Task Scheduler)

```powershell
# 30-min drift backstop
schtasks /create /tn "PDF-DriftCheck" /tr "node D:\path\to\project\pro-dev-framework\building-kit\hooks\scripts\check-drift.js --interval" /sc minute /mo 30

# Quarterly gate 7
schtasks /create /tn "PDF-Gate7" /tr "node D:\path\to\project\pro-dev-framework\building-kit\hooks\scripts\gate-check.js --gate 7 --quarterly" /sc monthly /mo 3 /d 1 /st 09:00
```

## Branch-created git hook

Append to `.git/hooks/post-checkout` (the `install.sh` does not install this by default — opt-in for enterprise tier):

```bash
#!/usr/bin/env bash
# Args: <prev-HEAD> <new-HEAD> <branch-flag>
[ "$3" = "1" ] || exit 0  # Only fire on branch checkout, not file checkout
NEW_BRANCH="$(git symbolic-ref --short HEAD 2>/dev/null || echo detached)"
echo "{\"ts\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",\"event\":\"branch-checkout\",\"branch\":\"$NEW_BRANCH\"}" \
  >> "$(git rev-parse --show-toplevel)/memory/branches.log"
```

## Cost

- Adds ~50 ms per file edit (security scan).
- Adds two cron jobs (negligible compute).
- ~10 KB additional disk per month (branch log + drift backstop log).
- Compliance dividend: every gate, drift event, and security-sensitive edit is recorded with a timestamp and committable to git.
