<!-- START_OF_FILE: 15-phase-testing-qa.md -->

# FILE: 15-phase-testing-qa.md

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


<!-- END_OF_FILE: 15-phase-testing-qa.md -->

---


<!-- START_OF_FILE: 16-phase-launch-marketing.md -->

# FILE: 16-phase-launch-marketing.md

---
name: Phase 8 Launch & Go-to-Market Strategy
description: Pre-launch marketing timeline, launch day execution, post-launch growth tactics, and contingency scenarios
type: methodology
version: 1.0.0
---

# Phase 8: Launch & Go-to-Market Strategy

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit  
> **Purpose:** Define pre-launch marketing, launch day execution, post-launch growth, and contingency plans  
> **Tier Coverage:** Lite (Core), Standard (Full), Enterprise (Full + PR/Media)

---

## Overview

Phase 8 orchestrates the go-to-market execution. This phase covers:
- Pre-launch marketing timeline (8 weeks out)
- Launch day hour-by-hour execution plan
- Post-launch growth tactics (30 days)
- Contingency scenarios and crisis response
- Success metrics dashboard

**Key outputs:**
- `gtm-timeline.md` — 8-week marketing calendar
- `launch-day-plan.md` — Hour-by-hour schedule
- `post-launch-growth.md` — 30-day tactics
- `contingency-plan.md` — Crisis scenarios

---

## Bite 1: Pre-Launch Marketing Timeline (8-12 Weeks)

### 12-week countdown (from launch date):

**Weeks 12-10: Foundation**
- Product positioning finalized
- Messaging framework locked
- Target audience narrowed
- Competitor messaging audit
- Win-loss analysis (if existing product)

**Weeks 10-8: Channel setup**
- Website ready (landing page, pricing, FAQ, CTA)
- Email list growth started (early access waitlist)
- Social media accounts created (Twitter, LinkedIn, TikTok if relevant)
- Product Hunt preparation begins
- Press kit drafted

**Weeks 8-6: Amplification begins**
- Blog posts published (2-3 posts, SEO-optimized)
- Email campaign drafted (3-email sequence)
- Social media content calendar built (4-8 posts/week)
- Influencer list identified and outreach begins
- Guest post pitches sent

**Weeks 6-4: Momentum builds**
- Email nurture sequence launched
- Organic social content posted daily
- Engagement with target audience communities
- Early access program launched (if applicable)
- Beta tester feedback collected and incorporated

**Weeks 4-2: Intensity**
- Product Hunt launch day finalized
- Press releases prepared
- Influencer partnerships confirmed
- Launch day promotional emails drafted
- Paid ads (if budget): Testing and optimization

**Weeks 2-1: Final push**
- Countdown content (behind-the-scenes, sneak peeks)
- Team preparation for launch day
- Support documentation finalized
- Community management team ready
- Launch day checklist reviewed

**Day 0: Launch**
- [See Bite 2 for hour-by-hour schedule]

### Marketing channel options by tier:

**Lite Tier (Bootstrap approach)**
- Free channels: Twitter, LinkedIn, Product Hunt, Hacker News
- Email list (organic growth)
- Blog (SEO-organic)
- Word-of-mouth
- Budget: $0-2K (paid ads optional)
- Team: 1 founder + occasional help

**Standard Tier (Balanced approach)**
- Paid ads: $5-10K (Google/Facebook ads, retargeting)
- Influencer outreach ($2-5K budget)
- Press release distribution ($1K)
- Email marketing platform (Mailchimp/Segment)
- Content: 3-4 blog posts, 2-3 videos
- Budget: $10-20K total
- Team: Founder + marketing contractor

**Enterprise Tier (Full-scale approach)**
- Paid ads: $20-50K+ (multi-channel)
- PR firm: ($5-15K)
- Influencer partnerships: ($5-20K)
- Content production: 1-2 professional creators
- Events: 1-2 virtual launch events
- Budget: $50K-200K+
- Team: Marketing manager + content creators + paid media specialist

### Key questions for Bite 1:

1. **Launch date?** (This sets the 8-12 week timeline backward)
2. **Marketing budget?** (Lite $0-2K / Standard $10-20K / Enterprise $50K+)
3. **Channels?** (Organic vs. paid? Which platforms?)
4. **Team capacity?** (Founder-led? Contractor? Agency?)

### Deliverable: GTM Timeline

```markdown
# Go-to-Market Timeline

## Launch Date: [DATE]

## 12-Week Countdown

| Timeline | Phase | Tasks | Owner |
|----------|-------|-------|-------|
| Weeks 12-10 | Foundation | [positioning, messaging, audience] | [person] |
| Weeks 10-8 | Channel Setup | [website, email, social] | [person] |
| Weeks 8-6 | Amplification | [content, outreach, partnerships] | [person] |
| Weeks 6-4 | Momentum | [email campaigns, organic growth, beta] | [person] |
| Weeks 4-2 | Intensity | [Product Hunt, press, paid ads] | [person] |
| Weeks 2-1 | Final Push | [countdown content, team prep] | [person] |

## Marketing Channels
- **Free:** [Twitter, LinkedIn, Product Hunt, Hacker News, blog]
- **Paid:** [Google Ads, Facebook Ads, influencer partnerships]
- **Content:** [blog posts, videos, case studies]

## Budget Allocation
| Channel | Budget | ROI Target |
|---------|--------|-----------|
| Content | $[X] | [X] new users |
| Paid Ads | $[X] | [X] new users |
| PR/Influencer | $[X] | [X] new users |
| Tools/Platform | $[X] | N/A |
| **Total** | **$[X]** | **[X] new users** |

## Success Metrics
- Email list size: [X] subscribers
- Twitter followers: [X]
- Product Hunt ranking: Top [X]
- Day 1 users: [X]
- Day 1 sign-ups: [X]
```

---

## Bite 2: Launch Day Execution (Hour-by-Hour)

### Launch day schedule:

```markdown
# Launch Day Execution Plan

## T-24 Hours (Day Before)
09:00  - Final checklist review
10:00  - Confirm all systems ready (app, website, server)
11:00  - Verify monitoring/alerting active
12:00  - Team standup (final questions)
13:00  - Lunch break
14:00  - Press release embargo lift (if applicable)
15:00  - Email campaign queued but not sent
16:00  - Social media content scheduled (not published)
17:00  - Paid ads paused (ready to launch)
18:00  - Influencer notifications (launch live soon)
19:00  - Sleep! (early start tomorrow)

## T-0 Launch Day
06:00  - Team arrives (or early wake-up for remote)
07:00  - Final monitoring check
08:00  - Press release sent to media
08:30  - First email sent (early subscribers)
09:00  - **GO LIVE** ← Official launch
09:05  - Product Hunt goes live
09:10  - Social media blitz begins
          - Founder tweets announcement
          - LinkedIn posts
          - TikTok/Instagram if applicable
          - Community posts (Reddit, Discord, Slack groups)
09:30  - Influencer tweets go live
10:00  - Paid ads go live (Google, Facebook)
10:30  - Community manager monitors comments/questions
11:00  - Check #1: Server load, error rate, user sign-ups
11:30  - Email #2 sent (warm audience)
12:00  - Lunch (rotate team)
12:30  - Check #2: Conversion funnel, feature usage
13:00  - Engagement push (respond to early users)
14:00  - Check #3: Product Hunt upvotes, Twitter replies
15:00  - Blog post published (medium.com cross-post)
16:00  - Press call (if scheduled) or influencer interviews
17:00  - Email #3 sent (final push to lukewarm audience)
18:00  - Evening check: Growth trajectory analysis
19:00  - Dinner break
20:00  - Overnight monitoring: error tracking, support queue
21:00  - Team wrap-up, contingency prep for Day 2
22:00  - On-call assigned for overnight

## T+1 Day (Day 2)
06:00  - Morning check: overnight metrics
08:00  - Daily standup: What worked? What didn't?
09:00  - Secondary wave: Morning commute content push
10:00  - Product Hunt voting peak (usually morning PST)
11:00  - Influencer round-up post (engagement update)
12:00  - Community engagement sprint
14:00  - Early user feedback review
16:00  - Growth analysis: Acquisition channels ranked by quality
18:00  - Strategy adjustment (pause underperforming ads?)

## T+7 Days (First Week Metrics)
- Cumulative users: [X]
- Cumulative sign-ups: [X]
- Activation rate: [X]%
- Key learnings: [...]
- Growth channels ranked: 1) [...] 2) [...] 3) [...]
- Next week focus: [...]
```

### Launch day contingencies:

