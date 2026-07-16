# Login Test Cases

Source of truth for execution status: `Functional_TestSuite.xlsx` → `Login` sheet (TS001). This file is a readable excerpt for portfolio browsing.

## TC-LOGIN-001 Login as admin with valid credentials should redirect to Admin dashboard

### Pre-Conditions
1. Admin account exists

### Steps
1. Navigate to login page: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter valid admin username
3. Enter valid password
4. Click 'Login' button

### Test Data
Username: Admin;
Password: admin123

### Expected Result
Admin is redirected to Admin dashboard

---

## TC-LOGIN-002 Login as employee with valid credentials should redirect to Employee dashboard

### Pre-Conditions
Employee account exists

### Steps
1. Navigate to login page: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter valid employee username
3. Enter valid password
4. Click 'Login' button

### Test Data
Username: IamEmployeeJohn;
Password: IAmEmployee123

### Expected Result
Employee is redirected to Employee dashboard

---

## TC-LOGIN-003 Error message should be displayed when entering invalid password

### Pre-Conditions
User account exists

### Steps
1. Navigate to login page: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter valid username
3. Enter invalid password
4. Click 'Login' button

### Test Data
Username: Admin;
Password: WrongPass

### Expected Result
Error message: "Invalid credentials" is displayed

---

## TC-LOGIN-005 User can reset password via registered email
 
### Pre-Conditions
User account exists
 
### Steps
1. Navigate to login page: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter a valid username
3. Click 'Forgot your password?' link
4. Enter the existing username
5. Click 'Reset Password' button

### Test Data
Username: IamEmployeeJohn
 
### Expected Result
Password reset request should complete successfully.
User should see confirmation message: "Reset Password link sent successfully"
No server error (504) should occur.
