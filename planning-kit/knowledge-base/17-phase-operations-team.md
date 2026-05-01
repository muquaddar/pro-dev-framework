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