**Scenario 1: Server overwhelmed (high traffic)**
- Action: Scale up servers immediately (auto-scaling should handle)
- Comms: "Thanks for the enthusiasm! We're scaling to serve you better."
- Monitoring: Track error rate, response times
- Decision: If sustained, consider rate limiting non-critical features

**Scenario 2: Critical bug discovered**
- Action: Hot-fix or rollback (prepared in Phase 7)
- Comms: "We found an issue. Rolling back to ensure stability. We'll be back in 30 min."
- Timeline: Investigate (10 min) → Fix (20 min) → Deploy (5 min) → Verify (5 min)
- If unfixable: Rollback and schedule hotfix for Day 2

**Scenario 3: Product Hunt dies/ranks poorly**
- This is OK. Redirect focus to other channels.
- Pivot to: Twitter engagement, email warmth, paid ads optimization
- Product Hunt timing is unpredictable; don't panic if not trending

**Scenario 4: Negative press or review**
- Response: Don't react emotionally on Day 1
- Address: Factual corrections only, if any
- Follow-up: If legitimate criticism, make it a feature for v1.0.1
- Example: "Thanks for feedback. We're addressing this in Day 2 release."

### Key questions for Bite 2:

1. **What time to launch?** (Morning? Evening? Timezone-aware?)
2. **Primary channel focus?** (Product Hunt? Twitter? Email?)
3. **Escalation contacts?** (Who handles emergencies?)

### Deliverable: Launch Day Plan

```markdown
# Launch Day Hour-by-Hour Plan

## Launch Date & Time: [DATE] at [TIME]

## Pre-Launch (T-24)
- [ ] Final checklist review
- [ ] Systems verification
- [ ] Monitoring active
- [ ] All communications queued

## Launch Window (T-0 to T+2H)
- [ ] 09:00 Go Live
- [ ] 09:05 Product Hunt launch
- [ ] 09:10 Social media blitz
- [ ] 09:30 Influencer posts live
- [ ] 10:00 Paid ads launch
- [ ] Monitoring every 30 min for first 2 hours

## Contingencies
| Scenario | Detection | Response | Owner |
|----------|-----------|----------|-------|
| Server overwhelmed | Error rate > 5% | Auto-scale, notify users | [DevOps] |
| Critical bug | Test failure | Rollback, hotfix, re-deploy | [Tech Lead] |
| Negative press | Social mention | Assess, fact-check, respond carefully | [Founder] |

## On-Call Schedule
- T-24 to T+24: [Person 1]
- T+24 to T+72: [Person 2]
```

---

## Bite 3: Post-Launch Growth (30 Days)

### 30-day post-launch strategy:

**Days 2-7: Momentum consolidation**
- Daily social media content (highest-engagement time)
- Email nurture: Convert free sign-ups to paying
- Early user interviews (10-15 key users)
- Bug fixes and feature requests triage
- Product Hunt continued engagement (voting ends Day 3)

**Days 8-14: Organic amplification**
- User testimonials + case studies (from early users)
- Guest posts on industry blogs
- Podcast interviews (pitch relevant shows)
- Community building: Discord/Slack/community
- Email campaigns: Segment by user type (trial vs. free)

**Days 15-21: Growth acceleration**
- Double down on best-performing channels
- Paid ads optimization (kill underperforming audiences)
- Referral program launch (if applicable)
- User feedback loop: Collect NPS, feedback, iterate
- Product updates: Quick wins based on feedback

**Days 22-30: Momentum + metrics**
- Weekly metrics review (acquisition cost, lifetime value)
- Month-1 growth analysis
- Plan for Month 2: Scale winners, kill losers
- Team retrospective: What worked? What didn't?
- Strategy adjustment for next 30 days

### Growth metrics to track:

```markdown
# 30-Day Post-Launch Growth Metrics

## Acquisition
- Daily new sign-ups: [X]
- Cumulative users: [X]
- Acquisition channels: [ranked by volume]
- Cost per acquisition: [X] (if paid ads)

## Activation
- Free-to-trial conversion: [X]%
- Trial-to-paid conversion: [X]%
- Feature adoption: [top 3 features used]
- Time-to-value: [X] hours

## Retention
- Day 1 retention: [X]%
- Day 7 retention: [X]%
- Day 30 retention: [X]%
- Churn rate: [X]%

## Monetization
- Paying users: [X]
- Average revenue per user: $[X]
- Monthly recurring revenue (MRR): $[X]
- Expansion revenue: $[X]

## Engagement
- Daily active users (DAU): [X]
- Monthly active users (MAU): [X]
- Feature usage by user segment: [...]
- Help requests / support load: [X] per day
```

### Growth tactics by channel:

| Channel | Tactic | Owner | Target |
|---------|--------|-------|--------|
| Twitter | Daily engagement, retweets, threads | [Person] | [X] followers/week |
| Email | 2x/week nurture, segmented CTAs | [Person] | [X] trial conversions/week |
| Referral | Launch referral program | [Dev] | [X] referred users |
| Blog | 1 post/week, guest post outreach | [Content] | [X] organic users |
| Paid Ads | A/B test audiences, optimize ROAS | [Marketing] | [X] paid sign-ups |
| Community | Discord/Slack engagement, support | [Support] | [X] community members |

### Key questions for Bite 3:

1. **Growth budget for Month 2?** (Scale winners channel)
2. **Team capacity for engagement?** (Full-time? Part-time?)
3. **Primary metric to optimize?** (DAU? MRR? Retention?)

### Deliverable: Post-Launch Growth Plan

```markdown
# 30-Day Post-Launch Growth Plan

## Daily Focus Areas
- Days 2-7: Momentum consolidation
- Days 8-14: Organic amplification
- Days 15-21: Growth acceleration
- Days 22-30: Metrics + strategy

## Growth Tactics
[Table from above with assignments and targets]

## Key Metrics Dashboard
[Metrics list from above with tracking tools]

## Monthly Retrospective (Day 30)
- [ ] What growth channels worked best?
- [ ] What was our actual CAC?
- [ ] What was our conversion rate?
- [ ] What features drove engagement?
- [ ] What surprised us?
- [ ] Plan for Month 2: Scale [X], Kill [Y], Try [Z]
```

---

## Bite 4: Contingency Scenarios & Crisis Response

### Five contingency scenarios:

**Scenario A: Silent launch (nobody cares)**
- Symptoms: <100 Day-1 sign-ups, no social buzz, no support requests
- Root cause: Poor product-market fit or terrible timing
- Response:
  1. Don't panic. This is common for B2B products.
  2. Analyze: What did early users say? Is there interest in a niche?
  3. Options:
     - Pivot positioning to target a different audience
     - Go back to customers: Ask what's missing
     - Kill the product and try next idea
  4. Decision: Continue with new positioning or kill project

**Scenario B: Crash (app fundamentally broken)**
- Symptoms: >10% error rate, users report data loss, payment failures
- Root cause: Bug not caught in Phase 7 testing
- Response:
  1. Rollback immediately (prepared in Phase 7)
  2. Restore from backup if needed
  3. Communicate: "We experienced an issue and rolled back. All data is safe."
  4. Hotfix: Root cause analysis, fix, full regression test
  5. Re-launch: Verify clean, re-enable users, monitor closely

**Scenario C: Negative reviews / criticism**
- Symptoms: "This doesn't work," "Waste of money," "Scam"
- Root cause: Unmet expectations, poor UX, legitimate bug
- Response:
  1. Don't respond emotionally. Sleep on it.
  2. Separate valid from trolling
  3. For valid criticism:
     - Acknowledge: "Thank you, we're looking into this."
     - Fix it (if possible within 48h)
     - Follow up: "We've released a fix. Try again."
  4. For invalid/troll: Ignore or mute
  5. Document: Use feedback to improve Phases 5-6 for next iteration

**Scenario D: App Store rejection (mobile apps)**
- Symptoms: "Your app violates guideline 2.1 (beta features)"
- Root cause: Guideline misread, misleading marketing, or real violation
- Response:
  1. Read the rejection carefully (not just the headline)
  2. Check: Is it a real issue or misunderstanding?
  3. If misunderstanding: Appeal with clarification
  4. If real issue: Fix and resubmit (48-72h turnaround)
  5. Communicate: "We're fixing the issue. New version coming Friday."
  6. Fallback: Launch web-first, add mobile in v1.0.1

**Scenario E: Competitor launches same day**
- Symptoms: Major competitor with 10x your brand launches while you launch
- Root cause: Bad luck / coincidence
- Response:
  1. Don't change launch plans. Your users != their users (usually)
  2. Messaging: Focus on your differentiation
  3. Positioning: "Simpler than [Competitor]" or "Free forever" or "Better for [use case]"
  4. Community: Engage with users who prefer your approach
  5. Long-term: Build moat through customer relationships, not features

