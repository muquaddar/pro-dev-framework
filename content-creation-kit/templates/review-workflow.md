# Review Workflow — Content Approval Process

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Type:** Template
>
> **Instructions:** Copy this file to your project's `docs/` folder. Define who reviews what, and use the Change Request log to track post-freeze changes.

---

## Project: [Project Name]

```
PM / Owner:   [Name]
Last updated:  [YYYY-MM-DD]
Review Lead:  [Name — person who has final approval authority]
```

---

## Review Principles

1. **One round per deliverable** — collect all feedback in one pass before the creator revises. No drip feedback.
2. **Explicit approval** — "Approved ✅" must be said in writing. Silence is not approval.
3. **72-hour turnaround** — reviewers must respond within 72 hours of receiving a review request.
4. **Business decision, not preference** — if a change is purely subjective (not functional, not brand, not compliance), the creator's judgment stands.
5. **Post-freeze changes require a Change Request** — see the Change Request process below.

---

## Review Matrix

Who reviews what, and who has final approval authority.

| Content Type | Creator | Must Review | Can Review | Final Approval |
|---|---|---|---|---|
| UI Copy (all screens) | Content Writer | Developer, PM | Product Owner | PM |
| Long-form / Educational Content | Content Writer | PM | Subject Expert | PM |
| App Store Copy | Content Writer | Developer, PM | Marketing Lead | PM |
| Character Illustrations | Illustrator | Art Director, PM | Developer | Art Director |
| Background Art | Illustrator | Art Director, PM | Developer | Art Director |
| App Icons | Illustrator | PM | Developer | PM |
| Marketing Assets | Designer | PM | Marketing Lead | PM |
| Narration Script | Content Writer | Voice Actor, PM | Developer | PM |
| Voice Recordings | Voice Actor | Audio Producer | PM | Audio Producer |
| Sound Effects | Audio Producer | Developer | PM | PM |
| Privacy Policy | Legal | PM, Developer | Product Owner | PM + Legal |
| Terms & Conditions | Legal | PM | Developer | PM + Legal |
| Compliance Checklist | Legal/QA | PM | Developer | PM |

---

## Review Workflow

### Step 1: Creator Submits

```
Creator Action:
  1. Complete the deliverable in full (no half-done submissions)
  2. Self-review against the relevant checklist (checklists/ folder)
  3. Share via the agreed channel (Slack / Email / Shared Doc / Figma comment)
  4. Tag all "Must Review" parties in the notification
  5. Set deadline: "Please respond by [Date — 72 hrs from now]"
  6. Update content-pipeline.md status to "👀 In Review"

Include in submission:
  [ ] Asset / document link
  [ ] Brief context: what was done + any decisions made
  [ ] Specific questions (if any — do NOT ask open-ended "what do you think?")
  [ ] Deadline for response
```

### Step 2: Reviewers Respond

```
Reviewer Commitment:
  1. Review within 72 hours (or notify creator that more time is needed)
  2. Consolidate all feedback into ONE response (not multiple rounds of trickle comments)
  3. Distinguish between: REQUIRED change vs. SUGGESTED/NICE-TO-HAVE
  4. Provide specific feedback: "Line UI-003 — change 'Submit' to 'Save Progress'"
     NOT: "The copy feels off"

Feedback types:
  [REQUIRED] — Must be changed. Blocks approval.
  [SUGGESTED] — Creator's discretion. Does not block approval.
  [QUESTION]  — Needs clarification before approval.
  [APPROVE]   — No changes needed for this item.
```

### Step 3: Creator Revises (if needed)

```
Creator Action:
  1. Address all [REQUIRED] items
  2. Consider all [SUGGESTED] items — accept or push back with rationale
  3. Answer all [QUESTION] items
  4. Resubmit for final confirmation with a summary: "Changes made: [list]. [SUGGESTED] items [accepted/declined with reason]."
  5. Do NOT start a new review round — this is a final confirmation pass, not a new round of feedback
```

### Step 4: Final Approval

```
Reviewer (Final Approval authority):
  1. Confirm all [REQUIRED] items have been addressed
  2. Provide explicit approval: "Approved ✅ — [Name] — [Date]"
  3. If not approved: initiate a 15-min sync to resolve remaining blockers (do NOT do a 3rd review round)

Creator:
  1. Update content-pipeline.md status to "✅ Final"
  2. If ready for handoff: notify developer and update handoff log
```

---

## Escalation Rules

If a revision cycle exceeds **2 full rounds** without approval:

```
Escalation Process:
  1. Creator and reviewer meet for max 30 min to resolve disagreements
  2. PM/Project Lead makes the final decision
  3. Decision is logged in the Change Log below
  4. No more rounds — the decision stands
```

---

## Post-Freeze Change Request Process

After the **Content Freeze Date** (see content-pipeline.md), any change to approved content requires a Change Request.

### Change Request Form

```
CHANGE REQUEST — CR-[###]

Date:          [YYYY-MM-DD]
Requested by:  [Name]
Priority:      🔴 Critical (launch blocker) / 🟡 Important / 🟢 Minor

WHAT to change:
  Asset/ID affected:   [e.g., UI-003, AU-01, IC-01]
  Current version:     [Current approved text/file]
  Requested version:   [New text/file]

WHY this change is needed:
  [Reason — bug? Compliance issue? Legal requirement? Business decision?]

IMPACT:
  [ ] Requires re-recording (audio affected)
  [ ] Requires re-illustration (art affected)
  [ ] Requires re-coding (developer effort > 30 min)
  [ ] No downstream impact (text/copy only)
  [ ] Delays launch: Yes / No / Unknown

APPROVAL:
  Approved by: [Name]       Date: [YYYY-MM-DD]
  Developer ack: [Name]     Date: [YYYY-MM-DD]
```

### Change Request Log

| CR# | Date | Item Changed | Requested By | Reason | Approved | Launched |
|-----|------|--------------|--------------|--------|----------|----------|
| CR-001 | [Date] | [Asset ID] | [Name] | [Brief reason] | ✅ [Date] | ⬜ |
| CR-002 | [Date] | [Asset ID] | [Name] | [Brief reason] | ✅ [Date] | ⬜ |

---

## Handoff Log

When content is approved and handed to the developer, log it here:

| Date | Content / Assets | Format | Handed to | Confirmed Received | Notes |
|------|-----------------|--------|-----------|-------------------|-------|
| [Date] | UI copy (all screens) | Markdown doc | [Dev Name] | ✅ [Date] | |
| [Date] | Character illustrations batch 1 | PNG zip | [Dev Name] | ✅ [Date] | |
| [Date] | Narration audio | MP3 zip | [Dev Name] | ✅ [Date] | |

---

## Communication Channels

```
Content review requests:  [Specify: Slack #content / Email / Google Doc comments]
Asset delivery:           [Specify: Shared drive / Figma / WeTransfer]
Urgent issues:            [Specify: Slack DM / WhatsApp / Phone]
Change requests:          [Specify: Slack #content-changes / Email]
```
