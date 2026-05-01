---
name: Phase 7 Testing & QA Strategy
description: Test pyramid definition, coverage targets, QA timeline, monitoring setup, and release readiness checklist
type: methodology
version: 1.0.0
---

# Phase 7: Testing & QA Strategy

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit  
> **Purpose:** Define test coverage strategy, QA workflows, monitoring infrastructure, and release criteria  
> **Tier Coverage:** Lite (Core), Standard (Full), Enterprise (Full + Audit)

---

## Overview

Phase 7 establishes the quality assurance foundation before launch. This phase covers:
- Test pyramid strategy (unit/integration/e2e distribution)
- Coverage targets by module and tier
- QA resource allocation and timeline
- Monitoring and observability setup
- Pre-launch release readiness checklist

**Key outputs:**
- `testing-strategy.md` — Test pyramid, coverage targets, timeline
- `qa-plan.md` — Resource allocation, process, testing schedule
- `monitoring-setup.md` — Instrumentation, dashboards, alerting rules
- `release-checklist.md` — Pre-launch verification steps

---

## Bite 1: Test Pyramid & Coverage Strategy

### What is the test pyramid?

```
         🔺 E2E Tests (5%)
        ┌─────────────────┐
        │ UI flows, happy  │
        │ path, main user  │
        │ journeys (slow)  │
        └─────────────────┘
       🔶 Integration Tests (25%)
      ┌─────────────────────────┐
      │ API endpoints, DB, 3rd   │
      │ party services (medium)  │
      └─────────────────────────┘
     🟢 Unit Tests (70%)
    ┌─────────────────────────────┐
    │ Functions, utilities, logic  │
    │ (fast, isolated) (fast)      │
    └─────────────────────────────┘
```

### Three pyramid options:

**Option A: Fast (Lite tier default)**
- Unit: 80% | Integration: 15% | E2E: 5%
- Rationale: Rapid feedback, minimal infra
- Coverage target: 60% line coverage
- Best for: MVP projects, tight deadline

**Option B: Balanced (Standard tier default)**
- Unit: 70% | Integration: 25% | E2E: 5%
- Rationale: Good speed + confidence trade-off
- Coverage target: 75% line coverage
- Best for: Production apps with growth plans

**Option C: Comprehensive (Enterprise tier default)**
- Unit: 60% | Integration: 30% | E2E: 10%
- Rationale: High confidence, slower CI
- Coverage target: 85%+ line coverage, 90%+ critical paths
- Best for: Regulated, high-reliability systems

### Key questions for Bite 1:

1. **Which pyramid option fits your project?**
   - Fast (MVP, tight timeline)
   - Balanced (growth-ready)
   - Comprehensive (regulated/high-reliability)

2. **Coverage targets by module:**
   - Auth: 85%+ (always critical)
   - Payment: 90%+ (financial risk)
   - Core business logic: 75-85%
   - UI/UX: 40-60% (less stable, high churn)

3. **E2E scope:**
   - Happy path only?
   - Happy path + critical error cases?
   - Full user journey coverage?

### Deliverable: Test Pyramid Template

```markdown
# Testing Strategy

## Test Pyramid
- **Option Selected:** [Fast / Balanced / Comprehensive]
- **Rationale:** [Why this option]

## Coverage Targets
| Module | Target | Rationale |
|--------|--------|-----------|
| [Auth] | 85%+ | Critical path |
| [Payment] | 90%+ | Financial risk |
| [Core Logic] | [75-85%] | [reason] |
| [UI] | [40-60%] | [reason] |

## Critical Paths (100% coverage required)
- Authentication flows
- Payment processing
- Data validation
- Error handling in [specific areas]
```

---

## Bite 2: Coverage Targets & QA Timeline

### Coverage targets by tier:

**Lite Tier:**
- Overall line coverage: 60%
- Critical paths: 80%
- Test count: 100-300 total
- Manual testing: 1-2 days pre-launch
- CI time: <5 min

**Standard Tier:**
- Overall line coverage: 75%
- Critical paths: 85%
- Test count: 300-800 total
- Manual testing: 3-5 days
- CI time: 5-15 min

**Enterprise Tier:**
- Overall line coverage: 85%+
- Critical paths: 95%+
- Test count: 800-2000+ total
- Manual testing: 1-2 weeks (documented)
- CI time: 15-30 min
- Load testing: Yes (target: 1000 RPS)
- Accessibility audit: Yes

### QA timeline template:

```
Week 1-2: Test infrastructure setup
  - Test runners, CI integration, coverage reporting
  - Mock/stub strategy finalized
  
Week 2-4: Unit test writing (core modules first)
  - Auth, validation, business logic
  - Parallel: Integration test harnesses
  
Week 4-6: Integration tests
  - API contracts, DB interactions, 3rd party mocks
  
Week 6-7: E2E tests + manual UAT
  - Happy path flows
  - Manual regression testing
  
Week 7 (Pre-launch): Final checklist
  - Coverage reports
  - Performance baselines
  - Security scans
```

### Key questions for Bite 2:

