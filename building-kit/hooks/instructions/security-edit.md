# Hook Instruction — Security-Sensitive Edit

**Trigger:** Editing any file whose path matches `auth | crypto | token | secret | password | payment | jwt | session | oauth | key`.

**Run immediately after the edit, before continuing to the next task:**

```bash
node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 3 --scan
```

**Then:**

1. Read the generated `docs/gates/GATE-03-report.md`.
2. **STOP.** Surface the change to the human:
   - What file was edited
   - What the change does (auth flow, key handling, token storage, etc.)
   - What threat model assumption it relies on
3. Wait for explicit approval before making any further edits in security-adjacent code.

**Why this is a hard stop:** Security-sensitive code is one of the few areas where the agent's normal "ship it and iterate" rhythm produces irreversible mistakes (committed secrets, leaked tokens, broken auth boundaries). Gate 3 exists for this. The hook surfaces the moment it's needed; the human takes the call.
