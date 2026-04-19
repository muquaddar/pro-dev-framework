# Phase 4: UI Design — Visual Style & Component Specification

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Stage:** 2 (Interactive Planning) | **Phase:** 4 of 6
> **Tier:** Standard (optional), Enterprise (required), Lite (skip)
> **Duration:** 30 min – 1 hour
> **Prerequisite:** Phase 3 (UX) confirmed

---

## Purpose

UI Design translates wireframes into **visual specifications.** Where Phase 3 defined the layout and flow, Phase 4 defines the look and feel — colors, typography, spacing, component styles, and asset requirements.

This phase is broken into **5 focused bites.**

**At the end of this phase, you will have:**
- A complete design system (colors, fonts, spacing, shapes)
- Component specifications for every UI element
- Design token definitions ready for implementation
- Asset briefs for illustrations, icons, and media
- A styled high-fidelity HTML prototype

---

## Phase Structure: 5 Bites

```
BITE 1: Design Direction & Moodboard   (10-15 min)
  AI proposes 2-3 visual directions with reasoning
  Output: Chosen design direction with rationale

BITE 2: Design System Tokens            (10-15 min)
  Colors, typography, spacing, shapes, elevation
  Output: Complete token definitions

BITE 3: Component Specifications        (10-15 min)
  Every UI element styled and documented
  Output: Component spec sheet

BITE 4: Asset Briefs                    (5-10 min)
  What illustrations, icons, and media are needed
  Output: Asset requirements document

BITE 5: Styled Prototype                (10-15 min)
  Upgrade the lo-fi prototype with real styling
  Output: hi-fi prototype.html with design system applied
```

Each bite follows: **AI Proposes → Human Reviews → AI Refines → Human Confirms → SAVE**.

---

## Bite 1: Design Direction & Moodboard

> **Goal:** Choose the visual personality of the product from 2-3 compared options.
> **Duration:** 10-15 min

### Direction Discovery

```
Step 1: AI CONSIDERS THE CONTEXT
  "Based on your project:
   - Audience: Children age 3-5 (+ parents)
   - Domain: Educational / vocabulary learning
   - Competitors: [findings from Phase 1 research]
   - Differentiator: [from Strategy]
   
   I'll propose 3 visual directions."

Step 2: AI PRESENTS 2-3 DESIGN DIRECTIONS WITH COMPARISON
```

### Design Direction Comparison

```
┌────────────────────────────────────────────────────────────┐
│  DESIGN DIRECTION OPTIONS                                  │
│                                                            │
│  Option A: Bright & Playful                                │
│  ✅ Vibrant primary colors (yellow, orange, green)          │
│  ✅ Rounded, bubbly shapes (border-radius: 20px+)          │
│  ✅ Bouncy animations, confetti rewards                     │
│  ✅ Hand-drawn illustration style                           │
│  ⚠️ May feel generic compared to competitors               │
│  Typography: Rounded sans-serif (Nunito, Baloo 2)          │
│  Mood: Fun, energetic, Saturday morning cartoons           │
│                                                            │
│  Option B: Soft & Modern                                   │
│  ✅ Pastel palette (soft purple, mint, coral)               │
│  ✅ Clean lines with gentle rounded corners (12-16px)       │
│  ✅ Smooth animations, satisfying micro-interactions        │
│  ✅ Flat illustration style with subtle texture              │
│  ⚠️ May feel too calm for very young children              │
│  Typography: Modern rounded (Poppins, Quicksand)           │
│  Mood: Calm, premium, trusted by parents                   │
│                                                            │
│  Option C: Storybook / Nature                              │
│  ✅ Earth tones + accent colors (forest green, sky blue)    │
│  ✅ Organic shapes, leaf/cloud motifs in UI elements        │
│  ✅ Page-turn transitions, book metaphor                    │
│  ✅ Watercolor illustration style                            │
│  ⚠️ Harder to implement consistently across screens        │
│  Typography: Serif + sans-serif mix (Merriweather + Inter) │
│  Mood: Warm, educational, like a picture book              │
│                                                            │
│  COMPARISON:                                               │
│                      Bright   Soft/Modern  Storybook        │
│  Kid appeal:         ★★★★★    ★★★★☆        ★★★★☆            │
│  Parent trust:       ★★★☆☆    ★★★★★        ★★★★☆            │
│  Uniqueness:         ★★☆☆☆    ★★★★☆        ★★★★★            │
│  Implementation:     ★★★★★    ★★★★☆        ★★★☆☆            │
│  Accessibility:      ★★★★☆    ★★★★★        ★★★☆☆            │
│  Scalability:        ★★★★☆    ★★★★★        ★★★☆☆            │
│                                                            │
│  Recommendation: Option B (Soft & Modern) because:          │
│  - Parents are the buyers — premium feel builds trust       │
│  - Pastel colors pass WCAG contrast on dark backgrounds     │
│  - Clean components scale well as content grows             │
│  - Competitors use Option A — this differentiates           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Design Direction Output

```markdown
## Design Direction — [PROJECT_NAME]

