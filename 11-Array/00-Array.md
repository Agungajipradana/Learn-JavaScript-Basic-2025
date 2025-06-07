# JavaScript Array

## What is an Array?

An **array** in JavaScript is a special variable used to store **multiple values** in a single variable. The values can be of any data type: numbers, strings, booleans, objects, functions, or even other arrays.

```javascript
let fruits = ["apple", "orange", "banana"];
```

## Characteristics of Arrays

- Elements are accessed using zero-based index.

- Arrays are dynamic in size.

- Can hold mixed data types.

- Arrays are objects in JavaScript.

## Creating Arrays

```js
// 1. Array literal
let numbers = [1, 2, 3, 4];

// 2. Using the Array constructor
let colors = new Array("red", "blue", "yellow");

// 3. Empty array
let empty = [];
```

## Accessing Elements

```js
let fruits = ["apple", "orange", "banana"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "banana"
```

## Key Property

`length`

Returns the number of elements in an array.

```js
let nums = [1, 2, 3];
console.log(nums.length); // 3
```

## Common Array Methods

### Adding / Removing Elements

| Method      | Description                    |
| ----------- | ------------------------------ |
| `push()`    | Adds elements to the end       |
| `pop()`     | Removes the last element       |
| `unshift()` | Adds elements to the beginning |
| `shift()`   | Removes the first element      |

```js
let fruits = ["apple"];
fruits.push("orange"); // ["apple", "orange"]
fruits.pop(); // ["apple"]
fruits.unshift("banana"); // ["banana", "apple"]
fruits.shift(); // ["apple"]
```

---

### Accessing and Modifying

| Method       | Description                                        |
| ------------ | -------------------------------------------------- |
| `indexOf()`  | Returns index of first occurrence                  |
| `includes()` | Checks if an item exists in the array              |
| `splice()`   | Adds/removes elements from a specific position     |
| `slice()`    | Extracts a section of the array                    |
| `at()`       | Returns element at a specified index (supports -1) |

```js
let nums = [1, 2, 3, 4, 5];
nums.splice(2, 1); // [1, 2, 4, 5]
nums.slice(1, 3); // [2, 4]
nums.at(-1); // 5
```

---

### Iteration and Transformation

| Method        | Description                                          |
| ------------- | ---------------------------------------------------- |
| `forEach()`   | Executes a function for each element                 |
| `map()`       | Returns a new array after applying a transformation  |
| `filter()`    | Returns a new array with elements that pass a test   |
| `reduce()`    | Reduces the array to a single value                  |
| `find()`      | Finds the first matching element                     |
| `findIndex()` | Finds index of the first matching element            |
| `every()`     | Returns true if all elements pass the test           |
| `some()`      | Returns true if at least one element passes the test |

```js
let nums = [1, 2, 3, 4, 5];

nums.forEach((n) => console.log(n));
let doubled = nums.map((n) => n * 2); // [2, 4, 6, 8, 10]
let evens = nums.filter((n) => n % 2 === 0); // [2, 4]
let sum = nums.reduce((a, b) => a + b); // 15
```

---

### Advanced Manipulation

| Method      | Description                            |
| ----------- | -------------------------------------- |
| `sort()`    | Sorts elements (by default as strings) |
| `reverse()` | Reverses array order                   |
| `join()`    | Joins elements into a string           |
| `concat()`  | Merges arrays                          |
| `flat()`    | Flattens nested arrays                 |
| `fill()`    | Fills array with a static value        |

```js
let letters = ["b", "a", "c"];
letters.sort(); // ["a", "b", "c"]
letters.reverse(); // ["c", "b", "a"]
letters.join("-"); // "c-b-a"

let a = [1, 2];
let b = [3, 4];
let merged = a.concat(b); // [1, 2, 3, 4]

let nested = [1, [2, [3]]];
nested.flat(2); // [1, 2, 3]
```

---

## Real Example

```js
let data = [10, 20, 30, 40, 50];

// Add an item
data.push(60);

// Filter values > 30
let over30 = data.filter((n) => n > 30);

// Calculate total
let total = data.reduce((a, b) => a + b, 0);

// Transform values
let multiplied = data.map((n) => n * 2);

// Output
console.log("Data:", data);
console.log("Over 30:", over30);
console.log("Total:", total);
console.log("Multiplied:", multiplied);
```

## Summary

- Arrays store multiple values in one variable.

- JavaScript provides many built-in methods for manipulation.

- Mastering array methods is key to effective JavaScript development.
