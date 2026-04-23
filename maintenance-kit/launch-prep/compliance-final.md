# Compliance Final — Pre-Launch Verification

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 6 — Launch Preparation

---

## Overview

This document is the final compliance gate before publicly releasing the product. Unlike `content-creation-kit/checklists/compliance-review.md` (which is reviewed during development), this is the **pre-launch sign-off** — a complete pass to confirm everything is production-ready.

**Do not pass Gate 5 until every [REQUIRED] item is satisfied.**

---

## How to Use

1. Read through each section with the actual production build and live legal documents.
2. Check every item against the running app — not the documentation alone.
3. Attach evidence where noted (screenshots, links, dates).
4. Get sign-off from each required role.
5. This completed document becomes the compliance record for the launch.

---

## Part 1: Legal Documents — Live & Accessible

```
PRIVACY POLICY
  [REQUIRED]  [ ] Privacy Policy is hosted at a permanent, stable URL (not localhost, not staging)
              URL: _____________________________________
  [REQUIRED]  [ ] Privacy Policy link is accessible WITHOUT logging in from:
              [ ] The app store listing page
              [ ] Within the app (Settings → Privacy Policy, or Login screen link)
  [REQUIRED]  [ ] Privacy Policy accurately reflects ALL data currently collected:
              [ ] All in-app data collection
              [ ] All third-party SDKs (analytics, crash, attribution, ads)
              [ ] Data retention periods stated
  [REQUIRED]  [ ] Privacy Policy updated within the last 30 days (or confirmed current)
              Last updated: _____________________

TERMS & CONDITIONS / EULA
  [REQUIRED]  [ ] Terms are accessible from within the app OR the app store listing
              URL or location: _____________________
  [REQUIRED]  [ ] Terms are accurate and enforceable for the current version of the app
  [RECOMMENDED] [ ] Legal counsel has reviewed the final versions of both documents

CHILDREN'S COMPLIANCE (skip if not applicable)
  [REQUIRED]  [ ] Direct Notice to Parents published and linked from Privacy Policy
              URL: _____________________________________
  [REQUIRED]  [ ] Parental consent mechanism tested end-to-end in production build
  [REQUIRED]  [ ] Parental access/deletion request process confirmed working
```

---

## Part 2: App Store Privacy Declarations

```
iOS — PRIVACY NUTRITION LABELS (App Store Connect)
  [REQUIRED]  [ ] "Data Used to Track You" section — all applicable data types checked
  [REQUIRED]  [ ] "Data Linked to You" section — all applicable data types checked
  [REQUIRED]  [ ] "Data Not Linked to You" section — remaining data types checked
  [REQUIRED]  [ ] Third-party SDK data is INCLUDED in the labels (not just first-party)
  [REQUIRED]  [ ] ATT (App Tracking Transparency) prompt implemented (if any cross-app tracking)
  [REQUIRED]  [ ] NSUserTrackingUsageDescription string in Info.plist is clear and accurate
  
  Evidence: [Screenshot of completed Privacy Nutrition Labels — attach or link]

ANDROID — DATA SAFETY SECTION (Play Console)
  [REQUIRED]  [ ] Data Safety form completed for production track
  [REQUIRED]  [ ] All data types disclosed (including third-party SDK data)
  [REQUIRED]  [ ] Data sharing / selling disclosures accurate
  [REQUIRED]  [ ] Security practices section completed
  
  Evidence: [Screenshot of completed Data Safety form — attach or link]
```

---

## Part 3: Third-Party SDK Audit

List all SDKs/libraries that collect, process, or transmit user data:

```
SDK AUDIT TABLE

| SDK Name        | Version | Data Collected         | GDPR OK | COPPA OK | DPA Signed |
|-----------------|---------|------------------------|---------|----------|------------|
| Firebase Analytics | x.x.x | Usage events, device ID | ✅    | ✅        | ✅          |
| Crashlytics     | x.x.x   | Crash reports, device   | ✅     | ✅        | ✅          |
| [SDK Name]      | [x.x.x] | [What it collects]     | [ ]     | [ ]      | [ ]        |
| [SDK Name]      | [x.x.x] | [What it collects]     | [ ]     | [ ]      | [ ]        |
| [SDK Name]      | [x.x.x] | [What it collects]     | [ ]     | [ ]      | [ ]        |

[REQUIRED]  [ ] All SDKs in production build are listed above
[REQUIRED]  [ ] All SDKs have reviewed privacy policies that are compatible with your Privacy Policy
[REQUIRED]  [ ] For GDPR markets: DPA signed with each SDK vendor that processes EU data
[REQUIRED]  [ ] For COPPA: each SDK either COPPA-certified OR not used for under-13 users
```

---

## Part 4: Data Collection — Production Verification

Verify these by running the production build and checking server logs / analytics tool:

```
DATA MINIMIZATION CHECK
  [REQUIRED]  [ ] Only data declared in the Privacy Policy is being collected
  [REQUIRED]  [ ] No development/debug data collection in the production build
  [REQUIRED]  [ ] Analytics events are anonymized or pseudonymized where declared
  [REQUIRED]  [ ] No sensitive data logged to console or external logging service

DATA STORAGE
  [REQUIRED]  [ ] User data stored in the jurisdiction declared in Privacy Policy
  [REQUIRED]  [ ] Data retention schedule is implemented (auto-deletion or process defined)
  [REQUIRED]  [ ] Data at rest encrypted (especially for sensitive user data)
  [REQUIRED]  [ ] Data in transit encrypted (HTTPS / TLS 1.2+)

USER RIGHTS — TESTED IN PRODUCTION
  [REQUIRED]  [ ] "Delete my account" flow tested in production — data deleted from backend
  [REQUIRED]  [ ] "Export my data" flow tested (if applicable)
  [REQUIRED]  [ ] Account access flow tested — user can see their own data
  [REQUIRED]  [ ] Parental controls tested (if children's product)
```

---

## Part 5: Accessibility — Final Check

```
CRITICAL ACCESSIBILITY ITEMS (must pass for launch)

CONTRAST
  [REQUIRED]  [ ] Primary text on background contrast ratio ≥ 4.5:1 verified
              Tool: https://webaim.org/resources/contrastchecker/
              Checked screens: [List or "all primary screens verified"]

TOUCH TARGETS
  [REQUIRED]  [ ] All interactive elements ≥ 44×44 pt (iOS) / 48×48 dp (Android)
  [REQUIRED]  [ ] No primary action requires swipe-only gesture

SCREEN READER
  [REQUIRED]  [ ] VoiceOver (iOS) / TalkBack (Android) tested on onboarding and core flows
  [REQUIRED]  [ ] All buttons and links have accessibility labels
  [REQUIRED]  [ ] All meaningful images have alt text

DYNAMIC TEXT
  [REQUIRED]  [ ] App tested with system text size set to maximum — no clipping or overlap

REDUCE MOTION
  [REQUIRED]  [ ] Reduce Motion setting tested — animations reduce or stop
  [REQUIRED]  [ ] No essential information is conveyed only through animation

Evidence: [Describe how accessibility was tested or attach screenshots]
```

---

## Part 6: Content Safety

```
[REQUIRED]  [ ] App content rated correctly on all stores — rating verified against actual content
[REQUIRED]  [ ] No user-generated content without moderation (or declare in store that user content exists)
[REQUIRED]  [ ] All images, icons, and illustrations are owned or licensed
[REQUIRED]  [ ] All fonts are licensed for commercial use
[REQUIRED]  [ ] All music/audio is owned or licensed (confirm license type for app use)
[REQUIRED]  [ ] No third-party trademarks or logos used without permission
[REQUIRED]  [ ] No health claims, income claims, or misleading product claims in marketing or in-app copy
```

---

## Part 7: Security Check

```
[REQUIRED]  [ ] No private API keys, credentials, or secrets hard-coded in the binary
              Verification: String-searched binary for common secrets patterns
[REQUIRED]  [ ] Backend APIs use authentication (no open endpoints exposing user data)
[REQUIRED]  [ ] App uses HTTPS for all network requests — no HTTP
[REQUIRED]  [ ] App does not request unnecessary permissions (only what's declared)
[REQUIRED]  [ ] Password fields use secure text entry (masked input)
[REQUIRED]  [ ] Auth tokens stored securely (Keychain iOS / Keystore Android) — not in UserDefaults/SharedPrefs

[RECOMMENDED] [ ] Certificate pinning implemented for sensitive API calls
[RECOMMENDED] [ ] No sensitive data written to device logs in production build
[RECOMMENDED] [ ] Dependency audit: no known CVEs in dependencies
```

---

## Compliance Sign-Off

```
FINAL COMPLIANCE SIGN-OFF

Project:         [Project Name]
Version:         [x.x.x]
Platform(s):     [iOS / Android / Web]
Date:            [YYYY-MM-DD]

VERIFICATION SUMMARY
  Part 1 — Legal Documents:          ✅ / ❌ / Exceptions: ___
  Part 2 — Store Privacy Labels:     ✅ / ❌ / Exceptions: ___
  Part 3 — SDK Audit:                ✅ / ❌ / Exceptions: ___
  Part 4 — Data Collection Check:    ✅ / ❌ / Exceptions: ___
  Part 5 — Accessibility:            ✅ / ❌ / Exceptions: ___
  Part 6 — Content Safety:           ✅ / ❌ / Exceptions: ___
  Part 7 — Security:                 ✅ / ❌ / Exceptions: ___

EXCEPTIONS / DEFERRED ITEMS
  [ ] [Exception description] — Deferred because: _____ — Due before: _____
  [ ] [Exception description] — Deferred because: _____ — Due before: _____

APPROVED FOR GATE 5 (Pre-Release):

  Legal / Compliance: ___________________________ Date: __________
  Developer:          ___________________________ Date: __________
  PM / Project Lead:  ___________________________ Date: __________
  Legal Counsel:      ___________________________ Date: __________ (Enterprise only)

DECISION:
  [ ] ✅ CLEARED — All required items satisfied. Proceed to Gate 5 review.
  [ ] 🔴 BLOCKED — Open required items must be resolved: [List]
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Legal document review** | Self-review only | Self-review + PM | Legal counsel required |
| **SDK audit** | List only | Verify each | DPA for every processor |
| **Accessibility** | Basic contrast + touch targets | All seven sections | Third-party audit |
| **Security audit** | Basic secrets check | All security items | Penetration test |
| **Sign-off parties** | Developer only | Developer + PM | Developer + PM + Legal |