1. **When does QA start?** (Week 1? Week 3? Already started?)
2. **Manual testing scope?** (Regression? Ad-hoc? Exploratory?)
3. **CI/CD gates?** (Block merge on <X% coverage? Always run tests?)

### Deliverable: QA Timeline

```markdown
# QA Timeline & Coverage Plan

## Coverage Targets
- Overall line: [X]%
- Critical paths: [Y]%
- Test count goal: [N]

## Timeline
| Week | Milestone | Owner |
|------|-----------|-------|
| [1-2] | Test infrastructure | [person] |
| [2-4] | Unit tests | [person] |
| [4-6] | Integration tests | [person] |
| [6-7] | E2E + UAT | [person] |
| [7] | Final verification | [person] |

## CI/CD Gates
- Merge blocked if coverage < [X]%
- All tests must pass
- Performance baseline: [target metrics]
```

---

## Bite 3: QA Resource Allocation & Process

### Three resource models:

**Model A: Solo Developer (Lite tier)**
- Dev writes all tests (20% time allocation)
- Manual testing: 2 days pre-launch
- No dedicated QA
- Best for: Small teams, tight budget

**Model B: Contractor/Freelance QA (Standard tier)**
- Dev leads test architecture, writes core unit tests
- QA contractor writes integration/E2E tests (~20 hrs/week)
- Manual testing: 3-5 days
- Cost: $2-5K pre-launch

**Model C: Dedicated QA Team (Enterprise tier)**
- QA engineer: Test architecture, test writing
- QA tester: Manual testing, exploratory testing
- Dev: Unit tests + code review
- Timeline: 4-6 weeks, full coverage

### QA process template:

```
1. Code Review → Tests
   Pull request → Tests pass → Code review → Merge
   
2. Regression Testing
   After merge to main: Run full suite
   CI blocks if failures
   
3. Manual Testing Phases
   a) Dev: Local smoke test (5 min)
   b) QA: Regression suite (1-2 days)
   c) Stakeholder: UAT (2-3 days)
   d) Production: Canary release (1 day)
   
4. Test Failure Triage
   - Critical: Fix immediately, run full suite
   - High: Fix before next merge
   - Low: Track, batch weekly
```

### Key questions for Bite 3:

1. **Which resource model?** (Solo / Contractor / Team)
2. **QA ownership:** Dev-led or dedicated QA?
3. **Test review process:** Who reviews tests?

### Deliverable: QA Resource Plan

```markdown
# QA Resource & Process Plan

## Resource Model
- **Selected:** [Solo / Contractor / Team]
- **Timeline:** [weeks]
- **Cost:** $[X]
- **Owner assignments:**
  - Unit tests: [person]
  - Integration tests: [person]
  - E2E tests: [person]
  - Manual testing: [person]

## QA Process
[Flowchart of code → tests → review → merge]

## Testing Schedule
- Unit tests: Written by [date]
- Integration tests: Completed by [date]
- E2E tests: Completed by [date]
- Manual UAT: [dates]
```

---

## Bite 4: Monitoring & Observability Setup

### Core monitoring stack:

**Error tracking (Sentry / Rollbar / LogRocket):**
- Real-time error alerts
- Stack traces with source maps
- User session replay
- Release tracking

**Analytics (Segment / Mixpanel / Firebase):**
- User event tracking
- Funnel analysis
- User retention cohorts
- Performance metrics

**Performance monitoring (New Relic / Datadog / Firebase):**
- API response times
- Database query performance
- Frontend web vitals (CLS, LCP, FID)
- Crash reporting

**Uptime monitoring (UptimeRobot / Pingdom):**
- Website availability checks
- Status page
- Incident alerts

### Pre-launch instrumentation checklist:

```
Frontend:
  ☐ Error tracking initialized
  ☐ Performance monitoring (web vitals)
  ☐ User session tracking
  ☐ Page analytics
  ☐ Conversion funnels
  ☐ Source maps uploaded

Backend:
  ☐ Request logging
  ☐ Error tracking
  ☐ Database query metrics
  ☐ External API call monitoring
  ☐ Auth/security event logging
  ☐ Rate limiting metrics

Infrastructure:
  ☐ CPU/memory alerts
  ☐ Disk space monitoring
  ☐ Network metrics
  ☐ Database connection pool monitoring
  ☐ Uptime monitoring
```

### Key questions for Bite 4:

1. **Error tracking tool?** (Sentry preferred for most; Rollbar for teams)
2. **Analytics tool?** (Firebase for mobile; Segment for web)
3. **Performance monitoring?** (New Relic / Datadog / Firebase)
4. **Alert thresholds?** (Error rate > 1%? Latency > 1s?)

### Deliverable: Monitoring Setup

```markdown
# Monitoring & Observability Plan

## Error Tracking
- **Tool:** [Sentry / Rollbar / LogRocket]
- **Alerts:** > [X]% error rate
- **Dashboards:** [list]

## Analytics
- **Tool:** [Segment / Mixpanel / Firebase]
- **Key events tracked:** [auth, payment, feature usage, etc.]
- **Dashboards:** [list]

## Performance Monitoring
- **Tool:** [New Relic / Datadog]
- **Metrics:** API latency, DB queries, web vitals
- **Alert thresholds:** [values]

## Uptime Monitoring
- **Tool:** [UptimeRobot / Pingdom]
- **Check frequency:** Every [X] minutes
- **Alert contacts:** [emails]

## Pre-Launch Instrumentation
[Checklist with owner assignments]
```

