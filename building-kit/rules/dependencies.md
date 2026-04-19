# Rule: Dependencies

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** High

---

## Adding Dependencies

### Before Installing ANY Package

1. **Is it necessary?** Can the functionality be written in < 50 lines? If yes, write it — don't add a dependency.
2. **Is it maintained?** Check: last commit date, open issues count, download stats.
3. **Is it the right size?** Don't install a 500KB library for one utility function. Check if a lighter alternative exists.
4. **Does it conflict?** Check for version conflicts with existing dependencies.

### Agent Rule
- **STOP and ask the human** before adding any dependency not already in the Phase 5 Architecture doc, via **GATE-03**.
- Show: package name, purpose, size, maintenance status, and alternatives.

---

## Package File Hygiene

- Keep `package.json` / `pubspec.yaml` / `requirements.txt` clean.
- Remove unused dependencies promptly.
- Pin versions for production (`"react": "18.2.0"` not `"react": "^18"`).
- Use lock files (`package-lock.json`, `pubspec.lock`, `poetry.lock`).
- Never commit `node_modules/`, `__pycache__/`, or equivalent.

---

## Dependency Categories

| Category | Where to Declare | Examples |
|---|---|---|
| **Runtime** | dependencies | react, express, fastapi |
| **Dev-only** | devDependencies | jest, eslint, pytest |
| **Peer** | peerDependencies | react (for component libraries) |
| **Optional** | optionalDependencies | platform-specific binaries |

---

## Security

- Run `npm audit` / `pip-audit` / `flutter pub outdated` before each milestone release.
- Address **critical** vulnerabilities immediately.
- Address **high** vulnerabilities before release.
- **Medium/low** can be tracked and deferred (note in progress.md).

---

## Updating Dependencies

- Don't update all dependencies at once.
- Update one at a time, run tests, commit.
- Major version updates require human approval (potential breaking changes).
- Schedule dependency updates at milestone boundaries, not mid-milestone.
