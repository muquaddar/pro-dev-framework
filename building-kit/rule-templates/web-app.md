# Stack Template: Web Apps (React / Next.js / Vue + Node / Express / FastAPI)

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule Template
> **Applies to:** React, Next.js, Vue, Angular, Svelte | **Priority:** Medium

---

## Project Structure
```text
frontend/src/
├── app/              # Pages/routes (Next.js App Router or equivalent)
├── components/       # UI components organized by domain
│   ├── shared/       # Reusable primitives (Button, Input, Card)
│   └── [domain]/     # Domain-specific (CourseCard, UserAvatar)
├── lib/              # API client, auth, utils, types
├── hooks/            # Custom hooks
└── styles/           # Global styles, design tokens

backend/src/
├── routes/           # API endpoints by resource
├── services/         # Business logic
├── models/           # Database schemas/entities
├── middleware/       # Auth, validation, error handling
└── utils/            # Helpers, config, constants
```

## Frontend Rules
- Components are functional. No class components.
- One component per file. File name matches component name.
- Custom hooks extract reusable logic from components.
- API calls go through a centralized API client (never `fetch` directly in components).
- UI state in component. Server state in data-fetching hooks/stores.
- No inline styles. Use design tokens from CSS variables / theme.
- Images are optimized and lazy-loaded.

## Backend Rules
- Route handlers are thin — delegate to service functions.
- Services contain business logic. Services never import from routes.
- Middleware handles cross-cutting: auth, validation, error formatting, logging.
- Error responses follow consistent format: `{ error: string, code: string }`.
- All endpoints return appropriate HTTP status codes.
- Pagination on list endpoints: `?page=1&limit=20`.

## API Rules
- RESTful URL structure: `/[resource]`, `/[resource]/:id`
- Plural nouns for resources: `/users`, not `/user`
- Consistent verbs: GET (read), POST (create), PUT (update), DELETE (remove)
- Version prefix if public API: `/api/v1/[resource]`
- CORS configured for allowed origins only

## Database Rules
- Use ORM/query builder (never raw SQL in route handlers)
- Migrations for schema changes (never manual DB modifications)
- Seed data for development environment
- Indexes on frequently-queried columns
- Soft delete where data retention matters
