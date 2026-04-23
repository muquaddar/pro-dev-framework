# Monitoring Setup

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 7 — Post-Launch Operations

---

## Overview

Monitoring is not optional — it is the difference between knowing your product is broken and finding out from a 1-star review. A well-configured monitoring stack gives you:

- **Visibility:** You know what's happening in your product at all times
- **Speed:** You detect and fix problems before most users notice
- **Insight:** You understand how users interact with the product
- **Confidence:** You can release updates without fear of silent failures

Set up monitoring **before launch**, not after a crisis.

---

## Monitoring Stack Overview

| Layer | What It Tracks | Recommended Tools |
|---|---|---|
| **Crash Reporting** | App crashes and fatal errors | Firebase Crashlytics, Sentry |
| **Error Tracking** | Non-fatal errors, API failures | Sentry, Datadog |
| **Performance** | App startup time, screen load, ANR/freeze | Firebase Performance, New Relic |
| **Analytics** | User behavior, funnels, retention | Firebase Analytics, Mixpanel, PostHog |
| **Backend / API** | Server errors, latency, uptime | Sentry, Datadog, UptimeRobot |
| **Store Ratings** | New reviews, rating changes | AppFollow, Appbot, manual |
| **Alerting** | Notify team when something breaks | Slack integration, PagerDuty (Enterprise) |

---

## Part 1: Crash & Error Tracking

### 1.1 Crash Reporting Setup

Crash reporting is the first thing to configure. Without it, you are blind to failures.

**Recommended: Firebase Crashlytics (free)**

```
SETUP STEPS (Firebase Crashlytics)

iOS:
  1. Add Firebase to your iOS project (FirebaseCore + FirebaseCrashlytics)
  2. Initialize in AppDelegate / App (if SwiftUI):
       import FirebaseCore
       FirebaseApp.configure()
  3. Add run script for dSYM upload (critical for symbolication):
       "${PODS_ROOT}/FirebaseCrashlytics/run"
     Input files:
       ${DWARF_DSYM_FOLDER_PATH}/${DWARF_DSYM_FILE_NAME}/Contents/Resources/DWARF/${TARGET_NAME}
       $(SRCROOT)/$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)
  4. Test crash (debug only): FirebaseCrashlytics.crashlytics().crash()
  5. Verify in Firebase Console: Crashlytics → Events

Android:
  1. Add to build.gradle:
       implementation 'com.google.firebase:firebase-crashlytics:XX.X.X'
       apply plugin: 'com.google.firebase.crashlytics'
  2. ProGuard/R8: Add keeprules for stack trace mapping
  3. Test: FirebaseCrashlytics.getInstance().crash()
  4. Verify in Firebase Console

Flutter:
  1. Add package: firebase_crashlytics: ^X.X.X
  2. Initialize and configure FlutterError handler (see pub.dev docs)
  3. Test: FirebaseCrashlytics.instance.crash()
```

**Alternative: Sentry (free tier, better error grouping)**

```
SENTRY SETUP
  1. Create account at sentry.io
  2. Add package: sentry-dart (Flutter) or sentry-swift (iOS native)
  3. Initialize with DSN (from project settings)
  4. Configure: SentryFlutter.init((options) { options.dsn = 'YOUR_DSN'; })
  5. Test: throw Exception("Sentry Test");
  6. Verify in Sentry Dashboard
```

### 1.2 Crash Alert Configuration

```
ALERT SETUP (Firebase)
  1. Firebase Console → Crashlytics → Alerts
  2. Enable: New issue alerts (immediate), Velocity alerts (spike in crashes)
  3. Alert channel: [Email / Slack webhook]

ALERT SETUP (Sentry)
  1. Sentry → Project Settings → Alerts → Create Alert
  2. Rule: "When a new issue is seen" → notify via Slack / email
  3. Rule: "When issue frequency > 10 in 1 hour" → notify immediately

SLACK INTEGRATION (recommended)
  Workspace: [Your Slack workspace]
  Channel:   #alerts or #crashes-[project]
  Integration: Firebase Alerts → Slack webhook
               Sentry → Slack Alerts app
```

### 1.3 Crash Monitoring Process

