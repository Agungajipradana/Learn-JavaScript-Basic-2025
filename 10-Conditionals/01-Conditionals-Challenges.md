# JavaScript Conditional Challenges

A collection of conditional logic challenges to test and improve your JavaScript skills. Start with the easier ones and progress to the more advanced problems.

---

## Easy Challenges

### 1. Check if a number is positive
**Description**: Write a program that prints "Positive number" if the number is greater than 0.

### 2. Check if a user is an adult
**Description**: Given an age value, print "Adult" if age is 18 or above, otherwise print "Minor".

### 3. Login status
**Description**: Print "Welcome!" if `isLoggedIn` is true, otherwise print "Please log in".

### 4. Even or odd
**Description**: Write a program that prints "Even" if the number is divisible by 2, otherwise print "Odd".

---

## Medium Challenges

### 5. Grade evaluator
**Description**: Given a score (0–100), print the corresponding grade:
- 90–100: A
- 80–89: B
- 70–79: C
- 60–69: D
- Below 60: F

### 6. User access level
**Description**: Use a `switch` statement to print access level based on user role:
- "admin" → Full access
- "editor" → Edit content
- "viewer" → Read-only
- Others → No access

### 7. Free shipping checker
**Description**: If a user's total purchase is greater than or equal to 100 or they are a premium member, print "Free shipping". Otherwise, print "Shipping fee applied".

### 8. Theme display toggle
**Description**: Given a `darkMode` boolean, use a ternary operator to display:
- "Dark Theme Enabled"
- "Light Theme Enabled"

---

## Hard Challenges

### 9. Login validation with multiple conditions
**Description**: If `username` and `password` are both non-empty strings, print "Login successful". If either is empty, print which field is missing.

### 10. Complex access logic
**Description**: A user should be granted access only if:
- They are an "admin" and verified, OR
- They are a "moderator" and active

Print "Access granted" or "Access denied".

### 11. Product availability message
**Description**: Given `stock`, print:
- "In Stock" if stock > 0
- "Low Stock" if stock is less than or equal to 5 but more than 0
- "Out of Stock" if stock is 0

### 12. Truthy vs Falsy tester
**Description**: Given a value, determine whether it is truthy or falsy using an `if` condition and print the result.

---

## Expert Challenge

### 13. Smart input parser
**Description**: Write a function that accepts a value from a form (could be a string, number, undefined, or null) and:
- Trims the input if it is a string
- Converts to number if it is a numeric string
- Returns "No input provided" if the input is falsy (but not 0)
- Otherwise, returns the value as-is
