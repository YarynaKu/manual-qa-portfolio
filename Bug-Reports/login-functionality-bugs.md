# BUG-001-LOGIN 504 Gateway Time-out accurs after clicking 'Reset Password' on OrangeHRM login

## Description 
When a user attempts to reset their password using the 'Forgot Password' fuctionality, the system returns a 504 Gateway Time-out error.

### Environment
URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Browser: Google Chrome, Version 149.0.7827.104

### Pre-Conditions
Valid user account exists in the system

### Steps to Reproduce
1. Open login page
2. Enter a valid username
3. Click 'Forgot your password?' link
4. Enter the existing username
5. Click 'Reset Password' button

### Actual Result
504 Gateway Time-out error occurs

### Expected Result
Password reset request should complete successfuly.
User should see confirmation message - 'Reset Password link sent successfully'
No server error (504) should occur.

### Frequency 
Intermittent

### Severity
High

### Priority
High
