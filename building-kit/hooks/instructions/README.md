# AI-Instruction Hooks (Layer 2)

> For harnesses that lack a script-hook surface (Codex, Antigravity, OpenCode, generic). The agent reads these as part of its turn and runs the matching script via its terminal tool.

## How These Are Wired

The harness adapter for each agent (e.g., `harness-adapters/codex.md`) contains a "Hooks" section that copies the relevant `.md` files from this directory into either `AGENT.md` or the agent's native config file. The agent then follows them during its session.

Layer 2 trades determinism for portability: it works with any agent, but the agent has to *remember* to invoke the script. Pair it with [Layer 3 git hooks](../git-hooks/) so that anything missed in-session gets caught at commit time.

## Files

| File | Inserts as | Trigger the agent watches for |
|---|---|---|
| [`session-start.md`](session-start.md) | First instruction at session start | First user prompt of session |
| [`session-end.md`](session-end.md) | Switch Protocol step | "switch", "done", "hand over", context full |
| [`per-edit.md`](per-edit.md) | Rule the agent follows after every Edit/Write | Any file write |
| [`drift-check.md`](drift-check.md) | Rule the agent follows on a counter | Every 3 file edits |
| [`gate.md`](gate.md) | Pre-gate procedure | Reaching any human gate |
| [`security-edit.md`](security-edit.md) | Rule the agent follows on sensitive paths | Editing auth/crypto/secret files |

## Pattern

Each file:

1. States the trigger condition.
2. Names the script to run (path relative to project root).
3. States what to do with the output (continue / stop / present to human).

The agent should treat these the way a human dev treats a pre-commit hook: not optional, not a suggestion. If the agent skips one, the next git-hook layer will usually catch it.
