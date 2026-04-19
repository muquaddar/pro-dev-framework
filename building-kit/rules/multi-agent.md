# Rule: Multi-Agent Parallelization

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 4 (Build) | **Category:** Rule
> **Applies to:** Building Kit (All IDE Agents) | **Priority:** Medium

---

## When to Use Multiple Agents

- Working on independent features simultaneously.
- Using different agents for different tasks (e.g., one for backend, one for frontend).
- Pair-reviewing: one agent writes, another reviews.

---

## Coordination Rules

### Rule 1: File Ownership
Each agent instance owns a distinct set of files. No two agents modify the same file simultaneously.

```markdown
## Agent A — Feature: Auth
Owns:
- src/features/auth/**
- docs/index/auth.md
- tests/features/auth/**

## Agent B — Feature: Dashboard
Owns:
- src/features/dashboard/**
- docs/index/dashboard.md
- tests/features/dashboard/**

## Shared (NO agent modifies without coordination):
- AGENT.md
- docs/project-map.md
- docs/progress.md
- src/shared/**
```

### Rule 2: Git Worktrees
Use git worktrees for true parallel development:
```bash
# Create worktree for second feature
git worktree add ../project-feature-b feature/feature-b

# Each agent works in its own directory
# Agent A: /project (main worktree)
# Agent B: /project-feature-b (added worktree)
```

### Rule 3: Shared File Protocol
When an agent needs to modify a shared file:
1. **STOP** and notify the human.
2. Human ensures the other agent is not currently modifying it.
3. Agent makes the change + commits.
4. Other agent pulls/rebases before touching shared files.

### Rule 4: Index Updates
- Each agent updates indexes only for its owned domains.
- `docs/project-map.md` (Tier 0) updates go through the human.
- Domain-level indexes are agent-owned (no conflicts).

---

## Merge Strategy

```
main
  └── dev
       ├── feature/auth         ← Agent A
       └── feature/dashboard    ← Agent B

# When both features are done:
git checkout dev
git merge feature/auth
git merge feature/dashboard    # resolve conflicts if any
# Integration test
# If clean → merge to main
```

---

## Conflict Resolution

| Conflict Type | Resolution |
|---|---|
| Both modified same file | Human decides which version to keep |
| Both modified shared type/interface | Merge both changes, run type checker |
| Both added same dependency | Keep one, verify version compatibility |
| Architectural disagreement | Human decides, log in ADR |

---

## Anti-Patterns

❌ **Don't** let agents work on the same feature branch.
❌ **Don't** let agents modify AGENT.md or project-map.md simultaneously.
❌ **Don't** merge without running integration tests.
❌ **Don't** skip the file ownership declaration.
