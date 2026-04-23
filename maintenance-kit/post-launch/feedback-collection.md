# Feedback Collection

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 7 — Post-Launch Operations

---

## Overview

User feedback is raw signal. Without a structured process to collect, triage, and act on it, valuable insights get lost in notification noise while real pain points go unaddressed.

This document covers every feedback channel — from app store reviews to crash reports to in-app prompts — and defines how to turn that signal into product improvements.

---

## Feedback Channels Overview

| Channel | Signal Type | Volume | Actionability | Setup Effort |
|---|---|---|---|---|
| App Store Reviews | Sentiment, pain points, praise | Low (public) | High | None (automatic) |
| In-App Feedback Form | Structured bug reports & features | Medium | Very High | Low |
| In-App Review Prompt | Star rating (store boost) | High | Medium | Low |
| Support Email | Deep individual issues | Low | Very High | None |
| Crash Reporting | Technical bugs | Automatic | Very High | Setup required |
| Analytics Events | Behavioral patterns | Automatic | High | Setup required |
| Social Media Mentions | Brand sentiment | Medium | Low-Medium | Optional |
| User Interviews | Deep qualitative insights | Very Low | Very High | High |

---

## Part 1: In-App Review Prompt

The native review prompt (StoreKit / Play Core) is the **highest-impact, lowest-effort** action for improving your store rating. Ask at the right moment and users give better ratings.

### When to Ask

```
GOOD MOMENTS (high emotional state, task complete):
  ✅ User just completed a milestone / finished a lesson / reached a goal
  ✅ User has had 3+ sessions (established habit — not a first-impression reaction)
  ✅ User has been active for 7+ days
  ✅ After a positive interaction (saved something, shared, received a compliment)

BAD MOMENTS (interrupt / frustration / too early):
  ❌ Immediately after first launch
  ❌ After an error or loading failure
  ❌ Mid-task (interrupts flow)
  ❌ Repeatedly — iOS allows max 3 prompts per 365-day period
```

### Implementation

```dart
// Flutter (in_app_review package)
import 'package:in_app_review/in_app_review.dart';

final InAppReview inAppReview = InAppReview.instance;

Future<void> requestReviewIfEligible() async {
  // Check your own conditions first
  final bool hasCompletedThreesessions = /* check session count */ true;
  final bool hasReachedFirstMilestone = /* check milestone */ true;
  
  if (hasCompletedThreeessions && hasReachedFirstMilestone) {
    if (await inAppReview.isAvailable()) {
      await inAppReview.requestReview();
    }
  }
}
```

```swift
// iOS Native (Swift)
import StoreKit

func requestReviewIfAppropriate() {
  // Only request after meaningful usage
  guard userHasCompletedCoreAction && sessionCount >= 3 else { return }
  
  if let scene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
    SKStoreReviewController.requestReview(in: scene)
  }
}
```

### Configuration Checklist

```
[ ] Review prompt implemented at appropriate trigger point(s)
[ ] Trigger conditions are meaningful (not on first launch)
[ ] Prompt fires maximum once per 30 days (enforce in app logic)
[ ] iOS: Uses SKStoreReviewController (not custom redirect — policy violation)
[ ] Android: Uses Play Core In-App Review API
[ ] Tested on real device (simulators may not show the prompt)
[ ] Analytics event logged when prompt is shown and when store opens (for conversion measurement)
```

---

## Part 2: In-App Feedback Form

For structured feature requests and bug reports directly from within the app.

### Where to Place It

```
Locations (choose 1-2):
  [ ] Settings screen → "Send Feedback" menu item
  [ ] Swipe gesture or shake gesture (power users)
  [ ] Empty states — "Something missing? Let us know"
  [ ] After error state — "Help us fix this"
```

### Minimal Feedback Form (Recommended)

Keep the form under 3 fields — more friction = less feedback:

```
FEEDBACK TYPE
  [ ] 🐛 Bug / Something broken
  [ ] 💡 Feature request
  [ ] 💬 General feedback

YOUR FEEDBACK
  [_____________________________________________]
  [_____________________________________________] (multi-line, 500 char limit)

CONTACT (optional — so we can follow up)
  [Email: ______________________________]

[Send Feedback]     [Maybe later]
```

### Implementation Options

