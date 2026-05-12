# BUG-001 Error Icons are Not Clickable and Do Not Clear the input fields

## Description 
The error icons displayed next to the Username and Password fields are not clickable and do not clear the entered values.

### Environment
Chrome - Version 147.0.7727.55

### Pre-Conditions
1. Open the application Sauce Demo (https://www.saucedemo.com)

### Steps to Reproduce
1. Enter in the Username field: locked_out_user
2. Enter in the Password field: secret_sauce
3. Click on the 'Login' button
4. Click the red error icon next to the Username field (or Password field)

### Expected Result
1. The red error icon schould be clickable
2. Clicking the icon should clear the corresponding input field

### Actual Result
1. The red error icon is not clickable
2. The Username and Password fields are not cleared

### Severity
Medium