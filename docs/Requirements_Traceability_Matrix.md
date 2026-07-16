# Requirements Traceability Matrix (RTM)
## OrangeHRM — Login, User Management, Leave, Logout

| Req ID | Requirement | Test Case ID(s) | Test Type | Automated? | Status |
|---|---|---|---|---|---|
| REQ-AUTH-01 | Valid users (Admin/ESS) can log in with correct credentials | TC-LOGIN-001, TC-LOGIN-002 | Functional | Playwright | Pass |
| REQ-AUTH-02 | System rejects invalid credentials with a clear error message | TC-LOGIN-003 | Functional | Playwright | Pass |
| REQ-AUTH-03 | Password reset request completes without server error | TC-LOGIN-005 | Functional | Manual | **Fail — BUG-001-LOGIN (504 timeout)** |
| REQ-ADMIN-01 | Admin can create a new employee/user account | TC-UM-001 | Functional | Manual | Pass |
| REQ-ADMIN-02 | Non-admin (ESS) users cannot access the Admin module via navigation | TC-UM-002 | Security/Authorization | Manual | Pass |
| REQ-ADMIN-03 | Non-admin users cannot access Admin module via direct URL | TC-UM-003 | Security/Authorization | Manual | Pass |
| REQ-LEAVE-01 | Employee can submit a leave application | TC-LEAVE-001 | Functional | Manual | Pass |
| REQ-LEAVE-02 | Admin/Supervisor can approve a submitted leave request | TC-LEAVE-002 | Functional | Manual | Pass |
| REQ-AUTH-04 | User can log out and session is terminated | TC-LOGOUT-001 | Functional | Manual | Pass |
| REQ-LEAVE-05 | Leave application is blocked during a "Strict" blackout period | TC-LEAVE-008 | Functional | Manual | Not yet executed |
| REQ-LEAVE-06 | Leave application allowed with a warning during a "Warning Only" blackout period | TC-LEAVE-009 | Functional | Manual | Not yet executed |
| REQ-LEAVE-07 | Overnight-shift leave requests are visually distinguished | TC-LEAVE-010 | Functional | Manual | Not yet executed |
| REQ-PERF-01 | Employee can complete and submit a self-review | TC-PERF-001 | Functional | Manual | Not yet executed |
| REQ-PERF-02 | Appraisal can be saved as a draft before submission | TC-PERF-002 | Functional | Manual | Not yet executed |
| REQ-PERF-03 | Supervisor can complete evaluation after employee self-review | TC-PERF-003 | Functional | Manual | Not yet executed |
| REQ-PERF-04 | Ratings are constrained to the 1–5 range | TC-PERF-004 | Functional (boundary) | Manual | Not yet executed |
| REQ-PERF-05 | Supervisor evaluation sequencing relative to self-review | TC-PERF-005 | Functional | Manual | **Open question — Help Center doesn't confirm expected behavior; needs exploratory verification** |

REQ-LEAVE-05/06/07 and REQ-PERF-01 through 05 are sourced from the [OrangeHRM Help Center](https://help.orangehrm.com/hc/en-us) 

## Not yet mapped (planned per Test Approach, no test cases written yet)
- PIM (employee records, reports)
- Time (timesheets, attendance)
- Recruitment (candidates, vacancies)
- Dashboard (widget data accuracy)
- API endpoints (Employee/Leave/Time CRUD, auth token handling)
