# Content Review Checklist

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Type:** Checklist
>
> **Instructions:** Use this checklist before submitting any written content for review. The creator self-reviews first. The reviewer uses the same checklist to validate.

---

## How to Use

1. **Creator:** Complete this checklist before submitting for review. Fix any failures before submission.
2. **Reviewer:** Use this as your review framework. Note which items pass/fail.
3. **Grade:** All items marked [REQUIRED] must pass. [RECOMMENDED] items are best-practice.

---

## Part 1: General Quality

### 1.1 Accuracy & Completeness

```
[REQUIRED]  [ ] All content is factually accurate and verified
[REQUIRED]  [ ] No placeholder text, lorem ipsum, or [TBD] remaining
[REQUIRED]  [ ] All dynamic content ({{name}}, {{score}}) properly marked
[REQUIRED]  [ ] All screens/states in scope are covered (no missing screens)
[REQUIRED]  [ ] All error states have copy (not just happy path)
[REQUIRED]  [ ] All empty states have copy
[REQUIRED]  [ ] All destructive actions have confirmation copy
[REQUIRED]  [ ] App name spelled exactly per style guide every time
```

### 1.2 Clarity & Comprehension

```
[REQUIRED]  [ ] Each piece of copy has ONE clear meaning — no ambiguity
[REQUIRED]  [ ] No jargon without explanation
[REQUIRED]  [ ] No acronyms without prior introduction
[REQUIRED]  [ ] Instructions are actionable — user knows exactly what to do
[REQUIRED]  [ ] Error messages explain what went wrong AND what to do
[RECOMMENDED] [ ] Copy passes readability check (Hemingway App Grade [X] or below)
[RECOMMENDED] [ ] Copy can be understood by a non-native speaker of the language
```

### 1.3 Conciseness

```
[REQUIRED]  [ ] UI copy is within character limits (see content inventory)
[REQUIRED]  [ ] Headings are 6 words or fewer
[REQUIRED]  [ ] Body copy on any single screen is 30 words or fewer (unless long-form content)
[RECOMMENDED] [ ] Button labels are 2-4 words
[RECOMMENDED] [ ] No filler words ("just", "simply", "basically", "you can")
[RECOMMENDED] [ ] The first word of every button is a verb
```

---

## Part 2: Voice & Tone Compliance

### 2.1 Brand Voice

```
[REQUIRED]  [ ] Voice matches the brand tone defined in style-guide.md
[REQUIRED]  [ ] Tone is appropriate to the context (celebration ≠ error state ≠ onboarding)
[REQUIRED]  [ ] No prohibited words or phrases (see style guide "Words We Never Use")
[REQUIRED]  [ ] App name and brand terms match glossary exactly
[RECOMMENDED] [ ] Copy sounds human — read it aloud. Does it feel natural?
[RECOMMENDED] [ ] No corporate-speak ("leverage", "utilize", "synergy", "robust")
```

### 2.2 Audience Appropriateness

```
[REQUIRED]  [ ] Reading level matches target audience age from Phase 1 brief
[REQUIRED]  [ ] No age-inappropriate content for the target user
[REQUIRED]  [ ] For children's content: COPPA-safe language (no collection solicitation)
[REQUIRED]  [ ] For children's content: No advertising language or commercial messaging
[RECOMMENDED] [ ] Inclusive language — no gendered assumptions, no exclusionary phrases
```

---

## Part 3: Consistency

### 3.1 Terminology

```
[REQUIRED]  [ ] All UI terms used consistently throughout (no switching "tap" / "press" / "click")
[REQUIRED]  [ ] Feature names match their canonical names from the glossary
[REQUIRED]  [ ] Capitalization is consistent — Title Case for labels, Sentence case for body
[REQUIRED]  [ ] Punctuation is consistent — no screens end in period except full sentences
[REQUIRED]  [ ] Tone is consistent — no sudden shift from playful to formal mid-screen
```

### 3.2 Structure

```
[REQUIRED]  [ ] Onboarding screens follow consistent structure (heading + body + CTA format)
[REQUIRED]  [ ] Error messages follow consistent format (what happened / why / what to do)
[REQUIRED]  [ ] Empty states follow consistent format (why empty + action CTA)
[RECOMMENDED] [ ] Button labels are consistent across similar actions ("Next" not sometimes "Continue")
[RECOMMENDED] [ ] All confirmation dialogs use consistent title/body/cancel/confirm pattern
```

---

## Part 4: Technical Compliance

### 4.1 Format & Integration

```
[REQUIRED]  [ ] All copy delivered in agreed handoff format (CSV / Sheet / Markdown / JSON)
[REQUIRED]  [ ] Dynamic variables use consistent format: {{variable}} or [VARIABLE]
[REQUIRED]  [ ] Special characters properly escaped (if applicable to target format)
[REQUIRED]  [ ] File naming convention matches agreed standard
[RECOMMENDED] [ ] Content IDs match content inventory IDs exactly (UI-001, UI-002, etc.)
```

### 4.2 Localization Readiness (if applicable)

```
[RECOMMENDED] [ ] No idioms or puns that don't translate
[RECOMMENDED] [ ] No text embedded in images (cannot be localized)
[RECOMMENDED] [ ] Dates, times, currencies use formatters — not hard-coded format
[RECOMMENDED] [ ] String IDs provided for all translatable strings
[RECOMMENDED] [ ] No gendered nouns in the source language that would cause issues
[RECOMMENDED] [ ] Right-to-left layout considered (if Arabic/Hebrew markets planned)
```

---

## Part 5: Accessibility

```
[REQUIRED]  [ ] All images that convey meaning have descriptive alt text (for web/HTML)
[REQUIRED]  [ ] Accessibility labels provided for all interactive elements
[REQUIRED]  [ ] No instruction relies on visual position alone ("tap the button on the right")
[RECOMMENDED] [ ] All audio content has a text transcript
[RECOMMENDED] [ ] On-screen text is not the only source of critical information
[RECOMMENDED] [ ] No reliance on color alone to convey meaning
```

---

## Part 6: Legal & Compliance Spot Check

> For full compliance review, use `checklists/compliance-review.md`. This section is a quick spot-check for copy reviewers.

```
[REQUIRED]  [ ] No false or misleading claims about the product's capabilities
[REQUIRED]  [ ] No health or medical claims (unless licensed and reviewed by legal)
[REQUIRED]  [ ] No language that promises specific results ("Guaranteed to improve your score!")
[REQUIRED]  [ ] No data collection or permission requests outside app stores / in copy
[REQUIRED]  [ ] Children's content: no external links, contact forms, or purchase prompts
[REQUIRED]  [ ] Privacy Policy and Terms links are referenced where required
[RECOMMENDED] [ ] No reference to competitor products by name
[RECOMMENDED] [ ] No claims that cannot be substantiated (awards, rankings, statistics)
```

---

## Review Sign-Off

```
Self-review (Creator):
  Reviewer:   [Name]
  Date:       [YYYY-MM-DD]
  Result:     All [REQUIRED] items passed
  Failures:   [List any items that failed + how they were resolved]

Formal review (Reviewer):
  Reviewer:   [Name]
  Date:       [YYYY-MM-DD]
  Decision:   ✅ Approved / 🔄 Revisions required

  Revisions required: [List specific [REQUIRED] failures]
  Optional suggestions: [List [RECOMMENDED] items if desired]

Final approval:
  Approver:   [Name]
  Date:       [YYYY-MM-DD]
  Status:     ✅ APPROVED — Content cleared for handoff
```
