# JavaScript Error Handling Challenges

## Easy Level

1. **Basic `try...catch`**
   Write a `try...catch` block that handles a ReferenceError by logging a message.

2. **`finally` block execution**
   Use `try...catch...finally` to show a message that always runs, regardless of an error.

3. **Trigger a `SyntaxError` using `eval()`**
   Use `eval()` to execute invalid code and catch the SyntaxError.

4. **Cause and catch a `TypeError`**
   Call a number as if it's a function, and catch the resulting error.

5. **Print error details**
   In the `catch` block, log the error’s name and message separately.

6. **Catch an error from a function**
   Create a function that throws an error, and call it inside a `try...catch`.

7. **Use custom error message**
   Manually throw an error using `throw new Error("Custom error message")`.

8. **Validate user input**
   Simulate checking if a username is empty, and throw an error if it is.

9. **Log stack trace**
   Catch an error and log `err.stack` to see where it occurred.

10. **Handle JSON parsing errors**
    Try to parse an invalid JSON string using `JSON.parse()` and catch the error.

---

## Medium Level

1. **Handle multiple error types**
   Use `instanceof` to handle `TypeError`, `ReferenceError`, and `SyntaxError` differently.

2. **Function with optional error throwing**
   Create a function that optionally throws an error and use `try...catch` to handle it.

3. **Nested `try...catch` blocks**
   Write nested error handlers for different operations.

4. **Use error handling in API simulation**
   Simulate fetching data and throw an error if response is null.

5. **Create and throw a custom error class**
   Define a class `ValidationError` and throw it in a `try` block.

6. **Handle async errors with `.catch()`**
   Simulate a rejected promise and handle the error using `.catch()`.

7. **Use async/await in `try...catch`**
   Create an async function that throws an error and catch it with `try...catch`.

8. **Re-throw an error**
   Catch an error, log it, and then re-throw it.

9. **Validate multiple fields**
   Throw errors for invalid `name`, `email`, or `age` values in an object.

10. **Centralize error handling in a function**
    Wrap any function in a utility function that logs and catches its errors.

---

## Hard Level

1. **Error handling in Express route**
   Simulate a backend API route with input validation and custom error responses.

2. **Use middleware for error logging**
   Build a custom Express middleware that logs all server-side errors.

3. **Async function chain with error propagation**
   Create chained async calls where one throws, and the error bubbles up.

4. **Mock database operation with error**
   Simulate a database call that throws an error and handle it in a controller.

5. **Throw error conditionally**
   Build a function that only throws if a given condition is met (e.g., rate limiting).

6. **Handle unexpected errors globally**
   Use `process.on('uncaughtException')` to handle unhandled server errors.

7. **Fail-safe JSON parsing wrapper**
   Write a function that safely parses JSON and returns `null` on failure.

8. **Track and log error counts**
   Use `console.count()` inside a catch block to count how many times an error occurred.

9. **Group error logs**
   Use `console.group()` and `console.error()` to structure error details.

10. **Build a custom logger for different error types**
    Create a utility function `logError(err)` that logs formatted messages for ReferenceError, TypeError, etc.

---
