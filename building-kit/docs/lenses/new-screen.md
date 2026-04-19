# Task Lens: New Screen / Page

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> **Pre-computed Tier 1 view for UI work. Load this instead of individual domain indexes.**

---

## When to Use This Lens

You're working on: building a new screen, page, view, or UI panel.

## Files You'll Need

### Page/Screen Files
| File | Lines | Interface |
|---|---|---|
| `[pages/existing-page.tsx]` | [N] | Reference pattern for new page |
| `[pages/new-page.tsx]` | NEW | The page you're creating |

### Component Files
| File | Lines | Interface |
|---|---|---|
| `[components/shared/Button.tsx]` | [N] | Reusable primitives |
| `[components/domain/ExistingCard.tsx]` | [N] | Similar composed component |

### Hook / State Files
| File | Lines | Interface |
|---|---|---|
| `[hooks/useResource.ts]` | [N] | Data fetching hook |
| `[providers/resource.provider.ts]` | [N] | State management |

### API Client Files
| File | Lines | Interface |
|---|---|---|
| `[lib/api-client.ts]` | [N] | `api.get()`, `api.post()`, etc. |
| `[lib/api/resource.ts]` | [N] | Resource-specific API calls |

### Route/Navigation Files
| File | Lines | Interface |
|---|---|---|
| `[app/routes.ts]` | [N] | Route definitions — add new route |

---

## Typical Workflow

1. Read existing similar page as reference pattern.
2. Create new page component (layout + sections).
3. Create domain-specific components (cards, lists, forms).
4. Create/modify data fetching hook or state.
5. Add route entry.
6. Wire up navigation from existing pages.
7. Handle all states: empty, loading, error, populated.
8. Add to `docs/screen-map.md`.
9. Update Tier 1 index for UI domain.
