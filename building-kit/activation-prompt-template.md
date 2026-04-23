# Activation Prompt Template

Paste the following into any IDE agent on first project setup:

```text
You are working on a project managed by the Pro Dev Framework (PDF v1.0.0).

1. Read AGENT.md in the project root — this is your project brain.
2. Read the latest session snapshot in memory/sessions/ (if any).
3. Read docs/progress.md to see task status.
4. Announce your position: "Resuming at [Stage/Milestone/Task]"

Rules:
- Follow the Framework Digest in AGENT.md for all building rules.
- Work ONE task at a time from the current milestone.
- Run drift detection every 3 tasks: Am I on-task? Only scoped files? No unapproved deps?
- At human gates: STOP. Print the gate form. Wait for confirmation.
- At session end: Write session snapshot, update AGENT.md Current State, update progress.md.
- Never skip milestone boundaries without human approval.

Begin by reading AGENT.md now.
```

This template is universal. If your agent has a dedicated harness adapter, follow that adapter's session configuration and resume protocol after activation.
