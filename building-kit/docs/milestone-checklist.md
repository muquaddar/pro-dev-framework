# Milestone Review Checklist

> **Version:** PDF v1.0.0 | **Kit:** Building Kit
> **Stage:** 5 (Verify) | **Category:** Project Doc
> Run through this before tagging and releasing any milestone.
> See also: `gates/GATE-04-acceptance.md` for the formal gate.

---

## Functionality
- [ ] All tasks in `docs/progress.md` for this milestone are checked off
- [ ] Core feature works end-to-end (user can complete primary workflow)
- [ ] Auth works: signup → login → use app → logout (if applicable)
- [ ] Error states show meaningful messages (not blank screens or raw errors)
- [ ] Empty states show helpful content (not blank pages)
- [ ] Loading states display properly (no flash of unstyled content)

## Code Quality
- [ ] No file exceeds 500 lines (Rule: Code Architecture)
- [ ] No `console.log` / `print` debugging statements left in code
- [ ] No hardcoded values that should be config/environment variables
- [ ] No TODO comments for things that should be done in THIS milestone
- [ ] No unused imports or dead code
- [ ] Consistent naming conventions throughout

## Tests (Tier-Dependent)
- [ ] **(Lite):** Manual smoke test — core workflow works
- [ ] **(Standard):** Automated tests pass with ≥ 60% coverage
- [ ] **(Enterprise):** Automated tests pass with ≥ 80% coverage

## Data (if applicable)
- [ ] Database schema matches the data model doc
- [ ] Required fields are enforced
- [ ] Foreign key relationships are correct
- [ ] No orphaned data possible (cascading deletes where needed)
- [ ] Seed data or migration exists for initial setup

## Security
- [ ] No API keys or secrets in source code
- [ ] Auth tokens expire
- [ ] Protected endpoints reject unauthenticated requests
- [ ] Users can only access their own data (unless admin)
- [ ] Input validation on all user-facing endpoints
- [ ] **(Enterprise):** Security checklist from Phase 6 passes

## Docs & Index
- [ ] `docs/project-map.md` (Tier 0) is current
- [ ] `docs/index/[domain].md` (Tier 1) files are current
- [ ] `docs/progress.md` milestone section is fully checked off
- [ ] `AGENT.md` "What's Built" reflects current state
- [ ] `.env.example` has all required variables documented
- [ ] README has setup instructions that work from scratch
- [ ] **(Standard+):** ADR log is current for this milestone's decisions

## Release
- [ ] All changes committed to dev branch
- [ ] App runs from clean install (clone → install → configure → run)
- [ ] Tag: `git tag v0.[N].0 -m "M[N]: [milestone name]"`
- [ ] **(Standard+):** Gate 4 approval received
