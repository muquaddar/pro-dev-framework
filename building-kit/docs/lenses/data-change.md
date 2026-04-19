# Task Lens: Data Change

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> **Pre-computed Tier 1 view for model/database work.**

---

## When to Use This Lens

You're working on: adding/modifying entities, database schema changes, migrations, or seed data.

## Files You'll Need

### Model/Entity Files
| File | Lines | Interface |
|---|---|---|
| `[models/entity.ts]` | [N] | Entity schema definition |
| `[models/index.ts]` | [N] | Model barrel file / registry |

### Migration Files
| File | Lines | Interface |
|---|---|---|
| `[migrations/NNNN_description.ts]` | [N] | Schema change migration |
| `[migrations/NNNN_seed.ts]` | [N] | Seed data |

### Repository/Data Access Files
| File | Lines | Interface |
|---|---|---|
| `[repositories/entity.repo.ts]` | [N] | CRUD operations for entity |

### Service Files (Business Logic)
| File | Lines | Interface |
|---|---|---|
| `[services/entity.service.ts]` | [N] | Business rules for entity |

### Type/Schema Files
| File | Lines | Interface |
|---|---|---|
| `[types/entity.types.ts]` | [N] | DTOs, request/response schemas |

---

## ⚠️ Pre-Release Review

Database schema changes on existing data trigger strict checklist scrutiny at **Gate 4 (Acceptance)**. Check:
- Are you removing or renaming columns with existing data?
- Are you changing column types?
- Are you modifying foreign key relationships?

If yes → present migration plan to human before executing.

## Typical Workflow

1. Read existing model + related service.
2. Modify model/schema definition.
3. Generate migration (never manual DB changes).
4. Update service if business logic changed.
5. Update types/DTOs.
6. Update API routes if response shape changed.
7. Add seed data if needed.
8. Run migration + verify.
9. Update `docs/data-model.md`.
10. Update Tier 1 index for data domain.