**Chosen:** Soft & Modern
**Mood:** Calm, premium, trusted by parents
**Why:** [Rationale from comparison]

### Visual Identity Summary
- **Palette feel:** Pastels with vivid accent for interactions
- **Shape language:** Rounded (12-16px radius), organic curves
- **Typography feel:** Modern, rounded, highly readable
- **Illustration style:** Flat with subtle texture/gradients
- **Animation feel:** Smooth, satisfying, never jarring
- **Overall tone:** "Premium educational, not cheap-looking"

### Rejected Alternatives
| Direction | Why Rejected |
|---|---|
| Bright & Playful | Too generic, doesn't differentiate from competitors |
| Storybook | Beautiful but hard to maintain consistency at scale |
```

### 🧑 Suggested Human Activities

```
⚡ QUICK
□ Browse Dribbble / Behance for "[domain] app design"
  Screenshot 3-5 designs you like. Share with AI.
  "I like the colors from this one and the layout from that one."

□ Look at competitor app screenshots
  What visual patterns do ALL competitors share?
  That's what we should NOT copy — find our differentiation.

⏱️ MEDIUM
□ Create a simple moodboard
  Collect 5-10 images (from Pinterest, Dribbble, real photos)
  that capture the FEELING you want. Share with AI.
  AI will extract color palettes and style cues from your picks.
```

---

## Bite 2: Design System Tokens

> **Goal:** Define every design token so the build phase has exact values.
> **Duration:** 10-15 min

The AI proposes the full design system as a set of **tokens** — specific values that the developer will use directly in code. For each token category, the AI presents 2-3 options for key decisions.

### Color Palette

```
┌────────────────────────────────────────────────────────────┐
│  COLOR PALETTE OPTIONS (based on Soft & Modern direction)  │
│                                                            │
│  Option A: Purple Core + Rainbow Accents                   │
│  Primary:    #7C3AED (vibrant purple)                      │
│  Secondary:  #06B6D4 (cyan)                                │
│  Success:    #10B981 (emerald)                             │
│  Warning:    #F59E0B (amber)                               │
│  Error:      #EF4444 (red)                                 │
│  Background: #0F0F1A (deep dark) / #FAFAFA (light)        │
│  Surface:    #1A1A2E (card dark) / #FFFFFF (card light)   │
│                                                            │
│  Option B: Teal Core + Warm Accents                        │
│  Primary:    #0D9488 (teal)                                │
│  Secondary:  #8B5CF6 (violet)                              │
│  Success:    #22C55E (green)                               │
│  Warning:    #FB923C (orange)                              │
│  Error:      #F43F5E (rose)                                │
│  Background: #0C1222 (navy dark) / #F8FAFC (slate light)  │
│  Surface:    #162032 (card dark) / #FFFFFF (card light)   │
│                                                            │
│  Both include: WCAG AA contrast on chosen backgrounds      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Complete Token Definition

```markdown
## Design Tokens — [PROJECT_NAME]

### Colors
| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--color-primary` | #7C3AED | #A78BFA | Buttons, links, active states |
| `--color-primary-light` | #EDE9FE | #2E1065 | Backgrounds, hover states |
| `--color-secondary` | #06B6D4 | #22D3EE | Accents, secondary actions |
| `--color-success` | #10B981 | #34D399 | Learned state, correct answer |
| `--color-warning` | #F59E0B | #FBBF24 | Streaks, attention needed |
| `--color-error` | #EF4444 | #F87171 | Wrong answer, errors |
| `--color-bg` | #FAFAFA | #0F0F1A | Page background |
| `--color-surface` | #FFFFFF | #1A1A2E | Cards, modals |
| `--color-text` | #1F2937 | #E5E7EB | Primary text |
| `--color-text-secondary` | #6B7280 | #9CA3AF | Labels, hints |
| `--color-border` | #E5E7EB | #374151 | Dividers, card borders |

