// ============================================
// ARRAY METHOD: find()
// ============================================
// The find() method returns the FIRST element in the array 
// that satisfies the provided testing function.

// If no elements satisfy the condition, it returns undefined.

// ============================================
// Syntax:
// array.find(callback(currentValue, index, array))
// ============================================


// --------------------------------------------
// Example 1: Find the first even number
// --------------------------------------------

const numbers = [1, 3, 5, 6, 8, 10];

const firstEven = numbers.find(num => num % 2 === 0);

console.log("First even number:", firstEven);
// Output: 6


// --------------------------------------------
// Example 2: Find a string with specific length
// --------------------------------------------

const words = ["hi", "hello", "welcome", "bye"];

const firstFiveLetterWord = words.find(word => word.length === 5);

console.log("First 5-letter word:", firstFiveLetterWord);
// Output: hello


// --------------------------------------------
// Example 3: Find an object in an array
// --------------------------------------------

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);

console.log("User with ID 2:", user);
// Output: { id: 2, name: "Bob" }


// --------------------------------------------
// Example 4: Find the first negative number
// --------------------------------------------

const mixedNumbers = [5, 10, -2, 8, -1];

const firstNegative = mixedNumbers.find(n => n < 0);

console.log("First negative number:", firstNegative);
// Output: -2


// --------------------------------------------
// Example 5: Case-insensitive search in strings
// --------------------------------------------

const emails = ["admin@example.com", "user@test.com", "hello@domain.com"];

const search = "USER@test.COM";

const foundEmail = emails.find(email => email.toLowerCase() === search.toLowerCase());

console.log("Found Email:", foundEmail);
// Output: user@test.com


// --------------------------------------------
// Example 6: Find product in a shopping cart
// --------------------------------------------

const cart = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
];

const targetProduct = cart.find(product => product.name === "Mouse");

console.log("Target Product:", targetProduct);
// Output: { id: 2, name: 'Mouse', price: 25 }


// --------------------------------------------
// Example 7: Find the first prime number
// --------------------------------------------

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const nums = [4, 6, 8, 9, 10, 11, 13];
const firstPrime = nums.find(isPrime);

console.log("First prime number:", firstPrime);
// Output: 11


// --------------------------------------------
// Example 8: Find using index (optional use)
// --------------------------------------------

const letters = ["a", "b", "c", "d"];

const evenIndexLetter = letters.find((_, index) => index % 2 === 0);

console.log("Letter at first even index:", evenIndexLetter);
// Output: "a"


// --------------------------------------------
// Example 9: Find with complex condition
// --------------------------------------------

const tasks = [
  { id: 1, name: "Do homework", completed: true },
  { id: 2, name: "Buy groceries", completed: false },
  { id: 3, name: "Go to gym", completed: false }
];

const firstIncompleteTask = tasks.find(task => !task.completed);

console.log("First incomplete task:", firstIncompleteTask);
// Output: { id: 2, name: 'Buy groceries', completed: false }


// --------------------------------------------
// Example 10: Difference with filter()
// --------------------------------------------

const array = [5, 12, 8, 130, 44];

const found = array.find(element => element > 10);
const filtered = array.filter(element => element > 10);

console.log("find result:", found);       // Output: 12 (only first match)
console.log("filter result:", filtered);  // Output: [12, 130, 44] (all matches)
