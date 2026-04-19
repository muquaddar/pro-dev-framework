# Session Learning Log

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Purpose:** Captures reusable patterns and lessons learned during a session.
> Patterns marked as skill candidates can be promoted to the skill library.
> **Save to:** `memory/learnings/[YYYY-MM-DD]-[topic].md`

---

## Session Info

| Field | Value |
|---|---|
| **Date** | [YYYY-MM-DD] |
| **Agent** | [agent name] |
| **Milestone** | M[N] — [name] |
| **Domain(s) Worked** | [domains touched, e.g., auth, content, shared] |

---

## Patterns Discovered

### Pattern 1: [Pattern Name]

| Field | Value |
|---|---|
| **Domain** | [e.g., flutter, backend, database] |
| **Problem** | [what problem this solved] |
| **Skill Candidate?** | ✅ Yes / ❌ No |

**Solution:**
[Description of the pattern or technique]

**Code Example:**
```[language]
[working code snippet]
```

**Gotchas:**
1. [Common mistake or edge case]
2. [Another pitfall]

---

### Pattern 2: [Pattern Name]

[Repeat the same structure]

---

## Mistakes & Corrections

| What Went Wrong | Root Cause | Fix Applied | Prevention |
|---|---|---|---|
| [description] | [why it happened] | [how it was fixed] | [how to prevent next time] |

---

## Tool & Library Notes

| Tool/Library | Version | Notes |
|---|---|---|
| [name] | [version] | [important finding: API change, deprecation, gotcha, etc.] |

---

## Skill Promotion Checklist

For each pattern marked **Skill Candidate = ✅**:

- [ ] Create skill file: `[skills-dir]/[domain]/[skill-name].md`
- [ ] Add YAML frontmatter per `skill-file-format.md`
- [ ] Write full skill body (Problem → Solution → Code → Gotchas → When NOT to Use)
- [ ] Run `node scripts/generate-skill-index.js` to update indexes
- [ ] Remove from this learning log (it now lives in the skill library)

---

## Notes for Future Sessions

[Free-form notes about things to remember, approaches to try next time,
or hypotheses to test. This section is for the human or future agent.]
