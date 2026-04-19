# Rule: Debugging & Logging

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** High

---

## Debugging Protocol

### Step 1: Reproduce
- Can you reliably reproduce the bug? If not, gather more information first.
- What is the expected behavior? What is the actual behavior?
- When did it start? What changed recently? (check `git log`)

### Step 2: Isolate
- Read the error message carefully. The answer is often in the message.
- Check the stack trace — start from the TOP (most recent call).
- Binary search: comment out half the logic. Does the bug persist? Narrow down.
- Check the index (`docs/project-map.md`) to find related files. Read max 3 files.

### Step 3: Fix
- Fix the ROOT CAUSE, not the symptom.
- If the fix is more than 20 lines, reconsider your approach.
- Add a test that would have caught this bug.
- Verify the fix doesn't break anything else (run full test suite).

### Step 4: Document
- Update codebase index if files changed.
- If the bug was caused by a systemic issue, add a rule to prevent recurrence.

---

## Common Agent Mistakes

### Mistake: Reading too many files to debug
**Fix:** Check the index first. Read the error file + max 2 related files. If unsure, ask the human which file to check.

### Mistake: Adding try/catch that swallows errors
**Fix:** Never catch and ignore. Catch → log + rethrow, or catch → handle specifically.

### Mistake: Fixing symptoms instead of root cause
**Fix:** Ask: "Why did the wrong value get here?" Trace upstream until you find the real source.

### Mistake: Changing working code "just to be safe"
**Fix:** Only change code directly related to the bug. If you're modifying unrelated files, stop and reconsider.

### Mistake: Generating a new implementation when the old one "doesn't work"
**Fix:** Understand WHY the old one fails first. The new one will have the same problem if you don't understand the root cause.

---

## Error Categories

| Error Type | First Action |
|---|---|
| **Syntax / compile error** | Read the error message. It tells you the file and line. |
| **Runtime / exception** | Read the stack trace. Start from the top frame. |
| **Wrong behavior (no error)** | Add logging/breakpoints at key decision points. |
| **Intermittent / flaky** | Check for race conditions, timing issues, uninitialized state. |
| **Works locally, fails in CI/prod** | Check environment variables, dependencies, file paths. |

---

## When to Ask the Human

- You've spent 3+ attempts on the same bug.
- The fix requires changing architecture (not just code).
- You're not sure which of 2+ valid approaches to take.
- The error involves external services you can't test locally.
