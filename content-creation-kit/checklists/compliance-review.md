# Compliance Review Checklist

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Type:** Checklist
>
> **Instructions:** Complete this checklist before any public release or beta launch. Cross-reference with `guides/legal-compliance.md` for detailed guidance on each area.
>
> **⚠️ Not legal advice.** Engage qualified legal counsel for any product handling personal data, targeting children, or operating in regulated jurisdictions.

---

## Project: [Project Name]

```
Reviewer:       [Name]
Date:           [YYYY-MM-DD]
Markets:        [US / EU / UK / Other]
Audience:       Adults / Teens / Mixed / Children (under 13)
Legal counsel:  [Name — or "Not engaged"]
```

---

## Section 1: Data Collection & Privacy

### 1.1 What Are We Collecting?

```
Audit all data collection in the app. Mark each collected:

[ ] Email address
[ ] Name (first / last / full)
[ ] Profile photo
[ ] Date of birth / age
[ ] Location (GPS / IP / ZIP)
[ ] Device identifiers (IDFA / GAID / device ID)
[ ] Usage analytics (screen views, tap events)
[ ] Crash reports
[ ] Purchase history / payment data
[ ] Health / fitness data
[ ] Children's data (if under-13 users possible)
[ ] Third-party SDK data (list SDKs below):
    SDK: _________________ — Collects: _________________
    SDK: _________________ — Collects: _________________
    SDK: _________________ — Collects: _________________
```

### 1.2 Third-Party SDK Audit

```
For each SDK that collects or processes user data:

SDK: [Name] | Version: [X.X.X]
  [ ] SDK's own privacy policy reviewed
  [ ] SDK disclosed in our Privacy Policy
  [ ] SDK GDPR-compliant (if EU users)
  [ ] COPPA-compliant (if children's product)
  [ ] Data Processing Agreement signed (if GDPR applies)

SDK: [Name] | Version: [X.X.X]
  [ ] Same checks...
```

---

## Section 2: COPPA (Children Under 13 — US)

> **Skip this section if the product is NOT directed at or used by children under 13.**

```
APPLICABILITY CHECK
  [ ] Product is directed at children under 13 (by design/content)
  [ ] Product has mixed audience (designed for general audience but children may use)
  [ ] Product has actual knowledge of under-13 users
  → If ANY above is yes: COPPA applies

DATA MINIMIZATION
  [REQUIRED]  [ ] No personal information collected from under-13 users without verifiable parental consent
  [REQUIRED]  [ ] Prohibited data NOT collected: email, full name, address, phone, photos, video, audio of child, geolocation, persistent identifiers for advertising
  [REQUIRED]  [ ] No behavioral advertising to under-13 users

PARENTAL CONSENT (if data collection is required)
  [REQUIRED]  [ ] Verifiable parental consent mechanism implemented
  [REQUIRED]  [ ] Parental access mechanism implemented (can view child's data)
  [REQUIRED]  [ ] Parental deletion mechanism implemented (can delete child's data)
  [REQUIRED]  [ ] Parental consent can be withdrawn at any time

DIRECT NOTICE TO PARENTS
  [REQUIRED]  [ ] Direct Notice published at stable URL
  [REQUIRED]  [ ] Direct Notice is separate from (or clearly linked from) general Privacy Policy
  [REQUIRED]  [ ] Direct Notice lists ALL data collected from children
  [REQUIRED]  [ ] Direct Notice written in plain language
  [REQUIRED]  [ ] Direct Notice includes parental contact email
```

---

## Section 3: GDPR / GDPR-K (EU Users)

> **Skip if product has NO EU users.**

```
LAWFUL BASIS
  [REQUIRED]  [ ] Lawful basis identified for EACH data type collected
  [REQUIRED]  [ ] Consent obtained before non-essential data processing
  [REQUIRED]  [ ] Consent is granular — users can consent per purpose
  [REQUIRED]  [ ] Children under 16 (may vary by country) require parental consent

USER RIGHTS
  [REQUIRED]  [ ] Right to access implemented (users can request their data)
  [REQUIRED]  [ ] Right to erasure implemented ("delete my account + data" works)
  [REQUIRED]  [ ] Right to rectification implemented (users can correct data)
  [REQUIRED]  [ ] Right to portability implemented (users can export data)
  [REQUIRED]  [ ] Rights exercisable within 30 days
  [REQUIRED]  [ ] Response process defined for user rights requests

PRIVACY POLICY
  [REQUIRED]  [ ] Privacy Policy hosted at stable, permanent URL
  [REQUIRED]  [ ] Privacy Policy accessible without login
  [REQUIRED]  [ ] Privacy Policy written in plain language
  [REQUIRED]  [ ] Privacy Policy includes: what data, why, retention period, who receives it
  [REQUIRED]  [ ] Privacy Policy includes: user rights + how to exercise them
  [REQUIRED]  [ ] Privacy Policy includes: data controller contact information

DATA PROCESSORS
  [REQUIRED]  [ ] List of all third-party processors maintained
  [REQUIRED]  [ ] DPA signed with each processor that handles EU user data
```

---

## Section 4: App Store Compliance

### 4.1 Apple App Store

