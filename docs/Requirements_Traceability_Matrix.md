# Requirements Traceability Matrix (RTM)
## OrangeHRM demo

Requirements below come from two kinds of sources, marked in the **Source** column:
- **App** — observed behavior on `opensource-demo.orangehrmlive.com`
- **UG** — OrangeHRM User Guide article (linked); requirement not yet confirmed to exist in the free demo, see the verification note under each module section

---

## Authentication

| Req ID | Requirement | Source | Test Case ID(s) | Automated? | Status |
|---|---|---|---|---|---|
| REQ-AUTH-01 | Valid users (Admin/ESS) can log in with correct credentials | App | TC-LOGIN-001 | Playwright | Pass |
| REQ-AUTH-02 | System rejects invalid credentials with a clear error message | App | TC-LOGIN-002, TC-LOGIN-003, TC-LOGIN-004, TC-LOGIN-005 | Partial (Playwright/Manual) | Pass |
| REQ-AUTH-03 | Password reset request completes without server error | App | TC-LOGIN-006 | Manual | **Fail — BUG-001-LOGIN (504 timeout)** |
| REQ-AUTH-04 | User can log out and session is terminated | App | TC-LOGOUT-001 | Manual | Pass |

---

## Admin / User Management

| Req ID | Requirement | Source | Test Case ID(s) | Automated? | Status |
|---|---|---|---|---|---|
| REQ-ADMIN-01 | Admin can create a new employee/user account | App | TC-UM-001 | Manual | Pass |
| REQ-ADMIN-02 | Non-admin (ESS) users cannot access the Admin module via navigation | App | TC-UM-002 | Manual | Pass |
| REQ-ADMIN-03 | Non-admin users cannot access Admin module via direct URL | App | TC-UM-003 | Manual | Pass |
| REQ-ADMIN-04 | Admin can edit an existing user account and changes are saved | UG | TC-ADMIN-001 | Manual | Planned |
| REQ-ADMIN-05 | User list can be filtered by username, role, status, and location | UG | TC-ADMIN-002 | Manual | Planned |
| REQ-ADMIN-06 | Admin can add a new Job Title and it becomes selectable when adding/editing an employee | UG | TC-ADMIN-003 | Manual | Planned |

---

## Leave 

| Req ID | Requirement | Source | Test Case ID(s) | Automated? | Status |
|---|---|---|---|---|---|
| REQ-LEAVE-01 | Employee can submit a leave application | App | TC-LEAVE-001 | Manual | Pass |
| REQ-LEAVE-02 | Admin/Supervisor can approve a submitted leave request | App | TC-LEAVE-002 | Manual | Pass |
| REQ-LEAVE-03 | Apply for leave exactly equal to available balance | App | TC-LEAVE-003 | Manual | Planned |
| REQ-LEAVE-04 | Apply for leave exceeding available balance is blocked | App | TC-LEAVE-004 | Manual | Planned |
| REQ-LEAVE-05 | Overlapping leave dates are rejected | App | TC-LEAVE-005 | Manual | Planned |
| REQ-LEAVE-06 | Approved leave can be cancelled and balance is restored | App | TC-LEAVE-006 | Manual | Planned |
| REQ-LEAVE-07 | End date before start date is rejected by validation | App | TC-LEAVE-007 | Manual | Planned |

---

## How to read this
- **Source = App**: verified directly against the demo; safe to execute as written.
- **Source = UG**: derived from a Help Center article, not yet confirmed against the demo. Before executing, check the module/feature actually exists as described — the Help Center covers OrangeHRM's full commercial line, and some sections here (On/Offboarding, Regional Admin) look like they may document add-ons or roles not present in the free public instance. 
- **Status = Planned** means the requirement is mapped and a Test Case ID has been reserved, but the test case has not yet been fully written or executed.



## Backlog (not yet verified against the demo)

## Employee Management (My Info / PIM-equivalent, ESS)

| Req ID | Requirement | Source | Test Case ID(s) | Automated? | Status |
|---|---|---|---|---|---|
| REQ-EMP-01 | Employee can view and edit permitted Personal Details fields; restricted fields (Employee ID, DOB) are read-only for non-HR | UG | TC-EMP-001 | Manual | Planned |
| REQ-EMP-02 | Employee can upload an attachment (≤5MB) under Personal Details | UG | TC-EMP-002 | Manual | Planned |
| REQ-EMP-03 | Job tab shows a read-only Snapshot view for a selected past date | UG | TC-EMP-003 | Manual | Planned |
| REQ-EMP-04 | Salary tab and Salary History are visible only to HR/Admin, not to the employee | UG | TC-EMP-004 | Manual (Security) | Planned |
| REQ-EMP-05 | Organization Chart renders the full employee hierarchy and is viewable by any employee | UG | TC-EMP-005 |Manual | Planned |
| REQ-EMP-06 | Corporate Directory shows only public fields (name, job title, sub-unit, location, work email) | UG | TC-EMP-006 | Manual | Planned |
| REQ-EMP-07 | Employee can change their password via My Settings | UG | TC-EMP-007 | Manual | Planned |
| REQ-EMP-08 | Employee can change language/date format preference and it persists across sessions | UG | TC-EMP-008 | Manual | Planned |

---

## Performance

| Req ID | Requirement | Source | Test Case ID(s) | Automated? | Status |
|---|---|---|---|---|---|
| REQ-PERF-01 | Employee can complete and submit a self-review | UG | TC-PERF-001 | Manual | Planned |
| REQ-PERF-02 | Appraisal can be saved as a draft before submission | UG | TC-PERF-002 | Manual | Planned |
| REQ-PERF-03 | Supervisor can complete evaluation after employee self-review | UG | TC-PERF-003 | Manual | Planned |
| REQ-PERF-04 | Ratings are constrained to the 1–5 range | UG | TC-PERF-004 | Manual (boundary) | Planned |
| REQ-PERF-05 | Supervisor evaluation sequencing relative to self-review | UG | TC-PERF-005 | Manual | needs exploratory verification |
| REQ-PERF-06 | Once a self-review is submitted, the employee can no longer edit it | UG | TC-PERF-006 | Manual | Planned |
| REQ-PERF-07 | By default, an employee cannot view scores given by their supervisor/other reviewers (permission-dependent) | UG | TC-PERF-007 | Manual (Security/Authorization) | Planned |
| REQ-PERF-08 | Appraisal form supports both "Single View" (expanded) and "Multiple View" (all reviewers) display modes | UG | TC-PERF-008 | Manual (UI) | Planned |

---

## Not yet sourced
- PIM/Time (timesheets, attendance, punch in/out)
- Recruitment (candidates, vacancies)
- Dashboard (widget data accuracy — partially touched via My Actions in the Employee Management article, not yet turned into test cases)
- API endpoints (Employee/Leave/Time CRUD, auth token handling)

---

