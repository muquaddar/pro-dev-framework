# App Store Submission Guide

> **Version:** PDF v1.0.0 | **Kit:** Maintenance | **Stage:** 6 — Launch Preparation

---

## Overview

App store submission is a multi-step process that goes far beyond uploading a binary. A rejected submission can delay your launch by days or weeks. This guide walks through every piece of the store listing so nothing is forgotten.

**Complete this guide in parallel with the beta test** — don't wait until the beta is over to start writing your store listing.

---

## Pre-Submission Checklist

Before collecting any store assets, verify these technical prerequisites:

```
TECHNICAL PREREQUISITES

iOS
  [ ] Apple Developer Account ($99/year) — active and in good standing
  [ ] App ID created in App Store Connect
  [ ] Bundle ID matches Xcode project (com.company.appname)
  [ ] Provisioning profile for App Store distribution created
  [ ] Certificates configured (Distribution certificate)
  [ ] All required device permissions with usage descriptions in Info.plist

Android
  [ ] Google Play Developer Account ($25 one-time) — active
  [ ] App created in Play Console with unique package name (com.company.appname)
  [ ] Signing key generated and secured (DO NOT LOSE IT)
  [ ] App Bundle (AAB) built in release mode
  [ ] All required permissions declared in AndroidManifest.xml
```

---

## Section 1: App Store Metadata

### 1.1 App Name & Title

```
App Name (what appears on device home screen):
  iOS limit:    30 characters
  Android:      50 characters
  
  Your name:    [APP NAME — exactly as it should appear]
  Character count: [N]/30 (iOS) or [N]/50 (Android)

Subtitle (Apple) / Short description (Android):
  iOS limit:    30 characters — appears below name in search
  Android:      80 characters — appears in search and browse
  
  Your subtitle: [One-line benefit — not a repeat of the name]
  Character count: [N]/30 (iOS) or [N]/80 (Android)
```

### 1.2 Full Description

```
Character limit: 4,000 characters (both stores)

RECOMMENDED STRUCTURE:

Paragraph 1 — Hook (1-3 sentences):
  The #1 benefit. What problem does this solve?
  Make this compelling — most users don't read past this.
  [Write your hook here]

Paragraph 2 — Core Features (bullet list, 3-5 items):
  ✅ [Feature 1 — benefit-focused, not feature-focused]
  ✅ [Feature 2]
  ✅ [Feature 3]
  ✅ [Feature 4]
  ✅ [Feature 5]

Paragraph 3 — Who It's For:
  [Perfect for: [user type 1], [user type 2], and [user type 3]]

Paragraph 4 — Social proof or secondary value (optional):
  [Used by X people / Award / Press mention / Specific detail]

Paragraph 5 — Call to action:
  [Download [App Name] today and [benefit].]

FOOTER — technical details (optional):
  - Requires [iOS 16 / Android 10]+
  - [Privacy Policy: URL]
  - Contact: [support email]
  - [Any other required disclosures]
```

### 1.3 Keywords

```
iOS Keywords (100 characters TOTAL — no spaces, no commas in count):
  [keyword1,keyword2,keyword3,keyword4,keyword5,keyword6,keyword7]
  Character count: [N]/100
  
  Rules:
  - Do NOT repeat words already in the App Name or Subtitle
  - No plurals needed — Apple searches both
  - Separate with commas, no spaces after commas
  - High search volume + low competition = best keywords

Android Tags:
  Not a direct keyword field — keywords must appear naturally in the description
  Use keywords in paragraph 1 and feature bullets naturally
```

### 1.4 Category & Rating

```
CATEGORY SELECTION

Primary category:  [Most specific applicable category]
  iOS options: Games / Education / Productivity / Utilities / Lifestyle / Health & Fitness / etc.
  Android:    Same structure — choose the most specific match

Secondary category (iOS):
  [Optional — choose if product fits multiple categories]

Age Rating:
  iOS: Complete the age rating questionnaire in App Store Connect (automatic rating)
  Android: Complete the IARC questionnaire in Play Console

  Expected rating: [4+ / 9+ / 12+ / 17+ for iOS] | [Everyone / Teen / Mature for Android]
```

