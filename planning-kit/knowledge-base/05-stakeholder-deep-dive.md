# Stakeholder Deep Dive — Template & Methodology

> **Version:** PDF v1.0.0 | **Kit:** Planning Kit
> **Used by:** Cloud AI facilitator during Stage 1, Step 3
> **Frequency:** One deep dive per stakeholder, one at a time

---

## Purpose

This file teaches the AI facilitator how to conduct a single stakeholder deep dive. It is loaded when the facilitator begins Step 3 of Stage 1 (after identification and prioritization are complete).

**Key principle:** Each stakeholder is explored in its own conversation turn. Never combine two stakeholders in one session.

---

## Deep Dive Process

### Opening

Start each deep dive with context and framing:

```
"Let's deep dive into the [ROLE] stakeholder. 

I'll explore 7 dimensions to make sure we understand everything 
this role needs and everything the project needs from them.

Feel free to say 'skip' or 'not sure yet' for any question — 
we can come back to it later.

Let's begin."
```

### The 7 Dimensions

Explore each dimension in order. Adapt questions to the specific stakeholder role.

---

#### Dimension 1: Role Definition

**Goal:** Understand exactly who this is and how they relate to the project.

```
Questions:
- Who fills this role? (You, a contractor, a team member, a persona?)
- Is this a single person or a group?
- How much time can they dedicate to the project?
- What is their expertise level in this domain?
- Have they worked on similar projects before?
```

**Output:**
```markdown
## Who
- **Role:** [Role name]
- **Filled by:** [Person/team/contractor/self/persona]
- **Availability:** [Hours per week / as-needed / full-time]
- **Expertise:** [Novice / Intermediate / Expert]
- **Priority:** [MUST / SHOULD / COULD]
```

---

#### Dimension 2: Needs FROM the Project

**Goal:** What does this stakeholder need the project to give them so they can do their job?

```
Questions:
- What information do they need to get started?
- What tools or access do they need?
- What format should things be delivered to them in?
- What decisions need to be made before they can begin?
- Do they need examples, templates, or reference material?
```

**Examples by role type:**

| Role | Typical Needs |
|---|---|
| Content Writer | Style guide, word list structure, content templates, approved vocabulary |
| Illustrator | Art brief, color palette, size specifications, character descriptions |
| Voice Actor | Script, pronunciation guide, tone direction, recording specs |
| Legal/Compliance | Architecture doc, data flow diagram, privacy details, target markets |
| Marketing | Screenshots, feature list, target audience profile, launch timeline |
| Beta Tester | Build access, feedback form, known issues list, test scenarios |

**Output:**
```markdown
## Needs FROM Project
- [Need 1 with specifics]
- [Need 2 with specifics]
- [Need 3 with specifics]
```

---

#### Dimension 3: Needs FROM This Stakeholder

**Goal:** What concrete deliverables does the project need from this role?

```
Questions:
- What exact outputs does this role produce?
- In what format? (Files, documents, assets, reviews)
- What quantity? (10 illustrations, 200 words, 1 audit report)
- What quality standard? (Draft / reviewed / final)
- Any specific naming conventions or file structures?
```

**Output:**
```markdown
## Needs FROM This Stakeholder
- [Deliverable 1]: [quantity] in [format], [quality level]
- [Deliverable 2]: [quantity] in [format], [quality level]
- [Deliverable 3]: [quantity] in [format], [quality level]
```

---

#### Dimension 4: Timeline & Dependencies

**Goal:** When does each deliverable need to be ready, and what does it depend on?

```
Questions:
- When is the earliest this work can start?
- What needs to happen before they can begin? (Blocker awareness)
- When does the CODE stream need their deliverables?
- Are there intermediate checkpoints? (Draft → Review → Final)
- What's the lead time? (How long between "go" and "delivered"?)
```

**Output:**
```markdown
## Deliverables & Timeline

| Deliverable | Format | Deadline | Depends On | Lead Time |
|---|---|---|---|---|
| [Item 1] | [Format] | [Before Code M?] | [Dependency] | [N days/weeks] |
| [Item 2] | [Format] | [Before Code M?] | [Dependency] | [N days/weeks] |
| [Item 3] | [Format] | [After event] | [Dependency] | [N days/weeks] |
```

---

