# Illustrator / Graphic Designer Guide

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Role:** Illustrator / Graphic Designer

---

## Your Role in the Project

As the illustrator or graphic designer, you own the **visual identity and all graphical assets** outside the UI framework. That includes:
- Character design and illustration
- Background art and scene compositions
- Icons and UI illustration (not standard UI components)
- Marketing assets (app store screenshots, feature graphics, social media)
- Animation frames or sprite sheets
- Any brand graphics specified in the style guide

Your deliverables must be received by the developer **before** the milestone that integrates them. Missing art assets is one of the most common causes of launch delays.

---

## Phase 1: Brief Intake

Before starting any artwork, you need a complete brief. Request a kickoff call with the project lead and confirm these items:

### Art Direction Brief

```
PROJECT OVERVIEW
  Project name: _______________________
  Platform(s):  iOS / Android / Web / Desktop / Other: _______
  Launch date:  _______________________
  Your contact: _______________________

VISUAL STYLE
  Overall style (choose one or describe):
    [ ] Flat / Material Design
    [ ] Skeuomorphic (realistic)
    [ ] Hand-drawn / Sketch
    [ ] Pixel art
    [ ] 3D rendered / Isometric
    [ ] Minimalist / Line art
    [ ] Other: _______________________

  Color palette: (see style-guide.md — Primary / Secondary / Accent)
  References:    [attach 3-5 reference images]
  Anti-references: [attach examples of what NOT to do]

  Audience age:  _______________________
  Tone words:    _______________________  (e.g. "playful, warm, encouraging")

CHARACTER DESIGN (if applicable)
  Number of characters: _______________________
  Character types:      _______________________
  Expression set required: neutral / happy / sad / excited / confused / surprised
  Animation needed: static only / loops / transitions / full animation

ASSET LIST (see Phase 2 for full spec)
  [ ] App icon
  [ ] Character illustrations
  [ ] Background scenes
  [ ] UI illustrations (decorative icons, empty state artwork)
  [ ] Marketing/store assets
  [ ] Other: _______________________

FILE REQUIREMENTS
  Deliverable format: PNG (transparent) / SVG / PDF / PSD / AI / Other
  Resolution: 1x + 2x + 3x (for mobile) / SVG (scalable)
  Naming convention: [project]-[category]-[name]-[size].[ext]
                     e.g. "myapp-char-hero-2x.png"
  Delivery method: Shared drive / Zip / Figma / Other: _______
```

---

## Phase 2: Asset Specification

Use this spec format for each asset category. Fill these into `templates/asset-pipeline.md`.

### App Icon Spec

```markdown
## App Icon

| Attribute      | Value                                          |
|----------------|------------------------------------------------|
| Concept        | [Describe the icon concept]                    |
| Style          | [Flat / Illustrated / Abstract]                |
| Focal element  | [Character / Symbol / Abstract]                |
| Background     | Solid color / Gradient / Transparent           |
| Key colors     | [Primary: #XXXXXX, Accent: #XXXXXX]            |

**Required sizes (iOS):**
- 1024×1024 (App Store)
- 180×180 pt @3x (iPhone)
- 120×120 pt @2x (iPhone)

**Required sizes (Android):**
- 512×512 (Play Store)
- Adaptive icon (108×108dp foreground, 108×108dp background)

**Required sizes (other platforms):**
[List platform-specific requirements]

**File naming:**
- icon-1024.png, icon-180.png, icon-120.png
- icon-android-512.png, icon-android-adaptive-fg.png
```

### Character Illustration Spec

```markdown
## Character: [Character Name]

| Attribute      | Value                                          |
|----------------|------------------------------------------------|
| Description    | [Physical description, personality]            |
| Color palette  | [Main colors — hex codes]                      |
| Style notes    | [Art direction notes]                          |
| References     | [Link to reference images]                     |

**Required expression poses:**
- [ ] Neutral / Idle
- [ ] Happy / Celebrating
- [ ] Thinking / Curious
- [ ] Sad / Disappointed
- [ ] Excited / Energetic
- [ ] Confused / Question
- [ ] Custom: _______________________

**Sizes / contexts:**
- Hero (large): [px × px] — used on [screen name]
- Medium: [px × px] — used on [screen name]
- Thumbnail/Avatar: [px × px] — used on [screen name]

**Formats:**
- Static: PNG w/ transparent background (1x, 2x, 3x)
- SVG if the character is purely vector
- Animation: Lottie JSON [if applicable]
```

### Background Scene Spec

