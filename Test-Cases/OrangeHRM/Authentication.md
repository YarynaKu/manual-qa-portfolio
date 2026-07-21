# Authentication Test Suite

## TC-LOGIN-001 

| Field | Value |
|---------|---------|
| Test Case ID | TC-LOGIN-001 | 
| Requirement ID | REQ-AUTH-01 | 
| Module | Authentication |
| Priority | High |
| Test Type | Functional, Positive |
| Automation | Playwright | 

### Title
Login with valid Admin credentials should redirect to Admin Dashboard

### Pre-Conditions
- Admin account exists

### Test Data
| Field | Value |
|---------|---------|
| Username | Admin | 
| Password | admin123 | 

### Test Steps
| Step | Action |
|---------|---------|
| 1 | Navigate to the Login page: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | 
| 2 | Enter a valid Admin username. | 
| 3 | Enter a valid password. | 
| 4 | Click the *'Login'* button. | 

### Expected Result
- User is authenticated successfully.
- User is redirected to the Dashboard page.

---

## TC-LOGIN-002

| Field | Value |
|---------|---------|
| Test Case ID | TC-LOGIN-002 |
| Requirement ID | REQ-AUTH-02 |
| Module | Authentication |
| Priority | High |
| Test Type | Functional, Negative |
| Automation | Playwright |

### Title
Error message should be displayed when an invalid password is entered

### Preconditions
- User account exists and is active.

### Test Data

| Field | Value |
|---------|---------|
| Username | Admin |
| Password | WrongPass |

### Test Steps

| Step | Action |
|---------|---------|
| 1 | Navigate to the Login page. |
| 2 | Enter a valid username. |
| 3 | Enter an invalid password. | 
| 4 | Click the *'Login'* button. | 

### Expected Result
- Authentication is rejected.
- User remains on the Login page.
- Error message *"Invalid credentials"* is displayed.

---

## TC-LOGIN-003

| Field | Value |
|---------|---------|
| Test Case ID | TC-LOGIN-003 |
| Requirement ID | REQ-AUTH-02 |
| Module | Authentication |
| Priority | High |
| Test Type | Functional, Negative |
| Automation | Playwright |

### Title
Error message should be displayed when an invalid username is entered

### Preconditions
- User account exists and is active.

### Test Data

| Field | Value |
|---------|---------|
| Username | WrongUser |
| Password | admin123 |

### Test Steps

| Step | Action |
|---------|---------|
| 1 | Navigate to the Login page. |
| 2 | Enter an invalid username. |
| 3 | Enter a valid password. | 
| 4 | Click the *'Login'* button. | 

### Expected Result
- Authentication is rejected.
- User remains on the Login page.
- Error message *"Invalid credentials"* is displayed.

---

## TC-LOGIN-004

| Field | Value |
|---------|---------|
| Test Case ID | TC-LOGIN-004 |
| Requirement ID | REQ-AUTH-02 |
| Module | Authentication |
| Priority | High |
| Test Type | Functional, Negative |
| Automation | Playwright |

### Title
Hint message should be displayed when trying to login with an empty username

### Preconditions
- User account exists and is active.

### Test Data

| Field | Value |
|---------|---------|
| Username |  |
| Password | admin123 |

### Test Steps

| Step | Action |
|---------|---------|
| 1 | Navigate to the Login page. |
| 2 | Leave username field empty. |
| 3 | Enter a valid password. | 
| 4 | Click the *'Login'* button. | 

### Expected Result
- Authentication is rejected.
- User remains on the Login page.
- Hint message *"Required"* is displayed next to Username field.

---

## TC-LOGIN-005

| Field | Value |
|---------|---------|
| Test Case ID | TC-LOGIN-005 |
| Requirement ID | REQ-AUTH-02 |
| Module | Authentication |
| Priority | High |
| Test Type | Functional, Negative |
| Automation | Playwright |

### Title
Hint message should be displayed when trying to login with an empty password

### Preconditions
- User account exists and is active.

### Test Data

| Field | Value |
|---------|---------|
| Username | Admin |
| Password |  |

### Test Steps

| Step | Action |
|---------|---------|
| 1 | Navigate to the Login page. |
| 2 | Enter a valid username. |
| 3 | Leave password field empty. | 
| 4 | Click the *'Login'* button. | 

### Expected Result
- Authentication is rejected.
- User remains on the Login page.
- Hint message *"Required"* is displayed next to Password field.

---

## TC-LOGIN-006

| Field | Value |
|---------|---------|
| Test Case ID | TC-LOGIN-006 |
| Requirement ID | REQ-AUTH-03 |
| Module | Authentication |
| Priority | High |
| Test Type | Functional |
| Automation | Manual |

### Title
User can reset password via registered email

### Preconditions
- User account with username 'IamEmployeeJohn' exists and has a configured email profile.

### Test Data

| Field | Value |
|---------|---------|
| Username | IamEmployeeJohn |

### Test Steps

| Step | Action |
|---------|---------|
| 1 | Navigate to the Login page. |
| 2 | Click the *'Forgot your password?'* link. |
| 3 | Enter the existing username. | 
| 4 | Click the *'Reset Password'* button. | 

### Expected Result
- Password reset request should complete successfully.
- User should see confirmation message: "Reset Password link sent successfully"
- No application error or timeout occurs.

### Actual Result
#### Status: Fail

### Linked Defect
- BUG-001-LOGIN — Password reset returns HTTP 504 Gateway Timeout.

---

## TC-LOGOUT-001

| Field | Value |
|---------|---------|
| Test Case ID | TC-LOGOUT-001 |
| Requirement ID | REQ-AUTH-04 |
| Module | Authentication |
| Priority | High |
| Test Type | Functional, Session Management |
| Automation | Manual |

### Title
Logged-in user can successfully log out and the session is terminated

### Preconditions
- User account exists.
- User is logged in to the application.
- Dashboard page is displayed.

### Test Data

| Field | Value |
|---------|---------|
| Username | Admin |
| Password | admin123 |

### Test Steps

| Step | Action |
|---------|---------|
| 1 | Log in to OrangeHRM using valid credentials. |
| 2 | Click the user profile icon in the top-right corner. |
| 3 | Select *'Logout'* from the dropdown menu. | 

### Expected Result
- User is successfully logged out.
- User is redirected to the Login page.
- Application session is terminated.
- Protected pages are no longer accessible without authentication.

### Post-Logout Verification
| Step | Action |
|---------|---------|
| 4 | Click the browser's Back button. |
| 5 | Attempt to access a protected URL directly (e.g., /web/index.php/dashboard/index). |

### Expected Result
- Previously visited authenticated pages are not accessible.
- User is redirected to the Login page or prompted to authenticate again.
- No sensitive user data is displayed after logout.

---