### Category Colors (unique per content category)
| Category | Color | Light Bg | Usage |
|---|---|---|---|
| Animals | #F97316 (orange) | #FFF7ED | Category card, progress |
| Food | #EF4444 (red) | #FEF2F2 | Category card, progress |
| Colors | #8B5CF6 (violet) | #F5F3FF | Category card, progress |
| Numbers | #06B6D4 (cyan) | #ECFEFF | Category card, progress |

### Typography
| Token | Value | Usage |
|---|---|---|
| `--font-family` | 'Poppins', sans-serif | All text |
| `--font-display` | 'Baloo 2', cursive | Headings, word display |
| `--size-xs` | 0.75rem (12px) | Captions, meta |
| `--size-sm` | 0.875rem (14px) | Labels, secondary text |
| `--size-base` | 1rem (16px) | Body text |
| `--size-lg` | 1.25rem (20px) | Subheadings |
| `--size-xl` | 1.5rem (24px) | Section headings |
| `--size-2xl` | 2rem (32px) | Page headings |
| `--size-3xl` | 3rem (48px) | Word display (hero) |
| `--weight-normal` | 400 | Body text |
| `--weight-medium` | 500 | Labels |
| `--weight-semibold` | 600 | Subheadings |
| `--weight-bold` | 700 | Headings, buttons |
| `--line-height-tight` | 1.2 | Headings |
| `--line-height-normal` | 1.5 | Body |
| `--line-height-relaxed` | 1.75 | Long form text |

### Spacing
| Token | Value | Usage |
|---|---|---|
| `--space-1` | 0.25rem (4px) | Inline gaps |
| `--space-2` | 0.5rem (8px) | Tight padding |
| `--space-3` | 0.75rem (12px) | Component inner padding |
| `--space-4` | 1rem (16px) | Standard padding |
| `--space-5` | 1.5rem (24px) | Card padding |
| `--space-6` | 2rem (32px) | Section spacing |
| `--space-8` | 3rem (48px) | Page margins |

### Shape
| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 8px | Small chips, tags |
| `--radius-md` | 12px | Input fields, small cards |
| `--radius-lg` | 16px | Buttons, cards |
| `--radius-xl` | 24px | Large cards, modals |
| `--radius-full` | 9999px | Avatars, circles |

### Elevation / Shadows
| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) | Subtle lift |
| `--shadow-md` | 0 4px 8px rgba(0,0,0,0.1) | Cards |
| `--shadow-lg` | 0 8px 24px rgba(0,0,0,0.15) | Modals, popovers |
| `--shadow-glow` | 0 0 20px var(--color-primary-light) | Active/focused elements |

### Motion
| Token | Value | Usage |
|---|---|---|
| `--duration-fast` | 150ms | Hover, micro-interactions |
| `--duration-normal` | 300ms | Screen transitions |
| `--duration-slow` | 500ms | Celebrations, confetti |
| `--easing-default` | cubic-bezier(0.4, 0, 0.2, 1) | Standard transitions |
| `--easing-bounce` | cubic-bezier(0.34, 1.56, 0.64, 1) | Fun interactions (stars, badges) |
| `--easing-smooth` | cubic-bezier(0.4, 0, 0, 1) | Page transitions |
```

---

## Bite 3: Component Specifications

> **Goal:** Define every reusable UI component with exact styles.
> **Duration:** 10-15 min

The AI defines each component one at a time, with 2-3 variant options for primary components.

### Component Catalog

```
Components to define (AI presents ONE AT A TIME):

1. Buttons (primary, secondary, ghost, icon-only)
2. Cards (category card, word card, stat card)
3. Navigation (back button, breadcrumb, bottom bar)
4. Progress indicators (progress bar, star rating, streak counter)
5. Input elements (PIN input, search, toggle)
6. Feedback (toast, celebration overlay, empty state)
7. Layout containers (screen wrapper, section, grid)
8. Media (image frame, audio player button)
```

### Component Spec Format

```markdown
### Component: Category Card

