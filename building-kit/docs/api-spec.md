# API Specification

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Project Doc
> Fill from Phase 5 Architecture. Agent loads on demand for API work.

---

## Base URL
- Development: `http://localhost:[PORT]/api`
- Production: `[production URL]`

## Authentication
- Method: [JWT / session / API key]
- Header: `Authorization: Bearer [token]`

## Standard Error Format
```json
{
  "error": "Human-readable message",
  "code": "ERROR_CODE"
}
```

---

## Endpoints

### Auth

#### POST /auth/signup
<!-- Purpose, request, response, errors -->

#### POST /auth/login
<!-- Purpose, request, response, errors -->

#### POST /auth/refresh
<!-- If applicable -->

#### POST /auth/logout
<!-- If applicable -->

---

### [Resource 1]

#### GET /[resource]
<!-- List endpoint — pagination, filters -->

#### POST /[resource]
<!-- Create endpoint — request body, validation -->

#### GET /[resource]/:id
<!-- Detail endpoint -->

#### PUT /[resource]/:id
<!-- Update endpoint -->

#### DELETE /[resource]/:id
<!-- Delete endpoint -->

---

<!-- Add sections for each resource group -->
