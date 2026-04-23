# GATE-07: Continue / Pivot / Sunset

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 7 — Post-Launch Operations
>
> **Gate Type:** Human Decision — Quarterly Review
>
> **Timing:** 90 days post-launch, then every 90 days thereafter

---

## What This Gate Is

Gate 7 is the **quarterly sustainability review** — a deliberate decision every 90 days about whether to continue growing the product, pivot its direction, or sunset it.

Most products fail not because they were bad, but because their owners never stopped to honestly ask: **"Is continuing worth it?"**

Gate 7 is that honest question, answered with real data.

The three possible outcomes:

| Decision | Meaning |
|---|---|
| **CONTINUE** | The product is viable, growing, or strategically valuable. Continue building and iterating. |
| **PIVOT** | The product has potential but the current direction isn't working. Change approach. |
| **SUNSET** | The product is not viable, not growing, and continuing is not worth the investment. Wind it down responsibly. |

---

## When to Run Gate 7

| Trigger | Timing |
|---|---|
| First Gate 7 | 90 days (3 months) after public launch |
| Recurring Gate 7 | Every 90 days from the first review |
| Unscheduled Gate 7 | If a major event significantly changes the product's trajectory (positive or negative) — e.g., viral growth, investor interest, major competitive threat, or sustained revenue decline |

---

## Part 1: Metrics Review

Gather these metrics before the review session. Compare to goals set at launch.

### User Metrics

```
CURRENT STATE — [Date of Review]

Period covered: [YYYY-MM-DD] to [YYYY-MM-DD] (last 90 days)

ACQUISITION
  Total installs (all time):         ___
  New installs this quarter:          ___
  Install trend:  📈 Growing / ➡️ Flat / 📉 Declining

ENGAGEMENT
  Monthly Active Users (MAU):        ___
  Daily Active Users (DAU):          ___
  DAU/MAU ratio (stickiness):         ___% (target: >20%)
  Average sessions per user per week:  ___
  Average session duration:            ___ min

RETENTION COHORTS
  D1 retention (latest cohort):       ___% (target: >25%)
  D7 retention (latest cohort):       ___% (target: >15%)
  D30 retention (latest cohort):      ___% (target: >8%)
  D90 retention (latest cohort):      ___% (target: >4%)

STORE HEALTH
  Current average rating (iOS):       ___★
  Current average rating (Android):  ___★
  Total reviews (all time):           ___
  Review response rate:               ___%
```

### Business Metrics (if applicable)

```
REVENUE (if monetized)
  Revenue this quarter:               $___
  Revenue vs. prior quarter:          +/- ___% 
  Revenue trend:   📈 Growing / ➡️ Flat / 📉 Declining
  Paying users / subscribers:         ___
  Conversion from free to paid:       ___%
  ARPU (avg revenue per user):        $___
  MRR (monthly recurring revenue):    $___
  Churn rate (subscriptions):         ___%

COST
  Apple / Google developer fees:      $___/year
  Backend infrastructure:             $___/month
  Third-party SDKs / services:        $___/month
  Maintenance development time:       ___hrs/month × $___/hr = $___
  Total monthly cost to run:          $___

PROFITABILITY
  Monthly revenue:                    $___
  Monthly operating cost:             $___
  Monthly profit/loss:               +/- $___
  Break-even monthly users needed:    ___
  Runway (if negative):               ___ months
```

### Health Summary Score

Rate each dimension 1-5 to get a quick composite health score:

```
PRODUCT HEALTH SCORECARD

| Dimension          | Score (1-5) | Notes |
|--------------------|-------------|-------|
| User growth        |    /5       | Trend: Growing / Flat / Declining |
| Retention          |    /5       | D30 ___% vs target ___% |
| Engagement         |    /5       | Sessions/user/week: ___ |
| Store reputation   |    /5       | Rating: ___★, Trend: growing/flat/declining |
| Revenue / viability|    /5       | Profit/loss per month: $+/- ___ |
| Technical health   |    /5       | Crash-free rate: ___%, Debt level: low/med/high |

TOTAL HEALTH SCORE:    __ / 30

Interpretation:
  24-30:  Strong — Continue aggressively
  18-23:  Solid — Continue with optimization focus
  12-17:  Moderate — Continue carefully; identify root causes of low scores
   6-11:  Weak — Pivot evaluation warranted
   1-5:   Critical — Sunset evaluation warranted
```

