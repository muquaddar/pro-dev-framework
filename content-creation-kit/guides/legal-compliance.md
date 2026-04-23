# Legal & Compliance Guide

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Role:** Legal / Compliance Reviewer

---

## Your Role in the Project

As the legal/compliance reviewer, you ensure the product can be **launched and operated lawfully** in its target markets. Your scope typically covers:
- **Data privacy** (GDPR, CCPA, COPPA, GDPR-K)
- **Children's app compliance** (COPPA/PIPA if under-13 audience)
- **Accessibility** (WCAG 2.1 / platform guidelines)
- **App store policies** (Apple/Google content and privacy requirements)
- **Terms & Conditions and Privacy Policy** review
- **Third-party SDK audit** (analytics, ads, SDKs that collect data)

> **Disclaimer:** This guide is a structured checklist framework — not legal advice. Engage qualified legal counsel for any project handling personal data, targeting children, or operating in regulated jurisdictions.

---

## Phase 1: Scope Assessment

First, determine which regulations apply to this project:

```
SCOPE ASSESSMENT

Product type:
  [ ] Mobile app (iOS)      → Apple App Store policies apply
  [ ] Mobile app (Android)  → Google Play policies apply
  [ ] Web application       → Browser standards + jurisdiction law
  [ ] Desktop app           → Platform-specific
  [ ] Multi-platform        → All of the above

Audience age:
  [ ] Adults only (18+)           → Standard GDPR/CCPA
  [ ] Teens (13-17)               → Some COPPA-adjacent care needed
  [ ] Children (under 13)         → COPPA (US) + GDPR Art 8 (EU) mandatory
  [ ] Mixed (directed at children)→ Treat as children's product

Data collection:
  [ ] No personal data collected                → Minimal compliance burden
  [ ] Analytics only (anonymized)               → Low burden
  [ ] Account creation (email/social login)     → GDPR/CCPA full apply
  [ ] Payments / financial data                 → PCI-DSS + payment laws apply
  [ ] Health or medical data                    → HIPAA (US) / additional regulations
  [ ] Children's data (under 13)                → COPPA mandatory in US

Geographic markets:
  [ ] United States   → COPPA (if children), CCPA (if California users)
  [ ] European Union  → GDPR mandatory
  [ ] United Kingdom  → UK GDPR + COPPA equivalent
  [ ] Other: ________ → Research local requirements
```

---

## Phase 2: COPPA Compliance (Children Under 13)

**Required if:** The app is directed at children under 13, OR has actual knowledge of users under 13.

```
COPPA CHECKLIST

OPERATOR REQUIREMENTS
[ ] Verifiable parental consent before collecting any personal info from under-13 users
[ ] Clear and prominent disclosure of data practices in Privacy Policy
[ ] No behavioral advertising to users under 13
[ ] No collection of more data than "reasonably necessary" for activity
[ ] Safe-harbor certification (CARU, kidSAFE) — recommended

PROHIBITED ACTIVITIES (without verifiable parental consent)
[ ] Email address collection                              — PROHIBITED
[ ] Real name collection                                  — PROHIBITED unless functional requirement
[ ] Physical address collection                           — PROHIBITED
[ ] Phone number collection                               — PROHIBITED
[ ] Photo, video, or audio of the child                   — PROHIBITED
[ ] Geolocation data (more specific than ZIP code)        — PROHIBITED
[ ] Persistent identifiers for behavioral advertising     — PROHIBITED
[ ] Social media integration                              — PROHIBITED without consent

PARENTAL CONSENT MECHANISM (if data collection needed)
[ ] Consent method selected:
    [ ] Signed consent form returned via mail/electronic scan
    [ ] Credit/debit card transaction with parental info
    [ ] Video conference verification
    [ ] Government ID check
    [ ] Email with confirmation to parent
[ ] Mechanism implemented and tested
[ ] Parental access/deletion rights implemented (parents can view/delete child data)
[ ] Parental consent withdrawal mechanism implemented

PRIVACY NOTICE TO PARENTS
[ ] Written in plain language (not legal jargon)
[ ] Lists all personal information collected
[ ] Explains how data is used and shared
[ ] Lists all third parties receiving child data
[ ] Explains parental rights
[ ] Contact email/address for parental inquiries
[ ] Privacy policy URL accessible without account creation
```

---

## Phase 3: GDPR / GDPR-K Compliance (EU Users)

**Required if:** Any EU/EEA users are expected, regardless of company location.