```
CRASH TRIAGE PROTOCOL (run weekly after launch, daily in first 2 weeks)

  1. Open crash dashboard ([Firebase / Sentry URL])
  2. Filter: Last 7 days, production only
  3. Sort by: Affected users (highest first)
  4. For each crash group:
     a. Is it already in the issue tracker? (skip if yes)
     b. How many users affected? (P0 if >1% affected)
     c. Can I reproduce it? (attempt once)
     d. Create issue with: crash group link, affected users, reproduction steps
     e. Assign priority and owner
  5. Update team in #crashes-[project]
```

---

## Part 2: Performance Monitoring

### 2.1 App Performance (Firebase Performance)

```
FIREBASE PERFORMANCE SETUP
  iOS: Add Firebase/Performance to Podfile
  Android: com.google.firebase:firebase-perf
  Flutter: firebase_performance package
  
  Automatic traces provided (zero config):
    - App start time
    - Network request duration
    - Screen render performance

CUSTOM TRACES (add for key user flows)
  Example (Flutter):
    final trace = FirebasePerformance.instance.newTrace('onboarding-flow');
    await trace.start();
    // ... the flow ...
    await trace.stop();
    
  Recommended custom traces:
    - 'first-content-load'
    - 'login-flow'
    - 'core-feature-complete' (whatever the main user action is)
    - 'data-sync'

TARGET PERFORMANCE BENCHMARKS
  App cold start time:     < 2 seconds
  Hot start time:          < 0.5 seconds
  First meaningful paint:  < 1 second
  Network request p95:     < 3 seconds
  Frame rate:              ≥ 60fps (or 90/120fps on high refresh devices)
  ANR/freeze rate (Android): < 0.1%
```

---

## Part 3: Analytics & User Behavior

### 3.1 Analytics Setup

**Recommended: Firebase Analytics (free, built-in to Firebase)**

```
AUTOMATIC EVENTS (collected without any code)
  - first_open
  - session_start
  - app_remove (Android)
  - screen_view (if configured)

CUSTOM EVENTS TO IMPLEMENT
  Onboarding:
    onboarding_started
    onboarding_step_completed { step: N }
    onboarding_completed

  Core user journey:
    [feature_name]_started
    [feature_name]_completed
    [feature_name]_abandoned

  Engagement:
    content_viewed { content_id, content_type }
    share_triggered
    in_app_review_prompted
    in_app_review_completed

  Retention signals:
    return_visit (manual event for meaningful re-engagement)
    streak_milestone { streak_days: N }

  Errors:
    error_encountered { screen, error_type } (non-crash errors)
```

### 3.2 Key Metrics Dashboard

Build a dashboard for these metrics in Firebase Analytics or your analytics tool:

```
PRODUCT HEALTH DASHBOARD

New Users & DAU
  - New installs (daily)
  - Daily Active Users (DAU)
  - Monthly Active Users (MAU)
  - DAU/MAU ratio (stickiness — target: >25%)

Retention Cohorts
  - D1 retention: % of users who return day after install (target: >30%)
  - D7 retention: % returning on day 7 (target: >15%)
  - D30 retention: % returning on day 30 (target: >8%)

Core User Journey Funnel
  - Install → First open: ___%
  - First open → Onboarding complete: ___%
  - Onboarding → First core action: ___%
  - First action → Second session: ___%

Engagement
  - Average session duration
  - Sessions per active user per week
  - Most-used features
  - Drop-off points in key flows

Revenue (if applicable)
  - Revenue per day
  - Conversion to paid: ___%
  - Average Revenue Per User (ARPU)
  - Churn rate (subscriptions)
```

---

## Part 4: Backend / API Monitoring

For apps with a backend server or API:

```
UPTIME MONITORING (Free options)

Recommended: UptimeRobot (free, 5-min check interval, 50 monitors)
  1. Create account at uptimerobot.com
  2. Add HTTP monitor for:
     - Health endpoint: GET [api-base]/health → 200 OK
     - Primary API endpoint: GET [api-base]/status → 200 OK
  3. Alert: Email + Slack webhook when downtime detected

  Alternative: BetterUptime, Pingdom, Freshping

API ERROR TRACKING (Sentry)
  1. Add Sentry to backend (Node/Python/Go/other)
  2. Capture: all 5xx errors
  3. Track: error rate by endpoint
  4. Alert: when error rate exceeds threshold

DATABASE MONITORING
  - Set up query slow log alerts
  - Monitor connection pool usage
  - Alert: Disk space > 80% used
```

