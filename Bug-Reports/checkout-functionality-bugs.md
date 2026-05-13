# BUG-001 Checkout is Successful when the Cart is Empty

## Description 
The user can complete the checkout process successfully with an empty cart.
The successful confirmation message appears.

### Environment
Chrome - Version 147.0.7727.55

### Pre-Conditions
1. The user is logged in and on the Cart page (https://www.saucedemo.com/cart.html)
2. The shopping cart is empty

### Steps to Reproduce
1. Click the 'Checkout' button
2. Enter the valid data into the following fields: 
- First Name
- Last Name
- Zip/Postal Code
3. Click the 'Continue' button
4. Click the 'Finish' button

### Test Data
username: standard_user
password: secret_sauce
First Name: Myname
Last Name: Mylastname
Zip/Postal Code: 123456

### Expected Result
The user cannot complete the checkout process with an empty cart.
The application keeps the user on the Cart page or prevents further checkout steps.

### Actual Result
1. The checkout process is completed successfully.
2. The confirmation message appears: 
"Thank you for your order! Your order has been dispatched, and will arrive just as fast as the pony can get there!"

### Severity
Medium