**Usage:** Displayed in category grid on Home Hub and Category List
**Requirement:** FR-01

**Anatomy:**
┌──────────────────────────────┐
│  ┌────┐                     │
│  │ 🐶 │  Animals             │  ← emoji + category name
│  └────┘  8 of 20 words       │  ← progress text
│  ████████░░░░░░░░░░░░░░░░░░ │  ← progress bar
└──────────────────────────────┘

**Tokens Used:**
- Background: var(--color-surface)
- Border: 2px solid [category-color at 30% opacity]
- Radius: var(--radius-lg) → 16px
- Padding: var(--space-5) → 24px
- Shadow: var(--shadow-md)
- Font (name): var(--font-family) at var(--size-lg), var(--weight-semibold)
- Font (progress): var(--font-family) at var(--size-sm), var(--weight-normal)
- Progress bar: [category-color] on var(--color-border) track

**States:**
| State | Changes |
|---|---|
| Default | As above |
| Hover/Press | border: 2px solid [category-color], shadow: var(--shadow-lg) |
| Completed | Full progress bar, "✅ Complete!" text, subtle glow |
| Disabled | Opacity 0.5, no press effect (locked content) |

**Interaction:**
- Tap → navigate to word list for this category
- Press feedback: scale(0.97) for 150ms, then navigate
- Haptic: light tap (iOS) / click (Android)

**Responsive:**
| Phone | Tablet | Desktop |
|---|---|---|
| Full width, stacked | 2-column grid | 3-column grid |
| 16px margin | 24px grid gap | 24px grid gap |
```

### Key Component Comparison (buttons example)

```
┌────────────────────────────────────────────────────────────┐
│  BUTTON STYLE OPTIONS                                      │
│                                                            │
│  Option A: Filled with Rounded Corners                     │
│  ┌─────────────────────┐                                   │
│  │    🔊 Listen         │  bg: var(--color-primary)         │
│  └─────────────────────┘  color: white                     │
│  radius: var(--radius-lg)  padding: 16px 24px              │
│  ✅ High contrast, clear CTA                                │
│  ⚠️ Can feel heavy if overused                             │
│                                                            │
│  Option B: Outlined with Fill on Press                     │
│  ┌─────────────────────┐                                   │
│  │    🔊 Listen         │  bg: transparent                  │
│  └─────────────────────┘  border: 2px solid primary        │
│  Fills with color on press                                 │
│  ✅ Lighter visual weight, modern feel                      │
│  ✅ Satisfying press interaction                             │
│  ⚠️ Lower visual prominence for primary actions            │
│                                                            │
│  Recommendation: Option A for primary actions (Listen,      │
│  Learned), Option B for secondary (Next, Back)              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Bite 4: Asset Briefs

> **Goal:** Define every non-code asset needed and create actionable briefs.
> **Duration:** 5-10 min

### Asset Categories

The AI generates a brief for each asset type:

