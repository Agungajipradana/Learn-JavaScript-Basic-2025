# JSON

**JSON** (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used to transmit data between a server and a web application, or between different parts of an application.

---

## 1. Converting JSON to JavaScript Object

To convert a JSON-formatted string into a JavaScript object, use `JSON.parse()`.

### Example:

```javascript
const jsonString = '{"name":"John", "age":30, "isStudent":false}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // Output: John
console.log(obj.age); // Output: 30
console.log(obj.isStudent); // Output: false
```

---

## 2. Using a Reviver Function with `JSON.parse()`

The `JSON.parse()` method can also accept a second argument, called the **reviver** function. This function allows you to transform the values during the parsing process.

### Example:

```javascript
const jsonString = '{"name":"John", "birthYear":2000}';

const obj = JSON.parse(jsonString, (key, value) => {
  if (key === "birthYear") {
    return new Date().getFullYear() - value; // convert to age
  }
  return value;
});

console.log(obj);
// Output: { name: 'John', birthYear: 25 } (if the current year is 2025)
```

---

## 3. Converting Object to JSON

To convert a JavaScript object into a JSON-formatted string, use `JSON.stringify()`.

### Example:

```javascript
const person = {
  name: "Jane",
  age: 28,
  isStudent: true,
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: {"name":"Jane","age":28,"isStudent":true}
```

---

## 4. Using a Filter Array with `JSON.stringify()`

The `JSON.stringify()` method can accept a second argument — an array of keys to include (known as a replacer array). This is useful to filter which properties should be included in the output.

### Example:

```javascript
const person = {
  name: "Alice",
  age: 30,
  gender: "female",
  country: "USA",
};

const jsonString = JSON.stringify(person, ["name", "country"]);
console.log(jsonString);
// Output: {"name":"Alice","country":"USA"}
```

---

## Summary

| Method                             | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| `JSON.parse(jsonString)`           | Converts a JSON string to a JavaScript object.      |
| `JSON.parse(jsonString, reviver)`  | Converts a JSON string with transformation logic.   |
| `JSON.stringify(object)`           | Converts a JavaScript object to a JSON string.      |
| `JSON.stringify(object, replacer)` | Filters the properties included in the JSON output. |

---

**Note:**

- JSON keys must be enclosed in double quotes.
- JSON does not support functions, `undefined`, or symbols.
