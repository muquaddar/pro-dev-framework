# Task Lens: Auth Flow

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Template
> **Pre-computed Tier 1 view for authentication work.**

---

## When to Use This Lens

You're working on: login, signup, tokens, sessions, roles, permissions, or protected routes.

## Files You'll Need

### Auth Service Files
| File | Lines | Interface |
|---|---|---|
| `[services/auth.service.ts]` | [N] | `authenticate()`, `createUser()`, `refreshToken()` |

### Auth Middleware Files
| File | Lines | Interface |
|---|---|---|
| `[middleware/auth.middleware.ts]` | [N] | `requireAuth`, `requireAdmin`, `requireRole()` |

### Auth Route Files
| File | Lines | Interface |
|---|---|---|
| `[routes/auth.routes.ts]` | [N] | `POST /auth/signup`, `/login`, `/refresh`, `/logout` |

### Session/Token Files
| File | Lines | Interface |
|---|---|---|
| `[lib/jwt.ts]` or `[lib/session.ts]` | [N] | Token generation, validation, refresh |

### User Model Files
| File | Lines | Interface |
|---|---|---|
| `[models/user.ts]` | [N] | `User { id, email, passwordHash, role }` |

### Auth UI Files (if applicable)
| File | Lines | Interface |
|---|---|---|
| `[pages/login.tsx]` | [N] | Login form UI |
| `[pages/signup.tsx]` | [N] | Signup form UI |
| `[hooks/useAuth.ts]` | [N] | Auth state hook |

---

## ⚠️ Security Gate

Working on auth code triggers **Gate 3 (Security Review)**. The agent MUST stop and present the approach for human approval before implementing auth changes.

## Typical Workflow

1. Read existing auth service + middleware.
2. Implement the change (follow Gate 3 if required).
3. Update auth types/schemas.
4. Add test cases (auth is always tested).
5. Verify protected routes still work.
6. Update `docs/api-spec.md` if endpoints changed.