---

## Part 2: Qualitative Review

Numbers tell you *what* is happening. Qualitative review tells you *why*.

```
QUALITATIVE REVIEW QUESTIONS

User Sentiment
  1. What do our best reviews (5★) consistently say about us?
     [Summary of top 5★ themes]
  
  2. What do our worst reviews (1-2★) consistently complain about?
     [Summary of 1-2★ themes]
  
  3. From user interviews or feedback this quarter, what is the #1 pain point?
     [Answer]

Market Position
  4. Have any significant competitors launched or changed their product?
     [Yes / No — if Yes, describe impact]
  
  5. Has the target market grown, shrunk, or shifted in the last 90 days?
     [Answer]
  
  6. Do we have any unfair advantages now that we didn't have at launch?
     (First-mover advantage, unique data, community, brand recognition)
     [Answer]

Team & Resources
  7. Is the current maintenance effort sustainable for the next 90 days?
     [Yes / No — if No, explain]
  
  8. Is there enough of a runway (time, money, motivation) to continue?
     [Yes / No — timeline: ___ months]
```

---

## Part 3: The Three Decisions

### Decision Framework

```
DECISION MATRIX

                     High engagement / growing
                            ↑
              ┌─────────────┼──────────────┐
        Low   │   PIVOT     │   CONTINUE   │   High
      revenue │  (or focus  │  (grow and   │  revenue /
      / value │  on revenue)│   invest)    │  viability
              ├─────────────┼──────────────┤
              │   SUNSET    │   PIVOT      │
              │  (wind down)│  (fix reten- │
              │             │   tion first)│
              └─────────────┼──────────────┘
                            ↓
                    Low engagement / shrinking
```

### CONTINUE — Selection Criteria

Continue if at least 3 of the following are true:

```
[ ] D30 retention ≥ 8% (users are coming back)
[ ] MAU is growing or stable quarter-over-quarter
[ ] Revenue covers costs (or trajectory to breakeven is clear + < 6 months away)
[ ] User NPS / store rating ≥ 4.0★ (product is loved by users who use it)
[ ] Team has capacity and motivation to continue
[ ] No existential competitive threat has emerged
```

### PIVOT — Selection Criteria

Pivot if any of the following are true AND the team has energy to try a new direction:

```
[ ] D30 retention < 5% (users try it but don't stick — product-market fit issue)
[ ] MAU declining for 2+ consecutive months
[ ] Revenue declining despite active user base (monetization model issue)
[ ] A clearly better target audience or use case has emerged from user feedback
[ ] A competitor has dominated the current positioning, but an adjacent opportunity exists
[ ] User research reveals a significantly different problem to solve than originally planned
```

**Pivot types to consider:**
- **Audience pivot:** Same product, different target user
- **Feature pivot:** Keep core functionality, cut features that aren't used, add what users actually want
- **Business model pivot:** Change monetization (free → freemium, subscription → one-time, B2C → B2B)
- **Platform pivot:** Shift primary platform (mobile → web, or vice versa)

### SUNSET — Selection Criteria

Sunset if any of the following are true:

```
[ ] D30 retention < 2% for two consecutive quarters (no product-market fit)
[ ] Revenue covers less than 50% of operating costs with no clear path to profitability
[ ] Team runway is exhausted (time, money, or motivation)
[ ] Compliance risk has emerged that cannot be addressed (COPPA, GDPR, store policy)
[ ] A competitor has released a substantially superior product that makes this obsolete
[ ] The market opportunity has disappeared (regulation, platform change, cultural shift)
[ ] Two consecutive pivot attempts have not improved retention
```

