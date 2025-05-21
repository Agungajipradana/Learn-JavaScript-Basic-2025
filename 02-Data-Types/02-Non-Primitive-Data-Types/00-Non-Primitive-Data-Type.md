# 📦 Non-Primitive Data Types in JavaScript

In JavaScript, **non-primitive data types** (also known as **reference types**) are data types that can store **multiple values**, have **properties**, and support **methods**. Unlike primitive types, they are stored **by reference**, not by value.

---

## 🧠 Key Characteristics of Non-Primitive Data Types

- Stored by **reference** (not by value).
- **Mutable** (can be changed after creation).
- Can store **complex or multiple values**.
- `typeof` usually returns `"object"`.

---

## 📋 List of Non-Primitive Data Types in JavaScript

| Type    | Description                                 | Example Syntax                |
|---------|---------------------------------------------|-------------------------------|
| Object  | A collection of key-value pairs             | `{ name: "John", age: 30 }`   |
| Array   | A special object to store ordered elements  | `[1, 2, 3, 4]`                |
| Function| A callable object                           | `function() { ... }`          |
| Date    | Represents dates and times                  | `new Date()`                  |
| RegExp  | Regular expression patterns                 | `/\d+/`                       |
| Map     | Key-value collection with any key type      | `new Map()`                   |
| Set     | Collection of unique values                 | `new Set()`                   |
| Math    | Built-in object for math operations         | `Math.max(10, 20)`            |

---

## 🔍 Examples

### 🔸Object

```javascript
const person = {
  name: "Alice",
  age: 25,
};
console.log(typeof person); // Output: "object"
```

### 🔸Array
```javascript
const numbers = [1, 2, 3, 4];
console.log(typeof numbers); // Output: "object"
console.log(Array.isArray(numbers)); // Output: true
```

### 🔸Function
```javascript
function greet() {
  return "Hello!";
}
console.log(typeof greet); // Output: "function"
```

### 🔸Date
```javascript
const today = new Date();
console.log(today); // Output: current date and time
console.log(typeof today); // Output: "object"
```

### 🔸RegExp (Regular Expression)
```javascript
const pattern = /\d+/;  // Matches one or more digits
const result = pattern.test("Year 2025");
console.log(result);      // Output: true
console.log(typeof pattern); // Output: "object"
```

### 🔸Map
```javascript
const map = new Map();
map.set("name", "Alice");
map.set("age", 30);

console.log(map.get("name")); // Output: Alice
console.log(map.size);        // Output: 2
console.log(typeof map);      // Output: "object"
```

### 🔸Set
```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored

console.log(set.has(1));     // Output: true
console.log(set.size);       // Output: 2
console.log(typeof set);     // Output: "object"
```

### 🔸Math Object
```javascript
console.log(Math.PI); // Output: 3.141592653589793
console.log(typeof Math); // Output: "object"
```

