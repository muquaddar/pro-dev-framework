# Content Writer Guide

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Role:** Content Writer / Copywriter

---

## Your Role in the Project

As a content writer, you own the **words** in the product. That includes:
- UI copy (button labels, error messages, tooltips, empty states)
- Onboarding flows and tutorials
- In-app educational or narrative content
- Metadata for app stores (name, descriptions, keywords)
- Emails, push notifications, and in-app messages
- Help documentation and FAQs

Your work is **timing-critical** — developers cannot integrate content until it is approved and formatted correctly. Missing content deadlines is the number-one cause of code stream delays.

---

## Phase 1: Brief Intake

Before writing a single word, get answers to these questions from the project lead:

```
✅ BRIEF CHECKLIST

Project & Audience
  [ ] What is the product name?  _________________
  [ ] Who is the primary user? (Age range, reading level, language)
  [ ] What is the primary language? Are we supporting other locales?
  [ ] What is the app's core emotional job? (entertain / teach / inform / motivate)

Tone & Voice
  [ ] Tone words (choose 3-5): friendly / playful / professional / authoritative / warm /
      encouraging / minimalist / humorous / empathetic
  [ ] Audience reading level: basic / intermediate / technical
  [ ] Is this a children's product? (COPPA/GDPR-K applies — see legal-compliance.md)
  [ ] Any words or phrases to AVOID?
  [ ] Brand examples to match (app names, websites)

Scope
  [ ] How many screens need copy?
  [ ] Are there educational/narrative content pieces? (stories, lessons, descriptions)
  [ ] Is app store metadata required? (title, subtitle, description, keywords)
  [ ] Are push notifications or emails required?
  [ ] Is a help/FAQ section required?

Handoff Format
  [ ] How does the developer want content delivered? (CSV / Google Sheet / Markdown / JSON)
  [ ] What are the character limits for each UI element?
  [ ] What placeholder format to use? e.g. {username}, [APP_NAME]
```

---

## Phase 2: Style Guide Contribution

Before writing content, complete your section in `templates/style-guide.md`. Specifically:

### 2a. Voice & Tone Section

Document these for the project:

```markdown
## Voice & Tone

**Brand Voice (always):**
- [Trait 1] — [what this means in practice]
- [Trait 2] — [what this means in practice]
- [Trait 3] — [what this means in practice]

**Tone Shifts by Context:**
| Context            | Tone            | Example                                |
|--------------------|-----------------|----------------------------------------|
| Onboarding         | Warm, exciting  | "Welcome! Let's get started."          |
| Error messages     | Calm, helpful   | "Something went wrong. Try again."     |
| Success moments    | Celebratory     | "Great job! You did it! 🎉"            |
| Empty states       | Encouraging     | "Nothing here yet — add your first one!" |
| Destructive action | Clear, cautious | "This will delete everything. Are you sure?" |

**Words We Never Use:**
- "Error" (use "Oops" or "Something went wrong")
- "Invalid" (use "That didn't work — try again")
- [Add project-specific list]

**Words We Always Use:**
- [App name spelled exactly as: [EXACT_NAME]]
- [Add brand-specific terms]
```

### 2b. Content Structure Patterns

Define these once and use them consistently:

```markdown
## Content Patterns

**Button Labels:**
- Primary action: Active verb + clear object ("Start Learning" not "OK")
- Destructive action: Clear + confirmable ("Delete Forever" + confirmation dialog)
- Cancel: Always "Cancel" — never "No thanks", "Nope", "Go back"

**Error Messages:**
- Format: [What happened]. [Why]. [What to do].
- Example: "Couldn't save your progress. Check your internet connection and try again."

**Onboarding:**
- Max 5 steps
- Each step: 1 heading (≤6 words) + 1 body (≤20 words) + 1 action (button)
- No jargon — no acronyms without explanation

**Empty States:**
- Always explain WHY it's empty and what to do
- Include a call-to-action button
- Example: "No saved items yet. Tap ♡ on anything to save it here."
```

---

## Phase 3: Content Inventory

Create a content inventory spreadsheet or markdown table. This is the master list of every piece of copy in the product.

### Recommended Format

