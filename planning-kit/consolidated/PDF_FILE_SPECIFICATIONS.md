# PDF v1.0.0 — Detailed File Specifications (44-File Protocol)

This document contains the exact section headings, content requirements, and metadata rules for all 44 deliverables in the Pro Dev Framework.

---

## Universal Frontmatter Rules

Every `.md` file begins with this YAML block structure:

```yaml
---
pdf_version: "1.0.0"
project_id: "[project-slug]"
project_name: "[Project Name]"
kit: "planning"
phase: [0-7]
phase_name: "[Phase Name]"
status: "confirmed"
tier: "[lite|standard|enterprise]"
created_at: "YYYY-MM-DD"
confirmed_at: "YYYY-MM-DD"
confirmed_by: "human"
---
```

**Rules:**
- `pdf_version` is always `"1.0.0"`
- `project_id` is lowercase kebab-case, inherited from `p_04_project-config.md`
- `phase` = phase number (1–7) or 0 for pre-phase files
- `status` = `"confirmed"` for all completed files; `"n-a"` for tier-skipped files
- `tier` = `"lite"`, `"standard"`, or `"enterprise"` (inherited from p_04)
- Dates are ISO 8601 format (YYYY-MM-DD)

---

## File-by-File Generation Standards

#### **File 1: p_01_feasibility-assessment.md**
- **Frontmatter:** phase: 0, phase_name: "Pre-Discovery"
- **H1:** `# Feasibility Assessment — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Idea Summary
  - ## 2. Market Feasibility
  - ## 3. Technical Feasibility
  - ## 4. Resource Requirements
  - ## 5. Go / No-Go Recommendation

#### **File 2: p_02_competitive-matrix.md**
- **Frontmatter:** phase: 0, phase_name: "Pre-Discovery"
- **H1:** `# Competitive Matrix — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Competitor Overview
  - ## 2. Feature Comparison
  - ## 3. Pricing & Positioning
  - ## 4. Market Gap

#### **File 3: p_03_idea-validation-brief.md**
- **Frontmatter:** phase: 0, phase_name: "Pre-Discovery"
- **H1:** `# Idea Validation Brief — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Validated Hypothesis
  - ## 2. Key Assumptions
  - ## 3. Invalidation Risks
  - ## 4. Success Criteria

#### **File 4: p_04_project-config.md**
- **Frontmatter:** phase: 0, phase_name: "Setup"
- **H1:** `# Project Configuration — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Tier Declaration
  - ## 2. Tech Stack Preferences
  - ## 3. Target Platforms
  - ## 4. Team & Tools

#### **File 5: p_05_stakeholder-map.md**
- **Frontmatter:** phase: 1, phase_name: "Discovery"
- **H1:** `# Stakeholder Map — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Stakeholders Identified
  - ## 2. Roles & Responsibilities
  - ## 3. Influence & Interest Matrix

#### **File 6: p_06_<role>.md (Dynamic — One Per Stakeholder)**
- **Filename:** `docs/p_06_[stakeholder-role].md`
- **Required Sections:**
  - ## 1. Role Overview
  - ## 2. Responsibilities
  - ## 3. Decision Authority
  - ## 4. Key Concerns & Constraints
  - ## 5. Success Criteria for This Role

#### **File 7: p_07_work-streams.md**
- **Frontmatter:** phase: 1, phase_name: "Discovery"
- **H1:** `# Work Streams — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Work Stream Definitions
  - ## 2. Owners & Contributors
  - ## 3. Timeline Overview

#### **File 8: p_08_cross-stream-deps.md**
- **Frontmatter:** phase: 1, phase_name: "Discovery"
- **H1:** `# Cross-Stream Dependencies — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Dependency Map
  - ## 2. Blocking Dependencies
  - ## 3. Risk Mitigation

#### **File 9: p_09_platform-research.md**
- **Frontmatter:** phase: 1, phase_name: "Discovery"
- **H1:** `# Platform Research — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Market Landscape
  - ## 2. Competitor Analysis
  - ## 3. Technical Platform Options
  - ## 4. Recommendations

#### **File 10: p_10_requirements.md**
- **Frontmatter:** phase: 1, phase_name: "Discovery"
- **H1:** `# Requirements & Scope — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Project Background
  - ## 2. Core Constraints
  - ## 3. Scope Definition (Milestone 1)
  - ## 4. User Personas
  - ## 5. Success Metrics

#### **File 11: p_11_strategy.md**
- **Frontmatter:** phase: 2, phase_name: "Strategy"
- **H1:** `# Technical Strategy — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Stack Selection
  - ## 2. Milestone Roadmap
  - ## 3. Risk Register

