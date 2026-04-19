# Rule: Git Workflow

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** High

---

## Commit Discipline

### Commit Message Format
```
type: description (max 72 chars)

[optional body — what and why, not how]
```

### Types
- `feat:` — New feature or capability
- `fix:` — Bug fix
- `refactor:` — Code restructure without behavior change
- `test:` — Adding or updating tests
- `docs:` — Documentation only
- `chore:` — Build, config, tooling changes
- `style:` — Formatting, whitespace (no logic change)

### Rules
- Every commit must leave the project in a buildable/runnable state.
- Commit after each logical unit of work (not at end of session).
- One feature/fix per commit — don't bundle unrelated changes.
- Never commit secrets, .env files, or credentials.

---

## Branch Strategy

### Simple (Solo AI Agent / Lite Tier)
```
main ← stable, tagged releases
  └── dev ← active development (merge to main at milestone end)
```

### Standard (Multi-Agent / Standard Tier)
```
main ← production-ready
  └── dev ← integration branch
       ├── feature/[name] ← feature branches
       ├── fix/[name] ← bug fixes
       └── refactor/[name] ← restructuring
```

### Rules
- `main` is always deployable.
- Feature branches branch from `dev`, merge back to `dev`.
- Tag releases on `main`: `v0.N.0` for milestone N.
- Delete branches after merge.

---

## Milestone Tagging

```bash
# After milestone completion + Gate 4 approval:
git checkout main
git merge dev
git tag v0.N.0 -m "M[N]: [milestone name]"
git push origin main --tags
```

---

## Recovery Procedures

### "I broke something and can't figure out what"
```bash
git stash                    # Save current changes
git log --oneline -10        # Find last good commit
git diff [good-commit] HEAD  # See what changed
```

### "I need to undo the last commit"
```bash
git reset --soft HEAD~1      # Undo commit, keep changes staged
# OR
git revert HEAD              # Create reverse commit (safer for shared branches)
```

### "I committed to the wrong branch"
```bash
git log --oneline -1         # Note the commit hash
git reset --soft HEAD~1      # Undo on wrong branch
git stash                    # Stash the changes
git checkout [correct-branch]
git stash pop                # Apply changes
git commit                   # Re-commit on correct branch
```

---

## .gitignore Essentials

Always ignore:
```
node_modules/
.env
.env.local
*.pyc
__pycache__/
.DS_Store
Thumbs.db
*.log
dist/
build/
.next/
coverage/
```