---

## Section 2: Screenshots & Preview Video

Screenshots are the **most important conversion factor** in an app store listing. Invest time here.

### 2.1 Required Screenshot Sizes

```
iOS (required):
  iPhone 6.9" — 1320×2868 px @3x   ← Primary (shown in 6.5" slot too)
  iPhone 6.5" — 1284×2778 px @3x   ← Required
  iPod Touch — 640×1136 px @2x     ← Only if iPod supported

iOS (recommended if supporting iPad):
  iPad Pro 12.9" — 2048×2732 px @2x
  iPad Pro 11"   — 1668×2388 px @2x

Android (required):
  Phone — min 320 × 568 px (1080×1920 recommended)
  Tablet — 1200×1920 px (if tablet supported)
  
  Minimum 2 screenshots, maximum 8 per device type
```

### 2.2 Screenshot Strategy

```
SCREENSHOT SET STRUCTURE (5-screenshot recommended set)

Screenshot 1 — Hero: Your biggest benefit
  [ ] Headline (30 chars): [YOUR HEADLINE]
  [ ] Visual: App icon + hero moment / key screen
  [ ] Goal: Stop the scroll — "what does this do?"

Screenshot 2 — Core Feature
  [ ] Headline: [KEY FEATURE BENEFIT]
  [ ] Visual: Most distinctive feature in action
  [ ] Goal: "I understand what this does"

Screenshot 3 — Social or Proof
  [ ] Headline: [SOCIAL PROOF or secondary use case]
  [ ] Visual: Testimonial, stat, or secondary feature
  [ ] Goal: "I trust this"

Screenshot 4 — Use Case / Persona
  [ ] Headline: [Who this is perfect for]
  [ ] Visual: In-context use case
  [ ] Goal: "This is made for me"

Screenshot 5 — CTA / Final Conversion
  [ ] Headline: [Call to action or value summary]
  [ ] Visual: Retention hook or final feature
  [ ] Goal: "I need to download this now"
```

### 2.3 Screenshot Design Checklist

```
[ ] Screenshots show the ACTUAL app UI (not wireframes or concepts)
[ ] Device frames used consistently (all same frame style)
[ ] Background is branded and consistent across all screenshots
[ ] Text is legible at thumbnail size (min 14pt in the screenshot)
[ ] Screenshots tell a narrative story as a set
[ ] First screenshot works standalone (most critical)
[ ] No misleading claims in headlines or visuals
[ ] Exported at correct pixel dimensions for each device
```

### 2.4 App Preview Video (Optional but Recommended)

```
iOS App Preview:
  Duration: 15-30 seconds
  Format: H.264 or HEVC, 30fps
  Resolution: Same as screenshots for target device
  Content rules: Must show actual gameplay/UI — no voiceover (except if it's the product)
  Sound: Optional (many users browse muted)

Android Feature Graphic:
  Size: 1024×500 px
  Used: As the banner when your video is embedded in the listing

YouTube Preview (Android):
  Link a YouTube video as your promo video in Play Console
```

---

## Section 3: App Icon (Final Check)

```
iOS App Store Icon:
  [ ] 1024×1024 px PNG (no transparency, no rounded corners — iOS clips it)
  [ ] Uploaded in App Store Connect → App Information → App Preview and Screenshots

Android Feature Icon:
  [ ] 512×512 px PNG
  [ ] Uploaded in Play Console → Store presence

Icon checklist:
  [ ] Icon stands out against white (light mode) and dark (dark mode) backgrounds
  [ ] Icon is recognizable at 60×60 pt (home screen size)
  [ ] No text in the icon (too small at most sizes)
  [ ] Colors match brand palette
  [ ] Icon design consistent with in-app character/brand
```

---

## Section 4: Privacy & Legal Setup