```markdown
## Content Inventory — [Project Name]

### UI Strings

| ID      | Screen         | Element       | English Text                        | Notes            | Status    |
|---------|----------------|---------------|-------------------------------------|------------------|-----------|
| UI-001  | Onboarding 1   | Heading       | "Welcome to [App Name]!"            | Personalize later | ✅ Final  |
| UI-002  | Onboarding 1   | Body          | "Your learning journey starts here."| Max 25 words     | 📝 Draft  |
| UI-003  | Onboarding 1   | CTA Button    | "Get Started"                       |                  | ✅ Final  |
| UI-004  | Home - Empty   | Heading       | "Nothing here yet!"                 |                  | 📝 Draft  |
| UI-005  | Home - Empty   | Body          | "Start by adding your first item."  |                  | 📝 Draft  |
...

### App Store Metadata

| Field             | Content                                              | Char Count | Limit | Status    |
|-------------------|------------------------------------------------------|------------|-------|-----------|
| App Name          | [App Name]                                           | 12         | 30    | ✅ Final  |
| Subtitle          | [Short tagline]                                      | 25         | 30    | 📝 Draft  |
| Description (short)| [1-3 sentences shown in search]                   | 80         | 170   | ✅ Final  |
| Description (full) | [Up to 4000 chars, full store description]         | 650        | 4000  | ✅ Final  |
| Keywords          | [comma-separated, no spaces]                         | 90         | 100   | ✅ Final  |
...
```

**Status Codes:**
- `📝 Draft` — written, not yet reviewed
- `👀 In Review` — sent to reviewer
- `🔄 Revisions` — feedback received, revisions needed
- `✅ Final` — approved, ready for handoff
- `🚫 Blocked` — waiting on decision / design / recording

---

## Phase 4: Writing Process

### 4a. UI Copy (Screen by Screen)

Work through each screen in the UX flow document:

1. **Identify every text element** on the screen (heading, body, button, label, placeholder, error)
2. **Write a first draft** for each — focus on clarity over cleverness
3. **Review against voice/tone** from the style guide
4. **Check character limits** against the content inventory table
5. **Mark as `📝 Draft`** and request review

### 4b. Long-Form Content (Tutorials, Stories, Educational)

```
Step 1: Outline
  → Identify the learning objective or narrative goal
  → Break into sections (max 5-7 per piece)
  → Get outline approved before writing prose

Step 2: First Draft
  → Write at or below the target reading level
  → Include all required elements (headers, callouts, images)
  → Flag any placeholder images or audio cues: [IMAGE: happy character]

Step 3: Self-Review
  → Read aloud — does it sound natural?
  → Check complexity via readability tools (aim for Flesch-Kincaid ≤ 70 for adults, ≤ 80 for children)
  → Verify all facts and claims

Step 4: Submit for Review
  → Share via the review workflow (templates/review-workflow.md)
  → Mark as "In Review" in content inventory
```

### 4c. App Store Copy

App store copy requires special care — it is sales copy, not UI copy:

```
Title (30 chars):    Short, memorable, keyword-rich
Subtitle (30 chars): Single benefit, different from title
Short description:   Answer "what does this app do?" in 1-2 sentences
Full description:    
  - Paragraph 1: Hook — biggest benefit
  - Paragraph 2-3: Top 3-5 features (bullets)
  - Paragraph 4: Who it's for
  - Paragraph 5: Social proof / call to action
Keywords:           Words NOT in the title/subtitle; no plurals; use all 100 chars
```

---

## Phase 5: Handoff to Developer

When content is approved and marked `✅ Final`:

### Handoff Checklist

```
[ ] All items in content inventory are marked ✅ Final (or ✈️ Localization-pending)
[ ] Content delivered in agreed format (CSV / Sheet / Markdown / JSON)
[ ] Character limits verified for every UI string
[ ] Placeholder values documented ({username}, {score}, {date})
[ ] Dynamic content documented (how lists/feeds are populated)
[ ] Error states covered — every error condition has copy
[ ] Empty states covered — every zero-state has copy
[ ] App store metadata delivered as separate doc
```

### Developer Handoff Format (Markdown)

```markdown
## UI Strings — Handoff

### Screen: Onboarding Step 1

**heading:** "Welcome to [App Name]!"
**body:** "Your learning journey starts here. Let's go!"
**cta_button:** "Get Started"
**skip_link:** "Skip for now"

---

### Screen: Home — Empty State

**heading:** "Nothing here yet!"
**body:** "Start by adding your first item."
**cta_button:** "Add Your First Item"

---
[Continue for each screen...]
```

---

## Tier Adjustments

| Aspect | Lite | Standard | Enterprise |
|---|---|---|---|
| Copy scope | UI copy only (stub is fine) | UI + app store + onboarding | Full copy library |
| Tone guide | Skip | One-paragraph reference | Full voice/tone guide |
| Content inventory | Not needed | Recommended | Required |
| Review process | Self-review | 1 reviewer + developer | Multi-stage formal |
| Localization | Not applicable | Plan for it | Required from day 1 |
| Reading level check | Not needed | Recommended | Required |
