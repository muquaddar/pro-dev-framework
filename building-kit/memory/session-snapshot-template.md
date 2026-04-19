# Session Snapshot Template

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Purpose:** Captures end-of-session state for the next agent to resume.
> **Save to:** `memory/sessions/[YYYY-MM-DD]-[agent-name].md`
> **When:** At every session end, triggered by the Switch Protocol.

---

## Session Metadata

| Field | Value |
|---|---|
| **Date** | [YYYY-MM-DD] |
| **Agent** | [Antigravity / Claude Code / Codex / OpenCode / ChatGPT / other] |
| **Session Duration** | [approximate hours/minutes] |
| **Stage** | [current stage number] |
| **Milestone** | M[N] — [name] |
| **Project Tier** | [Lite / Standard / Enterprise] |

---

## Position

| Dimension | Status |
|---|---|
| **Milestone** | M[N] — [name] |
| **Tasks Completed** | [X/Y] |
| **Current Task** | [task description] |
| **Active File(s)** | `[file path(s) being worked on]` |
| **Branch** | `[git branch name]` |
| **Last Commit** | `[short hash] — [message]` |

---

## Work Completed This Session

1. [Task/change description]
2. [Task/change description]
3. [Task/change description]

### Files Changed

```text
MODIFIED: [file path] — [what changed]
NEW:      [file path] — [purpose]
DELETED:  [file path] — [reason]
```

---

## Decisions Made

| Decision | Rationale | ADR? |
|---|---|---|
| [decision description] | [why this choice] | [ADR-NNN / no] |

---

## Blockers & Open Questions

| Type | Description | Needs |
|---|---|---|
| BLOCKER | [what is blocked] | [what is needed to unblock] |
| QUESTION | [open question] | [human input / research / other] |

---

## Next 3 Tasks

1. [ ] [next task — be specific]
2. [ ] [next task]
3. [ ] [next task]

---

## Context for Next Agent

[Free-form notes for the next agent. Include anything non-obvious:
- Patterns discovered that aren't in the rules yet
- Workarounds applied temporarily
- Things that almost worked but didn't (and why)
- Partially completed work that needs finishing
- Specific files the next agent should read first]

---

## Cross-Stream Status (if applicable)

| Stream | Status | Blocking Code? |
|---|---|---|
| CODE | M[N] — [status] | — |
| CONTENT | [status] | [yes/no — which milestone] |
| ASSET | [status] | [yes/no — which milestone] |
| LEGAL | [status] | [yes/no — which milestone] |
