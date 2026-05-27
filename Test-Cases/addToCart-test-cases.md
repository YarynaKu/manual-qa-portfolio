# Add to Cart Test Cases

## TC-001 Verify that a Product can be successfully added to the cart by a Logged-in User

### Pre-Condtitions
1. The user is logged in and on the Products page (https://www.saucedemo.com/inventory.html)

### Steps
1. Click 'Add to cart' button for any product
2. Click on the Shopping Cart icon (top-right corner)

### Test Data
username: standard_user,
password: secret_sauce

### Expected Result
1. The selected product is added to the shopping cart
2. The shopping cart badge displays the correct number of added items.


## TC-002 Verify Error Message when accessing the Product page without login

### Pre-Condtitions
User is not logged in

### Steps
1. Navigate directly to the Products page using the URL  - https://www.saucedemo.com/inventory.html

### Expected Result
1. Error message is displayed: "Epic sadface: You can only access '/inventory.html' when you are logged in." 
2. User remains on the Login page





