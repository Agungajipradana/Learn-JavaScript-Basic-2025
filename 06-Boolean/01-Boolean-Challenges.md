# JavaScript Boolean Challenges

This set of challenges is designed to help you practice and master Boolean logic in JavaScript. The challenges are grouped into three levels: Easy, Medium, and Hard.

---

## Easy (Level 1)

1. **Is Positive**

   - Write a function `isPositive(num)` that returns `true` if the number is greater than 0.

2. **Is Empty String**

   - Create a function `isEmpty(str)` that returns `true` if the input string is empty.

3. **Is Even**

   - Create a function `isEven(n)` that returns `true` if the number is even.

4. **Is Logged In**

   - Given a Boolean variable `isLoggedIn`, use an `if` statement to log a welcome message only when `isLoggedIn` is `true`.

5. **Boolean from Comparison**

   - Return the result of the expression `10 > 5` as a Boolean.

6. **Negate Boolean**

   - Write a function `negate(bool)` that returns the opposite of the Boolean input.

7. **Is Adult**

   - Write a function `isAdult(age)` that returns `true` if age is 18 or above.

8. **Truthy Check**

   - Write a function that takes a value and returns `true` if it is truthy.

9. **Falsy Check**

   - Write a function that takes a value and returns `true` if it is falsy.

10. **Always True**
    - Create a function that always returns `true`.

---

## Medium (Level 2)

1. **Password Match**

   - Write a function that takes two strings and returns `true` if they match exactly.

2. **Is Uppercase**

   - Write a function that checks if a given string is entirely uppercase.

3. **Can Vote**

   - Write a function `canVote(age, citizenship)` that returns `true` only if age >= 18 and citizenship is `true`.

4. **Multiple Conditions**

   - Create a function `isQualified(score, passedInterview)` that returns `true` only if both conditions are satisfied.

5. **Boolean from Function**

   - Write a function that returns a Boolean result based on a comparison (e.g., `x > y`).

6. **Form Validation**

   - Write a function `isFormValid(name, email)` that returns `true` if both fields are non-empty.

7. **Toggle Boolean**

   - Create a function `toggle(bool)` that switches `true` to `false` and vice versa.

8. **Is Weekend**

   - Write a function that takes a string representing a day and returns `true` if the day is "Saturday" or "Sunday".

9. **Login Status Check**

   - Given a variable `user`, return `true` if the user object exists and has a `loggedIn` property set to `true`.

10. **Permission Check**
    - Write a function `hasAccess(role, isAdmin)` that returns `true` if role is "editor" or `isAdmin` is `true`.

---

## Hard (Level 3)

1. **Complex Access Control**

   - Write a function `canAccessPage(user)` that returns `true` if the user is logged in and either an admin or has specific permissions.

2. **Validate Config Flags**

   - Write a function that takes a configuration object and returns `true` only if all required Boolean flags are set to `true`.

3. **Dynamic Role Check**

   - Given a list of roles and a required role, return `true` if the required role exists in the list.

4. **Multi-level Validation**

   - Write a function that validates a form with multiple steps and only returns `true` if all steps are completed successfully.

5. **Time-Based Access**

   - Create a function that returns `true` if the current time is within a specific access window (e.g., between 9am and 5pm).

6. **Advanced Filter**

   - Filter an array of users and return only those with `active: true` and `verified: true`.

7. **Custom Truthiness Filter**

   - Write a custom `filterTruthy()` function that mimics `Boolean()` but excludes some edge cases (e.g., ignores "0" and "false" strings).

8. **Conditional Object Activation**

   - Given an object with several flags, return `true` only if a specific combination of Boolean values is met.

9. **Complex Condition Toggle**

   - Write a state machine toggle that switches between states using multiple Boolean conditions.

10. **Recursive Boolean Check**
    - Write a recursive function that checks if all values in a nested Boolean array are `true`.

---

You can attempt each challenge in a `.js` file and use `console.log()` to verify your results. For harder problems, consider writing test cases or using assertions.
