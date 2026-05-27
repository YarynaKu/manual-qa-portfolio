# Login Test Cases

## TC-001 Verify successful login with valid credentials

### Pre-Condtitions
1. The user is on the login page of Sauce Demo (https://www.saucedemo.com)

### Steps
1. Enter standart_user in the Username field
2. Enter secret_sauce in the Password field
3. Click 'Login' button

### Test Data
username: standard_user,
password: secret_sauce

### Expected Result
1. The user is logged in successfully
2. Products page is displayed

## TC-002 Verify unsuccessful login for a locked-out user

### Pre-Condtitions
1. The user is on the login page of Sauce Demo (https://www.saucedemo.com)

### Steps
1. Enter locked_out_user in the Username field
2. Enter secret_sauce in the Password field
3. Click 'Login' button

### Test Data
username: locked_out_user,
password: secret_sauce

### Expected Result
1. The user is not logged.
2. Error message is displayed: 'Epic sadface: Sorry, this user has been locked out.'