---

## Part 4: Sunset Plan (if decided)

If the decision is Sunset, execute this plan responsibly:

```
SUNSET PLAN — [Project Name]

Shutdown date: [YYYY-MM-DD] (minimum 30 days from decision for public products)

USER COMMUNICATION
  [ ] In-app notification to all active users: shutdown date + reason (brief)
  [ ] Email to registered users (if email list exists): shutdown date + data export options
  [ ] App store listing updated: "This app will stop working on [date]."
  [ ] Website / landing page updated with shutdown notice

DATA HANDLING
  [ ] Users offered data export (if applicable)
  [ ] User data deletion timeline communicated (GDPR: within 30 days of request)
  [ ] Schedule automated data deletion after shutdown date
  [ ] Notify each third-party processor of shutdown → data deletion required

TECHNICAL SHUTDOWN
  [ ] Subscription cancellations processed and refunds issued (if applicable)
  [ ] Backend scheduled shutdown: [Date]
  [ ] Source code archived: [Repository location] — keep for 1 year minimum
  [ ] Domain name: [Keep / Transfer / Let expire after redirect period]

APP STORES
  [ ] iOS: Remove from sale in App Store Connect (app stops being available for new downloads)
    → Existing users can still download if they previously purchased
    → OR: Request app removal entirely (contact App Store)
  [ ] Android: Unpublish in Play Console (immediately stops new downloads)

ACCOUNTS & SERVICES
  [ ] Cancel or downgrade: backend hosting, database, CDN, email
  [ ] Cancel: crash reporting, analytics subscriptions
  [ ] Cancel: monitoring services
  [ ] Transfer or archive: domain, email lists

TEAM
  [ ] Brief retrospective: "What did we learn?"
  [ ] Knowledge archived: README in repo documenting what was built + key lessons
  [ ] Team appreciation

TIMELINE
  T+0 (Decision):  User communications sent; app marked as shutting down
  T+14 days:       Final push notification reminder to active users
  T+30 days:       App removed from stores; backend shut down
  T+60 days:       User data deletion complete; infrastructure lease ended
```

---

## Gate 7 Sign-Off Record

```
GATE 7 — CONTINUE / PIVOT / SUNSET REVIEW

Project:       [Project Name]
Review date:   [YYYY-MM-DD]
Review #:      [1st / 2nd / 3rd / etc.]
Period:        [Last 90 days]
Reviewer(s):   [Names]

HEALTH SCORE:  __ / 30  ([Interpretation])

KEY METRICS:
  MAU:          [N]  (trend: ↑ / → / ↓)
  D30 retention: [X]%
  Revenue/month: $___
  Cost/month:    $___
  Store rating:  [X.X]★

DECISION:
  [ ] ✅ CONTINUE  — Rationale: [1-2 sentences]
       Next Gate 7 review: [Date 90 days from now]
       Priority focus for next quarter: [1-3 focus areas]
  
  [ ] 🔄 PIVOT    — Rationale: [1-2 sentences]
       Pivot type: [Audience / Feature / Business model / Platform]
       New hypothesis: [What we're changing and why we believe it will work]
       Test period: [How long before re-evaluating]
  
  [ ] 🔴 SUNSET   — Rationale: [1-2 sentences]
       Shutdown date: [YYYY-MM-DD]
       Sunset plan owner: [Name]

Decision made by: _________________________ Date: __________
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Gate 7 required** | Optional (annual) | Quarterly | Quarterly — required |
| **Review depth** | 15 min — key metrics only | 30-60 min — full review | 60-90 min — board-level review |
| **Sunset notice period** | 14 days | 30 days | 60+ days |
| **Data export requirement** | Not needed | Export offered | Export required (GDPR) |
| **Pivot process** | Ad hoc | Mini-sprint | Full re-planning cycle |
