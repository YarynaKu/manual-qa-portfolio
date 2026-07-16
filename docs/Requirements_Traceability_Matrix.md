# Requirements Traceability Matrix (RTM)
## OrangeHRM — Login, User Management, Leave, Logout

| Req ID | Requirement | Test Case ID(s) | Test Type | Automated? | Status |
|---|---|---|---|---|---|
| REQ-AUTH-01 | Valid users (Admin/ESS) can log in with correct credentials | TC-LOGIN-001, TC-LOGIN-002 | Functional | Manual | Pass |
| REQ-AUTH-02 | System rejects invalid credentials with a clear error message | TC-LOGIN-003 | Functional | Manual | Pass |
| REQ-AUTH-03 | Password reset request completes without server error | TC-LOGIN-005 | Functional | Manual | **Fail — BUG-001-LOGIN 504 Gateway Time-out** |
| REQ-ADMIN-01 | Admin can create a new employee/user account | TC-UM-001 | Functional | Manual | Pass |
| REQ-ADMIN-02 | Non-admin (ESS) users cannot access the Admin module via navigation | TC-UM-002 | Security/Authorization | Manual | Pass |
| REQ-ADMIN-03 | Non-admin users cannot access Admin module via direct URL | TC-UM-003 | Security/Authorization | Manual | Pass |
| REQ-LEAVE-01 | Employee can submit a leave application | TC-LEAVE-001 | Functional | Manual | Pass |
| REQ-LEAVE-02 | Admin/Supervisor can approve a submitted leave request | TC-LEAVE-002 | Functional | Manual | Pass |
| REQ-AUTH-04 | User can log out and session is terminated | TC-LOGOUT-001 | Functional | Manual | Pass |

## Not yet mapped (planned per Test Strategy, no test cases written yet)
- PIM (employee records, reports)
- Time (timesheets, attendance)
- Recruitment (candidates, vacancies)
- Performance (review cycles, KPIs)
- Dashboard (widget data accuracy)
- API endpoints (Employee/Leave/Time CRUD, auth token handling)

