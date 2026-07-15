# Test Strategy Document
## OrangeHRM Application

| | |
|---|---|
| **Document Owner** | Yaryna Kushniruk |
| **Version** | 1.0 |
| **Status** | Approved |
| **Application Under Test** | OrangeHRM (Open Source HRM) |
| **Date** | July 2026 |

---

## 1. Introduction

### 1.1 Purpose
This document defines the overall test strategy for OrangeHRM, an HR management system covering modules such as Admin, PIM, Leave, Time, Recruitment, Performance, Dashboard, and My Info. It outlines the testing approach, scope, types of testing, tools, environments, entry/exit criteria, and roles/responsibilities to ensure a high-quality, reliable, and accessible product release.

### 1.2 Objectives
- Validate that OrangeHRM functions correctly against business and functional requirements.
- Ensure consistent, responsive, and defect-free UI across supported browsers/devices.
- Prevent regressions across releases through a maintainable regression suite.
- Uncover edge cases and usability issues via structured exploratory testing.
- Ensure the application meets WCAG 2.1 AA accessibility standards.
- Validate REST API endpoints for correctness, security, and performance independent of the UI.

### 1.3 Scope

**In Scope:**
- Admin module (User Management, Job, Organization, Qualifications)
- PIM (Employee List, Reports)
- Leave module (Apply, Assign, List, Entitlements)
- Time module (Timesheets, Attendance, Project reports)
- Recruitment (Candidates, Vacancies)
- Performance (Reviews, KPIs, Trackers)
- Dashboard & My Info
- Authentication & Authorization (roles: Admin, ESS)
- Public REST API endpoints (v2 API where applicable)

**Out of Scope:**
- Third-party payroll integrations (unless explicitly contracted)
- Load/performance testing at infrastructure level (covered under separate NFR strategy, if required)
- Native mobile app testing (if not part of current release)

---

## 2. Test Approach by Type

### 2.1 Functional Testing
**Objective:** Verify each feature behaves according to functional specifications.

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

**Test Design:** Test cases derived from user stories/requirements, maintained in a test management tool (Qase) and mapped to requirements for traceability (RTM).

### 2.2 UI Testing
**Objective:** Ensure visual consistency, layout integrity, and interactive element behavior.

- Cross-browser testing: Chrome, Firefox, Edge, Safari (latest 2 versions each).
- Responsive testing: Desktop (1920x1080, 1366x768), tablet, and mobile breakpoints.
- Field-level validation: required field indicators, error messaging, tooltips.
- Component-level checks: date pickers, dropdowns, multi-select, pagination, modals, toast notifications.
- Visual regression using screenshot comparison (e.g., Percy, Applitools) integrated into CI.

**Automation:** Playwright with JavaScript, following the Page Object Model (POM) design pattern; Playwright Test runner used for execution, parallelization, and reporting. Test scripts version-controlled via GitHub

### 2.3 Regression Testing
**Objective:** Ensure new changes do not break existing functionality.

- Maintain a risk-based regression suite prioritized by module criticality (Auth > Leave/PIM > Time > Recruitment > Performance).
- Tag test cases by priority (P0 smoke, P1 core regression, P2 extended regression).
- **P0 Smoke Suite:** Runs on every build/deploy (~15-20 min) — login, core CRUD on PIM, leave apply/approve.
- **P1 Regression Suite:** Runs nightly/per sprint — full module coverage (~1-2 hrs).
- **P2 Full Regression:** Runs pre-release — entire suite including edge cases.
- Automated via CI/CD pipeline (Jenkins/GitHub Actions) triggered on merge to main/release branches.
- Maintain automation health metrics: flaky test rate, pass rate trend, execution time.

### 2.4 Exploratory Testing
**Objective:** Discover defects not covered by scripted cases using structured, time-boxed sessions.

- **Session-Based Test Management (SBTM):** 60–90 minute charters per module (e.g., "Explore leave overlap and negative balance edge cases").
- Charters focus on: unusual input combinations, workflow interruptions (browser back/refresh mid-form), concurrent user actions (two supervisors approving same leave), data boundary conditions, localization/date-format edge cases.
- Testers log notes, bugs, and questions raised during the session; findings reviewed in daily QA sync.
- Conducted primarily pre-release and after major feature merges, supplementing scripted regression.

### 2.5 Accessibility Testing
**Objective:** Ensure compliance with WCAG 2.1 Level AA.

