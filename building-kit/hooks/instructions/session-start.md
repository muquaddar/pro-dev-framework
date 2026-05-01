# Hook Instruction — Session Start

**Trigger:** First user prompt of every session.

**Run before responding to anything else:**

```bash
node pro-dev-framework/building-kit/hooks/scripts/session-start.js
```

(Adjust the path to where the framework lives in this project. If `AGENT_NAME` and `AGENT_MODEL` env vars are unset, defaults are used.)

**Then, in this exact order:**

1. Read `AGENT.md` in the project root.
2. Read the latest file in `memory/sessions/` (sorted descending by name).
3. Read `docs/progress.md` to see open tasks.
4. If the session-start script printed a "long dormancy" warning, also read `docs/milestone-plan.md` and the second-most-recent session snapshot.
5. Announce position in one line: `Resuming at Stage [N], Milestone M[N], Task [name]`.

**Do not skip this hook.** It writes `memory/sessions/.current.json`, which the session-end hook needs to compute duration and identity correctly.
