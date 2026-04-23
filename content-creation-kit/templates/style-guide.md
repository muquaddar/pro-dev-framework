# Style Guide — [Project Name]

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Type:** Template
>
> **Instructions:** Copy this file to your project's `docs/` folder. Complete each section with your project's specific style decisions. This document is the source of truth for all content and design decisions.

---

## Document Info

```
Project:       [Project Name]
Version:       1.0
Created:       [YYYY-MM-DD]
Updated:       [YYYY-MM-DD]
Owner:         [Name — PM or Lead Designer]
Contributors:  [Designer], [Content Writer], [Brand Lead]
```

---

## Part 1: Brand Identity

### 1.1 Product Overview

```
App Name:       [Exact app name — spelling and capitalization MATTER]
Tagline:        [1 sentence — what the product does]
Core purpose:   [What is the product's primary job-to-be-done?]
Target user:    [Primary user description]
Emotional goal: [How should users feel while using the app? e.g., "Capable, encouraged, delighted"]
```

### 1.2 Brand Values

| Value | What It Means in Practice |
|---|---|
| [Value 1, e.g. "Encouraging"] | [Concrete example of this value in UI/copy] |
| [Value 2, e.g. "Honest"] | [Concrete example] |
| [Value 3, e.g. "Playful"] | [Concrete example] |

---

## Part 2: Visual Identity

### 2.1 Color Palette

> These are the canonical brand colors. All UI components, illustrations, and marketing assets must use ONLY these values.

```
PRIMARY COLOR
  Name:    [e.g. Ocean Blue]
  Hex:     #[XXXXXX]
  RGB:     [R, G, B]
  HSL:     [H, S%, L%]
  Usage:   Primary buttons, key UI elements, main brand touchpoints

SECONDARY COLOR
  Name:    [e.g. Sunshine Yellow]
  Hex:     #[XXXXXX]
  RGB:     [R, G, B]
  HSL:     [H, S%, L%]
  Usage:   Accents, highlights, secondary CTAs

ACCENT COLOR
  Name:    [e.g. Coral Pink]
  Hex:     #[XXXXXX]
  RGB:     [R, G, B]
  Usage:   Success states, celebrations, special moments

NEUTRAL PALETTE
  Background (light):  #[XXXXXX]  — App background in light mode
  Background (dark):   #[XXXXXX]  — App background in dark mode
  Surface:             #[XXXXXX]  — Cards, modals, elevated surfaces
  On-Surface:          #[XXXXXX]  — Text and icons on surfaces
  Border / Divider:    #[XXXXXX]  — Subtle dividers

SEMANTIC COLORS
  Success:  #[XXXXXX]  — Correct answers, completed tasks
  Warning:  #[XXXXXX]  — Alerts, cautions (use sparingly)
  Error:    #[XXXXXX]  — Errors, wrong answers
  Info:     #[XXXXXX]  — Informational states
```

### 2.2 Typography

```
PRIMARY FONT
  Family:    [e.g., Inter, Nunito, Outfit]
  License:   [e.g., SIL Open Font License / Google Fonts]
  Used for:  Headings, body text, UI elements
  Download:  [Link to font source]

SECONDARY FONT (if needed)
  Family:    [e.g., Playfair Display]
  Used for:  Display headings only
  Download:  [Link]

TYPE SCALE (dp / pt — platform-specific)
  Display:    [32sp] — Bold — Page titles, hero text
  Heading 1:  [24sp] — SemiBold — Section titles
  Heading 2:  [20sp] — SemiBold — Sub-sections
  Body Large:  [16sp] — Regular — Main reading content
  Body:        [14sp] — Regular — Standard UI text
  Caption:     [12sp] — Regular — Secondary labels, timestamps
  Overline:    [11sp] — Medium, Uppercase — Category labels

LINE HEIGHT
  Headings: 1.2× font size
  Body:     1.5× font size

LETTER SPACING
  Headings: -0.5 to 0 (tighter for large text)
  Body:     0 to +0.25 (normal to slightly open)
  OVERLINE: +1.5 (always wide)
```

### 2.3 Illustration Style

```
Style:           [Flat / Hand-drawn / Realistic / Pixel / Isometric / Line art]
Character style: [Consistency note — all characters must feel like they come from one world]
Outline:         [Yes, stroke weight: ___ / No outlines]
Shading:         [Flat color / Soft shadow / Hard shadow / None]
Color palette:   Must use brand colors ONLY (see 2.1)
Aspect ratio:    Characters are [X] heads tall — maintain this proportion
Background:      [Always white / Transparent / Scene-based]
References:      [Link to inspiration / reference mood board]
Anti-references: [Link to examples of what NOT to do]
```

### 2.4 Iconography

```
Style:      [Outlined / Filled / Duo-tone / Custom]
Size grid:  [24×24 pt base, scale at 2× and 3×]
Stroke:     [1.5 pt at 24px base]
Corner radius: [2px — match overall app roundness]
Library:    [Material Icons / SF Symbols / Custom / Figma community set name]
Custom icons:   [List any brand-specific icons needed]
```

### 2.5 Shape & Roundness

