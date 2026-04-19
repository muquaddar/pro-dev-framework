# Data Model

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Project Doc
> Fill from Phase 5 Architecture. Agent loads on demand for data work.

---

## Entity Relationship Summary

```text
[Entity A] (1) → (N) [Entity B] [relationship description]
[Entity B] (N) ← → (N) [Entity C] [via JoinTable]
```

---

## Entities

### [Entity Name] (table: [table_name])

| Column | Type | Constraints | Description |
|---|---|---|---|
| id | uuid / int | PK, auto | Unique identifier |
| [column] | [type] | [constraints] | [description] |
| created_at | timestamp | NOT NULL, default now() | Creation time |
| updated_at | timestamp | NOT NULL, auto | Last modified |

**Relationships:**
- [has many / belongs to / many-to-many] [Entity]

**Indexes:**
- [column(s)] — [reason]

**Invariants:**
- [business rule] — enforced at: [DB / app / both]

---

<!-- Add sections for each entity -->
