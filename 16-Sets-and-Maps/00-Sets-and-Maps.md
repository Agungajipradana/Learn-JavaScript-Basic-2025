# Learn JavaScript Basic 2025

## 📘 Sets and Maps in JavaScript

---

## 🔷 Set

### What is a `Set`?

A `Set` is a built-in JavaScript object that lets you store **unique values** of any type. It automatically removes duplicates.

### ✅ Key Characteristics:

- Stores **unique values only**.
- Maintains **insertion order**.
- Does **not use keys or indexes**.

### 🧪 Basic Example:

```js
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will be ignored

console.log(mySet); // Set(2) {1, 2}
```

### 📌 Common Methods and Properties

| Method/Property | Description                    |
| --------------- | ------------------------------ |
| `add(value)`    | Adds a new value               |
| `delete(value)` | Removes a specific value       |
| `has(value)`    | Checks if a value exists       |
| `clear()`       | Removes all values             |
| `size`          | Returns the number of elements |

### 🔄 Iterating Over a Set

```js
const mySet = new Set(["a", "b", "c"]);

for (const item of mySet) {
  console.log(item);
}
// Output: a b c
```

### 📌 Use Case:

Remove duplicates from an array:

```js
const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4]
```

## 🔧 More Set Operations

### ✅ Creating an empty Set

```js
const setA = new Set();
```

### ✅ Creating a Set from an array

```js
const setB = new Set([1, 2, 3]);
```

### ✅ Adding an element to a Set

```js
setA.add(4);
```

### ✅ Deleting an element from a Set

```js
setB.delete(2);
```

### ✅ Checking if an element exists

```js
setB.has(3); // true
```

### ✅ Clearing the Set

```js
setB.clear();
```

### ✅ Union of Sets

```js
const union = new Set([...setA, ...setB]);
```

### ✅ Intersection of Sets

```js
const intersection = new Set([...setA].filter((x) => setB.has(x)));
```

### ✅ Difference of Sets

```js
const difference = new Set([...setA].filter((x) => !setB.has(x)));
```

## 🔶 Map

### What is a `Map?`

A `Map` is a collection of **key-value pairs** where **keys can be any data type** (not just strings or symbols).

### ✅ Key Characteristics:

- Stores **key-value pairs**.

- Keys can be **any type** (object, function, etc.).

- Maintains the insertion order of entries.

### 🧪 Basic Example:

```js
const myMap = new Map();

myMap.set("name", "John");
myMap.set("age", 25);
myMap.set(true, "boolean key");

console.log(myMap.get("name")); // John
console.log(myMap.get(true)); // boolean key
```

### 📌 Common Methods and Properties

| Method/Property   | Description                         |
| ----------------- | ----------------------------------- |
| `set(key, value)` | Adds or updates a key-value pair    |
| `get(key)`        | Retrieves the value for a given key |
| `has(key)`        | Checks if a key exists              |
| `delete(key)`     | Removes a key-value pair            |
| `clear()`         | Removes all key-value pairs         |
| `size`            | Returns the number of entries       |

### 🔄 Iterating Over a Map

```js
const myMap = new Map([
  ["a", 1],
  ["b", 2],
]);

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// a: 1
// b: 2
```

### 📌 Use Case:

Store application configuration:

```js
const config = new Map();
config.set("theme", "dark");
config.set("language", "en");

console.log(config.get("theme")); // dark
```

## 🔧 More Map Operations

### ✅ Creating an empty Map

```js
const mapA = new Map();
```

### ✅ Creating a Map from an array

```js
const mapB = new Map([
  ["name", "Alice"],
  ["age", 30],
]);
```

### ✅ Adding values to the Map

```js
mapA.set("country", "Indonesia");
```

### ✅ Getting a value from Map

```js
mapB.get("name"); // "Alice"
```

### ✅ Checking key in Map

```js
mapB.has("age"); // true
```

## 🆚 Comparison: Set vs Map

| Feature            | Set                        | Map                                    |
| ------------------ | -------------------------- | -------------------------------------- |
| Structure          | Unique values              | Key-value pairs                        |
| Key support        | No keys                    | Keys can be any type                   |
| Duplicates allowed | No                         | Keys must be unique, values can repeat |
| Value access       | Iteration or `.has(value)` | `.get(key)`                            |
| Order              | Preserved                  | Preserved                              |

## 📚 Summary

- Use a **Set** when you need to store a collection of **unique values**.

- Use a **Map** when you need to store data as **key-value pairs** with full flexibility over key types.
