# JavaScript Error Handling

In JavaScript, **error handling** is essential to gracefully manage unexpected situations and keep the application from crashing. The main structure used to handle errors is the `try...catch...finally` block.

## 1. try...catch...finally

```javascript
try {
  // Code that may throw an error
} catch (err) {
  // Code to handle the error
} finally {
  // Code that always runs, regardless of error occurrence
}
```

### Explanation:

- `try`: Contains code that may throw an error during execution.
- `catch`: Executes if an error is thrown in the `try` block. The error object (`err`) contains details about what went wrong.
- `finally`: Executes after the `try` and `catch` blocks, regardless of whether an error was thrown or not. This is typically used for cleanup tasks (e.g., closing a connection, stopping a loader).

## 2. Error Types

JavaScript provides several built-in error types. Some of the most common ones include:

### a. ReferenceError

Occurs when referencing a variable that hasn't been declared.

```javascript
console.log(nonExistentVariable); // ReferenceError: nonExistentVariable is not defined
```

### b. SyntaxError

Occurs when the code has a syntax mistake, such as missing brackets or incorrect punctuation.

```javascript
try {
  eval('if (true { console.log("Hi") }'); // SyntaxError
} catch (err) {
  console.error(err.name); // SyntaxError
  console.error(err.message);
}
```

### c. TypeError

Occurs when a value is not of the expected type, such as calling a non-function or accessing a property of `undefined`.

```javascript
let num = 42;
num(); // TypeError: num is not a function
```

---
