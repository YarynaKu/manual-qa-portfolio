# Requirements Traceability Matrix (RTM)
## OrangeHRM demo

Requirements below come from two kinds of sources, marked in the **Source** column:
- **App** — observed behavior on `opensource-demo.orangehrmlive.com`
- **UG** — OrangeHRM User Guide article (linked); requirement not yet confirmed to exist in the free demo, see the verification note under each module section

---

## Authentication

| Req ID | Requirement | Source | Test Case ID(s) | Automated? | Status |
|---|---|---|---|---|---|
| REQ-AUTH-01 | Valid users (Admin/ESS) can log in with correct credentials | App | TC-LOGIN-001, TC-LOGIN-002 | Playwright | Pass |
| REQ-AUTH-02 | System rejects invalid credentials with a clear error message | App | TC-LOGIN-003 | Playwright | Pass |
| REQ-AUTH-03 | Password reset request completes without server error | App | TC-LOGIN-005 | Manual | **Fail — BUG-001-LOGIN (504 timeout)** |
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
| REQ-ADMIN-07 | Admin can add a Pay Grade and assign a currency to it | UG | TC-ADMIN-004 | Manual | Planned |
| REQ-ADMIN-08 | Selected records can be bulk-deleted from a list view | UG | TC-ADMIN-005 | Manual | Planned |

---

## On/Offboarding

| Req ID | Requirement | Source | Test Case ID(s) | Automated? | Status |
|---|---|---|---|---|---|
| REQ-ONB-01 | Employee can view and act on tasks assigned to them (My Tasks) | UG | TC-ONB-001 | Manual | Planned |
| REQ-ONB-02 | Task status/comment updates are saved and reflected in the task list | UG | TC-ONB-002 | Manual | Planned |
| REQ-ONB-03 | Attachments can be uploaded against a task | UG | TC-ONB-003 | Manual | Planned |
| REQ-ONB-04 | Event owner can view and filter events assigned to them (My Events) | UG | TC-ONB-004 | Manual | Planned |
| REQ-ONB-05 | Event owner can bulk-update task owner/priority/due date across multiple employee tasks | UG | TC-ONB-005 | Manual | Planned |

---

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

## Leave (Supervisor-side additions)

| Req ID | Requirement | Source | Test Case ID(s) | Automated? | Status |
|---|---|---|---|---|---|
| REQ-LEAVE-01 | Employee can submit a leave application | App | TC-LEAVE-001 | Manual | Pass |
| REQ-LEAVE-02 | Admin/Supervisor can approve a submitted leave request | App | TC-LEAVE-002 | Manual | Pass |
| REQ-LEAVE-05 | Leave application is blocked during a "Strict" blackout period | UG | TC-LEAVE-008 | Manual | Planned |
| REQ-LEAVE-06 | Leave application allowed with a warning during a "Warning Only" blackout period | UG | TC-LEAVE-009 | Manual | Planned |
| REQ-LEAVE-07 | Overnight-shift leave requests are visually distinguished | UG | TC-LEAVE-010 | Manual | Planned |
| REQ-LEAVE-08 | Supervisor can assign leave directly to a subordinate | UG | TC-LEAVE-011 | Manual | Planned |
| REQ-LEAVE-09 | Supervisor can approve/reject/cancel a multi-day leave request as a whole | UG | TC-LEAVE-012 | Manual | Planned |
| REQ-LEAVE-10 | Supervisor can approve/reject a single day within a multi-day leave request via detail view | UG | TC-LEAVE-013 | Manual | Planned |
| REQ-LEAVE-11 | Leave Calendar highlights overlapping team leave to prevent scheduling conflicts | UG | TC-LEAVE-014 |  Manual | Planned |
| REQ-LEAVE-12 | Leave List can be filtered by employee, sub-unit, location, leave type, and status | UG | TC-LEAVE-015 | Manual | Planned |
| REQ-LEAVE-13 | My Leave Usage report's Net Balance equals Available Balance minus Total Overdrawn | UG | TC-LEAVE-016 | Manual (boundary/calc) | Planned |

---

## Not yet mapped (no source reviewed yet)
- PIM/Time (timesheets, attendance, punch in/out)
- Recruitment (candidates, vacancies)
- Dashboard (widget data accuracy — partially touched via My Actions in the Employee Management article, not yet turned into test cases)
- API endpoints (Employee/Leave/Time CRUD, auth token handling)

---

## How to read this
- **Source = App**: verified directly against the demo; safe to execute as written.
- **Source = HC**: derived from a Help Center article, not yet confirmed against the demo. Before executing, check the module/feature actually exists as described — the Help Center covers OrangeHRM's full commercial line, and some sections here (On/Offboarding, Regional Admin) look like they may document add-ons or roles not present in the free public instance. 
- **Status = Planned** means the requirement is mapped and a Test Case ID has been reserved, but the test case has not yet been fully written or executed.