#### **File 12: p_12_milestone-plan.md**
- **Frontmatter:** phase: 2, phase_name: "Strategy"
- **H1:** `# Milestone Plan — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. M1 — Walking Skeleton
  - ## 2. M2 — Core Data
  - ## 3. M3 — Core Feature
  - ## 4. M4+ — Polish & Launch

#### **File 13: p_13_ux-flows.md**
- **Frontmatter:** phase: 3, phase_name: "UX"
- **H1:** `# User Experience Flows — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Information Architecture
  - ## 2. Core User Journey Steps
  - ## 3. Key Screen Requirements

#### **File 14-17 (UX Diagrams & Prototype)**
- **p_14_navigation-flow.html**
- **p_15_user-journey.html**
- **p_16_state-diagram.html**
- **p_17_prototype.html**

#### **File 18: p_18_ui-design-brief.md**
- **Frontmatter:** phase: 4, phase_name: "UI Design"
- **H1:** `# UI Design Brief & Tokens — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Visual Direction
  - ## 2. Design Tokens
  - ## 3. UI Component Roster

#### **File 19: p_19_prototype-styled.html** (Styled Prototype)

#### **File 20: p_20_architecture.md**
- **Frontmatter:** phase: 5, phase_name: "Architecture"
- **H1:** `# Architecture — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. System Architecture
  - ## 2. Data Model
  - ## 3. Project Structure
  - ## 4. Walking Skeleton Link

#### **File 21-22 (Architecture Diagrams)**
- **p_21_architecture.html**
- **p_22_data-model.html**

#### **File 23: p_23_walking-skeleton-spec.md**
- **Frontmatter:** phase: 5, phase_name: "Architecture"
- **H1:** `# Walking Skeleton Specification — [PROJECT_NAME]`
- **Required Sections:**
  - ## 1. Scope
  - ## 2. Architecture Pattern
  - ## 3. Endpoint Map
  - ## 4. Database Schema
  - ## 5. Done-When Criteria

#### **File 24: p_24_privacy-strategy.md**
- **Required Sections:**
  - ## 1. Data Collected
  - ## 2. Data Storage Strategy
  - ## 3. Regulatory Standing
  - ## 4. User Rights Handling

#### **File 25: p_25_security-model.md**
- **Required Sections:**
  - ## 1. Threat Model
  - ## 2. Authentication & Authorisation
  - ## 3. Data-in-Transit & At-Rest
  - ## 4. Incident Response

#### **File 26: p_26_accessibility-constraints.md**
- **Required Sections:**
  - ## 1. WCAG Target Level
  - ## 2. Colour Contrast Rules
  - ## 3. Touch Target Sizes
  - ## 4. Device Scaling

#### **File 27: p_27_compliance.md** (Compliance Synthesis)
- **Required Sections:**
  - ## 1. Data Privacy
  - ## 2. Security Architecture
  - ## 3. Accessibility
  - ## 4. Final Implementation Checklist

#### **File 28: p_28_security-flow.html** (Security Flow Diagram)

#### **File 29: p_29_prd.md** (Full PRD)
- **Required Sections:**
  - ## 1. Executive Summary
  - ## 2. Problem & Opportunity
  - ## 3. Target Users
  - ## 4. Scope & Features (Milestone 1)
  - ## 5. Technical Strategy
  - ## 6. User Experience
  - ## 7. Visual Design
  - ## 8. Security & Compliance
  - ## 9. Milestone Roadmap
  - ## 10. Success Metrics
  - ## 11. Risks & Mitigations
  - ## 12. Approval

#### **File 30: p_30_pdf-manifest.json** (Project Manifest)
#### **File 31: p_31_index.md** (Project Index)
#### **File 32: p_32_AGENT.md** (Agent Specification)

---

## Stage 3: Launch & Scale (Files 33-44)

#### Phase 8: Testing & QA
- **p_33_testing-strategy.md**: ## 1. Test Pyramid, ## 2. Coverage Targets
- **p_34_qa-plan.md**
- **p_35_monitoring-checklist.md**

#### Phase 9: Launch & GTM
- **p_36_gtm-timeline.md**: ## 1. Pre-Launch, ## 2. Launch Day
- **p_37_launch-day-plan.md**
- **p_38_growth-contingency.md**

#### Phase 10: Operations & Team
- **p_39_org-hiring-plan.md**: ## 1. Current Structure, ## 2. Hiring Roadmap
- **p_40_comm-plan.md**
- **p_41_decision-framework.md**

#### Phase 11: Iteration & Feedback
- **p_42_feedback-loops.md**: ## 1. Feedback Channels, ## 2. Review Cadence
- **p_43_metrics-dashboard.md**
- **p_44_version-roadmap.md**
