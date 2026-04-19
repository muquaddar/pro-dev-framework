# Architectural Decision Records (ADR) Log

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Project Doc
> **Required for:** Standard (major decisions), Enterprise (all decisions)
> Index of all ADRs. Individual ADRs use `memory/adr-template.md`.

---

## ADR Index

| # | Date | Title | Status | Impact |
|---|---|---|---|---|
| ADR-001 | [date] | [decision title] | Accepted / Superseded / Deprecated | [High/Medium/Low] |

---

## How to Use

1. When making an architectural decision, create a new ADR using `memory/adr-template.md` (or inline if lite).
2. Save as `specs/adr/ADR-NNN-[title].md`.
3. Add an entry to this index.
4. Reference in `AGENT.md` if the decision affects daily work.

### What Warrants an ADR

**Always (Enterprise):**
- Technology selection (framework, library, service)
- Architecture pattern (monolith vs microservices, state management)
- Data model changes (new entities, relationship changes)
- Security decisions (auth approach, encryption)
- Infrastructure decisions (hosting, CI/CD)

**Major Only (Standard):**
- Technology switches after Phase 2 (Strategy)
- Major refactoring decisions
- Breaking changes to APIs or data models
- Third-party service changes

**Skip (Lite):**
- ADRs are not strictly required for Lite tier projects