```
OPTION A: Third-party SDK (fastest setup)
  - Instabug (iOS + Android, free tier)
  - Shake SDK (iOS + Android, free tier)
  - Codemagic Feedback
  
  Setup: Add SDK → initialize → shake/tap to trigger

OPTION B: Email form (simplest, no SDK)
  On submit: compose email to support@yourdomain.com
  Include: Device model, OS version, app version (auto-populate)
  Subject: "[FeedbackType] from [AppName] [Version]"

OPTION C: Custom API endpoint
  POST /feedback with payload: { type, message, email?, device, os, version, user_id? }
  Store in database or push to issue tracker via webhook
```

---

## Part 3: App Store Review Management

### Review Response Process

```
RESPONSE MATRIX

★★★★★ (5 stars)
  Response time:  Within 72 hours (can be done in batch)
  Tone:           Warm, personal, grateful
  Template:       "Thank you so much for taking the time to review [App Name]!
                   We're really glad [specific thing they mentioned].
                   Let us know if you have any suggestions — we'd love to hear from you!"

★★★★ (4 stars)
  Response time:  Within 48 hours
  Tone:           Grateful + curious (what would make it 5 stars?)
  Template:       "Thanks for the great review! We'd love to know what would make
                   [App Name] a 5-star experience for you — every bit of feedback helps us improve."

★★★ (3 stars)
  Response time:  Within 48 hours
  Tone:           Understanding, helpful, ask for details
  Template:       "Thanks for your feedback — we take 3-star reviews seriously.
                   We'd really like to understand what we could improve. Could you email us
                   at [support@yourdomain.com] so we can learn more?"

★★ (2 stars)
  Response time:  Within 24 hours
  Tone:           Apologetic, empathetic, immediate help
  Template:       "We're sorry [App Name] hasn't been working well for you.
                   Please email us at [support@yourdomain.com] and we'll do everything
                   we can to help. We genuinely want to fix this for you."

★ (1 star)
  Response time:  Within 24 hours (if actionable) / same day (if crash/data loss)
  Tone:           Genuinely apologetic, specific, no excuses
  Template:       "We're really sorry about your experience. This is not the level of quality
                   we hold ourselves to. Please email us at [support@yourdomain.com] so we can
                   investigate immediately and make this right."
  Note:           Never argue. Never be defensive. Move to private email as fast as possible.
```

### Review Monitoring Setup

```
MONITORING CONFIGURATION

Manual (free):
  [ ] Book weekly 15-minute calendar slot: "Review new app store reviews"
  [ ] iOS: Check App Store Connect → [App] → Ratings and Reviews
  [ ] Android: Check Play Console → [App] → Ratings → Reviews

Automated (recommended):
  [ ] AppFollow connected: [URL to dashboard]
      NEW review → post to Slack #store-reviews
      Rating drops below 4.0★ → alert to #alerts
  
  [ ] RSS polling (free alternative):
      iOS RSS: https://itunes.apple.com/[country]/rss/customerreviews/id=[APP_ID]/sortBy=mostRecent/xml
      Parse new entries → Slack webhook

Alert thresholds:
  [ ] 1-star review → immediate Slack notification
  [ ] Rating drops below 4.0★ average → #alerts
  [ ] 5+ reviews in one day → #store-reviews summary
```

---

## Part 4: Support Email Pipeline

```
SUPPORT EMAIL SETUP

Address:    support@[yourdomain.com]
            (Create a real inbox — not a no-reply address)

Auto-responder (mandatory):
  Subject:  Re: Your [App Name] Support Request
  Body:     "Thanks for reaching out! We've received your message and aim to 
             reply within [24 / 48] hours.
             
             While you wait, our FAQ is at: [URL]
             
             — The [App Name] Team"

Triage process:
  For each email:
    1. Categorize: Bug / Feature request / Account issue / Complaint / Praise
    2. Bug:     Log in issue tracker with app version + device info
    3. Feature: Log in feature request backlog with user count
    4. Account: Resolve directly — reply within 24 hours
    5. Praise:  Thank the user — ask if they'd be willing to leave a review

Response templates:
  See below — customize for your product
```

### Email Response Templates

```
TEMPLATE: Bug report acknowledgement
  Subject: Re: [Issue description]
  
  Hi [Name / "there" if no name],
  
  Thank you for reporting this — we're sorry you ran into this issue.
  I've logged this with our team and we're investigating.
  
  To help us reproduce it, could you tell me:
  - What device and OS version are you on?
  - What were you doing right before the issue appeared?
  
  We'll update you as soon as we have a fix.
  
  — [Your name], [App Name] Team

TEMPLATE: Feature request acknowledgement
  Subject: Re: [Feature idea]
  
  Hi [Name / "there"],
  
  Thanks for this suggestion — I really appreciate you taking the time.
  I've added this to our feature request tracker. We can't promise timelines,
  but community requests genuinely influence what we build next.
  
  If you have a moment, I'd love to understand more about your use case:
  [Specific follow-up question about their need]
  
  — [Your name], [App Name] Team
```

