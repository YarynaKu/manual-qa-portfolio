# Add to Cart Test Cases

## TC-001 Verify that a specific product can be removed from the shopping cart

### Pre-Condtitions
1. The user is logged in and on the Products page (https://www.saucedemo.com/inventory.html)
2. At least one product has been added to the shopping cart

### Steps
1. Click the 'Remove' button for a product on the Products page
2. Go to the Shopping Cart by clicking the cart icon (top right corner)

### Test Data
username: standard_user,
password: secret_sauce

### Expected Result
1. The selected product is removed from the cart
2. The shopping cart badge counter decreases accordingly


## TC-002 Verify that a specific product can be removed from the shopping cart

### Pre-Condtitions
1. User is logged in and on the Products page (https://www.saucedemo.com/inventory.html)
2. At least one product is added to the shopping cart

### Steps
1. Click on the Shopping Cart icon (top-right corner)
2. Click the 'Remove' button for the added product

### Test Data
username: standard_user,
password: secret_sauce

### Expected Result
1. The selected product is removed from the cart
2. The cart badge counter decreases by 1 accordingly


## TC-003 Verify that all products can be removed from the shopping cart

### Pre-Condtitions
1. The user is logged in and on the Products page (https://www.saucedemo.com/inventory.html)
2. At least two products are added to the shopping cart

### Steps
1. Click on the Shopping Cart icon (top-right corner)
2. For each product in the cart, click the 'Remove' button

### Test Data
username: standard_user,
password: secret_sauce

### Expected Result
1. All products are removed from the shopping cart
2. The cart badge counter is cleared (disappears)
3. The cart is empty 





