# JavaScript Console Object Challenges

## Easy Level

1. **Use `console.log()`**
   Log a simple message like "Hello, World!" to the console.

2. **Log multiple values**
   Log a string, number, and object in one `console.log()` call.

3. **Use `console.info()`**
   Display an informational message using `console.info()`.

4. **Use `console.warn()`**
   Show a warning about deprecated usage.

5. **Use `console.error()`**
   Display an error message to simulate a failed operation.

6. **Create a small array and use `console.table()`**
   Log an array of fruits using `console.table()`.

7. **Measure execution time**
   Use `console.time()` and `console.timeEnd()` around a loop.

8. **Use `console.count()`**
   Call a function 3 times and count the calls using `console.count()`.

9. **Use `console.clear()`**
   Clear the console and display a message afterward.

10. **Use `console.assert()`**
    Test a false condition and log a message only when it fails.

---

## Medium Level

1. **Log a nested object with `console.log()`**
   Log a nested object representing a user profile.

2. **Group console messages**
   Use `console.group()` and `console.groupEnd()` to organize logs.

3. **Log a table of objects with various keys**
   Display a table of users with name, age, and role using `console.table()`.

4. **Time an expensive function**
   Measure execution time of a function like sorting a large array.

5. **Use `console.count()` with labels**
   Count two different events using different labels.

6. **Use `console.assert()` to validate user input**
   Simulate an age check where age must be 18 or older.

7. **Log data with `console.info()` and compare with `log()`**
   Observe any differences in styling or output.

8. **Simulate an error case with `console.error()`**
   Manually trigger an error if a value is `undefined`.

9. **Use multiple groups**
   Nest groups using `console.group()` and `console.groupCollapsed()`.

10. **Clear logs conditionally**
    Use a condition (e.g., `if (debugMode)`) to decide when to clear the console.

---

## Hard Level

1. **Create a custom logger function**
   Wrap `console.log()`, `warn()`, and `error()` into one reusable function.

2. **Track multiple counters dynamically**
   Create a function that takes event names and uses `console.count()` to track them.

3. **Benchmark different loops**
   Compare performance of `for`, `while`, and `forEach` using `console.time()`.

4. **Log complex nested arrays as tables**
   Create an array of nested objects and log with `console.table()`.

5. **Build a collapsible error group**
   Group logs under `console.groupCollapsed()` and simulate an error flow.

6. **Implement assertion-based validation**
   Use `console.assert()` to verify multiple fields in an object (e.g., name, age, email).

7. **Create a recursive logger**
   Traverse a deeply nested object and log its keys with indentation using groups.

8. **Simulate login attempts and track count**
   Track user login attempts per user using `console.count()` and reset per session.

9. **Log data then clear it on timeout**
   Log system status updates and clear them after a few seconds using `setTimeout` and `console.clear()`.

10. **Create a performance monitor**
    Log memory usage (mocked), response time, and other metrics using all relevant console methods.
