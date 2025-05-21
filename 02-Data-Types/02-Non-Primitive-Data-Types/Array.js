// Array is a non-primitive data type in JavaScript.
// It is a special type of object used to store multiple ordered values in a single variable.

const colors = ["red", "green", "blue"];

// Accessing array elements
console.log(colors[0]); // Output: "red"
console.log(colors[1]); // Output: "green"

// Checking the length of the array
console.log(colors.length); // Output: 3

// Adding a new element to the array
colors.push("yellow");
console.log(colors); // Output: ["red", "green", "blue", "yellow"]

// Removing the last element
colors.pop();
console.log(colors); // Output: ["red", "green", "blue"]

// Checking the type of the variable
console.log(typeof colors); // Output: "object"
console.log(Array.isArray(colors)); // Output: true
