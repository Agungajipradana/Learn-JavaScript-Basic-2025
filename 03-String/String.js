// JavaScript String Fundamentals

// 1. What is a String?
// A string is a sequence of characters used to represent text.
let greeting = "Hello, world!";
console.log(greeting); // Output: "Hello, world!"

// 2. Declaring a String
// Strings can be declared using let, const, or var
let name = "John";
const city = 'Jakarta';
var country = `Indonesia`;

console.log(name);    // Output: "John"
console.log(city);    // Output: "Jakarta"
console.log(country); // Output: "Indonesia"

// 3. Types of Quotes
// JavaScript allows '', "", and `` for strings
let single = 'Single quote';
let double = "Double quote";
let backtick = `Backtick quote`;

console.log(single);   // Output: "Single quote"
console.log(double);   // Output: "Double quote"
console.log(backtick); // Output: "Backtick quote"

// 4. Template Literals
// Allows embedding variables or expressions using ${}
let age = 25;
let message = `I am ${age} years old`;
console.log(message); // Output: "I am 25 years old"

// 5. Escape Characters
// Use \ to escape special characters
let quote = "She said: \"JavaScript is fun!\"";
console.log(quote); // Output: She said: "JavaScript is fun!"

let multiLine = "Line 1\nLine 2";
console.log(multiLine);
// Output:
// Line 1
// Line 2

// 6. Immutability
// Strings are immutable; characters can't be changed directly
let str = "hello";
str[0] = "H";
console.log(str); // Output: "hello" — unchanged

// 7. Converting Other Types to String
let number = 123;
let boolean = true;

console.log(String(number));     // Output: "123"
console.log(boolean.toString()); // Output: "true"

// 8. Primitive vs new String()
// Avoid using new String() as it creates an object
let primitiveStr = "test";
let objectStr = new String("test");

console.log(typeof primitiveStr); // Output: "string"
console.log(typeof objectStr);    // Output: "object"

console.log(primitiveStr === "test"); // Output: true
console.log(objectStr === "test");    // Output: false