### Crisis response playbook:

```markdown
# Crisis Response Playbook

## Decision Tree

Q1: Is the app down/broken?
  → YES: Go to "Crash" scenario
  → NO: Continue to Q2

Q2: Are users complaining about a specific feature?
  → YES: Go to "Negative Reviews" scenario
  → NO: Continue to Q3

Q3: Is no one using the product at all?
  → YES: Go to "Silent Launch" scenario
  → NO: Continue to Q4

Q4: Did the App Store reject us?
  → YES: Go to "App Store Rejection" scenario
  → NO: We're OK. Monitor closely.

## Escalation
- Minor issues (support emails): Support team handles
- Medium issues (bug, negative review): Tech lead + founder approval
- Major issues (down, data loss, legal): Immediate founder/CEO decision
- Communications: Pre-drafted templates for each scenario

## On-Call Response Time
- Critical: 15 minutes (Page on-call person)
- High: 1 hour
- Medium: 4 hours
- Low: Next business day
```

### Key questions for Bite 4:

1. **Rollback procedure ready?** (Can you restore from backup?)
2. **Crisis communication owner?** (Who talks to press/users?)
3. **Escalation chain?** (Who makes decisions?)

### Deliverable: Contingency Plan

```markdown
# Contingency Plan & Crisis Response

## Five Scenarios & Responses
[Detailed plan for each scenario A-E from above]

## Decision Tree
[Q1-Q4 flowchart]

## Escalation Contacts
- Critical (down): [Name] [Phone/email]
- High (bug): [Name] [Phone/email]
- Medium (review): [Name] [Phone/email]
- Communications: [Name] [Phone/email]

## Pre-Drafted Responses
- Server down: "We're investigating. ETA 30 min."
- Bug discovered: "We found an issue. Rolling back now. Updates coming soon."
- Negative review: "Thank you for the feedback. We're looking into this."
- Competitor launch: "We focus on [differentiation]. Here's why we're better for [use case]."

## Rollback Procedure
1. Identify current production version
2. Backup current database
3. Restore previous version
4. Verify critical paths work
5. Notify users: "Service restored"
6. Root cause analysis
7. Fix and regression test
8. Gradual re-deploy (canary)
```

---

## Integration Notes

- **Timing:** Phase 8 runs **in parallel with Phase 7 (Testing)**. Launch planning should not affect QA.
- **Dependencies:** Phase 8 depends on Phase 5 (Architecture, for scalability) and Phase 7 (Testing, for reliability).
- **Handoff to Build:** Phase 8 deliverables → AGENT.md `gtm-strategy` and `launch-day-checklist` sections.
- **Tier adjustments:** Lite skips paid ads and PR. Standard includes basic ads. Enterprise includes full PR, media, events.

---

## Summary

Phase 8 orchestrates market entry and post-launch growth:

| Bite | Deliverable | Key Decision |
|------|-------------|--------------|
| 1 | GTM Timeline (8-12 weeks) | Launch date, budget, channels |
| 2 | Launch Day Plan (hour-by-hour) | Launch time, monitoring frequency |
| 3 | Post-Launch Growth (30 days) | Growth channels, growth metrics |
| 4 | Contingency Plan | Response procedures, escalation |

**After Phase 8 confirmation:** User saves all 4 deliverables. Ready for Phase 9 (Operations & Team).


<!-- END_OF_FILE: 16-phase-launch-marketing.md -->

---


<!-- START_OF_FILE: 17-phase-operations-team.md -->

# FILE: 17-phase-operations-team.md

---
name: Phase 9 Operations & Team Structure
description: Organizational chart, hiring timeline, communication plan, decision-making framework, and documentation standards
type: methodology
version: 1.0.0
---

# Phase 9: Operations & Team Structure

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit  
> **Purpose:** Define org structure, hiring plan, communication workflows, decision-making, and knowledge management  
> **Tier Coverage:** Lite (Solo/Contractor), Standard (Small team), Enterprise (Cross-functional organization)

---

## Overview

Phase 9 establishes operational infrastructure for post-launch sustainability. This phase covers:
- Organizational chart and evolution path
- Hiring timeline and role definitions
- Communication cadence and workflows
- Decision-making frameworks (RACI, approval gates)
- Documentation and knowledge management standards

**Key outputs:**
- `org-chart.md` — Current and 6-month org structure
- `hiring-plan.md` — Role definitions and recruitment timeline
- `communication-plan.md` — Sync cadence and async workflows
- `decision-making-framework.md` — RACI matrix and approval authority

---

## Bite 1: Organizational Chart & Structure

### Three org models:

**Model A: Solo + Contractors (Lite tier)**
```
         Founder/CEO
           /    |    \
       Dev    Marketing  Support
     (1-2)    (0.5)      (0.5)
```
- Founder: Product, technical decisions, strategy
- Dev contractor(s): Building, maintenance
- Marketing contractor: Social media, email, growth
- Support contractor: Customer support, documentation
- Cost: $50-150K/year (founder + contractors)
- Best for: MVP, tight budget, waiting for product-market fit

**Model B: Small Team (Standard tier)**
```
              CEO
           /  |  \
      Tech   Product  Growth
       |       |       |
  [Eng 1,2] [PM]  [Marketing]
               |
            [Support]
```
- CEO: Overall strategy, fundraising, partnerships
- Tech Lead: Engineering, architecture, hiring
- Engineers: 2-3, building and maintenance
- Product Manager: Requirements, prioritization, customer research
- Marketing: Growth, content, partnerships
- Support: Customer support, onboarding
- Cost: $200-400K/year
- Best for: Growth-stage, product-market fit achieved, need to scale

**Model C: Cross-Functional Squads (Enterprise tier)**
```
                 CEO
            /    |    \
      Founding   Product   Ops
       Engineer   Director  Lead
         |          /|\      |
        [Team]  [Squads]  [Admin]
```
- Each squad: Engineer + Designer + PM
- Platform team: Infrastructure, security, data
- Support team: Customer success, onboarding
- Cost: $800K-2M+/year
- Best for: High growth, complex product, multiple user segments

### Growth path template:

```markdown
# Organizational Evolution

## Phase 0 (Launch): Solo + Contractors
- Founder: All decisions
- Dev: Part-time contractor (20h/week)
- Marketing: Founder + paid ads
- Support: Founder email

Timeline: Months 1-3

## Phase 1 (3-6 months): Hire first engineer
- Hire: Full-time engineer #1
- Founder: Product + strategy
- Team: 2 engineers + contractors
- Structure: All report to founder

Timeline: Months 3-6

## Phase 2 (6-12 months): Add PM + ops
- Hire: Full-time product manager
- Hire: Operations/support person
- Structure: Founder → Tech Lead, PM, Ops Lead
- Each hire: Own domain

Timeline: Months 6-12

## Phase 3 (12+ months): Scale teams
- Hire: Second engineer + designer (as squad)
- Consider: Tech lead formal role (if founder != engineer)
- Structure: Squads + platform team

Timeline: Month 12+
```

### Key questions for Bite 1:

1. **Which org model?** (Solo / Small Team / Squads)
2. **Founder role after launch?** (CEO? CTO? Both?)
3. **First hire timing?** (Day 1? Month 3? Month 6?)

### Deliverable: Org Chart

```markdown
# Organizational Chart

## Current (Launch)
[Org diagram for launch]

## 3-Month Plan
[Org diagram with 1-2 hires]

## 6-Month Plan
[Org diagram with full small team]

## Growth Path
| Timeline | Total Headcount | New Roles | Reporting |
|----------|-----------------|-----------|-----------|
| Month 0 | [X] | [hiring plan] | [structure] |
| Month 3 | [X] | [next roles] | [structure] |
| Month 6 | [X] | [expansion] | [structure] |
| Month 12 | [X] | [scale] | [structure] |

## Key Decisions
- Founder title and focus: [...]
- First hire: [role], [timeline]
- Contractor philosophy: [keep long-term? Or transition to employees?]
```

---

## Bite 2: Hiring Timeline & Role Definition

### Hiring roadmap template:

**Tier: Lite (No hires planned in Year 1)**
- Rationale: Contractors provide flexibility, cost-effective

