# Leave Test Cases

Source of truth for execution status: `Functional_TestSuite.xlsx` → `Leave` sheet (TS004).
Edge-case test cases below (TC-LEAVE-003 to 007) were drafted with AI assistance and reviewed/corrected — see [`ai-workflow-examples/AI-Assisted-Test-Design-Example.md`] for the full before/after.

## TC-LEAVE-001 Employee can apply for leave

### Pre-Conditions
Employee logged in

### Steps
1. Navigate to Leave tab
2. Select leave type
3. Select dates (from - to)
4. Click 'Apply' button

### Test Data
Leave: CAN - Vacation

### Expected Result
Leave request should be submitted successfully.
Leave request is displayed in the 'My Leave' tab.

---

## TC-LEAVE-002 Admin can approve leave request

### Pre-Conditions
1. Admin logged in
2. Leave request exists

### Steps
1. Navigate to Leave tab
2. Click 'Approve' button

### Expected Result
Leave request status should change to Scheduled

---

## TC-LEAVE-003 Apply for leave exactly equal to available balance

### Pre-Conditions
Employee has exactly 2 days of Annual leave remaining

### Steps
1. Apply for 2 days of Annual leave
2. Submit

### Expected Result
Request submitted successfully; balance shows 0 remaining

---

## TC-LEAVE-004 Apply for leave exceeding available balance

### Pre-Conditions
Employee has 1 day of Annual leave remaining

### Steps
1. Apply for 3 days of Annual leave
2. Submit

### Expected Result
System blocks submission with a clear "insufficient balance" message

---

## TC-LEAVE-005 Apply for overlapping leave dates

### Pre-Conditions
Employee already has an approved/pending leave request for Aug 10-12

### Steps
1. Submit a new leave request for Aug 11-13
2. Submit

### Expected Result
System rejects with an overlap validation message

---

## TC-LEAVE-006 Cancel an already-approved leave request

### Pre-Conditions
Employee has an approved leave request for a future date

### Steps
1. Navigate to My Leave
2. Select the approved request
3. Cancel

### Expected Result
Status changes to "Cancelled"; balance is restored

---

## TC-LEAVE-007 End date before start date

### Pre-Conditions
Employee logged in, on Apply Leave form

### Steps
1. Set end date earlier than start date
2. Submit

### Expected Result
Field-level validation error; submission blocked

---

The two cases below are sourced from the OrangeHRM Help Center ("How to Use OrangeHRM Leave Module [ESS]") 
 **Not yet executed** — need to confirm the blackout-period feature is configured on the public demo before running TC-LEAVE-008, since it's an admin-configurable setting that may be off by default.

## TC-LEAVE-008 Leave application blocked during a "Strict" blackout period

### Pre-Conditions
Admin has configured a Leave Blackout Period with enforcement level "Strict" covering a specific date range

### Steps
1. Log in as employee
2. Navigate to Apply Leave
3. Select dates that fall within the configured blackout period
4. Click 'Apply'

### Expected Result
Submission is blocked; the blackout period is visibly indicated on the Leave Calendar (per the Help Center article, marked "Strict")

## TC-LEAVE-009 Leave application allowed with warning during a "Warning Only" blackout period

### Pre-Conditions
Admin has configured a Leave Blackout Period with enforcement level "Warning Only"

### Steps
1. Log in as employee
2. Navigate to Apply Leave
3. Select dates within the blackout period
4. Click 'Apply'

### Expected Result
A warning message is shown, but the employee can still proceed and submit the request

## TC-LEAVE-010 Overnight shift leave is visually indicated

### Pre-Conditions
Employee is configured to work an overnight shift

### Steps
1. Log in as employee on an overnight shift
2. Apply for leave covering a shift day
3. View the request in Leave Calendar / My Leave

### Expected Result
The request displays a distinct indicator (green arrow, per the Help Center article) showing it spans an overnight shift