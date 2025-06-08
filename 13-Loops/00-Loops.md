# Loops in JavaScript

Loops are fundamental constructs in JavaScript used to execute a block of code repeatedly under certain conditions. They help reduce redundancy and make code cleaner, especially when performing repetitive tasks.

## Why Use Loops?

Instead of writing the same code multiple times, loops allow you to:

- Execute code multiple times
- Iterate over arrays, objects, or strings
- Automate repetitive logic

---

## Types of Loops in JavaScript

JavaScript provides several types of loops:

### 1. `for` Loop

The `for` loop is used when the number of iterations is known.

**Syntax**:

```js
for (initialization; condition; increment) {
  // code block to execute
}
```

Example:

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
```

### 2. `while` Loop

The `while` loop executes a block of code as long as the condition is `true`.

Syntax:

```js
while (condition) {
  // code block to execute
}
```

Example:

```js
let i = 0;
while (i < 5) {
  console.log("While loop:", i);
  i++;
}
```

### 3. `do...while` Loop

The `do...while` loop runs the block at least once, then checks the condition.

Syntax:

```js
do {
  // code block to execute
} while (condition);
```

Example:

```js
let i = 0;
do {
  console.log("Do while loop:", i);
  i++;
} while (i < 5);
```

## Looping Through Collections

### 4. `for...of` Loop

Used to iterate over iterable objects like arrays or strings.

Syntax:

```js
for (const item of iterable) {
  // code block to execute
}
```

Example:

```js
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

### 5. `for...in` Loop

Used to iterate over the **enumerable propertie**s of an object.

Syntax:

```js
for (const key in object) {
  // code block to execute
}
```

Example:

```js
const user = { name: "Alice", age: 25 };
for (const key in user) {
  console.log(key, ":", user[key]);
}
```

## Control Statements

### break

Stops the loop immediately.

Example:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

### continue

Skips the current iteration and proceeds to the next.

Example:

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

## Best Practices

Use `for` when you know the exact number of iterations.

Use `for...of` for arrays and strings.

Use `for...in` for objects (but be cautious with inherited properties).

Avoid infinite loops by ensuring the loop condition will eventually be false.

## Summary

| Loop Type    | Use Case                         |
| ------------ | -------------------------------- |
| `for`        | Known number of iterations       |
| `while`      | Condition-based repetition       |
| `do...while` | At least one execution           |
| `for...of`   | Iterating over arrays/strings    |
| `for...in`   | Iterating over object properties |
