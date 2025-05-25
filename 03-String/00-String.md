# 📘 JavaScript String Data Type

## 🔹 What is a String?

In **JavaScript**, a _string_ is a **primitive data type** used to represent **text**. A string is a sequence of characters enclosed in quotes:

- **Single quotes**: `'Hello'`
- **Double quotes**: `"World"`
- **Backticks (template literals)**: `` `Hello, ${name}` ``

  ```javascript
  let name = "John";
  let greeting = "Hello";
  let message = `Welcome, ${name}`;
  ```

## 🔹 Characteristics of Strings

- Strings are immutable, meaning once created, their values cannot be changed.
- String operations return new strings instead of modifying the original.
- Strings can be of any length, from 0 to billions of characters (depending on memory).

## 🔹 Declaring Strings

```javascript
let a = "Learning JavaScript";
let b = "Hello World";
let c = `My name is ${a}`;
```

Template literals (`...`) support expression interpolation, making them powerful and readable.

## 🔹 Common Properties and Methods

- ### 📏 .length

  Returns the number of characters in the string.

  ```javascript
  let text = "JavaScript";
  console.log(text.length); // Output: 10
  ```

- ### 🔤 .toUpperCase() and .toLowerCase()

  Convert string to uppercase or lowercase.

  ```javascript
  let sentence = "Hello World";
  console.log(sentence.toUpperCase()); // HELLO WORLD
  console.log(sentence.toLowerCase()); // hello world
  ```

- ### ✂️ .slice(start, end)

  Extracts a part of the string.

  ```javascript
  let word = "Programming";
  console.log(word.slice(0, 4)); // Prog
  ```

- ### 🔄 .replace(old, new)

  Replaces part of the string with another value.

  ```javascript
  let text = "I like coffee";
  console.log(text.replace("coffee", "tea")); // I like tea
  ```

- ### ➕ String Concatenation

  Joining two strings together:

  ```javascript
  let firstName = "John";
  let lastName = "Doe";
  let fullName = firstName + " " + lastName; // John Doe
  ```

  Or using template literals:

  ```javascript
  let fullName = `${firstName} ${lastName}`;
  ```

## 🔹 Escape Characters

Certain characters need to be escaped with a backslash `\`:

| Symbol | Meaning      |
| ------ | ------------ |
| `\'`   | Single quote |
| `\"`   | Double quote |
| `\\`   | Backslash    |
| `\n`   | New line     |
| `\t`   | Tab          |

```javascript
let quote = 'He said: "Learning is important."';
```

## 🔹 Summary

- Strings are used to store text in JavaScript.
- Declared with ', ", or `.
- Common methods: .length, .slice(), .replace(), .toUpperCase(), .toLowerCase(), etc.
- Template literals allow expression interpolation and multi-line strings.
