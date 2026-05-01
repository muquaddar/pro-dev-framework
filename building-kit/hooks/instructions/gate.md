# Hook Instruction — Gate Check

**Trigger:** Reaching any human gate (Gate 2, 3, 4, 5, 6, 7).

**Run before presenting the gate form to the human:**

```bash
# Gate 2 — milestone start
node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 2 --milestone M[N]

# Gate 3 — security-sensitive code
node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 3 --scan

# Gate 4 — milestone acceptance
node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 4

# Gate 5 — pre-release
node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 5

# Gate 6 — launch readiness (Enterprise)
node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 6

# Gate 7 — continue/sunset (Enterprise quarterly)
node pro-dev-framework/building-kit/hooks/scripts/gate-check.js --gate 7
```

**Effects:**
- Writes a readiness report to `docs/gates/GATE-0N-report.md`.
- Prints a one-line confirmation.

**Then:**

1. Read the freshly-generated `docs/gates/GATE-0N-report.md`.
2. Combine it with the gate form template from `gates/GATE-0N-*.md`.
3. **STOP.** Present the combined form to the human.
4. Wait for explicit `/confirm` or "approved" before proceeding.

**Never skip a gate.** The script generates the readiness report; the *agent* presents it; the *human* decides. All three steps are required.
