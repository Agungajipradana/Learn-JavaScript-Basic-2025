# Boolean Data Type in JavaScript

In JavaScript, the **Boolean** data type represents one of two values: `true` or `false`. It is commonly used in conditional statements, logic comparisons, and flow control.

## Boolean Literals

Boolean values can be written directly as:

```js
true;
false;
```

## Creating Boolean Values

You can create Boolean values in several ways:

### Using Boolean Literals

```js
let isActive = true;
let isComplete = false;
```

### Using the Boolean Constructor

```js
let isActive = Boolean(true); // true
let isComplete = Boolean(false); // false
```

Note: Using **new Boolean()** creates a Boolean object, not a primitive:

```js
let isAvailable = new Boolean(false);
console.log(typeof isAvailable); // "object"
```

## Truthy and Falsy Values

In JavaScript, values are automatically converted to Boolean in logical contexts (like **if** statements). These are called truthy and falsy values.

### Falsy Values

These values are considered **false** when converted to Boolean:

- **false**
- **0** and **-0**
- **""** (empty string)
- **null**
- **undefined**
- **NaN**

Example:

```js
if (0) {
  console.log("This will not run.");
}
```

### Truthy Values

All values other than falsy ones are considered **true**.

Examples:

```js
if ("hello") {
  console.log("This will run.");
}

if ([]) {
  console.log("Empty array is truthy.");
}
```

## Boolean in Conditional Statements

Booleans are often used in conditions:

```js
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}
```

## Summary

- The Boolean type has only two literal values: **true** and **false**.
- All JavaScript values have an inherent Boolean value.
- Falsy values convert to **false**; everything else is truthy.
- Be cautious when using the **Boolean** constructor — prefer the primitive form.