#### Dimension 5: Tools & Communication

**Goal:** How will this stakeholder work and communicate?

```
Questions:
- What tools do they use? (Figma, Google Docs, Pro Tools, etc.)
- Where will they deliver finished work? (Git repo, shared folder, email?)
- How do you communicate? (Slack, email, meetings, async?)
- How often should you check in? (Daily, weekly, per-milestone?)
- Do they need access to the code repo? (Read-only? Specific folders?)
```

**Output:**
```markdown
## Tools & Communication
- **Primary tool:** [e.g., Figma for design, Google Docs for writing]
- **Delivery method:** [e.g., Push to assets/ branch, upload to shared folder]
- **Communication:** [e.g., Weekly email check-in, Slack channel]
- **Check-in frequency:** [e.g., After each deliverable batch]
- **Repo access:** [e.g., Read-only on main, write on content/ branch]
```

---

#### Dimension 6: Risks & What If

**Goal:** What happens if this role is neglected, delayed, or done poorly?

```
Questions:
- What's the worst-case scenario if this role is ignored?
- What happens if their deliverables are late?
- What's the quality risk? What does "bad" look like?
- Is there a backup plan? (Can you do it yourself? Use AI? Skip?)
- How will you know if their work is good enough? (Quality criteria)
```

**Output:**
```markdown
## Risks If Neglected
- [Risk 1: consequence]
- [Risk 2: consequence]
- [Risk 3: consequence]

## Quality Criteria
- [How to tell if the work is "good enough"]
- [Specific acceptance criteria]

## Backup Plan
- [What to do if this role can't deliver]
```

---

#### Dimension 7: Integration Points

**Goal:** How does this stakeholder's work connect to the codebase?

```
Questions:
- Where in the codebase does their output plug in?
- What data format does the code expect? (JSON, CSV, PNG @2x, MP3?)
- Will their content change frequently or is it fixed at launch?
- Do content changes require a code rebuild, or hot-swap via config?
- Are there naming conventions the code expects?
- Does the data model need to accommodate their output structure?
```

**Output:**
```markdown
## Integration Points
- **Code location:** [e.g., assets/content/, lib/data/]
- **Expected format:** [e.g., JSON matching ContentModel schema]
- **Change frequency:** [e.g., Fixed at launch / Updated monthly]
- **Update mechanism:** [e.g., Rebuild required / Remote config]
- **Naming convention:** [e.g., snake_case, category_item_variant.png]
```

---

## Closing the Deep Dive

After all 7 dimensions, wrap up:

```
"That covers all 7 dimensions for [ROLE]. Here's the summary:

[Display completed deep dive brief]

✅ Please save this as: docs/stakeholders/[role-name].md

[Update and display progress tracker]

Ready for the next stakeholder? Next up: [NEXT ROLE]."
```

---

## Complete Output Template

The final deep dive output combines all 7 dimensions:

```markdown
# Stakeholder Deep Dive: [ROLE NAME]

<!-- Deep dive completed: YYYY-MM-DD | Session: [N] -->

## Who
- **Role:** [Role name]
- **Filled by:** [Person/team/contractor/self]
- **Availability:** [Hours/week]
- **Expertise:** [Level]
- **Priority:** [MUST/SHOULD/COULD]

## Needs FROM Project
- [Need 1]
- [Need 2]

## Needs FROM This Stakeholder
- [Deliverable 1]: [quantity] in [format]
- [Deliverable 2]: [quantity] in [format]

## Deliverables & Timeline
| Deliverable | Format | Deadline | Depends On | Lead Time |
|---|---|---|---|---|
| [Item] | [Format] | [Deadline] | [Dep] | [Time] |

## Tools & Communication
- **Primary tool:** [Tool]
- **Delivery method:** [Method]
- **Communication:** [Channel]
- **Check-in frequency:** [Frequency]

## Risks If Neglected
- [Risk 1]
- [Risk 2]

## Quality Criteria
- [Criterion 1]
- [Criterion 2]

## Integration Points
- **Code location:** [Path]
- **Expected format:** [Format]
- **Update mechanism:** [Mechanism]

## Open Questions
- [Any unresolved questions from this deep dive]
```

**Save as:** `docs/stakeholders/[role-name-lowercase-hyphenated].md`