```
iOS (App Store Connect):
  [ ] Privacy Policy URL entered — must be a live, accessible URL
  [ ] Privacy Nutrition Labels completed:
      [ ] Data Used to Track You — listed correctly
      [ ] Data Linked to You — listed correctly
      [ ] Data Not Linked to You — listed correctly
      [ ] All third-party SDK data included (not just your own)
  [ ] ATT permission string present if any cross-app tracking

Android (Play Console):
  [ ] Data Safety form completed — all data types disclosed
  [ ] Privacy Policy URL entered
  [ ] Target audience and content rating match the app content

Legal:
  [ ] Terms of Service / EULA accessible from within the app OR store listing
  [ ] COPPA-required disclosures in listing (if children's app)
```

---

## Section 5: Technical Submission

### iOS Submission Steps

```
  1. Archive the app in Xcode (Product → Archive)
  2. Validate the archive (Organizer → Validate App)
  3. Upload to App Store Connect (Organizer → Distribute App → App Store Connect)
  4. Wait for processing in App Store Connect (~15-30 min)
  5. Go to App Store Connect → My Apps → [App Name] → App Store tab
  6. Fill in all metadata (see Sections 1-4 above)
  7. Select the build
  8. Submit for review (Submit for Review button)
  
  Review time: Typically 24-48 hours (can be longer on first submission or near holidays)
```

### Android Submission Steps

```
  1. Build release AAB (Android App Bundle): ./gradlew bundleRelease
  2. Sign the AAB with your release key
  3. Go to Play Console → [App Name] → Release → Production (or Internal → Closed → Open)
  4. Create new release → upload AAB
  5. Fill in release notes (What's New)
  6. Complete the store listing (see Sections 1-4)
  7. Set up pricing and distribution (countries, free/paid)
  8. Submit for review
  
  Review time: 1 hour for internal testing. 1-3 days for production release (first app may take longer)
```

---

## Section 6: What's New / Release Notes

For the launch, write release notes that will resonate with early users:

```
First Release Notes (keep it simple and exciting):

iOS Example:
  Welcome to [App Name] 🎉
  
  [App Name] is here! [One sentence what it does.]
  
  ✨ [Feature 1]
  ✨ [Feature 2]
  ✨ [Feature 3]
  
  We'd love to hear what you think. Tap the ☆ below to rate the app!

Android Example:
  Same structure — 500 character limit on Play Store
```

---

## Pre-Submission Final Checklist

```
METADATA COMPLETE
  [ ] App Name (correct spelling, correct capitalization)
  [ ] Subtitle / Short Description
  [ ] Full Description (4,000 char max)
  [ ] Keywords (iOS — 100 chars)
  [ ] Category and subcategory
  [ ] Age rating questionnaire complete
  [ ] Privacy Policy URL live and accessible
  [ ] What's New / Release Notes

ASSETS COMPLETE
  [ ] App icon (all required sizes)
  [ ] Screenshots (all required device sizes)
  [ ] Feature Graphic (Android)
  [ ] Preview video (optional — if prepared)

TECHNICAL COMPLETE
  [ ] Build uploaded and processed
  [ ] Build selected for review
  [ ] Privacy Nutrition Labels (iOS) or Data Safety (Android) complete
  [ ] Pricing set (Free / Paid)
  [ ] Countries / distribution set

LEGAL COMPLETE
  [ ] Privacy Policy URL entered
  [ ] Terms accessible within app
  [ ] App Review information: demo account credentials provided (if login required)
    Demo Account Email:    _____________________
    Demo Account Password: _____________________
    Notes for reviewer:    _____________________

SUBMISSION
  [ ] ✅ Submitted for review on: [YYYY-MM-DD]
  [ ] Expected review completion: [YYYY-MM-DD]
  [ ] Go-to-market launch planned for: [YYYY-MM-DD]
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Screenshots** | 3 (basic) | 5 (full set) | 5-8 + localized versions |
| **Keywords** | Basic research | Keyword research tool | ASO specialist |
| **Preview video** | Skip | Recommended | Required |
| **Localization** | 1 locale | 1-3 locales | All target markets |
| **App store optimization** | Minimal | Self-managed | ASO professional |
| **Review response plan** | No plan | Monitor + respond | Dedicated support pipeline |
