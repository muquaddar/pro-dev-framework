# Hook Instruction — Session End

**Trigger:** Any of:
- User says "switch", "done", "hand over", "I'm done for today", "pause"
- Context window is approaching its limit
- A major gate just completed and workflow may branch

**Run before responding with the final message:**

```bash
node pro-dev-framework/building-kit/hooks/scripts/capture-session-state.js
```

For a platform handover, add `--handover`:

```bash
node pro-dev-framework/building-kit/hooks/scripts/capture-session-state.js --handover
```

**Effects of running:**
- Writes `memory/sessions/YYYY-MM-DD-[agent].md` (snapshot)
- Updates the `<!-- HOOK:CURRENT-STATE:START -->` block in `AGENT.md`
- Cleans up `memory/sessions/.current.json` and `memory/sessions/active.jsonl`

**After the script runs, do these by hand (the script leaves them blank for you):**

1. Edit the new snapshot's `## Context for Next Agent` section with 1-3 sentences of free-form notes.
2. Edit the snapshot's `## Open Blockers` section with anything that's stuck.
3. Edit the snapshot's `## Next 3 Tasks` section by copying the next three unchecked items from `docs/progress.md`.
4. `git commit -am "chore(session): save state for [agent] handover"`.

**If switching to a cloud platform** (ChatGPT, Gemini, Claude.ai), also output a paste-ready handover prompt that contains the Framework Digest from `AGENT.md`, the Current State block, and the Next 3 Tasks list — see `memory/cloud-handover-template.md`.

**Never end a session without running this hook.** A skipped session-end means the next agent has to reconstruct context from git log alone.