```
GDPR CHECKLIST

LAWFUL BASIS FOR PROCESSING
[ ] Lawful basis identified for EACH type of data collected:
    [ ] Consent (must be freely given, specific, informed, unambiguous)
    [ ] Contract (necessary to perform service)
    [ ] Legal obligation
    [ ] Legitimate interests (requires balancing test)
    [ ] Children (under 16 in EU, may vary by country) → Parental consent required

DATA MINIMIZATION
[ ] Only collecting data strictly necessary for stated purpose
[ ] No "nice to have" data collection
[ ] Retention period defined for each data type
[ ] Automated deletion after retention period

USER RIGHTS IMPLEMENTATION
[ ] Right to access (can user request their data?)
[ ] Right to erasure / "right to be forgotten" (can user delete their account + data?)
[ ] Right to rectification (can user correct their data?)
[ ] Right to portability (can user export their data?)
[ ] Right to object to processing
[ ] Response time: 30 days maximum

PRIVACY NOTICE ("Privacy Policy")
[ ] Written in plain language
[ ] Published at stable URL (not behind login)
[ ] Linked from app store listing
[ ] Includes: what data, why, how long, who it's shared with
[ ] Includes: user rights and how to exercise them
[ ] Includes: data controller contact details / DPO (if required)
[ ] Includes: right to lodge complaint with supervisory authority

THIRD-PARTY PROCESSORS
[ ] List of all third-party SDKs/services that process user data
[ ] Data Processing Agreements (DPA) signed with each processor
[ ] SDK vendors checked for GDPR compliance:
    [ ] Firebase / Google Analytics
    [ ] Branch / AppsFlyer / Adjust (attribution)
    [ ] Crashlytics / Sentry
    [ ] Ad networks (if any)
    [ ] Payment processors
    [ ] Email service providers

CONSENT MANAGEMENT
[ ] Consent collected BEFORE any non-essential processing
[ ] Granular consent per purpose (not a single "accept all")
[ ] Easy to withdraw consent at any time
[ ] Evidence of consent stored (what was consented to, when)
[ ] No pre-ticked boxes or dark patterns
```

---

## Phase 4: CCPA (California Consumer Privacy Act)

**Required if:** Operates in California AND meets size thresholds (100k+ consumers/devices/year, OR 25k+ consumers + 50%+ revenue from selling data).

```
CCPA CHECKLIST

[ ] "Do Not Sell My Personal Information" link displayed (if selling data)
[ ] Privacy Policy updated with CCPA-required disclosures
[ ] Categories of data collected listed in Privacy Notice
[ ] Right to know (categories and specific pieces of data)
[ ] Right to deletion implemented
[ ] Non-discrimination — users who exercise CCPA rights not penalized
[ ] Third-party data sales disclosed or opted-out
[ ] Annual Privacy Policy review scheduled
```

---

## Phase 5: Accessibility (WCAG 2.1 / Platform Guidelines)

**Required for:** All products. Non-negotiable for Enterprise tier.

```
ACCESSIBILITY CHECKLIST

VISUAL
[ ] Color contrast ratio: minimum 4.5:1 (text on background)
[ ] Color contrast ratio: minimum 3.0:1 (large text, icons)
[ ] Content does not rely on color alone to convey meaning
[ ] Text can be resized up to 200% without loss of functionality
[ ] No flashing content faster than 3Hz (seizure risk)
[ ] Sufficient white space — no cramped layouts

MOTOR
[ ] All interactive elements accessible by keyboard (web) or switch control (mobile)
[ ] Minimum touch target size: 44×44 pt (Apple HIG) / 48×48 dp (Google Material)
[ ] No double-tap required for primary actions
[ ] Swipe gestures have alternatives

COGNITIVE
[ ] Clear error messages — explains what went wrong AND how to fix it
[ ] No time limits without warnings — or ability to extend
[ ] Consistent navigation — same items in same places across screens
[ ] Reading level appropriate for target audience

AUDIO / VISUAL CONTENT
[ ] All audio content has captions or transcripts
[ ] All video has captions
[ ] No autoplay audio without user initiation (or with visible mute control)
[ ] All images have descriptive alt text

SCREEN READER / ASSISTIVE TECH
[ ] All interactive elements labeled with accessibility text
[ ] All images labeled (or marked decorative if applicable)
[ ] Dynamic content updates announced to screen readers
[ ] Focus order is logical and matches visual layout
[ ] Custom components have correct ARIA roles (web) or accessibility identifiers (mobile)

PLATFORM-SPECIFIC
iOS:
[ ] VoiceOver navigation tested on all key screens
[ ] Dynamic Type support (system text size respects user preference)
[ ] Reduce Motion respected (no essential animations)

Android:
[ ] TalkBack navigation tested on all key screens
[ ] Large text / font scaling supported
[ ] Reduce animations setting respected
```