```markdown
## Asset Requirements — [PROJECT_NAME]

### Illustrations

| # | Asset | Description | Format | Size | Variants | Priority |
|---|---|---|---|---|---|---|
| I-1 | Animal: Dog | Friendly cartoon dog, sitting | PNG @2x | 300×300 | None | M4 |
| I-2 | Animal: Cat | Playful cartoon cat | PNG @2x | 300×300 | None | M4 |
| I-3 | Category icon: Animals | Paw print or animal silhouette | SVG | 48×48 | Selected/Unselected | M2 |
| I-4 | Empty state | Cheerful character waving | PNG @2x | 400×300 | None | M3 |
| I-5 | Celebration | Confetti explosion | Lottie JSON | 400×400 | None | M8 |

**Art Style Brief:**
- Style: Flat illustration with subtle gradients
- Palette: Use category colors from design tokens
- Stroke: 2px consistent stroke weight
- Mood: Friendly, approachable, non-gendered
- Consistency: All animals should share the same visual language

### Icons

| # | Icon | Usage | Format | Size |
|---|---|---|---|---|
| IC-1 | 🔊 Speaker | Audio playback | SVG | 24×24 |
| IC-2 | ⭐ Star | Learning progress | SVG | 24×24 (filled + outline) |
| IC-3 | 🔒 Lock | Parent zone gate | SVG | 24×24 |
| IC-4 | ← Back arrow | Navigation | SVG | 24×24 |
| IC-5 | 🔥 Flame | Streak indicator | SVG | 24×24 |

**Icon Style**: Rounded line icons, 2px stroke, using `--color-text` for default,
`--color-primary` for active state. Match icon set (e.g., Lucide, Phosphor).

### Audio

| # | Asset | Description | Format | Duration |
|---|---|---|---|---|
| A-1 | Word pronunciation (per word) | Clear, friendly voice | MP3 / OGG | 1-3s |
| A-2 | Correct answer chime | Positive feedback | MP3 | <1s |
| A-3 | Wrong answer sound | Gentle, not punishing | MP3 | <1s |
| A-4 | Achievement unlocked | Celebratory fanfare | MP3 | 2-3s |
| A-5 | Button tap | Subtle click/pop | MP3 | <0.5s |

### App Store Assets

| # | Asset | Required By | Format | Size |
|---|---|---|---|---|
| AS-1 | App icon | M12 | PNG | 1024×1024 |
| AS-2 | Screenshots (iPhone) | M12 | PNG | 1290×2796 (×5) |
| AS-3 | Screenshots (iPad) | M12 | PNG | 2048×2732 (×5) |
| AS-4 | Feature graphic (Android) | M12 | PNG | 1024×500 |
| AS-5 | Preview video | M12 (optional) | MP4 | 30s max |
```

### Asset Production Options

The AI presents options for how to source each asset type:

```
┌────────────────────────────────────────────────────────────┐
│  ILLUSTRATION SOURCING OPTIONS                             │
│                                                            │
│  Option A: AI Generated (Fastest, cheapest)                │
│  ✅ Immediate availability                                  │
│  ✅ Unlimited iterations                                     │
│  ✅ $0 cost                                                  │
│  ⚠️ Consistency harder to maintain across 50+ images       │
│  ⚠️ Legal ambiguity on AI-generated art in some markets    │
│                                                            │
│  Option B: Stock Illustration Pack (Fast, moderate cost)   │
│  ✅ Pre-made, consistent style                               │
│  ✅ Licensed and legally clear                               │
│  ⚠️ Limited customization                                   │
│  ⚠️ Other apps may use same assets                         │
│  Cost: $20-100 for a pack                                  │
│                                                            │
│  Option C: Custom Illustrator (Slowest, highest quality)   │
│  ✅ Unique, ownable art style                                │
│  ✅ Perfect consistency                                      │
│  ✅ Competitive differentiator                               │
│  ⚠️ Cost: $500-2000+ for 50 illustrations                  │
│  ⚠️ Lead time: 2-4 weeks                                   │
│                                                            │
│  Recommendation for v1.0: Option A for prototyping,         │
│  upgrade to Option C before public launch if budget allows. │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 🧑 Suggested Human Activities

```
⚡ QUICK
□ Browse illustration marketplaces
  Search Blush.design, Humaaans, Storyset, undraw.co
  Find a style that matches chosen design direction.
  Share link with AI — it will reference the style in briefs.

□ Test font readability
  Open Google Fonts, type your app's key words in chosen font.
  Increase/decrease size. Is it readable at --size-sm (14px)?

⏱️ MEDIUM
□ Create a quick color mockup
  Apply chosen palette to 1-2 wireframe screens in Figma/Canva.
  Does it FEEL right? Colors on screen often differ from hex values.

□ Collect reference art
  Find 3-5 illustrations that match your target style.
  Share with AI or potential illustrator as "the style I want."

🔬 DEEP
□ Commission a test illustration
  Have an illustrator draw ONE asset (e.g., the Dog character).
  This is your style reference for all future illustrations.
  Cheaper to adjust direction now than after 50 illustrations.
