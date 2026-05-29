# Login Test Cases

## TC-LOGIN-001 Verify admin can login with valid credentials

### Pre-Condtitions
1. Admin account exists

### Steps
1. Open login page: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter valid admin username
3. Enter valid password
4. Click 'Login' button

### Test Data
Username: Admin
Password: admin123

### Expected Result
Admin dashboard should be displayed successfully

## TC-LOGIN-002 Verify employee can login with valid credetials

### Pre-Condtitions
Employee account exists

### Steps
1. Open login page: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter valid employee username
3. Enter valid password
4. Click 'Login' button

### Test Data
Username: IamEmployeeJohn
Password: IAmEmployee123

### Expected Result
Employee dashboard should be displayed successfully


## TC-LOGIN-003 Verify error message for invalid password

### Pre-Condtitions
User account exists

### Steps
1. Open login page: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Enter valid username
3. Enter invalid password
4. Click 'Login' button

### Test Data
Username: Admin
Password: WrongPass

### Expected Result
Error message: "Invalid credentials" is displayed