```
PRIVACY
  [REQUIRED]  [ ] Privacy Policy URL entered in App Store Connect
  [REQUIRED]  [ ] Privacy Nutrition Labels completed (Data used to Track You / Data Linked to You / Data Not Linked to You)
  [REQUIRED]  [ ] ALL data types disclosed — including third-party SDKs
  [REQUIRED]  [ ] ATT (App Tracking Transparency) prompt implemented if any cross-app tracking
  [REQUIRED]  [ ] NSUserTrackingUsageDescription added to Info.plist

CONTENT RATING
  [REQUIRED]  [ ] Age rating questionnaire completed accurately
  [REQUIRED]  [ ] Rating matches actual content (do not under-rate)
  [REQUIRED]  [ ] Age-gating implemented where age-restricted content is present

PAYMENTS
  [REQUIRED]  [ ] All in-app purchases use Apple IAP (no external payment for digital goods)
  [REQUIRED]  [ ] Subscription terms clearly displayed before purchase
  [REQUIRED]  [ ] Restore purchases functionality implemented

CHILDREN'S CATEGORY (if applicable)
  [REQUIRED]  [ ] NO advertising (3rd party or behavior-based)
  [REQUIRED]  [ ] NO 3rd-party analytics that track users for ad targeting
  [REQUIRED]  [ ] Parental Gate implemented before any external links or purchases
  [REQUIRED]  [ ] No social media integration without parental controls
```

### 4.2 Google Play Store

```
PRIVACY
  [REQUIRED]  [ ] Data Safety form completed accurately (all SDKs included)
  [REQUIRED]  [ ] Privacy Policy URL included in store listing
  [REQUIRED]  [ ] Permissions explained using Android UsageDescription equivalents

CONTENT RATING
  [REQUIRED]  [ ] IARC rating questionnaire completed
  [REQUIRED]  [ ] Rating accurately reflects content
  [REQUIRED]  [ ] Target API level meets Play Store minimum

FAMILIES PROGRAM (if applicable)
  [REQUIRED]  [ ] Approved ad network only (if ads shown to children)
  [REQUIRED]  [ ] No data collection from children without consent (except essential apps)
  [REQUIRED]  [ ] Parental controls required before purchases
```

---

## Section 5: Accessibility

```
VISUAL
  [REQUIRED]  [ ] Color contrast 4.5:1 for normal text verified
  [REQUIRED]  [ ] Color contrast 3:1 for large text (18sp+) verified
  [REQUIRED]  [ ] Color contrast 3:1 for UI components / icons verified
  [REQUIRED]  [ ] App does NOT rely on color alone to convey meaning
  [REQUIRED]  [ ] App works with display zoom / large text mode

MOTOR
  [REQUIRED]  [ ] All interactive elements meet minimum touch target (44pt iOS / 48dp Android)
  [REQUIRED]  [ ] Primary actions accessible without swipe gesture alternatives
  [REQUIRED]  [ ] No double-tap required for any primary function

SCREEN READER
  [REQUIRED]  [ ] VoiceOver (iOS) / TalkBack (Android) tested on all key screens
  [REQUIRED]  [ ] All interactive elements have accessibility labels
  [REQUIRED]  [ ] All images have alt text (or marked decorative)
  [REQUIRED]  [ ] Focus order is logical and complete

COGNITIVE & MOTION
  [REQUIRED]  [ ] Reduce Motion setting respected (essential info not lost)
  [REQUIRED]  [ ] No flashing content faster than 3Hz (seizure risk)
  [REQUIRED]  [ ] Error messages explain what happened AND what to do
  [RECOMMENDED] [ ] Captions / transcripts for all audio content
  [RECOMMENDED] [ ] Consistent navigation across all screens
```

---

## Section 6: Content Safety

```
[REQUIRED]  [ ] No violent, graphic, or adult content in a general/children's rated app
[REQUIRED]  [ ] No hate speech, discriminatory language, or targeted harassment possible
[REQUIRED]  [ ] User-generated content (if any) has moderation mechanism
[REQUIRED]  [ ] No misleading claims about product capabilities
[REQUIRED]  [ ] No unsubstantiated health/medical/financial claims
[REQUIRED]  [ ] External links (if any) lead to appropriate-age content
[REQUIRED]  [ ] Social features (if any) have age-appropriate safety controls
```

---

## Section 7: Required Legal Documents

```
[REQUIRED]  [ ] Privacy Policy — final version published at permanent URL
[REQUIRED]  [ ] Terms & Conditions — final version accessible within app and/or website
[REQUIRED]  [ ] Cookie consent / tracking disclosure (if web app)
[REQUIRED]  [ ] COPPA Direct Notice to Parents — if children's product (US)
[REQUIRED]  [ ] GDPR-specific disclosures — if EU market
[RECOMMENDED] [ ] Accessibility Statement — if enterprise or government
[RECOMMENDED] [ ] EULA (End User License Agreement) — custom if needed
```

---

## Sign-Off

```
COMPLIANCE REVIEW RESULT

Reviewer:        [Name]
Date:            [YYYY-MM-DD]
Legal counsel:   [Name / "Not engaged"]

Sections completed:
  [ ] Section 1: Data Collection     [ ] Section 5: Accessibility
  [ ] Section 2: COPPA               [ ] Section 6: Content Safety
  [ ] Section 3: GDPR                [ ] Section 7: Legal Documents
  [ ] Section 4: App Store

Outstanding items (blocking launch):
  [ ] [Item ID] — [Description of outstanding item] — Owner: [Name] — Due: [Date]
  [ ] [Item ID] — [Description] — Owner: [Name] — Due: [Date]

Overall result:
  [ ] ✅ CLEARED — All required items passed. Cleared for Gate 5 (Pre-Release)
  [ ] 🔴 BLOCKED — Outstanding required items listed above must be resolved before launch

Sign-off:        _________________________ Date: _____________
                 [Legal/Compliance Reviewer]

PM confirmation: _________________________ Date: _____________
```
