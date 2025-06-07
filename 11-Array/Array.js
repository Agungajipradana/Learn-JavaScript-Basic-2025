// ------------------------------
// Array Basics
// ------------------------------

// 1. Array Literal
const fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);
// Output: Fruits: [ 'apple', 'banana', 'cherry' ]

// 2. Using Array Constructor
const colors = new Array("red", "green", "blue");
console.log("Colors:", colors);
// Output: Colors: [ 'red', 'green', 'blue' ]

// 3. Empty Array and Filling Later
const numbers = [];
numbers[0] = 10;
numbers[1] = 20;
console.log("Numbers:", numbers);
// Output: Numbers: [ 10, 20 ]

// 4. Mixed Data Types
const mixed = [1, "hello", true, null, { key: "value" }, [2, 3]];
console.log("Mixed:", mixed);
// Output: Mixed: [ 1, 'hello', true, null, { key: 'value' }, [ 2, 3 ] ]

// ------------------------------
// Array Common Operations
// ------------------------------

// 5. Accessing Elements
console.log("First fruit:", fruits[0]);
// Output: First fruit: apple
console.log("Second fruit:", fruits[1]);
// Output: Second fruit: banana
console.log("Last color:", colors[colors.length - 1]);
// Output: Last color: blue

// 6. Iterating with forEach
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});
// Output:
// Fruit at index 0: apple
// Fruit at index 1: banana
// Fruit at index 2: cherry

// 7. Adding/Removing Elements
fruits.push("orange"); // add at the end
fruits.unshift("mango"); // add at the beginning
fruits.pop(); // remove last
fruits.shift(); // remove first
console.log("Updated Fruits:", fruits);
// Output: Updated Fruits: [ 'apple', 'banana', 'cherry' ]

// ------------------------------
// Useful Array Methods
// ------------------------------

// 8. Transform with map
const doubled = numbers.map((num) => num * 2);
console.log("Doubled Numbers:", doubled);
// Output: Doubled Numbers: [ 20, 40 ]

// 9. Filter values
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);
// Output: Even Numbers: [ 10, 20 ]

// 10. Reduce to total
const total = numbers.reduce((acc, cur) => acc + cur, 0);
console.log("Total of Numbers:", total);
// Output: Total of Numbers: 30

// 11. Check existence
console.log("Includes 10:", numbers.includes(10));
// Output: Includes 10: true
console.log("Index of 20:", numbers.indexOf(20));
// Output: Index of 20: 1

// ------------------------------
// Combining and Slicing
// ------------------------------

const moreNumbers = [30, 40];
const combined = numbers.concat(moreNumbers);
console.log("Combined Arrays:", combined);
// Output: Combined Arrays: [ 10, 20, 30, 40 ]

const sliced = combined.slice(1, 4); // index 1 to 3
console.log("Sliced Part:", sliced);
// Output: Sliced Part: [ 20, 30, 40 ]

// ------------------------------
// Sorting and Reversing
// ------------------------------

const unsorted = [5, 2, 9, 1];
unsorted.sort((a, b) => a - b); // ascending
console.log("Sorted:", unsorted);
// Output: Sorted: [ 1, 2, 5, 9 ]

unsorted.reverse();
console.log("Reversed:", unsorted);
// Output: Reversed: [ 9, 5, 2, 1 ]

// ------------------------------
// Flattening Nested Arrays
// ------------------------------

const nested = [1, [2, [3, 4]], 5];
const flat = nested.flat(2); // flatten 2 levels
console.log("Flattened:", flat);
// Output: Flattened: [ 1, 2, 3, 4, 5 ]