**Tier: Standard (2-3 hires in Year 1)**
```
Month 0 (Launch):
  Role: [Contract] Dev
  Hours: 20h/week
  Cost: $50-80K/year
  Owner: Founder (hiring)

Month 3:
  Role: Full-time Engineer #1
  Level: Senior or mid-level
  Focus: [Core infrastructure / mobile / backend]
  Interview: Tech screen, architecture discussion
  Onboarding: 2 weeks (pair with founder)

Month 6:
  Role: Product Manager OR Support Lead
  Level: Experienced
  Focus: Requirements, customer feedback OR customer success
  Interview: Product thinking, communication
  Onboarding: 1 week (shadow founder)

Month 9-12:
  Role: Second Engineer (optional) or Marketing hire
  Level: Mid-level
  Focus: Features OR growth
```

**Tier: Enterprise (5+ hires in Year 1)**
```
Month 0: Contract dev (transition to employee by month 3)
Month 1: First engineer + designer
Month 2: Second engineer
Month 3: Product manager + ops lead
Month 6: Third engineer + customer success
Month 9: Marketing specialist + QA engineer
```

### Role definition template:

**Role: Senior/Full-Stack Engineer**
```
Reporting to: Tech Lead / CEO
Level: [Mid-level $120-160K / Senior $160-220K / Staff $220K+]
Hours: Full-time (40h/week)
Location: [Remote / On-site / Flexible]

Responsibilities:
  - Build and maintain core product features
  - Own [specific area: auth / payment / API / mobile]
  - Code reviews and mentoring
  - Technical debt management
  - On-call rotation (nights/weekends)

Skills Required:
  - [5+ years] in [language/framework]
  - [Specific tech]: React / Node / TypeScript / etc.
  - [Experience]: REST APIs, databases, deployment
  - Communication and teaching

Nice-to-Have:
  - Mobile development ([iOS / Android])
  - DevOps / infrastructure
  - Previous startup experience

Hiring Timeline:
  - Job posting: [date]
  - Interviews: [duration]
  - Offer: [date]
  - Start: [date]
```

**Role: Product Manager**
```
Reporting to: CEO
Level: [Mid-level $100-130K / Senior $130-180K]
Hours: Full-time
Location: Remote

Responsibilities:
  - Define product roadmap with stakeholder input
  - Write requirements and user stories
  - Prioritize features using RICE scoring
  - Customer interviews and research
  - Metrics tracking and analysis

Skills Required:
  - [5+ years] in product management
  - [SaaS / B2B / B2C] experience
  - Metrics-driven thinking
  - Communication with engineering and design

Hiring Timeline:
  - Job posting: [date]
  - Interviews: [duration]
  - Offer: [date]
  - Start: [date]
```

### Key questions for Bite 2:

1. **First hire role?** (Engineer / PM / Support / Marketing)
2. **Hiring timeline?** (Month 1? Month 3? Month 6?)
3. **Salary range?** (Market rate for your location)

### Deliverable: Hiring Plan

```markdown
# Hiring Timeline & Roles

## Year 1 Hiring Plan
| Month | Role | Seniority | Cost | Rationale |
|-------|------|-----------|------|-----------|
| 0 | Contract Engineer | Mid | $50-80K | Build features |
| 3 | Full-time Engineer | Senior | $150-180K | Scale engineering |
| 6 | Product Manager | Mid | $110-140K | Structure product decisions |
| 9 | Support / Ops | Mid | $80-110K | Customer success |
| 12 | [Next role] | [level] | $[X] | [reason] |

## Role Definitions
[Template for each role, starting with first hire]

## Onboarding Plan
- Day 1: Company overview, team intro, product demo
- Week 1: Codebase walkthrough, first PR
- Week 2: Pair programming on small feature
- Month 1: Own small feature, ship to production
- Month 3: Own larger area, mentoring junior devs

## Contractor vs. Employee Strategy
- Contractors: [Use for specific skills / fixed duration]
- Employees: [Hire for [specific roles]]
- Transition: [Do you transition contractors to employees?]
```

---

## Bite 3: Communication Plan & Workflows

### Communication cadence:

**Daily (5-10 min)**
```
Standup (async or sync)
  - What you did yesterday
  - What you're doing today
  - Any blockers
  - Format: Slack message / video / in-person
  - Time: 09:00 [timezone]
  - Who: All team
```

**Weekly (30-60 min)**
```
Team Sync
  - Week review: What shipped, what's pending
  - Blockers and dependencies
  - Next week priorities
  - Time: [Wednesday 2pm / Friday 4pm]
  - Format: Video call
  - Who: All team + occasionally customers

1-on-1 (30 min, recurring every 2 weeks)
  - Career growth
  - Blockers and concerns
  - Feedback
  - Manager + direct report
```

**Monthly (1-2 hours)**
```
All-Hands Meeting
  - Month review: Growth, metrics, wins
  - Finance: Runway, MRR, burn
  - Roadmap: Next month plans
  - Team sharing: What team members are learning
  - Time: [First Friday of month, 2pm]
  - Format: Video call
  - Who: All team + invited customers/investors

Retrospective
  - What went well?
  - What didn't go well?
  - What should we try differently?
  - Time: [Last Friday of month, 3pm]
  - Format: Anonymous feedback + discussion
  - Who: All team
```

**Quarterly (Half-day)**
```
Quarterly Planning
  - OKR review (current quarter)
  - OKR planning (next quarter)
  - Strategy discussion: Are we on track?
  - Time: [End of quarter, half-day]
  - Format: In-person or extended video
  - Who: All team + key stakeholders
```

### Async-first principles:

```markdown
# Async-First Communication

## When to use Async (Preferred)
  - Status updates (use Slack/email)
  - Code reviews (use pull request comments)
  - Decision proposals (write detailed doc, share for feedback)
  - Non-urgent questions (can wait 24 hours)

## When to use Sync (Necessary)
  - Brainstorming (whiteboarding, real-time problem-solving)
  - Urgent issues (production down, blocked work)
  - Sensitive feedback (1-on-1 or small group)
  - Customer calls (scheduled, structured)

## Communication Rules
  1. Document decisions in writing (even after verbal sync)
  2. Share meeting notes within 24 hours
  3. Assume no immediate response (people have focused work)
  4. Use threads in Slack (keep conversations organized)
  5. No Slack after 6pm or on weekends (no urgency expected)
  6. Timezone awareness: Schedule syncs for overlap time

## Channels
  - #general: Company updates, announcements
  - #engineering: Technical discussions
  - #product: Feature discussions, roadmap
  - #random: Non-work chat
  - #incidents: P1 issues only (pings everyone)
```

### Key questions for Bite 3:

1. **Standup format?** (Daily sync or async?)
2. **Team timezone distribution?** (Affects sync timing)
3. **Remote-first or office?** (Affects communication style)

### Deliverable: Communication Plan

```markdown
# Communication Plan

## Daily Cadence
- Standup: [Time], [Format], [Slack channel]
- 1-on-1s: Every [X] weeks

## Weekly Cadence
- Team sync: [Day/Time], [Video link]
- All-hands: [Day/Time]

## Monthly Cadence
- All-hands: [Day/Time]
- Retrospective: [Day/Time]

## Quarterly Cadence
- Quarterly planning: [Duration]
- Strategy review: [Format]

## Async-First Guidelines
[Documentation rules from above]

## Channels
- #general: Company-wide
- #engineering: Technical
- #product: Features
- #random: Off-topic
- #incidents: P1 only
```

---

## Bite 4: Decision-Making Framework (RACI)

### RACI matrix for common decisions:

```markdown
# Decision-Making Framework (RACI)

## Legend
  R = Responsible (does the work)
  A = Accountable (final decision maker)
  C = Consulted (provides input)
  I = Informed (told the outcome)

## Decision Matrix

| Decision | CEO | Tech Lead | PM | Design | Engineering | Customers |
|----------|-----|-----------|----|---------|-----------|---------| 
| Hire new engineer | A | R, C | — | — | C | — |
| Pricing change | A | — | C, R | — | — | C |
| Architecture redesign | C | A, R | C | — | R, C | — |
| New feature | A | C | R | C | C | C |
| Bug severity (P0/P1) | I | A, R | — | — | R | — |
| Marketing strategy | A | — | R | C | — | C |
| Third-party tool adoption | A, R | C | C | C | C | — |
| Discount policy | A | — | C, R | — | — | I |
| On-call rotation | A | R | — | — | R | — |
| Sunset old feature | A | C | R | — | C | C |

## Approval Authority
- < $1K: Tech lead or department owner
- < $5K: CEO approval
- < $50K: Board discussion
- > $50K: Full board approval

## Decision Escalation
Q1: Is it reversible in 1 day?
  → YES: Quick decision (low ceremony)
  → NO: Continue to Q2

Q2: Does it affect > 1 person?
  → YES: Consult those affected
  → NO: Individual decides

Q3: Is it strategic (affects roadmap)?
  → YES: CEO + team input
  → NO: Domain owner decides
```

