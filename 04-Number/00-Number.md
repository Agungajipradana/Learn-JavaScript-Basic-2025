# JavaScript Number Data Type and Its Built-in Methods

## Overview

In JavaScript, `Number` is a primitive data type used to represent both integer and floating-point numbers. It follows the IEEE 754 standard for floating-point arithmetic.

### Examples of Numbers:

```js
let intNum = 42;
let floatNum = 3.14;
let negativeNum = -100;
let scientificNum = 1.23e6; // 1.23 × 10^6
```

## Built-in Number MethodsBuilt-in Number Methods

JavaScript provides several built-in methods to work with numbers, available as methods on the `Number` prototype or global `Number` object.

### 1. .toString([radix])

Converts a number to a string. Optional radix defines the base (between 2 and 36).

```js
let num = 255;
num.toString(); // "255"
num.toString(16); // "ff"
num.toString(2); // "11111111"
```

### 2. .toFixed(digits)

Formats number with fixed number of decimals.

```js
let num = 3.14159;
num.toFixed(2); // "3.14"
num.toFixed(0); // "3"
```

### 3. .toExponential([fractionDigits])

Returns exponential (scientific) notation.

```js
let num = 123456;
num.toExponential(2); // "1.23e+5"
```

### 4. .toPrecision(precision)

Formats number with total number of digits.

```js
let num = 3.14159;
num.toPrecision(2);  // "3.1"
num.toPrecision(5);  // "3.1416"
```

### 5. .valueOf()

Returns the primitive value of a Number object.

```js
let num = new Number(10);
num.valueOf(); // 10
```

## Static Methods (Number Object)

### 1. Number.isNaN(value)

Returns true if the value is NaN and of type number.

```js
Number.isNaN(NaN);       // true
Number.isNaN("hello");   // false
```

### 2. Number.isFinite(value)

Checks if the value is a finite number.

```js
Number.isFinite(100);     // true
Number.isFinite(Infinity); // false
Number.isFinite("100");    // false
```

### 3. Number.isInteger(value)

Returns true if the value is an integer.

```js
Number.isInteger(10);     // true
Number.isInteger(10.5);   // false
```

### 4. Number.parseInt(string, [radix])

Parses a string and returns an integer.

```js
Number.parseInt("42");      // 42
Number.parseInt("101", 2);  // 5 (binary)
```

### 5. Number.parseFloat(string)

Parses a string and returns a float.

```js
Number.parseFloat("3.14");    // 3.14
Number.parseFloat("123abc");  // 123
```

## Number Properties

| Property                   | Description                      |
| -------------------------- | -------------------------------- |
| `Number.MAX_VALUE`         | Largest possible number          |
| `Number.MIN_VALUE`         | Smallest positive number         |
| `Number.MAX_SAFE_INTEGER`  | Max safe integer (`2^53 - 1`)    |
| `Number.MIN_SAFE_INTEGER`  | Min safe integer (`-(2^53 - 1)`) |
| `Number.POSITIVE_INFINITY` | Positive Infinity                |
| `Number.NEGATIVE_INFINITY` | Negative Infinity                |
| `Number.NaN`               | Not-A-Number value               |

## Example Use Cases

```js
let x = 10.56789;

console.log(x.toFixed(2));          // "10.57"
console.log(x.toPrecision(4));      // "10.57"
console.log(Number.isInteger(x));   // false
console.log(Number.parseInt("123abc")); // 123
console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
```