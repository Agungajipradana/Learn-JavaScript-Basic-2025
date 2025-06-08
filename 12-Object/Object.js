// =======================================
// OBJECTS IN JAVASCRIPT
// =======================================

// 1. Object Literal Syntax
// ------------------------
// This is the most common and simple way to create an object.
const person = {
  name: "John",
  age: 25,
  isStudent: true,

  // Method inside the object
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Accessing properties
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 25

// Calling a method
person.greet(); // Output: Hello, my name is John

// Modifying properties
person.age = 26;
person.country = "Indonesia"; // Adding a new property

console.log(person.age); // Output: 26
console.log(person.country); // Output: Indonesia

// Deleting a property
delete person.isStudent;
console.log(person.isStudent); // Output: undefined

// 2. Using Object Constructor
// ---------------------------
// Another way to create an object using the Object constructor.
const anotherPerson = new Object();
anotherPerson.name = "John";
anotherPerson.age = 25;

console.log(anotherPerson.name); // Output: John

// 3. Using Function Constructor
// -----------------------------
// This method creates reusable object blueprints.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 25);
console.log(john.name); // Output: John

// 4. Using Class Syntax (ES6)
// ---------------------------
// Modern, cleaner syntax for creating object templates.
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const johnClass = new PersonClass("John", 25);
johnClass.greet(); // Output: Hello, my name is John

// 5. Built-in Object Methods
// --------------------------
// These methods help interact with objects.

// Returns an array of keys (property names)
console.log(Object.keys(person));
// Output: [ 'name', 'age', 'country', 'greet' ]

// Returns an array of values
console.log(Object.values(person));
// Output: [ 'John', 26, 'Indonesia', [Function: greet] ]

// Returns an array of [key, value] pairs
console.log(Object.entries(person));
// Output: [ ['name', 'John'], ['age', 26], ['country', 'Indonesia'], ['greet', [Function: greet]] ]

// 6. Object.freeze()
// ------------------
// Prevents modification of properties (shallow freeze).
Object.freeze(person);

// These changes will NOT take effect
person.age = 30;
person.city = "New York";

console.log(person.age); // Output: 26 (unchanged)
console.log(person.city); // Output: undefined (not added)
