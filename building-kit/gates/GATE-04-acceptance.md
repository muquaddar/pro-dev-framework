# GATE-04: Milestone Acceptance

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 5 (Verify) | **Category:** Gate
> **Required for:** Standard, Enterprise (triggered before release/deploy)
> **Agent Action:** 🛑 STOP after milestone is complete. Present verification results.

---

## Purpose

The human reviews the milestone's deliverables and verification results before releasing or deploying. Ensures quality standards are met before moving to the next milestone.

---

## Gate Form

### Milestone: M[N] — [Name] → Acceptance Check

**Milestone tasks completed:** [X/Y] — see `docs/progress.md`

### Verification Results

#### Functionality
- [ ] All milestone tasks checked off in progress.md
- [ ] Core feature works end-to-end
- [ ] Error states show meaningful messages
- [ ] Empty states show helpful content
- [ ] Loading states display properly

#### Code Quality
- [ ] No file exceeds 500 lines
- [ ] No debug logging left in code
- [ ] No hardcoded values that should be config
- [ ] No TODO comments for this milestone's work
- [ ] Consistent naming conventions

#### Tests
- [ ] Tests pass: `[test command]` — Result: [PASS/FAIL]
- [ ] Coverage: [X]% (tier requirement: [Lite: N/A | Standard: 60% | Enterprise: 80%])

#### Security (Standard + Enterprise)
- [ ] Security checklist items pass (see Phase 6 output)
- [ ] No secrets in code
- [ ] Auth endpoints reject unauthenticated requests

#### Docs & Index
- [ ] `docs/project-map.md` is current
- [ ] `docs/progress.md` milestone fully checked off
- [ ] `AGENT.md` "What's Built" reflects current state
- [ ] `.env.example` has all variables

---

## Approval

```
[ ] APPROVED — Milestone Accepted.
    Proceed to next milestone or deployment.
    Signed: _____________ Date: _____________

[ ] APPROVED WITH FIXES — Fix before completing:
    - [ ] [fix 1]
    - [ ] [fix 2]
    Signed: _____________ Date: _____________

[ ] REJECTED — Not ready for acceptance:
    - Reason: [why]
    - Action: [what to fix + estimated effort]
```

---

## After Approval

1. `git tag v0.[N].0 -m "M[N]: [milestone name]"` (If applicable).
2. Deploy (if applicable).
3. Update AGENT.md: condense What's Built, advance What's Next to M[N+1].
4. Update progress.md: mark milestone ✅.
5. Archive session memory.
6. Loop to Gate 2 for next milestone.
