// ===========================================
// RETURN STATEMENT IN JAVASCRIPT FUNCTIONS
// ===========================================

// --------------------------------------------------
// 1. Basic Return Statement
// --------------------------------------------------
// A function can return a value using the return keyword.
function getGreeting() {
  return "Hello, world!";
}
console.log(getGreeting());
// Output:
// Hello, world!

// --------------------------------------------------
// 2. Returning Numbers
// --------------------------------------------------
// A function that returns the result of a calculation.
function square(number) {
  return number * number;
}
console.log("Square of 5:", square(5));
// Output:
// Square of 5: 25

// --------------------------------------------------
// 3. Returning Boolean Values
// --------------------------------------------------
// A function that returns true or false based on logic.
function isEven(num) {
  return num % 2 === 0;
}
console.log("Is 4 even?", isEven(4));
// Output:
// Is 4 even? true
console.log("Is 5 even?", isEven(5));
// Output:
// Is 5 even? false

// --------------------------------------------------
// 4. Returning Objects
// --------------------------------------------------
// A function that returns an object for structured data.
function createUser(username, age) {
  return {
    username: username,
    age: age,
    isActive: true,
  };
}
const user = createUser("john_doe", 28);
console.log("User object:", user);
// Output:
// User object: { username: 'john_doe', age: 28, isActive: true }

// --------------------------------------------------
// 5. Early Return to Exit a Function
// --------------------------------------------------
// Use return to exit the function early based on a condition.
function checkEligibility(age) {
  if (age < 18) {
    return "Not eligible";
  }
  return "Eligible";
}
console.log(checkEligibility(20));
// Output:
// Eligible
console.log(checkEligibility(15));
// Output:
// Not eligible

// --------------------------------------------------
// 6. Returning from a Loop
// --------------------------------------------------
// Function returns the first even number in an array.
function findFirstEven(numbers) {
  for (let n of numbers) {
    if (n % 2 === 0) {
      return n; // Exit immediately when found
    }
  }
  return null; // Return null if no even number found
}
console.log("First even:", findFirstEven([1, 3, 7, 8, 10]));
// Output:
// First even: 8

// --------------------------------------------------
// 7. Returning a Function (Higher-Order Function)
// --------------------------------------------------
// Functions can return other functions.
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = multiplier(2);
console.log("Double 5:", double(5));
// Output:
// Double 5: 10

// --------------------------------------------------
// 8. Real-World Case: Calculate Discounted Price
// --------------------------------------------------
// Return calculated price after applying a discount.
function getDiscountedPrice(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    return "Invalid discount";
  }
  const discount = (price * discountPercent) / 100;
  return price - discount;
}
console.log("Discounted price:", getDiscountedPrice(100, 20));
// Output:
// Discounted price: 80
console.log("Discounted price:", getDiscountedPrice(50, 110));
// Output:
// Discounted price: Invalid discount

// --------------------------------------------------
// 9. Return vs Console.log
// --------------------------------------------------
// return gives the result to the caller, while console.log prints output.
function add(a, b) {
  return a + b; // returns value
}
const result = add(3, 4); // use the return value
console.log("Returned result:", result); // print it
// Output:
// Returned result: 7

// --------------------------------------------------
// 10. Returning from Try...Catch
// --------------------------------------------------
// Demonstrates returning value after error handling.
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    return { error: "Invalid JSON" };
  }
}
console.log("Parsed:", parseJSON('{"name":"Alice"}'));
// Output:
// Parsed: { name: 'Alice' }

console.log("Parsed:", parseJSON("{invalid json}"));
// Output:
// Parsed: { error: 'Invalid JSON' }
