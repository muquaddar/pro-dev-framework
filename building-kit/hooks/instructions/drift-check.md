# Hook Instruction — Drift Check

**Trigger:** After every 3 file edits in the current session, OR every 30 minutes of continuous work, whichever comes first.

**Run:**

```bash
node pro-dev-framework/building-kit/hooks/scripts/check-drift.js --threshold 3
```

This reads `memory/sessions/active.jsonl` (populated by the per-edit hook) and prints any flags. The script's exit code is always 0 — the *agent* decides what to do with the flags.

**Decision matrix based on output:**

| Output | Action |
|---|---|
| `✓ no drift across N edits` | Continue. |
| `⚠ size:` flag | Pause. Discuss with human whether to split the file before continuing. |
| `⚠ deps:` flag | Pause. Confirm the new dependency was approved. If not, revert. |
| `⚠ scope:` flag | Pause. State the drift to the human ("I edited X which is outside the M[N] scope"). Wait for direction. |

**Rules around drift:**

1. **Stop. Do not silently continue past a flag.** That is what the original drift-detection rule exists to prevent.
2. **State the drift in the chat verbatim** — the human cannot see the script output unless you surface it.
3. **Propose a physical correction** if drift was real (revert last commit, restore file, drop dep).
4. **Resume only with human approval.**

**Note:** Layer 1 harnesses can fire this automatically every 3 PostToolUse events. On those harnesses you do not run it manually — but you still react to its flags the same way.
