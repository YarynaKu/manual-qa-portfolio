# Add to Cart Test Cases

## TC001 Validate successful adding of a Product to the cart by a Logged-in User

### Pre-Condtitions
1. The user is logged in and on the Products page (https://www.saucedemo.com/inventory.html)

### Steps
1. Click the 'Add to cart' button next to any product
2. Go to the Shopping Cart by clicking the cart icon (top right corner)

### Test Data
username: standard_user
password: secret_sauce

### Expected Result
1. The selected product is added to the shopping cart
2. The shopping cart badge displays the correct number of added items.


## TC002 Validate Error Message when navigating to the product page without logged in 

### Steps
1. Navigate directly to the Products page using the URL  - https://www.saucedemo.com/inventory.html

### Expected Result
1. The error message appears: "Epic sadface: You can only access '/inventory.html' when you are logged in." 
2. The user remains on the Login page


## TC003 Validate successful removal of a Product from the cart by a Logged-in User

### Pre-Condtitions
1. The user is logged in and on the Products page (https://www.saucedemo.com/inventory.html)
2. At least one product has been added to the shopping cart

### Steps
1. Click the 'Remove' button for a product
2. Go to the Shopping Cart by clicking the cart icon (top right corner)

### Test Data
username: standard_user
password: secret_sauce

### Expected Result
1. The selected product is removed from the shopping cart
2. The number displayed on the shopping cart icon decreases accordingly



