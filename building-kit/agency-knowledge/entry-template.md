# Skill: {{Descriptive Title}}

> **Source:** {{ProjectName}} {{ADR-NNN}} | **Kit:** Building Kit
> **Category:** Agency Knowledge | **Added:** {{YYYY-MM-DD}}
> **Tags:** {{comma-separated tags from _index.md tag convention}}

---

## When to Apply

Use this skill when: {{Describe the trigger. Be specific enough that an agent can pattern-match.
e.g., "implementing camera capture on Android and needing <500ms watermark burn-in"
e.g., "adding a new database entity to a sqflite project"
e.g., "configuring GPS on Android and needing high accuracy"}}

---

## The Decision

{{The chosen approach in 2-4 sentences. What is done, at what layer, and with what tool/library.}}

---

## Why This Choice

- {{Benefit 1}}
- {{Benefit 2}}
- {{Benefit 3 — optional}}

---

## What NOT to Use (and Why)

- {{Alternative 1}} — rejected because {{reason}}
- {{Alternative 2}} — rejected because {{reason}}

---

## Gotchas / Traps

- ⚠️ {{Trap 1 — the constraint that surprised us}}
- ⚠️ {{Trap 2 — the edge case or migration concern}}

---

## Example Pattern

```{{language}}
// Minimal example — keep under 30 lines.
// Show the key structure, not a complete implementation.
```

---

## Source Project Context

- **Project:** {{ProjectName}}
- **ADR:** {{ADR-NNN}} in `{{relative/path/to/docs/adr-log.md}}`
- **Context:** {{1-2 sentences summarizing why the project needed this decision.}}