### Approval authority by decision type:

```
Technical Decisions
  - Code architecture: Tech lead approval (with team input)
  - Infrastructure changes: Tech lead approval (security review)
  - Third-party services: Tech lead + PM approval
  - Security decisions: Tech lead + security specialist approval

Product Decisions
  - Feature scope: PM + CEO approval
  - Roadmap prioritization: PM + CEO approval
  - Pricing/monetization: CEO approval (PM input)
  - Customer commitments: PM + CEO approval

Financial Decisions
  - Under $1K: Department owner approval
  - $1K-$10K: CEO approval
  - > $10K: CEO + board approval

People Decisions
  - Hire: CEO + future manager approval
  - Compensation: CEO approval
  - Termination: CEO approval
  - Role change: Manager + CEO approval
```

### Key questions for Bite 4:

1. **Who's the final decision-maker?** (CEO? Tech lead for tech decisions?)
2. **Approval thresholds?** (What costs require approval?)
3. **Escalation path?** (Who do you talk to if blocked?)

### Deliverable: Decision Framework

```markdown
# Decision-Making Framework

## RACI Matrix
[Table from above]

## Approval Authority
- Technical decisions: [authority]
- Product decisions: [authority]
- Financial decisions: [authority]
- People decisions: [authority]

## Escalation Flowchart
[Q1-Q3 decision tree]

## Meeting Norms
- Decisions made in meetings should be documented
- Decisions should be reversible or have clear rollback plan
- If blocked, escalate within 24 hours
```

---

## Bite 5: Documentation Standards & Knowledge Management

### Documentation strategy:

**What to document:**
- Architecture decisions (why did we choose X over Y?)
- Setup guides (how to onboard new dev?)
- Runbooks (how to deploy? How to respond to P1?)
- Internal processes (how do we hire? How do we approve features?)

