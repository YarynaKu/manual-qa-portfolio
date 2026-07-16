# Test Approach
## OrangeHRM Application

| | |
|---|---|
| **Author** | Yaryna Kushniruk |
| **Application Under Test** | OrangeHRM Open Source Demo — https://opensource-demo.orangehrmlive.com |
| **Last updated** | July 2026 |

---

## 1. Purpose & scope

This document describes how I approach testing OrangeHRM in this project: what I test, how I prioritize it, what tools I use, and how manual and automated testing fit together. 

**In Scope (current and planned):**
- Authentication (login, logout, password reset)
- Admin — User Management (create user, role-based access)
- Leave (apply, approve, balance/overlap edge cases)
- PIM, Time, Recruitment, Performance, Dashboard — scoped for future cycles (see coverage table below)

**Out of Scope:**
- Load/performance testing
- Native mobile apps
- Third-party integration (not present in the public demo)

**Current coverage**
 
| Module | Status |
|---|---|
| Login / Authentication | Test cases + bug found |
| Logout | Test case |
| User Management (Admin) | Test cases (including negative/authorization cases) |
| Leave | Partial — apply/approve covered; entitlement & overlap edge cases added via AI-assisted design (see `ai-workflow-examples/`) plus blackout-period and overnight-shift cases (from OrangeHRM Help Center) written, execution pending |
| PIM, Time, Recruitment, Performance, Dashboard | Planned, not yet executed |
| API | Planned, not yet executed |

---

## 2. Test Approach by Type

### 2.1 Functional Testing
Test cases are derived from two sources: the application's observed behavior, and OrangeHRM's official Help Center (help.orangehrm.com), which documents intended behavior for each module (e.g. leave blackout periods, appraisal review flow). Using the Help Center as a requirements source lets me write test cases the same way I would from a real spec — expected behavior first, then verify against the actual app — rather than only reverse-engineering behavior from the UI.

**Caveat:** the Help Center covers OrangeHRM's full commercial product line, including paid add-ons (Onboarding Pro, Discipline Pro, Employee Voice, OKRs, audit trails) that aren't present in the free public demo. Before writing a test case from a Help Center article, I confirm the feature actually exists in `opensource-demo.orangehrmlive.com` — otherwise the test case would target something the AUT doesn't have, which isn't a real test. I use equivalence partitioning and boundary value analysis where they apply.

Test cases live in `Functional_TestSuite.xlsx` (source of truth for IDs and execution status) with readable per-module excerpts in `Test-Cases/OrangeHRM/`.

| Area | Focus |
|---|---|
| Authentication | Login, logout, forgot password, session timeout, role-based access |
| PIM | Add/Edit/Delete employee, custom fields, attachments, reports |
| Leave | Apply leave, approval workflows, leave balance calculations, overlapping leave rules |
| Time | Timesheet submission/approval, attendance punch in/out, project time tracking |
| Recruitment | Candidate creation, resume upload, pipeline stage transitions, interview scheduling |
| Performance | Review cycle creation, KPI assignment, self/supervisor evaluation |
| Admin | User role management, localization, configuration settings |

**Techniques:** Equivalence partitioning, boundary value analysis, decision tables (e.g., leave entitlement rules), state transition testing (recruitment pipeline stages, review cycle states).

### 2.2 UI Testing
Manual checks cover field validation, error messaging, and core interactive components (date pickers, dropdowns, modals). Cross-browser checking is currently a lightweight manual checklist (`checklist.xlsx`) rather than full automated visual regression.

### 2.3 Regression Testing
As the automated suite grows, it doubles as the regression check: anything automated in `automation/playwright/` runs on every push via GitHub Actions. Everything not yet automated is re-checked manually before I consider a module "done" for this project.

### 2.4 Exploratory Testing
I use short, time-boxed sessions (45–60 min) focused on one area at a time — e.g. "explore leave overlap and negative balance behavior" — and log notes and any bugs found directly as GitHub Issues or bug reports. AI is sometimes used to draft charter ideas up front (see `ai-workflow-examples/`), but the actual session, observations, and bug write-ups are mine.

### 2.5 API Testing
Planned next: a Postman collection covering Employee/Leave endpoint CRUD operations and status/schema checks, with Newman for repeatable runs. Not yet started — listed here as roadmap, not as done.

### 2.6 Accessibility testing
Not yet covered in this project. If added, I'd start with an automated axe-core/Lighthouse scan on Login and Dashboard rather than a full WCAG audit — realistic for the time available on a portfolio project.

---

## 3. Tools 

| Category | Tool(s) |
|---|---|
| Test Case Management | Excel (`Functional_TestSuite.xlsx`) |
| Automation | Playwright (JavaScript), Page Object Model |
| CI | GitHub Actions |
| Bug investigation | Chrome DevTools |
| Source control | GitHub |
| AI assistance | Claude/ChatGPT — drafting test case ideas and exploratory charters, always manually reviewed before being added to the suite (see `ai-workflow-examples/`) |

---

## 4. Risk-Based Prioritization

| Risk area | Why it matters | How I handle it |
|---|---|---|
| Auth (login/logout/password reset) | Blocks everything else if broken | Automated first; found and logged BUG-001-LOGIN here |
| Role-based access (Admin vs ESS) | Wrong access = security issue | Explicit negative test cases (TC-UM-002, TC-UM-003) |
| Leave balance/overlap logic | Easy to get wrong, business-critical in a real HRM | Boundary values + AI-assisted edge case brainstorm, manually filtered |
| Everything else (PIM, Time, Recruitment, Performance) | Lower risk for a demo instance, no real business impact | Deprioritized — scoped but not yet executed, tracked openly in the coverage table above |

## 5. What "done" looks like for this project
 
There's no formal exit criteria board here — it's a portfolio project, not a release gate. My working bar for calling a module "covered":
- At least one happy-path and one negative test case executed and logged with a result
- Any bug found has a written report with repro steps and severity
- If time allows, the happy path is automated