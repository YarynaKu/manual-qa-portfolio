# Login Test Cases

## TC-001 Validate Successful Login of a Standart User with Valid Credentials

### Pre-Condtitions
1. The user is on a the login page of Sauce Demo (https://www.saucedemo.com)

### Steps
1. Enter standart_user in the Username field
2. Enter secret_sauce in the Password field
3. Click on the 'Login' button

### Test Data
username: standard_user
password: secret_sauce

### Expected Result
1. The user is logged in successfully
2. The products page is displayed

## TC002 Validate Unsuccessful Login of a Locked user 

### Pre-Condtitions
1. The user is on a the login page of Sauce Demo (https://www.saucedemo.com)

### Steps
1. Enter locked_out_user in the Username field
2. Enter secret_sauce in the Password field
3. Click on the 'Login' button

### Test Data
username: locked_out_user
password: secret_sauce

### Expected Result
1. The user is not logged in the application.
2. An error message is displayed: 'Epic sadface: Sorry, this user has been locked out.'

