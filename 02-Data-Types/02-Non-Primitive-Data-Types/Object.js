// Object is a non-primitive data type in JavaScript
// It stores key-value pairs and can contain multiple types of values

const person = {
  name: "John",
  age: 25,
  isStudent: true,
  skills: ["JavaScript", "Node.js", "React"],
  address: {
    city: "Jakarta",
    country: "Indonesia"
  },
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};

// Log the whole object
console.log(person);
// Output: { name: 'John', age: 25, isStudent: true, skills: [...], address: {...}, greet: [Function: greet] }

// Accessing properties
console.log(person.name);        // Output: John
console.log(person["age"]);      // Output: 25
console.log(person.skills[1]);   // Output: Node.js
console.log(person.address.city); // Output: Jakarta

// Calling a method inside the object
console.log(person.greet());     // Output: Hello, my name is John

// Check the type
console.log(typeof person);      // Output: object
