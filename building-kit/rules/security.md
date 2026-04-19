# Rule: Security

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** High

---

## Core Security Principles

### Principle 1: Defense in Depth
Don't rely on a single security layer. Validate at the API, validate at the database, validate in the UI.

### Principle 2: Least Privilege
Everything gets minimum permissions. Database users, API keys, file access, agent permissions.

### Principle 3: Fail Closed
When in doubt, deny. An error in auth logic should result in "access denied," not "access granted."

---

## Mandatory Security Practices (All Tiers)

### Secrets Management
- [ ] **Never** hardcode secrets, API keys, or passwords in source code.
- [ ] Store secrets in environment variables (`.env` files, not committed).
- [ ] `.env` is in `.gitignore`.
- [ ] `.env.example` exists with placeholder values.
- [ ] No secrets in logs, error messages, or API responses.

### Input Validation
- [ ] Validate ALL user input on the server side (client-side validation is UX, not security).
- [ ] Use parameterized queries or ORM (never string-concatenated SQL).
- [ ] Sanitize output to prevent XSS (encode HTML entities).
- [ ] Validate file uploads (check MIME type, size, content — not just extension).
- [ ] Limit request body size.

### Authentication
- [ ] Hash passwords with bcrypt, argon2, or scrypt (not MD5, SHA1, SHA256).
- [ ] Enforce minimum password requirements.
- [ ] Rate-limit login attempts (max 5 per minute per IP).
- [ ] Tokens/sessions expire within reasonable time.
- [ ] Logout actually invalidates the session/token.

### Authorization
- [ ] Every endpoint checks: is the user authenticated?
- [ ] Every endpoint checks: does the user have permission for THIS resource?
- [ ] Resource ownership verified (user A can't access user B's data).
- [ ] Admin actions require admin role.

### HTTPS & Transport
- [ ] HTTPS enforced in production.
- [ ] CORS configured to allow only trusted origins (never `*` in production).
- [ ] Security headers set: `X-Content-Type-Options`, `X-Frame-Options`, CSP.

---

## Gate 3 Trigger

When writing security-sensitive code, the agent MUST trigger Gate 3 (Security Review). See `gates/GATE-03-security.md` for trigger conditions.

---

## Sandboxing & Agent Security

### Least Agency for AI Agents
- Agent should not have unrestricted file system access.
- Agent should not make arbitrary network requests.
- Agent should not install system packages without approval.
- Agent should not modify environment variables in production.
- Agent should ask before modifying security-related code.

### Deny List (configure per project)
```
Paths:  ~/.ssh, ~/.aws, ~/.config/gcloud, ~/.*credentials*
Commands: rm -rf, DROP, TRUNCATE, shutdown, curl (unrestricted)
Files: .env, *.pem, *.key, *secret*, *credential*
```

---

## Security Checklist Before Release

Use this checklist at Gate 4 (Milestone Acceptance / Pre-Release):

- [ ] `npm audit` / `pip-audit` / `flutter pub outdated` shows no critical vulnerabilities.
- [ ] No secrets in git history (`git log --all -p | grep -i "password\|secret\|key"`).
- [ ] Error responses don't leak stack traces or internal paths.
- [ ] Admin endpoints require admin authentication.
- [ ] File upload paths don't allow directory traversal.
