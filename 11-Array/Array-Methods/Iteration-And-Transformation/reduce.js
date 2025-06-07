// ============================================
// ARRAY METHOD: reduce()
// ============================================
// The reduce() method executes a reducer function on each element
// of the array, resulting in a single output value.

// It is commonly used for:
// - Summing values
// - Flattening arrays
// - Grouping data
// - Building objects or transforming arrays

// ============================================
// Syntax:
// array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue);
// ============================================

// --------------------------------------------
// Example 1: Sum all numbers in an array
// --------------------------------------------

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Total Sum:", total);
// Output: 15

// --------------------------------------------
// Example 2: Find the maximum number
// --------------------------------------------

const values = [4, 10, 2, 99, 34];
const max = values.reduce((acc, curr) => (curr > acc ? curr : acc));

console.log("Maximum Value:", max);
// Output: 99

// --------------------------------------------
// Example 3: Count occurrences of items in an array
// --------------------------------------------

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Fruit Count:", fruitCount);
// Output: { apple: 3, banana: 2, orange: 1 }

// --------------------------------------------
// Example 4: Flatten a 2D array
// --------------------------------------------

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatArray = matrix.reduce((acc, row) => acc.concat(row), []);

console.log("Flattened Array:", flatArray);
// Output: [1, 2, 3, 4, 5, 6]

// --------------------------------------------
// Example 5: Create a string from array values
// --------------------------------------------

const words = ["Hello", "World", "from", "reduce"];
const sentence = words.reduce((acc, word) => acc + " " + word);

console.log("Sentence:", sentence);
// Output: Hello World from reduce

// --------------------------------------------
// Example 6: Calculate total price from shopping cart
// --------------------------------------------

const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 20, quantity: 2 },
  { name: "Keyboard", price: 75, quantity: 1 },
];

const totalPrice = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

console.log("Total Price:", totalPrice);
// Output: 1315

// --------------------------------------------
// Example 7: Group data by a property
// --------------------------------------------

const people = [
  { name: "Alice", gender: "female" },
  { name: "Bob", gender: "male" },
  { name: "Carol", gender: "female" },
];

const groupedByGender = people.reduce((acc, person) => {
  const key = person.gender;
  if (!acc[key]) acc[key] = [];
  acc[key].push(person.name);
  return acc;
}, {});

console.log("Grouped By Gender:", groupedByGender);
// Output: { female: ['Alice', 'Carol'], male: ['Bob'] }

// --------------------------------------------
// Example 8: Chaining map() and reduce()
// --------------------------------------------

const marks = [80, 90, 70, 60];
const totalPlusBonus = marks
  .map((score) => score + 5) // Add 5 bonus points
  .reduce((acc, curr) => acc + curr, 0);

console.log("Total with Bonus:", totalPlusBonus);
// Output: 330

// --------------------------------------------
// Example 9: Reduce without initial value
// --------------------------------------------

const nums = [10, 20, 30];

const sum = nums.reduce((acc, curr) => acc + curr);
console.log("Sum without initial value:", sum);
// Output: 60

// Note: Without initial value, first element is used as initial accumulator

// --------------------------------------------
// Example 10: Use reduceRight() to reduce from right to left
// --------------------------------------------

const digits = [1, 2, 3, 4];
const reversedConcat = digits.reduceRight((acc, curr) => acc + curr, "");

console.log("Reversed Concat:", reversedConcat);
// Output: "4321"
