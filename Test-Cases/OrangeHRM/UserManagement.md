# User Management Test Cases

## TC-UM-001 Admin can add a new employee

### Pre-Conditions
Admin logged in

### Steps
1. Navigate to Admin tab
2. Click 'Add' button
3. Fill mandatory fields
4. Click 'Save' button

### Test Data
User Role: ESS;
Employee Name: joker john selvam;
Status: Enabled;
Username: IamEmployeeJohn;
Password: IAmEmployee123

### Expected Result
New employee is created successfully

---

## TC-UM-002 Employee cannot access Admin module via navigation
 
### Pre-Conditions
Employee logged in
 
### Steps
1. Login as employee
2. Try opening Admin module from the navigation menu

### Test Data
Username: IamEmployeeJohn;
Password: IAmEmployee123
 
### Expected Result
Admin module is not available in the navigation
 
---
 
## TC-UM-003 Employee cannot access Admin module via direct URL
 
### Pre-Conditions
Employee logged in
 
### Steps
1. Login as employee
2. Copy the Admin module URL: https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers
3. Paste the URL directly into the browser
4. Press Enter

### Test Data
Username: IamEmployeeJohn;
Password: IAmEmployee123
 
### Expected Result
Access is denied. User receives a "Credential Required" message.