---

## Part 5: App Store Ratings Monitoring

```
STORE RATING TRACKER

Manual (minimum):
  - Check iOS App Store and Google Play weekly
  - Respond to all reviews within 72 hours

Automated (recommended):
  Options:
    - AppFollow (paid, good automation)
    - Appbot (paid, good sentiment analysis)
    - MonitorKit (free tier available)
    - RSS feed: each store provides a review RSS feed

Setup via RSS:
  iOS: https://itunes.apple.com/[COUNTRY]/rss/customerreviews/id=[APP_ID]/sortBy=mostRecent/xml
  Android: No official RSS — use AppFollow or similar

Slack integration:
  - New review → post to #store-reviews channel
  - Rating drops below 4.0★ → alert to #alerts channel

REVIEW RESPONSE PROCESS
  1+ star: Respond within 24 hours. Apologize + offer help. Move conversation to support.
  2-3 star: Respond within 48 hours. Acknowledge + explain roadmap if relevant.
  4-5 star: Respond within 72 hours. Thank the user personally.
```

---

## Part 6: Alerting Configuration Summary

```
ALERT MATRIX

| Event                          | Severity | Channel          | Response Time |
|-------------------------------|----------|------------------|---------------|
| New crash type (1+ users)      | 🔴 High  | Slack #alerts    | 2 hours       |
| Crash affects >1% of users     | 🔴 P0    | Slack + SMS      | 30 min        |
| API uptime alert               | 🔴 P0    | Slack + SMS      | 30 min        |
| App cold start > 3 seconds     | 🟡 Med   | Slack #perf      | 24 hours      |
| D1 retention drops > 5%        | 🟡 Med   | Email            | Next sprint   |
| New 1-star review              | 🟡 Med   | Slack #reviews   | 24 hours      |
| Rating drops below 4.0★        | 🔴 High  | Slack #alerts    | 2 hours       |
| Revenue drops > 20% w/w        | 🔴 High  | Slack #alerts    | Same day      |

Slack channels to configure:
  #alerts     — P0/P1 issues, immediate action needed
  #crashes    — All new crash types and crash updates
  #perf       — Performance regressions
  #reviews    — New app store reviews
  #analytics  — Weekly metrics digest
```

---

## Monitoring Setup Checklist

```
PRE-LAUNCH (must be complete before Step 6 Gate 5)
  [ ] Firebase Crashlytics integrated and tested (test crash sent + received)
  [ ] Firebase Analytics integrated and key events implemented
  [ ] Firebase Performance integrated (auto traces running)
  [ ] Slack alert channel configured for crashes
  [ ] Uptime monitor configured for backend (if applicable)
  
FIRST WEEK AFTER LAUNCH
  [ ] Crash dashboard reviewed daily
  [ ] Core funnel metrics visible in analytics dashboard
  [ ] Review monitoring configured (manual or automated)
  [ ] First weekly metrics report compiled
  
ONGOING
  [ ] Weekly crash triage (30 min — see Part 1 protocol)
  [ ] Weekly metrics review
  [ ] Monthly performance baseline review
  [ ] Quarterly: review and prune unused events/metrics
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Crash reporting** | Crashlytics basic | Crashlytics + alert rules | Crashlytics + Sentry + team on-call |
| **Analytics** | Firebase auto events | Custom events + funnel | Full event taxonomy + BI tool |
| **Performance monitoring** | Firebase auto | Custom traces + benchmarks | Full APM (Datadog / New Relic) |
| **Uptime** | No (or UptimeRobot free) | UptimeRobot + alerts | PagerDuty + on-call rotations |
| **Review monitoring** | Manual weekly check | Automated RSS | AppFollow + dedicated reviewer |
| **Alerting** | Email only | Slack integration | Slack + SMS + PagerDuty |
