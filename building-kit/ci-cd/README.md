# CI/CD Templates — Adaptation Guide

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 5 (Verify) | **Category:** CI/CD
> **Template file:** `github-actions-test.yml`

---

## Overview

The `github-actions-test.yml` template provides a GitHub Actions workflow for running tests and linting on every push and pull request. It ships with commented-out blocks for each supported stack — uncomment the one matching your project.

---

## Quick Setup

1. Copy `github-actions-test.yml` to your project:
   ```bash
   mkdir -p .github/workflows
   cp path/to/building-kit/ci-cd/github-actions-test.yml .github/workflows/test.yml
   ```

2. Open `.github/workflows/test.yml`

3. Uncomment the block matching your stack (see sections below)

4. Delete or leave the other blocks commented out

5. Commit and push — the workflow will run on the next push to `main` or `dev`

---

## Stack-Specific Configuration

### Node.js (Next.js / Express / Vite)

```yaml
strategy:
  matrix:
    node-version: [18, 20]
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
    with:
      node-version: ${{ matrix.node-version }}
      cache: 'npm'
  - run: npm ci
  - run: npm run lint
  - run: npm test
```

**Optional additions:**
- **Coverage reporting:** Add `-- --coverage` to the test command, then use `actions/upload-artifact@v4` to save the report.
- **Build check:** Add `- run: npm run build` after tests to verify production builds.
- **E2E tests:** Add Playwright or Cypress after the unit tests.

### Python (FastAPI / Django / Flask)

```yaml
strategy:
  matrix:
    python-version: ['3.11', '3.12']
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-python@v5
    with:
      python-version: ${{ matrix.python-version }}
  - run: pip install -e ".[dev]"
  - run: ruff check .
  - run: pytest --cov=src
```

**Optional additions:**
- **Type checking:** Add `- run: mypy src/` after linting.
- **Coverage threshold:** Add `--cov-fail-under=60` (Standard) or `80` (Enterprise) to the pytest command.

### Flutter (Mobile / Web / Desktop)

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: subosito/flutter-action@v2
    with:
      flutter-version: '3.x'
  - run: flutter pub get
  - run: dart analyze
  - run: flutter test
```

**Optional additions:**
- **Coverage:** Add `--coverage` flag to `flutter test`, then use `very_good_coverage` action to enforce thresholds.
- **Build check:** Add `flutter build apk --debug` to verify the Android build.
- **Golden tests:** Add `--update-goldens` in a separate job for visual regression.

### .NET (WPF / WinUI / ASP.NET)

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-dotnet@v4
    with:
      dotnet-version: '8.x'
  - run: dotnet restore
  - run: dotnet build --no-restore
  - run: dotnet test --no-build
```

**Optional additions:**
- **Code analysis:** Add `- run: dotnet format --verify-no-changes` for formatting checks.
- **Coverage:** Add `--collect:"XPlat Code Coverage"` to the test command.

### Unity

Unity CI requires a paid Unity license for automated builds. Options:

1. **GameCI Actions** (recommended):
   ```yaml
   steps:
     - uses: actions/checkout@v4
     - uses: game-ci/unity-test-runner@v4
       with:
         projectPath: .
         unityVersion: auto
   ```
   Requires: `UNITY_LICENSE`, `UNITY_EMAIL`, `UNITY_PASSWORD` as repository secrets.

2. **Manual approach:** Run `dotnet test` on assembly-definition-based test projects only.

---

## Adding PDF Index Generation to CI

You can add the codebase index generator as a CI check to verify indexes stay current:

```yaml
- name: Verify codebase index is current
  run: |
    node path/to/building-kit/scripts/generate-codebase-index.js
    git diff --exit-code docs/
```

This fails the build if the generated index differs from what's committed — catching stale indexes.

---

## Tier-Based CI Configuration

| Feature | Lite | Standard | Enterprise |
|---|---|---|---|
| Run tests on push | Optional | ✅ Required | ✅ Required |
| Coverage threshold | None | 60% | 80% |
| Lint check | Optional | ✅ Required | ✅ Required |
| Build verification | Optional | Optional | ✅ Required |
| Security audit | Skip | Optional | ✅ Required |
| Index verification | Skip | Optional | ✅ Required |

---

## Branch Protection (Recommended for Standard+)

Configure branch protection rules on `main`:
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Require pull request reviews (Enterprise: 2 reviewers)