**What NOT to document:**
- Day-to-day chat / Slack conversations (use threads)
- Personal notes (keep in notebooks)
- Outdated decisions (archive, don't keep obsolete docs)

### Documentation locations:

```markdown
# Documentation Standards

## Location & Tools
- Architecture decisions: `/docs/architecture/` in main repo
- API documentation: OpenAPI / Swagger in code
- Runbooks: `/docs/runbooks/` (deployment, incident response)
- Onboarding guide: `/docs/onboarding.md`
- Process docs: GitHub wiki or Notion (team-shared)
- Customer docs: Separate site (e.g., help.productname.com)

## Documentation Format
- Markdown for technical docs
- Google Docs for collaborative editing
- Diagrams: Mermaid (in code) or Lucidchart (visual)
- Video: Loom for screen recordings

## Ownership
- Architecture docs: Tech lead
- API docs: Backend engineer (auto-generated)
- Runbooks: On-call engineer (updated after incident)
- Onboarding: New hire + manager (maintain together)
- Process docs: Department owner (e.g., PM for product decisions)

## Review Cadence
- Architecture: Reviewed quarterly or after major change
- API: Auto-generated with each release
- Runbooks: Updated after each incident
- Onboarding: Updated with each new hire
- Process: Updated as process changes
```

### Architecture Decision Record (ADR) template:

```markdown
# Architecture Decision Record (ADR)

## Title: [Decision Name]
Date: [Date made]
Status: [Proposed / Accepted / Deprecated / Superseded by ADR-NNN]

## Context
[Why did we need to make this decision?]
[What constraints were we under?]
[What options did we consider?]

## Decision
[We chose to use X because...]

## Rationale
- Pro 1: [reason]
- Pro 2: [reason]
- Con 1: [reason]
- Con 2: [reason]

## Consequences
- We must [action 1]
- We should [action 2]
- We may [action 3]

## Alternatives Considered
- Option A: [why we rejected this]
- Option B: [why we rejected this]

## Related ADRs
- ADR-001: [related decision]
```

### Onboarding documentation:

```markdown
# New Engineer Onboarding Checklist

Day 1: Welcome & Setup
  [ ] Company intro (mission, values, culture)
  [ ] Equipment setup (laptop, tools, access)
  [ ] Slack/email onboarded
  [ ] Calendar invites for syncs

Week 1: Product & Codebase
  [ ] Product demo (what does it do?)
  [ ] Codebase tour (architecture overview)
  [ ] Local setup (clone repo, run tests)
  [ ] Read: Architecture decisions (ADRs)
  [ ] Read: API documentation
  [ ] First PR: Fix typo or small bug

Week 2: Integration & Culture
  [ ] Team intro meetings (1-on-1 with each person)
  [ ] Code review feedback (see how we review)
  [ ] Deploy process walkthrough
  [ ] On-call rotation intro
  [ ] Pair programming session on real feature

Week 3: Ownership
  [ ] Own small feature from start to finish
  [ ] Lead code review on someone else's PR
  [ ] Participate in standups and syncs
  [ ] Ask questions without asking permission

Month 1: Full contributor
  [ ] Own larger features
  [ ] Mentor someone (pair program)
  [ ] Incident response (if P1 happens)
  [ ] Retrospective: What went well? What to improve?
```

### Key questions for Bite 5:

1. **Documentation owner?** (Tech lead? Everyone?)
2. **Documentation location?** (GitHub wiki? Notion? Confluence?)
3. **Update cadence?** (Quarterly? As-needed?)

### Deliverable: Documentation Standards

```markdown
# Documentation Standards & Knowledge Management

## What We Document
- [Architecture decisions via ADRs]
- [Setup and deployment guides]
- [Runbooks for critical processes]
- [Onboarding guide]
- [API documentation]

## Documentation Locations
| Content | Location | Owner |
|---------|----------|-------|
| Architecture | `/docs/architecture/` | Tech lead |
| API | OpenAPI in code | Backend lead |
| Runbooks | `/docs/runbooks/` | On-call team |
| Onboarding | `/docs/onboarding.md` | Manager + new hire |
| Process | GitHub wiki | Department owner |

## ADR Process
[How we make and track architecture decisions]

## Review Cadence
- Architecture: Quarterly or after major change
- API: Auto-generated with releases
- Runbooks: Updated after incidents
- Onboarding: Updated with each new hire

## Quality Standards
- All documentation should have owner
- Outdated docs are deleted (not kept obsolete)
- Code examples are tested and current
- Links are updated when files move
```

---

## Integration Notes

- **Timing:** Phase 9 runs **in parallel with Phase 8 (Launch)**. Team structure should be ready by launch day.
- **Dependencies:** Phase 9 depends on Phase 7-8 (Testing, Launch) to understand workload and scope.
- **Handoff to Build:** Phase 9 deliverables → AGENT.md `team-structure` and `communication-plan` sections.
- **Tier adjustments:** Lite = solo + contractors, no formal structure. Standard = small team with basic processes. Enterprise = formal org with RACI, documentation, governance.

---

## Summary

Phase 9 builds organizational foundation for sustainable growth:

| Bite | Deliverable | Key Decision |
|------|-------------|--------------|
| 1 | Org Chart | Solo / Small Team / Squads model |
| 2 | Hiring Plan | First hire role and timeline |
| 3 | Communication Plan | Sync cadence, async principles |
| 4 | Decision Framework | RACI matrix, approval authority |
| 5 | Documentation Standards | What to document, ownership |

**After Phase 9 confirmation:** User saves all 4 deliverables. Ready for Phase 10 (Post-Launch Iteration).


<!-- END_OF_FILE: 17-phase-operations-team.md -->

---


<!-- START_OF_FILE: 18-phase-iteration-feedback.md -->

# FILE: 18-phase-iteration-feedback.md

---
name: Phase 10 Post-Launch Iteration & Feedback Loops
description: Feedback collection methods, metrics review cadence, version roadmap, and technical debt management
type: methodology
version: 1.0.0
---

# Phase 10: Post-Launch Iteration & Feedback Loops

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit  
> **Purpose:** Establish feedback systems, metrics review cadence, roadmap prioritization, and sustainability practices  
> **Tier Coverage:** Lite (Core), Standard (Full), Enterprise (Full + Quarterly Board Reviews)

---

## Overview

Phase 10 establishes the feedback loops and continuous improvement processes that drive product evolution post-launch. This phase covers:
- Feedback collection methods (quantitative and qualitative)
- Metrics review cadence and dashboards
- Version roadmap planning (hotfixes, features, major releases)
- RICE scoring framework for prioritization
- Technical debt tracking and prevention
- Feature sunset and deprecation strategy

**Key outputs:**
- `feedback-loops.md` — Collection methods and feedback channels
- `metrics-dashboard.md` — Key metrics, targets, review schedule
- `version-roadmap.md` — v1.0.1 through v2.0 and beyond
- `technical-debt-plan.md` — Debt tracking, repayment schedule, burnout prevention

---

## Bite 1: Feedback Loops & Collection Methods

### Five feedback collection channels:

**1. Quantitative Metrics (Product data)**
```
What to track:
  - Sign-ups per day (top-of-funnel)
  - Trial-to-paid conversion
  - Feature adoption rates
  - User retention (Day 1, 7, 30)
  - Churn rate
  - NPS (Net Promoter Score)
  - Feature usage heat maps
  - Error rates and performance

Tools:
  - Analytics: Google Analytics, Mixpanel, Firebase
  - Feature flags: LaunchDarkly, Optimizely
  - Session replay: Hotjar, LogRocket
  - Surveys: Typeform, Qualtrics

Review frequency:
  - Daily: Acquisition, errors, performance
  - Weekly: Retention, feature adoption, churn
  - Monthly: NPS, revenue, LTV/CAC ratio
  - Quarterly: Cohort analysis, seasonal trends
```

**2. Qualitative Customer Interviews (Direct feedback)**
```
What to ask:
  - How do you use the product?
  - What features matter most?
  - Where do you get stuck?
  - What would make you recommend this?
  - When would you consider stopping?

Frequency:
  - Weekly: 2-3 customer calls (15-30 min each)
  - Monthly: Group feedback session (1 hour)

Sample size:
  - Lite: 5-10 customers/month
  - Standard: 10-20 customers/month
  - Enterprise: 20-40 customers/month

Tools:
  - Calendly (scheduling)
  - Zoom (video recording)
  - Dovetail (feedback synthesis)
  - Notion (tracking template)
```

**3. Support & In-app Feedback (Implicit signals)**
```
What to capture:
  - Support tickets (pain points)
  - In-app feedback widget (quick reactions)
  - Help article searches (knowledge gaps)
  - Live chat conversations
  - Feature requests (prioritized by mentions)

Process:
  - Daily: Triage support tickets by category
  - Weekly: Synthesize themes from support
  - Monthly: Feature request ranking (votes + mentions)

Tools:
  - Support: Zendesk, Intercom, Freshdesk
  - Feedback widget: Canny, Slite, Playpilot
  - Community: Slack community, Discord, forum
```

**4. Usage Analytics (Behavioral signals)**
```
What to track:
  - Feature usage funnels (where do users drop off?)
  - Cohort analysis (how do cohorts differ?)
  - User segments (power users vs casual)
  - Session length and frequency
  - Time-to-activation (time to first "aha" moment)
  - Feature churn (features users stop using)

Tools:
  - Product analytics: Amplitude, Mixpanel
  - Funnel analysis: Pendo, Appcues
  - Dashboard: Metabase, Tableau

Review:
  - Weekly: Feature adoption and churn
  - Monthly: Cohort performance, segments
  - Quarterly: Long-term trends, seasonality
```

**5. Social & Community (External signals)**
```
What to monitor:
  - Twitter mentions (brand, feature feedback)
  - Product Hunt comments (early user sentiment)
  - Reddit discussions (organic conversations)
  - Community Slack/Discord (engaged users)
  - Blog comments (content relevance)
  - App Store reviews (quality issues, feature requests)

Process:
  - Daily: Review social mentions
  - Weekly: Summarize trends in team sync
  - Monthly: Sentiment analysis (positive, negative, neutral)

Tools:
  - Social listening: Brandwatch, Talkwalker
  - Reviews: ReviewTrackers
  - Community management: Discord, Slack
```

### Feedback synthesis template:

```markdown
# Monthly Feedback Synthesis

## Quantitative Snapshot
| Metric | Week 1 | Week 2 | Week 3 | Week 4 | Trend |
|--------|--------|--------|--------|--------|-------|
| Daily sign-ups | 45 | 48 | 52 | 50 | +10% |
| Trial conversion | 22% | 23% | 24% | 23% | +2% |
| Feature X adoption | 62% | 64% | 65% | 65% | +3% |
| Day 7 retention | 48% | 50% | 51% | 52% | +4% |
| Support tickets | 12 | 15 | 18 | 16 | Stable |

## Qualitative Themes (Top 5)
1. **"[Feature A] is confusing"** (8 mentions)
   - Sources: 3 customer calls, 4 support tickets, 1 Slack
   - Severity: Medium (impacts adoption)
   - Action: Improve onboarding or simplify UI

2. **"[Feature B] is amazing"** (12 mentions)
   - Sources: 5 customer calls, 3 app store reviews, 4 social
   - Severity: Positive
   - Action: Expand similar features, highlight in marketing

3. **[Other themes...]**

## Feature Requests (Ranked)
| Feature | Mentions | Supporters | Blocked? | Effort | Priority |
|---------|----------|-----------|---------|--------|----------|
| [New feature A] | 15 | 8 | No | Medium | High |
| [New feature B] | 8 | 6 | No | High | Medium |
| [New feature C] | 5 | 4 | Yes | Medium | Low |

## Bugs & Issues (By severity)
| Issue | P0/P1/P2 | Status | Owner |
|-------|----------|--------|-------|
| [Critical bug] | P0 | In progress | [person] |
| [Annoying feature] | P2 | Pending | [person] |

## Roadmap Implications
- Start: [Feature A improvement, based on 8 mentions]
- Expand: [Feature B marketing, based on 12 positive mentions]
- Deprioritize: [Feature C, no customer demand]
- Investigate: [Bug affecting X users]

## Next Month Focus
- Fix [issue], test with [Y customers]
- Ship [Feature A v2], measure adoption
- Monitor [Feature B], ensure quality
```

### Key questions for Bite 1:

1. **Feedback collection owner?** (PM? Customer success? Founder?)
2. **Tools and access?** (Who pays for analytics tool?)
3. **Synthesis cadence?** (Weekly? Monthly?)

### Deliverable: Feedback Loops

```markdown
# Feedback & Iteration Loops

## Quantitative Collection
- **Tools:** [Analytics, session replay, surveys]
- **Metrics tracked:** [sign-ups, conversion, retention, feature adoption]
- **Review:** Daily/weekly/monthly schedule

## Qualitative Collection
- **Method:** Customer interviews, support tickets, in-app feedback
- **Frequency:** Weekly calls, monthly synthesis
- **Sample:** [X] customers/month
- **Owner:** [Person responsible]

## Community & Social Monitoring
- **Channels:** Twitter, Product Hunt, Reddit, app reviews
- **Review:** Daily monitoring, weekly summary
- **Owner:** [Person responsible]

## Feedback Synthesis
- **Cadence:** Monthly synthesis meeting
- **Template:** [Use synthesis template from above]
- **Artifacts:** Shared in #product Slack channel

## Feedback-to-Action Pipeline
[Flowchart showing how feedback becomes roadmap items]
```

---

## Bite 2: Metrics Review Cadence & Dashboard

### Metrics hierarchy:

```markdown
# Metrics Hierarchy & Review Cadence

## North Star Metric (The one that matters most)
[Decide: Is it users? MRR? Engagement? Retention?]
  Example: "Monthly recurring revenue"
  Target: [$X] by end of year
  Formula: [Sum of all active subscriptions]

## Tier 1: Acquisition Metrics (Top funnel)
  1. Daily new sign-ups: [X/day]
  2. Traffic: [X unique visitors/month]
  3. Traffic sources ranked: [1) Direct 2) SEO 3) Ads]
  4. Cost per acquisition (paid channels): $[X]

## Tier 2: Activation Metrics
  1. Free trial sign-up rate: [X]%
  2. Email confirmation rate: [X]%
  3. Time-to-first-use: [X] min
  4. Free-to-trial conversion: [X]%

## Tier 3: Monetization Metrics
  1. Trial-to-paid conversion: [X]%
  2. Monthly recurring revenue (MRR): $[X]
  3. Average revenue per user (ARPU): $[X]
  4. Lifetime value (LTV): $[X]

## Tier 4: Retention Metrics
  1. Day 1 retention: [X]%
  2. Day 7 retention: [X]%
  3. Day 30 retention: [X]%
  4. Monthly churn rate: [X]%
  5. Net revenue retention: [X]%

## Tier 5: Engagement Metrics
  1. Daily active users (DAU): [X]
  2. Monthly active users (MAU): [X]
  3. DAU/MAU ratio: [X]%
  4. Sessions per user: [X]
  5. Feature adoption: [Feature A X]%, [Feature B Y]%

## Tier 6: Quality Metrics
  1. Error rate: [<X]%
  2. Page load time (p95): [<X] seconds
  3. Support tickets/month: [X] (target: trending down)
  4. App crash rate: [<X]%
```

### Review cadence:

**Daily (5 minutes, async)**
```
Slack #metrics channel:
  - Acquisition: New sign-ups (total + source)
  - Errors: Any P0 issues?
  - Performance: Any slowdowns?
  
Owner: Metrics champion (rotates weekly)
Tool: Slack bot (e.g., Databox, Metabase integration)
```

**Weekly (30 minutes, sync)**
```
Weekly sync (every Wednesday, 2pm)
  - Acquisition: Traffic trends, source breakdown
  - Retention: Day 7 retention for cohorts launched this week
  - Engagement: Top features used, churn in specific features
  - Revenue: MRR trend, upcoming churns
  - Quality: Support volume, error rate
  
Owner: Product manager + analytics
Artifacts: Shared slides or Notion dashboard
```

**Monthly (1 hour, sync)**
```
Monthly review (last Friday of month, 3pm)
  - All metrics review: Where are we vs. targets?
  - Cohort analysis: How do launch cohorts compare?
  - Feature analysis: What drove adoption? What flopped?
  - Revenue analysis: Churn patterns, LTV trends
  - Roadmap adjustment: What do the metrics tell us to do?
  
Owner: CEO + PM + team leads
Artifacts: Presentation + action items
```

**Quarterly (2 hours, planning)**
```
Quarterly business review (end of quarter, half-day)
  - 90-day retrospective: Did we hit targets?
  - Metric trends: Are we accelerating or decelerating?
  - Segment analysis: Which customer segments are healthiest?
  - Competitive analysis: How do we compare?
  - Next quarter OKRs: What are we optimizing for?
  
Owner: CEO + full leadership team
Artifacts: Presentation to board (if fundraising)
Format: In-person or extended video call
```

### Dashboard template:

```markdown
# Metrics Dashboard

## North Star (Real-time)
  Monthly Recurring Revenue: $[X] (+[X]% this month)
  Target: $[Y] by [date]

## Tier 1: Acquisition (Daily)
  Daily new sign-ups: [X] (↑ 10% vs last week)
  Top source: [X] (42% of traffic)
  Cost per acquisition: $[X] (targeting $[Y])

## Tier 2: Activation (Weekly)
  Free-to-trial conversion: [X]% (↑ 2% vs last month)
  Time-to-first-use: [X] min (↓ 5 min improvement)

## Tier 3: Monetization (Weekly)
  Trial-to-paid conversion: [X]% (↓ 1%, investigating)
  Average revenue per user: $[X] (stable)
  Lifetime value: $[X] (↑ 15% vs 3 months ago)

## Tier 4: Retention (Weekly)
  Day 7 retention: [X]% (↑ 3% vs last month)
  Day 30 retention: [X]% (stable)
  Monthly churn: [X]% (↓ 1%, good trend)

## Tier 5: Engagement (Weekly)
  Daily active users: [X] (↑ 5%)
  Feature A adoption: [X]% (new feature, growing)
  Feature B usage: [X]% (stable, consider sunsetting)

## Tier 6: Quality (Daily)
  Error rate: [X]% (all green, <0.1%)
  Support load: [X] tickets/day (trending down)
  App crashes: [X]% (↓ 0.2%, fixed in v1.0.2)

## Red Flags & Decisions
  🔴 Churn in enterprise segment (4 churn this month)
     → Action: Customer success outreach
  🟡 Trial conversion dropped 3%
     → Action: Investigate, A/B test new onboarding
  🟢 Day 7 retention up to 52%
     → Action: Continue current product direction
```

### Key questions for Bite 2:

1. **North Star metric?** (Users? MRR? Engagement?)
2. **Metrics owner?** (PM? Data analyst? Founder?)
3. **Dashboard tool?** (Metabase? Tableau? Google Sheets?)

### Deliverable: Metrics Dashboard

```markdown
# Metrics Review Plan

## North Star Metric
[Metric]: $[X] by [date]

## Daily Metrics (Slack #metrics)
[List from hierarchy]

## Weekly Review (Wednesday sync)
[List from hierarchy]

## Monthly Review (Last Friday)
[List from hierarchy]

## Quarterly Review (Half-day)
[List from hierarchy]

## Dashboard Tool & Access
- Tool: [Metabase / Tableau / Mixpanel]
- Access: [Team members]
- Update frequency: Real-time or daily

## Alerts
- If day-over-day churn > [X]%: Notify CEO
- If error rate > [X]%: Notify on-call engineer
- If acquisition drops > [X]%: Notify marketing
```

---

## Bite 3: Version Roadmap & Feature Prioritization (RICE)

### Version roadmap template:

```markdown
# Version Roadmap

## v1.0.0 (Launch)
Released: [Date]
Scope: [Core features from MVP]

## v1.0.1 (Hotfix)
Timeline: [Within 1 week of launch]
Scope:
  - [Critical bug #1]: [Brief description, impact]
  - [Critical bug #2]: [Brief description, impact]
  - [Quick win #1]: [Feature that was easy to miss]
Rationale: Address immediate post-launch issues

## v1.1 (Month 1-2)
Timeline: [Date range]
Scope:
  - [Most-requested feature]: RICE score [X]
  - [Improve feature A based on feedback]: RICE score [X]
  - [Fix UX issue B]: RICE score [X]
Rationale: [Why these priorities?]

## v1.2 (Month 2-3)
Timeline: [Date range]
Scope:
  - [Feature C]: RICE score [X]
  - [Performance optimization]: RICE score [X]
Rationale: [Why these priorities?]

## v2.0 (Month 4-6, or later)
Timeline: [Date range, TBD]
Scope:
  - [New product category or platform]
  - [Major architecture change]
  - [New market expansion]
Rationale: [Strategic direction]

## Backlog (Deprioritized)
- [Feature X]: Good to have, but not urgent
- [Feature Y]: Waiting on [blocker]
- [Feature Z]: Customer asks, but low impact
```

### RICE scoring framework:

```markdown
# RICE Prioritization Framework

RICE = (Reach × Impact × Confidence) / Effort

## Reach: How many users in a given period?
  4 = Affects > 50% of users in next quarter
  3 = Affects 25-50% of users in next quarter
  2 = Affects 10-25% of users in next quarter
  1 = Affects < 10% of users in next quarter
  0 = Affects 0 users (deprioritize)

## Impact: How much does it help each affected user?
  3 = Transformative (major productivity gain)
  2 = Substantial (noticeable improvement)
  1 = Minor (nice to have)
  0.5 = Minimal (barely matters)
  0 = Negative (breaks things)

## Confidence: How sure are we about Reach and Impact?
  100% = High (validated with customers)
  75% = Medium-high (strong signals)
  50% = Medium (some evidence)
  25% = Low (speculation)

## Effort: How much work (in developer-weeks)?
  For RICE = (R × I × C) / E
  Use actual effort in weeks

## Example Scoring:
Feature: "Add Dark Mode"
  Reach: 3 (35% of users request it)
  Impact: 2 (nice improvement, not transformative)
  Confidence: 75% (request frequency is high, but adoption unknown)
  Effort: 3 weeks
  RICE = (3 × 2 × 0.75) / 3 = 1.5

Feature: "Fix critical auth bug"
  Reach: 4 (100% of users affected)
  Impact: 3 (blocks feature access)
  Confidence: 100% (actively reported)
  Effort: 0.5 weeks
  RICE = (4 × 3 × 1.0) / 0.5 = 24 ← HIGH PRIORITY

## RICE Threshold
  > 20: Critical, do immediately
  10-20: High priority, do in current/next cycle
  5-10: Medium priority, do in next quarter
  < 5: Low priority, backlog or kill
```

### Feature deprioritization criteria:

```markdown
# When to Deprioritize or Sunset Features

## Deprioritization Criteria
A feature should be moved to backlog if:
  1. Usage rate < [X]% (declining adoption)
  2. Support load > 0 but user benefit < 0.1 (more confusing than helpful)
  3. Maintenance burden > usage benefit (technical debt)
  4. No customer requests in 3+ months (demand is dead)
  5. RICE score < 5 (relative to other opportunities)

## Sunset Process
When killing a feature:
  1. **Notification (1 month warning)**
     - Notify affected users in-app, email, blog post
     - Explain why and what alternatives exist
     
  2. **Data migration (2 weeks)**
     - Help users export their data (if applicable)
     - Provide script or API for bulk export
     
  3. **Code removal (after sunset date)**
     - Remove feature from UI
     - Keep data in database for 6 months (in case of recovery requests)
     - Remove code from next major version
     
  4. **Comms (after removal)**
     - Thank users for using it
     - Share learnings publicly (what we learned)

## Examples
  - "Dark mode is being sunset because we didn't see usage"
  - "Legacy API is being deprecated because most users migrated to v2"
  - "CSV export is being removed because only 2% of users used it"
```

### Key questions for Bite 3:

1. **Roadmap length?** (12 months? 6 months? Rolling 3-month window?)
2. **Prioritization owner?** (PM? CEO? Customer vote?)
3. **Pace?** (Release every week? Every 2 weeks?)

### Deliverable: Version Roadmap

```markdown
# Version Roadmap & Prioritization

## Version Releases (Next 6 Months)
[Use template from above]

## RICE Scoring Process
- Scoring owner: [PM / leadership]
- Scoring cadence: Monthly (end of month)
- Threshold for top-5: > [X] RICE

## Current RICE Ranking
| Feature | Reach | Impact | Confidence | Effort | RICE | Status |
|---------|-------|--------|-----------|--------|------|--------|
| [Feature A] | 3 | 3 | 75% | 2w | 3.4 | v1.1 |
| [Feature B] | 2 | 2 | 50% | 3w | 0.7 | Backlog |
| [Feature C] | 4 | 2 | 100% | 1w | 8 | v1.0.1 |

## Backlog & Deprioritized Features
[List with deprioritization reason]

## Sunset Process
[When/how we communicate feature removals]
```

---

## Bite 4: Technical Debt & Sustainability

### Technical debt tracking:

```markdown
# Technical Debt Management

## What is Technical Debt?
  - Shortcuts taken to ship faster
  - Legacy code that should be refactored
  - Missing tests
  - Missing documentation
  - Performance issues
  - Security gaps

## Debt Categories & Examples

Category 1: Code Quality
  - [Function X is 500 lines, needs refactoring]
  - [Test coverage in module Y is 30%, target 80%]
  - [API endpoint Z has no documentation]

Category 2: Infrastructure
  - [Database query is slow (P95 = 2s, target 500ms)]
  - [Deployment takes 15 min, should be < 5 min]
  - [Monitoring alerts are noisy, need tuning]

Category 3: Dependencies
  - [Package X is 3 versions behind, has security fix]
  - [Framework Y is deprecated, plan migration]

Category 4: Architecture
  - [Monolith should be split into microservices]
  - [Message queue needed for async processing]

## Debt Prioritization
  P0 (Fix immediately):
    - Security vulnerabilities
    - Performance causing revenue impact
    - Missing auth/access controls
    
  P1 (Fix in next sprint):
    - Code that slows down development (poor DX)
    - Test gaps in critical path
    - Performance < 0.5s latency
    
  P2 (Fix when convenient):
    - Code that's annoying but works
    - Test gaps in non-critical areas
    - Nice-to-have refactors
    
  P3 (Nice to have):
    - Code style issues
    - Documentation gaps for infrequent code

## Debt Tracking
  Tool: GitHub issues with label:debt
  Format: [Category] Description + impact + effort
  Review: Weekly (PR review) + monthly (engineering standup)
```

### Burnout prevention & sustainability:

```markdown
# Engineering Burnout Prevention

## What causes burnout?
  1. Too much technical debt (can't ship fast)
  2. Production fires (paging at 2am)
  3. Unclear priorities (thrashing)
  4. Unrealistic timelines (crunch forever)
  5. No time for learning / growth

## Prevention Strategies

Time Allocation (weekly):
  - 60-70%: Feature development
  - 15-20%: Bug fixes & maintenance
  - 10-15%: Technical debt / infrastructure
  - 5-10%: Learning, design spikes, experiments

Quarterly Planning:
  - 1 week per quarter: Dedicated refactor sprint
  - 1 week per quarter: Infrastructure improvements
  - Example: Months 1-3 feature mode, Month 3 Week 4 debt sprint

On-call Sustainability:
  - No more than 1 on-call rotation per month (1 week on, 3 weeks off)
  - Pager duty threshold: Page only for P0 (down/data loss)
  - No paging at night unless actively being resolved
  - Post-incident: Root cause analysis, prevent recurrence

Work-Life Balance:
  - No expectation of work outside 9-5 (except on-call)
  - Async-first (don't sync everyone to same schedule)
  - Vacation: Min 2 weeks/year uninterrupted
  - Growth time: 5-10% learning, conference attendance

Culture:
  - Celebrate wins (shipped features, incidents resolved)
  - Retrospectives focused on "what went well" + improvements
  - Skip weeks (no new features, only maintenance)
  - Transparent about runway (so engineers know urgency)
```

### Success indicators:

```markdown
# Sustainability Metrics

## Code Health
  - Test coverage: [Target X]%
  - Debt/tech-debt issues: [Trending down?]
  - Build time: [Target < X sec]
  - Deploy time: [Target < X min]

## Team Health
  - Engineer retention: [Target X] (ideal 80%+/year)
  - Satisfaction survey: [Target X]/10
  - On-call pages per engineer: [Target < X] per week
  - Unplanned production incidents: [Target < X] per week

## Product Health
  - Error rate: [Target < 0.5]%
  - API latency (p95): [Target < X] ms
  - User-facing bugs reported: [Target < X] per week
  - Feature stability: [Target X]% uptime

## Roadmap Health
  - Velocity trending: [Stable or growing?]
  - Estimation accuracy: [Within +/- 20%?]
  - Surprise P0 issues mid-sprint: [Should be < 1 per sprint]
```

### Key questions for Bite 4:

1. **Debt review cadence?** (Weekly? Monthly?)
2. **Refactor time allocation?** (15% every sprint? Dedicated weeks?)
3. **On-call model?** (Weekly rotation? Paid compensation?)

### Deliverable: Technical Debt & Sustainability Plan

```markdown
# Technical Debt & Sustainability Plan

## Debt Tracking
- **Tool:** GitHub issues with label:tech-debt
- **Review:** Weekly in code review, monthly engineering standup
- **Prioritization:** P0/P1/P2/P3 (see above)

## Current Debt (Top 10)
[List with category, impact, effort]

## Debt Repayment Schedule
- Week 1-2: [Debt item 1]
- Week 3-4: [Debt item 2]
- Quarterly refactor sprint: [Major refactors]

## Time Allocation (Target)
- Feature development: 65%
- Bug fixes: 15%
- Technical debt: 15%
- Learning: 5%

## On-Call Model
- Rotation: [1 week on, 3 weeks off]
- Threshold: [P0 only during night]
- Compensation: [Paid? Time off?]

## Burnout Prevention
- Skip weeks: [1 per quarter]
- Vacation: [Min 2 weeks/year]
- Growth budget: [1-2 conferences/year]

## Sustainability Metrics
[From success indicators above]
```

---

## Integration Notes

- **Timing:** Phase 10 is the **final phase** before "maintenance mode." It establishes feedback loops that should run forever.
- **Dependencies:** Phase 10 depends on all previous phases (1-9) to have concrete products/teams to gather feedback on.
- **Handoff to Build:** Phase 10 deliverables → AGENT.md `feedback-loops` and `sustainability` sections.
- **Tier adjustments:** Lite = founder-owned feedback, minimal tooling. Standard = formal feedback process, paid tools. Enterprise = dedicated analyst, quarterly board reviews.

---

## Summary

Phase 10 establishes the feedback and iteration engine:

| Bite | Deliverable | Key Decision |
|------|-------------|--------------|
| 1 | Feedback Loops | Collection methods, synthesis owner |
| 2 | Metrics Dashboard | North Star metric, review cadence |
| 3 | Version Roadmap | Release schedule, RICE prioritization |
| 4 | Technical Debt Plan | Debt tracking, sustainability model |

**After Phase 10 confirmation:** User saves all 4 deliverables. **Planning phase is complete.** Transition to Build phase with AGENT.md + handoff package.

---

## What's Next?

Once Phase 10 is confirmed:

1. **Generate Build Handoff Package:**
   - Compile all 32 planning files
   - Generate AGENT.md (project brain)
   - Generate activation prompt for IDE agent
   - Create pdf-manifest.json

2. **Transition to Build Phase:**
   - Open your IDE (VS Code, JetBrains)
   - Load the PDF IDE agent
   - Paste AGENT.md + activation prompt
   - Begin building

3. **Maintain Planning Artifacts:**
   - Keep planning docs in `docs/` folder
   - Update roadmap as you build
   - Reference in retros and planning sessions
   - Archive old versions (keep history)


<!-- END_OF_FILE: 18-phase-iteration-feedback.md -->

---
