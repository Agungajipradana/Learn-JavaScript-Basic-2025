# JavaScript Primitive Data Types

In JavaScript, **primitive data types** are the most basic and immutable data types. These values are not objects and have no methods. JavaScript provides **seven** primitive data types:

---

## 1. Number

Represents both integer and floating-point numbers.

```js
let age = 25; // Integer
let score = 89.5; // Floating-point
```

## 2. String

A sequence of characters, enclosed in single ('), double ("), or backtick (`) quotes.

```js
let name = "Alice";
let greeting = "Hello, world!";
let message = `Hello, ${name}`;
```

## 3. Boolean

Represents a logical value that can only be true or false.

```js
let isLoggedIn = true;
let isAdmin = false;
```

## 4. Null

Represents an intentional absence of any value.

```js
let selectedProduct = null;
```

## 5. Undefined

A variable that has been declared but has not been assigned a value.

```js
let result;
console.log(result); // undefined
```

## 6. Symbol (ES6)

Used to create unique identifiers, often for object properties.

```js
const id = Symbol("id");
const anotherId = Symbol("id");
console.log(id === anotherId); // false
```

## 7. BigInt (ES11)

Used for representing integers beyond the safe integer limit of the Number type.

```js
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"
```
