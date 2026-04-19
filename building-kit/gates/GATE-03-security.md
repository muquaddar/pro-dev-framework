# GATE-03: Security & High-Risk Review

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Gate
> **Required for:** Standard, Enterprise (triggered by agent when working on sensitive code)
> **Agent Action:** 🛑 STOP before implementing security-sensitive changes. Present for human review.

---

## Purpose

The agent self-identifies when it's about to write security-sensitive code and stops for human approval. This prevents introducing vulnerabilities through automated coding.

---

## Trigger Conditions

The agent MUST trigger this gate when:

- [ ] Writing or modifying authentication/authorization logic
- [ ] Handling passwords, tokens, or secrets
- [ ] Creating database migrations that add/remove sensitive columns
- [ ] Implementing file upload/download handlers
- [ ] Writing code that makes external API calls with user data
- [ ] Modifying CORS, CSP, or security headers
- [ ] Implementing payment processing logic
- [ ] Writing code that processes user-generated content (sanitization)
- [ ] Creating admin or elevated-privilege endpoints
- [ ] Modifying environment variable handling

---

## Gate Form

### Security-Sensitive Change

**What I'm about to do:**
[Agent describes the change in plain language]

**Why it's security-sensitive:**
[Agent explains the risk]

**My proposed approach:**
```
[Agent shows the code approach — pseudocode or actual code]
```

**Alternatives considered:**
- [Alternative 1] — not chosen because [reason]
- [Alternative 2] — not chosen because [reason]

**Security implications:**
- [What could go wrong if implemented incorrectly]
- [What data is at risk]

---

## Approval

```
[ ] APPROVED — Implement as proposed.
    Signed: _____________ Date: _____________

[ ] APPROVED WITH MODIFICATIONS:
    - Change: [what to change]
    Signed: _____________ Date: _____________

[ ] REJECTED — Do NOT implement:
    - Reason: [why]
    - Alternative: [what to do instead]
```

---

## After Approval

1. Agent implements the approved approach.
2. Agent adds security test cases.
3. Gate status updated in AGENT.md.
4. Change documented in ADR log (Enterprise tier).