---

## Bite 5: Release Readiness Checklist

### Pre-launch verification (1-2 days before release):

```markdown
# Release Readiness Checklist

## Code Quality
  ☐ All CI/CD tests passing
  ☐ Coverage at target (X%+)
  ☐ No high/critical security vulnerabilities
  ☐ Code review approved
  ☐ Dependencies up-to-date

## Testing
  ☐ Unit tests: 100% passing
  ☐ Integration tests: 100% passing
  ☐ E2E tests: 100% passing (critical paths)
  ☐ Manual regression: Complete
  ☐ Accessibility audit: Pass (WCAG AA minimum)
  ☐ Performance baselines: Established

## Infrastructure
  ☐ Staging environment mirrors production
  ☐ Database migrations tested
  ☐ Backups configured
  ☐ SSL certificates valid
  ☐ CDN configured
  ☐ Rate limiting enabled
  ☐ CORS configured

## Monitoring & Logging
  ☐ Error tracking (Sentry) connected
  ☐ Analytics (Firebase/Segment) configured
  ☐ Performance monitoring active
  ☐ Uptime monitoring active
  ☐ Log aggregation (DataDog/CloudWatch) working
  ☐ Alerts tested

## Security
  ☐ No hardcoded secrets
  ☐ API keys in environment variables
  ☐ Authentication flows tested
  ☐ Authorization tested (role-based access)
  ☐ Input validation active
  ☐ SQL injection prevention verified
  ☐ XSS prevention verified
  ☐ CSRF tokens enabled

## Data & Backup
  ☐ Database backups automated
  ☐ Backup restore tested
  ☐ Data retention policies documented
  ☐ Privacy policy published
  ☐ GDPR/compliance checklist cleared

## Deployment
  ☐ Deployment script tested
  ☐ Rollback procedure documented
  ☐ On-call rotation assigned
  ☐ Status page prepared
  ☐ Incident response plan ready

## Documentation
  ☐ README updated
  ☐ API documentation current
  ☐ Setup instructions verified
  ☐ Known issues documented
  ☐ Release notes prepared

## Stakeholder Sign-off
  ☐ Product owner: Feature complete
  ☐ Tech lead: Architecture approved
  ☐ QA lead: Testing complete
  ☐ Ops lead: Infrastructure ready
  ☐ Security lead: Security audit passed
```

### Contingency scenarios:

**If critical test fails (24h before launch):**
1. Root cause analysis (30 min)
2. Fix implementation (2-4 hours)
3. Full regression test (2-4 hours)
4. Re-check readiness
5. Decision: Proceed or delay by 1 day

**If performance baseline not met:**
1. Identify bottleneck (profiling)
2. Optimization options: defer feature / rewrite / increase infra
3. Decision point: Launch with degraded perf or delay

**If security vulnerability found:**
1. Severity assessment
2. If critical: Fix + retest (2-4 hours), may delay launch
3. If non-critical: Document as known issue, fix in v1.0.1

### Key questions for Bite 5:

1. **Who signs off on release?** (Product owner? Tech lead? Both?)
2. **Rollback procedure?** (Automated? Manual?)
3. **Incident response on-call?** (First 24h? First week?)

### Deliverable: Release Checklist & Contingency Plan

```markdown
# Release Readiness Checklist

[Full checklist from above with assignees]

## Sign-off
- [ ] Product Owner: __________ Date: __________
- [ ] Tech Lead: __________ Date: __________
- [ ] QA Lead: __________ Date: __________

## Contingency Scenarios
1. **Critical test fails:** [steps]
2. **Performance below baseline:** [steps]
3. **Security issue found:** [steps]

## Rollback Procedure
[Steps to revert to previous version]

## On-Call Assignment
- First 24h: [person]
- First week: [rotation]
```

---

## Integration Notes

- **Timing:** Phase 7 runs **in parallel with Phase 5 (Architecture)**. Testing strategy informs architecture choices (e.g., mockability, testability).
- **Dependencies:** Phase 7 depends on Phase 5 (Architecture), Phase 6 (Compliance for security testing).
- **Handoff to Build:** Phase 7 deliverables → AGENT.md `test-strategy` section.
- **Tier adjustments:** Lite skips E2E, reduces coverage targets. Enterprise adds load testing, accessibility audit.

---

## Summary

Phase 7 establishes quality gates and observability before launch:

| Bite | Deliverable | Key Decision |
|------|-------------|--------------|
| 1 | Test pyramid | Fast / Balanced / Comprehensive |
| 2 | Coverage targets & timeline | Coverage % and QA start date |
| 3 | Resource plan | Solo / Contractor / Team |
| 4 | Monitoring setup | Tools and alert thresholds |
| 5 | Release checklist | Contingency procedures |

**After Phase 7 confirmation:** User saves all 5 deliverables. Ready for Phase 8 (Launch & GTM).