```
Global corner radius:   [8dp — default for all cards and containers]
Button corners:         [Fully rounded (50%) / [X]dp]
Input field corners:    [8dp]
Modal corners:          [16dp]
Image corners:          [8dp]
Avatar corners:         [Circle (50%)]
Elevation (shadows):    [Material elevation level / custom values]
```

---

## Part 3: Written Style Guide

### 3.1 Voice & Tone

```
Our brand voice (always consistent):
  [Trait 1] — [concrete example in our copy]
  [Trait 2] — [concrete example in our copy]
  [Trait 3] — [concrete example in our copy]

Tone shifts by context:
  Onboarding:         Warm, exciting, welcoming
  Teaching moments:   Clear, patient, encouraging
  Success states:     Celebratory, energetic, brief
  Error messages:     Calm, helpful, blame-free
  Empty states:       Encouraging, actionable
  Destructive actions: Clear, cautious, confirming
```

### 3.2 Writing Rules

```
DO:
  ✅ Write at [target reading level] — [grade level] or below
  ✅ Use active voice ("Tap the button" not "The button should be tapped")
  ✅ Address the user directly ("you", not "the user")
  ✅ Lead with the benefit, not the feature
  ✅ Use short sentences (max 20 words for UI copy)
  ✅ Avoid jargon — use plain language
  ✅ Be specific ("Save 30 minutes" not "Save time")

DON'T:
  ❌ Use all caps for emphasis (use bold or design instead)
  ❌ Use exclamation marks more than once per screen
  ❌ Use passive voice ("An error was encountered")
  ❌ Use negative language for errors ("Wrong!", "Invalid!")
  ❌ Use vague labels ("OK", "Submit", "Yes") without context
  ❌ Use gendered language — be inclusive
```

### 3.3 Terminology Glossary

| Our Term | Don't Use | Notes |
|---|---|---|
| [App Name] | "[Alt Name]", "[Abbreviation]" | Always spell exactly: [App Name] |
| "Tap" | "Press", "Click" | "Tap" for mobile; "Click" for web |
| "Sign in" | "Login", "Log in" | Two words for verb — "Sign in" |
| "Sign up" | "Register", "Create account" | "Sign up" for action |
| "[Feature name]" | "[Alt name]" | [Why this term is canonical] |
| [Add more as needed] | | |

### 3.4 Punctuation & Formatting

```
Headings:           Title case — "Get Started Today" (capitalize key words)
Button labels:      Title case — "Start Learning"
Body copy:          Sentence case — "Tap the button to continue."
Ellipsis (...):     Use only for genuine continuation — never for decoration
Em dash (—):        Acceptable for parenthetical — like this
Ampersand (&):      Avoid in copy — use "and" instead (OK in navigation tabs)
Numbers < 10:       Spell out ("three items") in copy; numerals in UI data
Numbers ≥ 10:       Numerals always ("13 lessons")
Oxford comma:       Always use it ("red, white, and blue")
Quotes:             Use " " (curly quotes), not " " (straight quotes)
```

---

## Part 4: Motion & Animation

```
Duration scale:
  Micro (small elements):   100-150ms
  Standard (most UI):       200-300ms
  Emphasis (modal, page):   300-500ms
  Celebration (hero moment): 600-1000ms

Easing:
  Enter:  ease-out (fast start, slow end — feels natural)
  Exit:   ease-in  (slow start, fast end — doesn't drag)
  Both:   ease-in-out (symmetrical — for transform animations)

Reduce Motion:
  MUST be respected — all animations must have a no-motion alternative
  When Reduce Motion is on: use opacity fade instead of transforms
```

---

## Part 5: Accessibility Constraints

```
Color contrast (WCAG 2.1 AA minimum):
  Normal text on background:  4.5:1 ratio minimum
  Large text (18sp+):         3:1 ratio minimum
  UI components / icons:      3:1 ratio minimum

Never convey meaning by color alone — always pair with:
  Icon, text label, or pattern

Minimum touch targets:
  iOS:     44×44 pt
  Android: 48×48 dp
  Web:     44×44 px (WCAG guideline)

Text scaling:
  All text must support user font size scaling up to 200%
  No text in images (doesn't scale)
```

---

## Part 6: Platform-Specific Rules

### iOS (Apple Human Interface)

```
Navigation:   Use iOS standard navigation patterns (tab bar, navigation stacks)
Controls:     Use native-feeling controls where possible
Safe areas:   Always respect safe area insets
Dynamic Type: Support systemFontOfSize — no hard-coded font sizes
Dark mode:    Required — all color pairs defined above
SF Symbols:   Preferred for standard icons (if using native look)
```

### Android (Material Design 3)

```
Navigation:   Material navigation bar or drawer
Colors:       Use Material color system (map brand colors to M3 tokens)
Typography:   Material type scale (map to brand fonts above)
Shapes:       [M3 shape scale — Small: 8dp, Medium: 12dp, Large: 16dp]
Dark theme:   Required — use M3 dark color scheme
```

### Web (if applicable)

```
Breakpoints:
  Mobile:  < 640px
  Tablet:  640px – 1024px
  Desktop: > 1024px

Grid:        [12-column grid / [X]px max-width container]
```
