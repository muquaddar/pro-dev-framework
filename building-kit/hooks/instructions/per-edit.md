# Hook Instruction — After Every Edit / Write

**Trigger:** Immediately after any tool call that creates or modifies a file in the project.

**Run:**

```bash
node pro-dev-framework/building-kit/hooks/scripts/update-progress.js --file <path-of-edited-file>
```

If the edit completes a checklist item from `docs/progress.md`, also pass the task description so the script can check it off:

```bash
node pro-dev-framework/building-kit/hooks/scripts/update-progress.js --file <path> --task "<exact text from progress.md>"
```

**What this does (cheap, ~50 ms):**
- Appends a JSON line to `memory/sessions/active.jsonl` so the session-end hook can list everything that changed.
- Optionally checks off the matching unchecked checklist line in `docs/progress.md`.

**Why every edit and not every N edits:** the cost is trivial, and the rollup is what makes the session snapshot complete. Skipping any edit means that file may not appear in the snapshot.

**Note:** Layer 1 harnesses (Claude Code) wire this automatically via PostToolUse — agents on those harnesses do *not* need to run it manually.
