# Troubleshooting Guide

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Utility
> **Purpose:** Error recovery, common situations, and agent drift management.

---

## Agent Drift Management

### Symptoms of Drift
- Agent modifying files not related to the current task.
- Agent adding features not in the current milestone.
- Agent ignoring rules (500-line limit, naming conventions).
- Agent over-engineering (adding abstractions nobody asked for).
- Agent reading too many files (> 6 for a single task).
- Agent generating entire files when asked for a small change.

### Re-Anchoring Protocol

When you detect drift:

1. **STOP the agent immediately.** Don't let it continue.
2. **Re-anchor:**
   ```text
   "STOP. You've drifted from the task.
   Current task: [specific task from progress.md]
   Re-read AGENT.md → What's Next section.
   Do ONLY [task]. Nothing else."
   ```
3. **If drift recurs:**
   - Add a rule to AGENT.md: `## Known Issues — Do NOT [specific pattern]`
   - Trigger the Switch Protocol (compact/restart the session).
   - Simplify the task — break it into smaller steps.

---

## Common Situations

### "The agent can't find AGENT.md"
1. Check your adapter setup inside `building-kit/harness-adapters/`.
2. Verify AGENT.md exists in the project root.
3. Try: "Read the file at `./AGENT.md` and summarize it."
4. If using a new agent, fallback to the generic adapter.

### "The agent ignores rules in building-kit/rules/"
1. Rules may not be auto-loaded. Check your adapter's rules mapping.
2. Try explicit loading: "Read `building-kit/rules/code-architecture.md` before writing code."
3. Move critical rules into AGENT.md directly for guaranteed loading.

### "Codebase index is out of date"
1. Inform the agent: "Regenerate `docs/project-map.md` and all Tier 1 indexes."
2. If indexes are badly stale, delete them and ask the agent to rebuild them from scratch.

### "The project has grown beyond the initial scope"
1. Stop adding features to the current milestone.
2. Create new milestones for the additional scope.
3. Update `progress.md` with new milestones.
4. Re-evaluate if you need to run the Planning Kit's discovery phase again.

### "I lost work because the agent's session expired"
1. Check `progress.md` — task state should be current.
2. Check `AGENT.md` — What's Built should reflect last session.
3. Check `memory/` — session summaries should have details.
4. Check git log — all work should be committed.
5. Prevention: strictly enforce the **Switch Protocol** at session end.

### "The agent is too slow / using too many tokens"
1. Check: is the agent reading too many files? Enforce the `token-optimization-rules.md`.
2. Check: is the agent re-reading files it already read? Remind it.
3. Use task lenses to reduce index lookup overhead.
4. Simplify prompts: "Fix X in Y" not "Look into the auth system."

### "The agent created a file > 500 lines"
1. STOP — don't proceed.
2. Identify split points (see `rules/code-architecture.md`).
3. Tell the agent: "Split [file] into [logical parts] following the 500-line rule."
4. Update all three tiers of the index after the split.

### "I want to switch to a different IDE agent"
1. Finish the current task and commit.
2. Trigger the Switch Protocol.
3. Switch adapters (e.g., from Claude to Antigravity).
4. The new agent will natively read `AGENT.md` upon activation.

---

## Error Recovery Flowchart

```text
ERROR DETECTED
│
├── Is it a build/compile error?
│   └── Read the error message → fix the specific line → build again
│
├── Is it a test failure?
│   └── Read the test + the code under test → debug per debugging.md
│
├── Is it agent drift?
│   └── Re-anchor (see above) → compact session → continue
│
├── Is it an architectural mistake?
│   └── STOP → document mistake → re-run Planning Kit Phase 5 if needed
│
├── Is it a missing feature?
│   └── Check: is it in scope? → add to next milestone if yes, defer if no
│
└── Is it a lost context issue?
    └── Re-read AGENT.md + project-map.md → continue from progress.md state
```
