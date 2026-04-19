# Task Lens: API Endpoint

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> **Pre-computed Tier 1 view for API work. Load this instead of individual domain indexes.**

---

## When to Use This Lens

You're working on: adding, modifying, or debugging an API endpoint.

## Files You'll Need

### Route/Handler Files
| File | Lines | Interface |
|---|---|---|
| `[routes/resource.ts]` | [N] | `GET /resource`, `POST /resource`, etc. |

### Service/Logic Files
| File | Lines | Interface |
|---|---|---|
| `[services/resource.service.ts]` | [N] | `create()`, `findAll()`, `findById()`, `update()`, `delete()` |

### Model/Schema Files
| File | Lines | Interface |
|---|---|---|
| `[models/resource.ts]` | [N] | `Resource { id, name, ... }` |

### Middleware Files
| File | Lines | Interface |
|---|---|---|
| `[middleware/auth.ts]` | [N] | `requireAuth`, `requireRole()` |
| `[middleware/validate.ts]` | [N] | `validate(schema)` |

### Type/Schema Files
| File | Lines | Interface |
|---|---|---|
| `[types/resource.types.ts]` | [N] | `CreateRequest`, `UpdateRequest`, `Response` |

---

## Typical Workflow

1. Read existing similar route as reference pattern.
2. Create/modify route handler (thin — delegates to service).
3. Create/modify service function (business logic).
4. Create/modify types (request/response schemas).
5. Update model if new fields needed.
6. Add tests for route + service.
7. Update `docs/api-spec.md`.
8. Update Tier 1 index for affected domain.