---

## Part 5: Feedback Triage & Prioritization

All feedback from all channels flows into a single triage session.

### Weekly Feedback Triage (30 minutes)

```
WEEKLY TRIAGE AGENDA

Run every [Monday / Friday] — 30 minutes max.

1. Collect (10 min)
   Pull from all channels:
   [ ] App store reviews (iOS + Android) since last triage
   [ ] In-app feedback submissions since last triage
   [ ] Support emails since last triage
   [ ] Crash report summary (new crash types this week)
   [ ] Any social media mentions flagged

2. Categorize & Count (10 min)
   Group feedback items:
   [ ] Bugs → link to crash dashboard (already tracked?) or create new issue
   [ ] UX confusion → tag as "friction point" + affected screen
   [ ] Missing features → add to feature backlog with frequency count
   [ ] Praise → note for motivation and marketing
   [ ] Compliance / legal → escalate immediately

3. Prioritize New Issues (10 min)
   For each new bug/UX issue:
   [ ] How many users affected?
   [ ] How severe? (P0 crash / P1 broken / P2 friction / P3 cosmetic)
   [ ] Is it in the next release scope?
   [ ] Assign owner and milestone

4. Update tracking:
   [ ] Update feedback log (see table below)
   [ ] Brief team: "Top issues from this week's triage" → Slack summary
```

### Feedback Log

```markdown
## Feedback Log — [Project Name]

### [Week of YYYY-MM-DD]

| Source         | Type    | Description                           | Count | Priority | Status    |
|----------------|---------|---------------------------------------|-------|----------|-----------|
| App Store (iOS)| Bug     | Crash on settings screen              | 2     | P0       | ✅ Fixed   |
| In-app form    | Feature | "Dark mode please"                    | 14    | P2       | 📋 Backlog |
| Support email  | UX      | "Couldn't find how to export data"    | 3     | P1       | 🔄 In fix  |
| App Store (And)| Praise  | "Best app for X I've tried"           | 5     | —        | 💚 Noted   |
```

---

## Part 6: User Interview Program (Optional — Standard+)

Qualitative interviews surface insights that no analytics tool can reveal.

```
USER INTERVIEW PROCESS

RECRUITMENT
  Who:   Active users (engaged more than 5 sessions)
  How:   In-app prompt after session 5+
         "Would you be willing to share 15 min of feedback? [Schedule call]"
  Tool:  Calendly link → 15-30 min call via Zoom / Google Meet

SCRIPT (15-MINUTE INTERVIEW)
  [2 min] Intro: "Thanks for joining! This is completely informal — just want to hear your experience."
  [3 min] Context: "Tell me how you use [App Name] in your life."
  [5 min] Journey: "Walk me through the last time you used it — from the moment you opened it."
            → "What were you trying to do?"
            → "Was there anything that slowed you down?"
            → "Was there anything that felt great?"
  [3 min] Gap: "Is there anything you wish you could do with [App Name] that you can't currently?"
  [2 min] Wrap: "If you could change one thing tomorrow, what would it be?"

AFTER THE INTERVIEW
  [ ] Write 3-5 key quotes verbatim
  [ ] Write a one-paragraph summary: "This user's main pain is ___ . They love ___ . They want ___ ."
  [ ] Add to insight repository (Notion / Confluence / Google Doc)
  [ ] Review patterns across 5+ interviews — common themes = product priorities

FREQUENCY
  Lite:       Skip for now
  Standard:   5 interviews at launch + 3 per quarter
  Enterprise: Ongoing — 5+ per month
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **In-app review prompt** | Implement | Implement + analytics | Implement + A/B test timing |
| **In-app feedback** | Email link only | Simple form | Instabug/Shake SDK |
| **App store response** | Respond to 1-star within 48hr | All reviews within 72hr | Dedicated support team |
| **Support email** | Personal inbox | Dedicated alias + auto-reply | Helpdesk tool (Intercom/Zendesk) |
| **Feedback triage** | Monthly | Weekly 30-min | Weekly + dedicated product manager |
| **User interviews** | Skip | 5 at launch | Ongoing program |
