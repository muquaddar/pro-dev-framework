# Content Creation Kit

> **Version:** PDF v1.0.0 | **Kit:** Content Creation | **Stage:** Parallel with Stages 3–5

---

## Purpose

The Content Creation Kit provides workflows, templates, and checklists for **everyone who isn't a developer** — the writers, illustrators, voice actors, and legal reviewers whose work must be completed in parallel with the code being built.

Most AI-driven development frameworks forget that software requires more than code. A mobile app for children needs:
- Carefully written, age-appropriate copy
- Illustrated characters, icons, and backgrounds
- Professionally recorded voice-overs
- Privacy policies reviewed by a lawyer
- Accessibility checks before store submission

This kit gives each of those roles a structured workflow, so **content and code can be developed in parallel** without blocking each other.

---

## Who Should Use This Kit

| Role | Main File | What They Get |
|---|---|---|
| **Content Writer** | `guides/content-writer.md` | Writing workflow, tone guide, editorial calendar |
| **Illustrator / Graphic Designer** | `guides/illustrator.md` | Art direction brief, spec format, handoff checklist |
| **Voice Actor / Audio Producer** | `guides/voice-actor.md` | Script format, recording specs, session checklist |
| **Legal / Compliance Reviewer** | `guides/legal-compliance.md` | COPPA, GDPR, accessibility, store policy checklist |
| **Project Manager / Developer** | `templates/content-pipeline.md` | Cross-stream dependency tracker |

---

## Kit Structure

```
content-creation-kit/
│
├── README.md                       ← You are here
│
├── guides/                         ← Role-specific deep guides
│   ├── content-writer.md           — Writing workflows, tone, editorial process
│   ├── illustrator.md              — Art direction, asset specs, review process
│   ├── voice-actor.md              — Recording specs, script format, quality checks
│   └── legal-compliance.md         — COPPA, GDPR-K, accessibility, store policies
│
├── templates/                      ← Fill-in-the-blank deliverable templates
│   ├── content-pipeline.md         — Master content workflow tracker
│   ├── asset-pipeline.md           — Art/audio/video asset tracker
│   ├── style-guide.md              — Visual and written style reference
│   └── review-workflow.md          — Content review and approval process
│
└── checklists/                     ← Quality gates for content
    ├── content-review.md           — Writing quality and accuracy checklist
    ├── asset-review.md             — Art/audio quality and spec compliance checklist
    └── compliance-review.md        — Legal, accessibility, and store policy checklist
```

---

## How It Integrates with the Build Cycle

The Content Creation Kit runs **in parallel** with the Building Kit (Stages 3–5). It is not a sequential phase — it is a set of parallel work streams that must be coordinated with the code milestones.

```
CODE STREAM (Building Kit)
  M1 (Scaffold) → M2 (Core Features) → M3 (Content Integration) → M4 (Polish)
                                               ↑
                               Depends on: C2 complete (content ready)

CONTENT STREAM (Content Creation Kit)
  C1 (Style Guide) → C2 (Core Content Written) → C3 (Review + QA) → C4 (Final Clear)

ASSET STREAM (Content Creation Kit)
  A1 (Art Direction) → A2 (Illustration) → A3 (Voice Recording) → A4 (QA + Handoff)

LEGAL STREAM (Content Creation Kit)
  L1 (Privacy Policy Draft) → L2 (COPPA/GDPR Review) → L3 (Final Approval)
```

**Cross-Stream Dependencies:**
- Code M3 (content integration) → depends on → Content C2 (all text approved)
- Code M4 (audio playback) → depends on → Asset A3 (recordings delivered)
- Code launch → depends on → Legal L3 (compliance cleared)

These dependencies are tracked in `templates/content-pipeline.md` and logged in the project's `AGENT.md` work streams section.

---

## When to Start Each Work Stream

| Work Stream | Start When | Latest Deadline |
|---|---|---|
| **Style Guide** | After Phase 4 (UI Design) confirmed | Before M1 Scaffold |
| **Content Writing** | After Phase 3 (UX flows) confirmed | Before M3 starts |
| **Illustration** | After Style Guide approved | Before M3 starts |
| **Voice Recording** | After content text approved | Before M4 starts |
| **Legal Review** | As soon as privacy approach decided | Before Gate 5 |
| **Accessibility Check** | In parallel with M4 polish | Before Gate 5 |

---

## Tier Guidelines

| Task | Lite | Standard | Enterprise |
|---|---|---|---|
| **Content Creation Kit** | Skip (stub copy is fine) | Recommended | Required |
| **Style Guide** | Not needed | One-pager recommended | Comprehensive required |
| **Legal compliance** | Basic T&C link | Full GDPR/COPPA review | Full + legal sign-off |
| **Art direction brief** | Not needed | Required if hiring illustrator | Required + brand guide |
| **Voice recording** | TTS is acceptable | Professional recommended | Professional required |
| **Review workflow** | Informal | Structured approval | Multi-stakeholder formal |

---

## Quick Start

1. **If you have a content team:** Hand each role their guide from `guides/`. Have them fill in their section of `templates/style-guide.md` before starting work.

2. **If you're a solo developer doing content too:** Start with `templates/style-guide.md` to lock down your visual and written style. Then use the checklists before submitting to an app store.

3. **For compliance:** Use `guides/legal-compliance.md` and `checklists/compliance-review.md` regardless of team size. Missing compliance can cause app store rejection or legal liability.

4. **For tracking:** Copy `templates/content-pipeline.md` into your project's `docs/` folder. Update it at the start of each work week.

---

## Output Files to Copy Into `docs/`

When using this kit for a project, copy these into the project's `docs/` folder:

```
docs/
├── content-pipeline.md      ← Master tracker (from templates/)
├── asset-pipeline.md        ← Asset tracker (from templates/)
├── style-guide.md           ← Style reference (from templates/)
└── review-workflow.md       ← Review process (from templates/)
```

---

> **Next step:** Read your role-specific guide in `guides/`, then start with the `templates/style-guide.md` to align everyone before content work begins.
