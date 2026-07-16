# Test Plan Document
## OrangeHRM Application — Release Cycle

| | |
|---|---|
| **Document Owner** | QA Lead |
| **Version** | 1.0 |
| **Status** | Draft for Review |
| **Reference** | OrangeHRM Test Strategy v1.1 |
| **Application Under Test** | OrangeHRM (Open Source HRM Demo) |
| **Date** | July 2026 |

---

## 1. Introduction

### 1.1 Purpose
This Test Plan defines the specific scope, approach, resources, schedule, and deliverables for testing OrangeHRM in this test cycle. It operationalizes the high-level approach defined in the Test Strategy into concrete test items, features to be tested, responsibilities, and a timeline.

### 1.2 Test Plan Reference
This plan follows the testing approach, tools, and standards defined in the **OrangeHRM Test Strategy** document. Where the Strategy defines *how* testing is approached across releases, this Plan defines *what* is tested, *when*, and *by whom* for this specific cycle.

---

## 2. Test Items

| Module | Build/Version |
|---|---|
| OrangeHRM Core (Admin, PIM, Leave, Time, Recruitment, Performance, Dashboard, My Info) | Current release candidate deployed to QA/Staging |

---

## 3. Features to Be Tested

| Module | Key Features |
|---|---|
| Authentication | Login, logout, forgot password, session timeout, role-based redirect (Admin/ESS/Supervisor) |
| Admin | User management (create/edit/delete/reset password), job titles, organization structure, qualifications |
| PIM | Add/edit/delete employee, personal/emergency contact details, attachments, employee list & reports, custom fields |
| Leave | Apply leave, approve/reject leave, leave balance/entitlement calculation, leave list filtering, overlapping leave validation |
| Time | Timesheet submission & approval, attendance punch in/out, project/activity time tracking |
| Recruitment | Add vacancy, add candidate, resume upload, pipeline stage transitions, interview scheduling |
| Performance | Review cycle creation, KPI assignment, self/supervisor evaluation submission |
| Dashboard / My Info | Widget data accuracy, quick launch links, personal profile edits |
| API | Employee, Leave, and Time endpoints — CRUD operations, auth token handling, status codes, schema validation |

## 4. Features Not to Be Tested

- Third-party payroll integrations (not in current release scope)
- Native mobile applications
- Infrastructure-level load/performance testing (handled under separate NFR test plan, if scheduled)
- Legacy browser versions outside the supported matrix (older than latest 2 versions per browser)

---

## 5. Test Approach

Testing follows the six pillars defined in the Test Strategy, scoped to this cycle:

| Type | Approach for This Cycle |
|---|---|
| **Functional** | Scripted test cases in Qase, mapped to user stories for this release; equivalence partitioning and boundary value analysis applied to leave/time calculation logic |
| **UI** | Playwright (JavaScript, POM) automated suite run against Chrome, Firefox, Edge; manual spot-checks on Safari and mobile breakpoints |
| **Regression** | P0 smoke suite on every build; full P1 regression suite before UAT handoff |
| **Exploratory** | Two 60–90 min SBTM charters per module during the exploratory testing window (see schedule) |
| **Accessibility** | axe-core automated scan + manual keyboard/screen reader pass on Login, Dashboard, PIM, Leave, Admin pages |
| **API** | Postman collection execution covering Employee/Leave/Time endpoints; Newman run in CI for regression |

---

## 6. Entry Criteria

- Build deployed to QA environment; deployment smoke-tested and passed.
- Test cases for in-scope features reviewed and available in Qase.
- Test data seeded (employee records, leave balances, sample vacancies/candidates).
- API endpoints documented and reachable in QA environment.
- No P0 (blocker) defects open from the previous cycle.

## 7. Exit Criteria

- 100% of P0/P1 test cases executed; 0 open P0/P1 defects.
- Regression suite pass rate ≥ 95%.
- Exploratory session findings triaged (no unaddressed high-severity issues).
- Accessibility scan shows no critical/serious WCAG 2.1 AA violations on in-scope pages.
- All in-scope API endpoints pass functional and schema validation.
- Test summary report reviewed and signed off by QA Lead.

## 8. Suspension & Resumption Criteria

- **Suspend testing if:** build fails smoke test, environment is unavailable/unstable, or a P0 defect blocks a core workflow (e.g., login, leave approval).
- **Resume when:** blocking issue is resolved, fix is deployed to QA, and smoke suite passes again.

---

## 9. Test Deliverables

| Deliverable | Owner | Delivered By |
|---|---|---|
| Test cases (Qase) | QA Engineers | Before execution start |
| Playwright automated suite (GitHub repo) | Automation Engineer | Ongoing, updated per cycle |
| Postman API collection | QA Engineer | Before execution start |
| Exploratory session charters & notes | QA Engineers | During exploratory window |
| Accessibility audit report | Accessibility Champion | End of cycle |
| Defect log (Jira) | QA Engineers | Ongoing |
| Test execution/summary report | QA Lead | End of cycle |

---

## 10. Test Environment & Data

| Item | Detail |
|---|---|
| Environment | QA/Staging (OrangeHRM demo instance) |
| Browsers | Chrome, Firefox, Edge (latest 2 versions); Safari (manual spot-check) |
| Test Data | Seeded employee records, leave entitlements, sample candidates/vacancies; reset before each cycle |
| API Access | QA environment API base URL with test credentials/tokens |

---

## 11. Schedule

| Phase | Duration | Activities |
|---|---|---|
| Test Planning & Case Prep | 2 days | Finalize test cases in Qase, prepare Postman collection, confirm environment/data |
| Functional & API Execution | 4 days | Execute functional test cases; run Postman/Newman API suite |
| UI & Regression Automation | 3 days (parallel) | Run/extend Playwright suite across browsers; execute P0/P1 regression |
| Exploratory Testing | 1 day | SBTM charters per module, findings triage |
| Accessibility Testing | 1 day | Automated scan + manual keyboard/screen reader pass |
| Defect Fix Verification | 2 days | Re-test fixed defects, confirm no regressions |
| Sign-off & Reporting | 1 day | Compile summary report, exit criteria review, sign-off |

*Total estimated duration: ~14 working days per cycle (adjust based on release cadence).*

---

## 12. Roles & Responsibilities

| Role | Responsibility |
|---|---|
| QA Lead | Plan ownership, risk assessment, exit criteria sign-off, reporting |
| QA Engineers | Test case execution, exploratory testing, defect logging (Jira) |
| Automation Engineer | Maintain/extend Playwright suite, CI integration, flaky test triage |
| Accessibility Champion | Run accessibility audits, log WCAG-referenced defects |
| Developers | Fix defects, support root-cause triage |
| Product Owner | Clarify requirements, review/approve exit report |

---

## 13. Risks & Contingencies

| Risk | Impact | Mitigation |
|---|---|---|
| Test environment instability | Delays execution | Daily environment health check before test start |
| Incomplete test data | Blocks scenario coverage | Pre-seed and validate data during planning phase |
| Late-arriving build/fixes | Compresses execution window | Prioritize P0/P1 cases first; defer P2 if needed |
| Flaky Playwright tests | False failures reduce confidence | Quarantine flaky tests, review weekly, fix before next cycle |
| Accessibility issues found late | Delays sign-off | Run accessibility scan early in the cycle, not just at the end |

---

## 14. Approvals

| Name | Role | Signature | Date |
|---|---|---|---|
| | QA Lead | | |
| | Product Owner | | |
| | Engineering Lead | | |