---

## Phase 6: App Store Policy Compliance

### Apple App Store Review Guidelines (Key Points)

```
CONTENT
[ ] No inappropriate or explicit content for ratings category
[ ] Ratings are accurate for the content
[ ] No gambling mechanics without appropriate ratings
[ ] Children's category: no advertising, no third-party analytics that track users

PRIVACY
[ ] Privacy Nutrition Labels accurate and complete
[ ] All data types disclosed (even for third-party SDKs!)
[ ] ATT (App Tracking Transparency) prompt if tracking users across apps/websites
[ ] NSUserTrackingUsageDescription string provided if using ATT

PAYMENTS
[ ] In-app purchases using Apple IAP for consumables, subscriptions, digital goods
[ ] No steering users to external purchase methods for digital goods
[ ] Subscription terms clearly disclosed in UI

TECHNICAL
[ ] No private APIs used
[ ] No simulator-only builds submitted
[ ] App functions without crashes on supported devices/iOS versions
[ ] App does not download code to change primary functionality

LEGAL
[ ] Privacy Policy URL in App Store Connect
[ ] All required usage descriptions (NSCamera, NSMicrophone, etc.) included
[ ] No intellectual property violations (trademarks, copyright)
```

### Google Play Store Policies (Key Points)

```
CONTENT
[ ] Content rating questionnaire completed accurately
[ ] Families policy compliance (if app in Families program)
[ ] No deceptive behavior

PRIVACY
[ ] Data Safety section completed (honest and complete)
[ ] All data types disclosed including third-party SDKs
[ ] Prominent disclosure before accessing sensitive permissions

PAYMENTS
[ ] In-app billing for digital goods (Google Play Billing)
[ ] Subscription terms clearly disclosed

TECHNICAL
[ ] Target API level meets Play Store minimum requirements
[ ] App functions on Android 5.0+ (or stated minimum)
[ ] No usage of restricted permissions without justification
```

---

## Phase 7: Required Legal Documents

```
MINIMUM LEGAL DOCUMENTS REQUIRED

Privacy Policy:
  [ ] Hosted at stable, permanent URL
  [ ] Updated to reflect current data practices
  [ ] Linked from: app store listing + within the app
  [ ] Includes: all GDPR/CCPA/COPPA disclosures relevant to your markets

Terms & Conditions (or Terms of Service):
  [ ] Limits liability for content created by users (if applicable)
  [ ] Specifies governing law and jurisdiction
  [ ] Dispute resolution mechanism
  [ ] Account termination provisions
  [ ] Acceptable use policy

Cookie/Tracking Consent (web apps):
  [ ] Cookie banner implemented
  [ ] Consent collected before non-essential cookies/tracking
  [ ] Cookie policy linked

COPPA-Required Documents (if children's app):
  [ ] Direct Notice to Parents (separate from general Privacy Policy)
  [ ] Parental consent form
  [ ] Process document for parental access/deletion requests
```

---

## Phase 8: Pre-Launch Compliance Sign-Off

This checklist is the final gate before submitting to app stores or launching publicly.

```
FINAL COMPLIANCE SIGN-OFF

[ ] Privacy Policy: finalized, reviewed, published
[ ] Terms & Conditions: finalized, reviewed, published
[ ] COPPA compliance: verified (if children's product)
[ ] GDPR compliance: verified (if EU market)
[ ] App Store Privacy Labels: completed and accurate
[ ] Accessibility: all critical issues resolved
[ ] Third-party SDK audit: complete — all processors have DPAs
[ ] Legal counsel review: completed (if applicable)
[ ] Sign-off given by: _____________ Date: _____________
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Privacy Policy** | Template-based | Custom drafted | Legal counsel reviewed |
| **GDPR/CCPA** | Basic compliance | Full compliance | Compliance officer review |
| **COPPA** | Avoid children's content | Full compliance if needed | Full + legal sign-off |
| **Accessibility** | Basic contrast check | Key screens tested | Full WCAG 2.1 audit |
| **App Store Policy** | Self-review | Self-review + checklist | App store specialist |
| **Third-party audit** | List SDKs only | Review each SDK | DPA signed with each |
| **Legal counsel** | Not needed | Recommended | Required |
