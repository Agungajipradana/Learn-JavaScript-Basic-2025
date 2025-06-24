# JavaScript Destructuring and Spread Operator

This document explains JavaScript's destructuring and spread/rest operators with examples and detailed use cases.

---

## 1. Destructuring Arrays

Destructuring arrays allows you to unpack values from arrays into distinct variables.

```js
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

### Default Values

```js
const [x = 10, y = 20] = [5];
console.log(x); // 5
console.log(y); // 20
```

### Skipping Elements

```js
const [first, , third] = [1, 2, 3];
console.log(first); // 1
console.log(third); // 3
```

---

## 2. Destructuring during Iteration

You can destructure elements directly in loops.

```js
const users = [
  ["Alice", 25],
  ["Bob", 30],
];
for (const [name, age] of users) {
  console.log(`${name} is ${age}`);
}
```

---

## 3. Destructuring Objects

Object destructuring extracts values based on property names.

```js
const person = { name: "John", age: 26 };
const { name, age } = person;
console.log(name); // John
console.log(age); // 26
```

### Default Values

```js
const { gender = "Unknown" } = person;
console.log(gender); // Unknown
```

---

## 4. Renaming during Destructuring

You can assign new variable names while destructuring.

```js
const user = { username: "johndoe" };
const { username: userName } = user;
console.log(userName); // johndoe
```

---

## 5. Object Parameters without Destructuring

Passing an object to a function without destructuring:

```js
function greet(user) {
  console.log(`Hello ${user.name}`);
}

greet({ name: "John" });
```

---

## 6. Object Parameters with Destructuring

Destructuring directly in function parameters:

```js
function greet({ name }) {
  console.log(`Hello ${name}`);
}

greet({ name: "John" });
```

---

## 7. Destructuring Object during Iteration

Useful when iterating over an array of objects.

```js
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

for (const { name, age } of people) {
  console.log(`${name} is ${age}`);
}
```

---

## 8. Spread or Rest Operator

The `...` operator is used for spreading values or collecting them into a single variable.

### Rest in Destructuring

```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]
```

---

## 9. Spread Operator to Get the Rest of Array Elements

Used to collect remaining values into a new array.

```js
const [a, ...others] = [10, 20, 30, 40];
console.log(a); // 10
console.log(others); // [20, 30, 40]
```

---

## 10. Spread Operator to Copy Array

Creates a shallow copy of an array.

```js
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
```

---

## 11. Spread Operator to Copy Object

Creates a shallow copy of an object.

```js
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy); // { a: 1, b: 2 }
```

---

## 12. Spread Operator with Arrow Function

Spreads an array of arguments when calling a function.

```js
const sum = (a, b, c) => a + b + c;
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6
```

---

## 13. Combining Destructuring and Spread

You can mix destructuring and the spread operator.

```js
const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

const { name, ...rest } = user;
console.log(name); // John
console.log(rest); // { id: 1, email: "john@example.com" }
```

---

## Summary

- Use **array destructuring** to unpack values.
- Use **object destructuring** to extract properties.
- **Rename** destructured values when needed.
- Use **spread** to copy or merge arrays/objects.
- Use **rest** to collect multiple items into an array or object.
- Combine both to write cleaner, more expressive code.