```

---

## Bite 5: Styled High-Fidelity Prototype

> **Goal:** Apply the design system to the lo-fi prototype from Phase 3.
> **Duration:** 10-15 min

The AI upgrades the lo-fi prototype HTML with the confirmed design tokens:

```
UPGRADES FROM LO-FI:
✅ Real color palette applied
✅ Chosen typography (Google Fonts loaded)
✅ Proper spacing and border-radius
✅ Button styles match component specs
✅ Card styles with shadows and hover states
✅ Dark mode / light mode toggle
✅ Category-specific color coding
✅ Empty emoji placeholders replaced with styled elements
✅ Responsive layouts per screen size notes
✅ Micro-animation hints (hover effects, transitions)
```

### Prototype Template (key additions)

```html
<!-- Add to <head> of lo-fi prototype -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700
  &family=Baloo+2:wght@700&display=swap" rel="stylesheet">

<style>
  :root {
    /* Design System Tokens - Light */
    --color-primary: #7C3AED;
    --color-primary-light: #EDE9FE;
    --color-secondary: #06B6D4;
    --color-success: #10B981;
    --color-warning: #F59E0B;
    --color-error: #EF4444;
    --color-bg: #FAFAFA;
    --color-surface: #FFFFFF;
    --color-text: #1F2937;
    --color-text-secondary: #6B7280;
    --color-border: #E5E7EB;

    --font-family: 'Poppins', sans-serif;
    --font-display: 'Baloo 2', cursive;

    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;

    --shadow-md: 0 4px 8px rgba(0,0,0,0.1);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.15);

    --duration-fast: 150ms;
    --duration-normal: 300ms;
    --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
    --easing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  /* Dark mode */
  [data-theme="dark"] {
    --color-primary: #A78BFA;
    --color-primary-light: #2E1065;
    --color-bg: #0F0F1A;
    --color-surface: #1A1A2E;
    --color-text: #E5E7EB;
    --color-text-secondary: #9CA3AF;
    --color-border: #374151;
  }

  body {
    font-family: var(--font-family);
    background: var(--color-bg);
    color: var(--color-text);
    transition: background var(--duration-normal) var(--easing-default);
  }

  /* Add theme toggle button */
  .theme-toggle {
    position: fixed; top: 1rem; left: 1rem;
    padding: 0.5rem 1rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text);
    cursor: pointer;
  }
</style>
```

### Facilitator Instructions

```
After confirming the design tokens and components, the AI says:

"I'll now apply the design system to your clickable prototype.
When you open the updated HTML file, you'll see:

  ✅ Your chosen color palette
  ✅ Real typography (Poppins + Baloo 2)
  ✅ Styled buttons, cards, and navigation
  ✅ Dark/light mode toggle
  ✅ Phone / tablet / desktop views

This is the closest you'll get to the final app without writing code.
Share this with stakeholders for final visual approval."
```

**Save as:** `docs/prototype/prototype-styled.html`

---

## Complete Deliverable

**File:** `docs/ui-design-brief.md`

```markdown
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: 4
phase_name: "UI Design"
status: "confirmed"
tier: "standard"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---

# UI Design Brief — [PROJECT_NAME]

## Design Direction
[From Bite 1 — chosen direction, mood, rejected alternatives]

## Design Tokens
[From Bite 2 — complete token tables: colors, fonts, spacing, motion]

## Component Specifications
[From Bite 3 — every component with anatomy, tokens, states, responsive]

## Asset Requirements
[From Bite 4 — illustration, icon, audio, app store asset briefs]
```

**Additional files:**
- `docs/prototype/prototype-styled.html` — hi-fi clickable prototype
- `docs/assets/` — directory for collected reference images

**Save-As-You-Go checkpoints:**
```
After Bite 1 → Save design direction section
After Bite 2 → Save design tokens section
After Bite 3 → Save component specs section
After Bite 4 → Save asset briefs section
After Bite 5 → Save docs/prototype/prototype-styled.html
After all    → Save complete docs/ui-design-brief.md
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| This Phase | SKIP ENTIRELY | Optional (recommended) | Required |
| Design Directions | — | 2 options | 3 options + stakeholder vote |
| Token Categories | — | Colors, fonts, spacing, shapes | Full + motion, elevation, breakpoints |
| Components | — | 5-8 core components | 10-15 components + variant matrix |
| Asset Briefs | — | Core illustrations + icons | Full + audio + video + store assets |
| Styled Prototype | — | Core screens only | All screens + dark mode + 3 sizes |
| Human Activities | — | Moodboard recommended | Style reference + test illustration required |