```markdown
## Background: [Scene Name]

| Attribute      | Value                                          |
|----------------|------------------------------------------------|
| Description    | [What the scene depicts]                       |
| Mood           | [Calm / Energetic / Mysterious / Bright]       |
| Time of day    | [Day / Night / Sunset / Flexible]              |
| Key elements   | [List 3-5 visual elements]                     |
| Animation      | None / Subtle loop (e.g., clouds) / Full       |

**Sizes:**
- iPhone: 390×844 pt @3x (portrait) / 844×390 pt @3x (landscape)
- iPad: 1024×1366 pt @2x (portrait)
- Android: Design at 360×800dp (adapt for other densities)
- Web: [Specify breakpoints]

**Layers to deliver separately (if applicable):**
- Background layer (sky, ground, far elements)
- Midground layer (trees, buildings)
- Foreground layer (elements in front of character)
```

### UI Illustration / Empty State Art Spec

```markdown
## UI Illustration: [Name]

| Attribute      | Value                                          |
|----------------|------------------------------------------------|
| Context        | [Which screen / empty state]                   |
| Message        | [What emotion/idea should this convey]         |
| Size           | [max width × height in pt/dp]                  |
| Style          | Must match character style                     |

**Notes:** [Any additional constraints]
```

### Marketing / Store Asset Spec

```markdown
## Store Screenshots

**iOS App Store:**
- iPhone 6.9" (1320×2868 px @3x) — Primary device
- iPhone 6.5" (1284×2778 px @3x) — Required
- iPad Pro 12.9" (2048×2732 px @2x) — If iPad supported

**Android Play Store:**
- Phone screenshots: 1080×1920 px (at least 2, up to 8)
- Feature graphic: 1024×500 px

**Content for each screenshot:**
| # | Headline (30 chars max) | Visual Focus          | Notes         |
|---|-------------------------|-----------------------|---------------|
| 1 | "[First key benefit]"   | App icon + hero image | Most critical |
| 2 | "[Second key benefit]"  | Primary feature flow  |               |
| 3 | "[Third key benefit]"   | Key screen UI         |               |
| 4 | "[Fourth key benefit]"  | Key feature           |               |
| 5 | "[Social proof or CTA]" | Results / before-after|               |
```

---

## Phase 3: Review and Approval Process

```
Draft → Internal Review → Client/PM Review → Revisions → Final Approval → Handoff

For each asset:
  1. Share draft via agreed channel (Figma link / shared drive)
  2. Mark as "In Review" in asset-pipeline.md
  3. Collect feedback in one consolidated round (not drip comments)
  4. Apply feedback → mark as "Revision 2"
  5. Get explicit approval ("Approved ✅ [Name] [Date]")
  6. Export final files per spec
  7. Deliver via agreed method
  8. Mark as "Delivered ✅" in asset-pipeline.md
```

**Maximum review rounds:** 2 (after that, a project lead decision is required).

---

## Phase 4: File Handoff Checklist

```
PRE-EXPORT
[ ] All assets reviewed and explicitly approved by project lead
[ ] Colors match style guide hex codes exactly (no approximations)
[ ] Fonts embedded or outlined where applicable
[ ] No placeholder or lorem ipsum text in final files

EXPORT
[ ] Exported at required sizes (1x, 2x, 3x for mobile — or SVG)
[ ] File naming matches convention: [project]-[category]-[name]-[size].[ext]
[ ] PNG files have transparent backgrounds (where specified)
[ ] Compression applied without visible quality loss
[ ] File size targets met:
    - App icons: < 200 KB per size
    - Character illustrations: < 500 KB per size
    - Background scenes: < 1 MB per size
    - UI illustrations: < 100 KB

DELIVERY
[ ] All files organized in folder structure matching asset-pipeline.md
[ ] Readme.txt or README.md included describing every file
[ ] Source files (Figma / PSD / AI) backed up separately
[ ] Delivery confirmed with developer
[ ] asset-pipeline.md updated to "Delivered ✅"
```

---

## Folder Structure for Delivery

```
[project-name]-assets/
├── icons/
│   ├── icon-1024.png
│   ├── icon-180.png
│   └── icon-android-512.png
├── characters/
│   ├── hero-neutral-2x.png
│   ├── hero-happy-2x.png
│   └── [character]-[expression]-[size].png
├── backgrounds/
│   ├── home-bg-2x.png
│   └── [scene]-[size].png
├── ui-illustrations/
│   ├── empty-state-home-2x.png
│   └── [screen]-empty-[size].png
├── marketing/
│   ├── screenshot-01-iphone69.png
│   ├── feature-graphic-android.png
│   └── [platform]-[type]-[variant].png
└── source/
    ├── characters.fig (or .psd, .ai)
    └── backgrounds.fig
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| **Art direction brief** | Not needed (use stock or AI art) | Required | Required + brand guide |
| **Character design** | Stock / AI / no characters | Full illustration spec | Full + animation spec |
| **Review rounds** | 1 round | 2 rounds | 2-3 rounds + stakeholder sign-off |
| **Marketing assets** | 1-2 screenshots (auto-generated) | Full store screenshots | Full + ASO optimization |
| **Source file backup** | Not needed | Recommended | Required |
| **Accessibility** | Basic contrast check | Alt text + contrast | Full WCAG 2.1 audit |