- **Automated scans:** axe-core (via axe DevTools or integrated into Playwright/Cypress), Lighthouse accessibility audits, WAVE — run on key pages (Login, Dashboard, PIM, Leave, Admin).
- **Manual checks:**
  - Keyboard-only navigation (tab order, focus indicators, no keyboard traps)
  - Screen reader testing (NVDA on Windows, VoiceOver on macOS) for form labels, ARIA roles, live regions (toast messages)
  - Color contrast validation (4.5:1 for text) using contrast checker tools
  - Form error announcements and alt text on icons/images
- Defects logged with WCAG success criterion reference (e.g., "1.4.3 Contrast (Minimum) — Save button fails contrast ratio").
- Accessibility checks integrated into Definition of Done for new UI components.

### 2.6 API Testing
**Objective:** Validate REST API endpoints independently of the UI layer.

- **Tooling:** Postman for request/response validation — verifying status codes, headers, and payloads — with Newman for collection-based regression runs in CI. REST Assured or Karate can be layered in later for code-first automated suites if deeper CI integration is needed.
- **Coverage:**
  - CRUD operations for Employees, Leave, Time, Recruitment endpoints
  - Authentication (token generation/expiry, unauthorized access attempts)
  - Request/response schema validation
  - Status code correctness (200, 201, 400, 401, 403, 404, 500)
  - Negative testing: malformed payloads, missing required fields, invalid data types
  - Data integrity checks: cross-verify API-created data reflects correctly in UI
- **Security basics:** SQL injection/input sanitization checks, role-based endpoint access control, rate-limiting behavior (if applicable).
- Contract testing considered if OrangeHRM API is consumed by external services.

---

## 3. Test Environment

| Environment | Purpose |
|---|---|
| DEV | Developer sanity/smoke checks |
| QA/Staging | Full functional, regression, exploratory, API testing |
| UAT | Business/stakeholder sign-off |
| Pre-Prod | Final smoke + accessibility validation before release |

- Test data managed via seeded database snapshots/fixtures; sensitive data masked/anonymized.
- Environment refresh scheduled before each major test cycle to avoid data drift.

---

## 4. Tools Summary

| Category | Tool(s) |
|---|---|
| Test Management | Qase (free tier — test case management, execution tracking, REST API access for automated results) |
| Functional/UI Automation | Playwright (JavaScript, POM pattern) |
| API Testing | Postman (functional/manual validation), Newman (CI regression) |
| Source Control | GitHub |
| Accessibility | axe DevTools, Lighthouse, WAVE, NVDA/VoiceOver |
| Visual Regression | Percy / Applitools |
| CI/CD | Jenkins / GitHub Actions |
| Defect Tracking | Jira |
| Reporting | Allure / ExtentReports |

---

## 5. Entry and Exit Criteria

**Entry Criteria:**
- Build deployed to QA environment and smoke-passed.
- Test cases reviewed and mapped to requirements.
- Test data and environment access confirmed.

**Exit Criteria:**
- 100% planned test case execution (P0/P1); no open P0/P1 (blocker/critical) defects.
- Regression suite pass rate ≥ 95%.
- Accessibility scan shows no critical/serious WCAG AA violations on key pages.
- All API endpoints in scope validated with passing schema/status checks.
- Test summary report reviewed and signed off by QA Lead and Product Owner.

---

## 6. Risk-Based Prioritization

| Risk Area | Mitigation |
|---|---|
| Leave/time calculation errors (business-critical) | Heavy focus in functional + exploratory; dedicated decision-table test design |
| Role-based access misconfiguration | Explicit negative/authorization test cases per role |
| Cross-browser inconsistency | Automated visual regression on every release candidate |
| Accessibility regressions from new UI components | Accessibility checks gated in Definition of Done |
| Flaky automation reducing confidence | Regular test health review; quarantine and fix flaky tests promptly |

---

## 7. Roles & Responsibilities

| Role | Responsibility |
|---|---|
| QA Lead | Strategy ownership, planning, risk assessment, sign-off |
| QA Engineers | Test case design, execution, automation, defect logging |
| Automation Engineer | Framework maintenance, CI integration, script development |
| Accessibility Champion | Accessibility audits, WCAG compliance tracking |
| Developers | Unit tests, defect fixes, code-level accessibility support |
| Product Owner | Requirement clarification, UAT sign-off |

---

## 8. Deliverables
- Test Strategy (this document) & Test Plans per release
- Test cases and traceability matrix
- Automated test suites (functional, regression, API)
- Accessibility audit reports
- Defect reports and status dashboards
- Test execution/summary reports per release cycle

---

## 9. Assumptions & Dependencies
- Stable test environment with representative data available before each cycle.
- API documentation kept current for accurate test design.
- Timely defect triage to avoid blocking regression cycles.
