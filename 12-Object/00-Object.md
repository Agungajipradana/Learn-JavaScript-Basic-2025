# JavaScript Objects

## What is an Object?

An object in JavaScript is a collection of key-value pairs. The keys are strings (or Symbols), and the values can be any data type — including numbers, strings, arrays, functions, or even other objects.

Objects are commonly used to store related data and functionality.

## Creating Objects

### 1. Using Object Literals

```js
const person = {
  name: "John",
  age: 25,
  isStudent: true,
};
```

### 2. Using the Object Constructor

```js
const person = new Object();
person.name = "John";
person.age = 25;
```

### 3. Using a Function Constructor

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 25);
```

### 4. Using Class Syntax (ES6)

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const john = new Person("John", 25);
```

---

## Accessing Object Properties

You can access object properties using dot notation or bracket notation:

```js
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation
```

## Modifying Object Properties

```js
person.age = 26; // Modify existing property
person.country = "Indonesia"; // Add new property
```

## Deleting Properties

```js
delete person.isStudent;
```

## Object Methods

Objects can contain functions, known as methods:

```js
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Hello, my name is John
```

## Built-in Object Methods

JavaScript provides useful built-in methods for working with objects:

- Object.create(proto, [propertiesObject]) – Creates a new object with the specified prototype object and optional properties.

- Object.keys(obj) – Returns an array of property names

- Object.values(obj) – Returns an array of property values

- Object.entries(obj) – Returns an array of [key, value] pairs

- Object.assign(target, source) – Copies properties from source to target

- hasOwnProperty() - Check if the property is owned directly

- Object.freeze(obj) – Freezes an object so it can’t be modified

```js
const keys = Object.keys(person); // ["name", "greet"]
const values = Object.values(person); // ["John", function]
```

---

## Summary

- Objects store data as key-value pairs.

- Use dot or bracket notation to access or modify properties.

- Objects can contain methods (functions as values).

- JavaScript provides many built-in methods to work with objects efficiently.
