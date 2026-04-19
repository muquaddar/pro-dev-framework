# ADR-[NNN]: [Decision Title]

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 3-5 (Scaffold / Build / Verify) | **Category:** Memory Template
> **Save to:** `memory/adrs/ADR-[NNN]-[kebab-case-title].md`
> **Register in:** `docs/adr-log.md`

---

## Status

**[PROPOSED | ACCEPTED | DEPRECATED | SUPERSEDED by ADR-NNN]**

---

## Context

[What is the issue? What forces are at play? Why does this decision need to be made now?
Include technical constraints, business requirements, and any relevant background.
1-3 paragraphs.]

---

## Decision

[What is the decision? State it clearly in 1-2 sentences.
Example: "We will use Riverpod for state management instead of Bloc."]

---

## Rationale

[Why was this option chosen over the alternatives? Reference the comparison below.]

---

## Alternatives Considered

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| **[Option A — chosen]** | [advantages] | [disadvantages] | ✅ Selected |
| [Option B] | [advantages] | [disadvantages] | ❌ Rejected |
| [Option C] | [advantages] | [disadvantages] | ❌ Rejected |

---

## Consequences

### Positive
- [Expected benefit 1]
- [Expected benefit 2]

### Negative
- [Known trade-off 1]
- [Known trade-off 2]

### Risks
- [Risk and mitigation plan]

---

## Affected Components

| Component | Impact |
|---|---|
| [module/file/area] | [what changes] |

---

## Metadata

| Field | Value |
|---|---|
| **Date** | [YYYY-MM-DD] |
| **Author** | [human / agent name] |
| **Milestone** | M[N] |
| **Stakeholders consulted** | [names or roles] |
| **Related ADRs** | [ADR-NNN, ADR-NNN, or "none"] |

---

<!--
EXAMPLE:

# ADR-001: Use Riverpod for State Management

## Status
ACCEPTED

## Context
The app requires reactive state management for async data (API calls, local storage)
and UI state. The team has experience with Provider but needs better testability
and code generation support.

## Decision
We will use Riverpod 2.x with code generation (@riverpod annotation)
for all state management in the application.

## Rationale
Riverpod provides compile-time safety, automatic disposal, and better testing
support than Provider. The code generation reduces boilerplate significantly.

## Alternatives Considered
| Option | Pros | Cons | Verdict |
|---|---|---|---|
| **Riverpod 2.x** | Type-safe, testable, codegen, auto-dispose | Learning curve, build_runner required | ✅ Selected |
| Bloc | Well-documented, separation of concerns | Verbose, more boilerplate | ❌ Rejected |
| GetX | Simple API, minimal boilerplate | Poor testability, tight coupling | ❌ Rejected |

## Consequences
### Positive
- Compile-time errors instead of runtime errors for missing providers
- Easy unit testing with provider overrides
### Negative
- Requires build_runner for code generation (adds build step)
- Developers must learn Riverpod-specific patterns
-->
