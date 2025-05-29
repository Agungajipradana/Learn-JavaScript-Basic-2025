# JavaScript Conditionals

Conditionals allow you to execute different blocks of code depending on whether a given condition evaluates to `true` or `false`.

---

## 1. `if` Statement

The `if` statement executes a block of code only if a specified condition is `true`.

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

Syntax

```js
if (condition) {
  // code to execute if condition is true
}
```

## 2. `if...else` Statement

Use `else` to define a block of code that runs if the condition is false.

```js
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}
```

## 3. `if...else if...else` Statement

Use this when you have multiple conditions to check.

```js
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

## 4. `switch` Statement

The `switch` statement is used to perform different actions based on different values of a variable.

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("End of the work week");
    break;
  default:
    console.log("Just another day");
}
```

Use `break` to stop the execution inside the switch. `default` runs if no matching case is found.

## 5. Ternary Operator

The ternary operator is a shorthand for `if...else`. It returns one of two values based on a condition.

```js
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);
```

Syntax

```js
condition ? valueIfTrue : valueIfFalse;
```

## 6. Logical Operators with Conditionals

You can combine multiple conditions using logical operators:

- `&&` (AND)

- `||` (OR)

- `!` (NOT)

```js
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted.");
}
```

## 7. Truthy and Falsy Values

In JavaScript, the following values are considered falsy:

- `false`

- `0`

- `""` (empty string)

- `null`

- `undefined`

- `NaN`

All other values are considered truthy.

```js
if ("hello") {
  console.log("This will run because the string is truthy.");
}
```

## Summary Table

| Conditional Type      | Use Case                                   |
| --------------------- | ------------------------------------------ |
| `if`                  | Run code if condition is true              |
| `if...else`           | One block for true, another for false      |
| `if...else if...else` | Multiple conditions                        |
| `switch`              | Check multiple values of a single variable |
| Ternary operator      | Concise `if...else` in a single line       |
| Logical operators     | Combine or negate conditions               |
