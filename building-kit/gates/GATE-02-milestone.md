# GATE-02: Milestone Start Approval

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Gate
> **Required for:** Standard, Enterprise (triggered before each milestone)
> **Agent Action:** 🛑 STOP before starting any milestone. Present task list for approval.

---

## Purpose

The human reviews and approves the upcoming milestone's task list before the agent begins work. This ensures alignment on scope, priority, and expected deliverables.

---

## Gate Form

### Milestone: M[N] — [Name]

**Goal:** [one sentence — what is testable at the end]
**Estimated effort:** [0.5 | 1 | 1.5 | 2] days
**Depends on:** M[N-1] status: [✅ Complete / ⬚ N/A]

### Proposed Tasks
- [ ] [task 1]
- [ ] [task 2]
- [ ] [task 3]

### Acceptance Criteria (Done When)
- [ ] [criterion 1]
- [ ] [criterion 2]

### Risks / Open Questions
- [risk or question, if any]

### Files Expected to Change
- [file/directory 1]
- [file/directory 2]

---

## Approval

```
[ ] APPROVED — Start this milestone.
    Signed: _____________ Date: _____________

[ ] APPROVED WITH CHANGES:
    - Add task: [task]
    - Remove task: [task]
    - Modify: [change]
    Signed: _____________ Date: _____________

[ ] DEFERRED — Not ready to start:
    - Reason: [why]
    - Prerequisite: [what needs to happen first]
```

---

## After Approval

1. Agent begins working tasks in order.
2. Per task: check Index → Read → Write → Update Index.
3. Gate 2 re-triggers before each subsequent milestone.
4. Gate status updated in AGENT.md: `Gate 2 — M[N]: ✅ Approved — [date]`.
