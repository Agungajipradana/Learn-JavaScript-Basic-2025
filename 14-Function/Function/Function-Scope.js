// ===========================================
// FUNCTION SCOPE IN JAVASCRIPT
// ===========================================

// --------------------------------------------------
// 1. Basic Function Scope
// --------------------------------------------------
// Variables declared inside a function cannot be accessed outside it.

function sayHello() {
  const message = "Hello from inside the function!";
  console.log(message);
}

sayHello();
// Output:
// Hello from inside the function!

// console.log(message); // ❌ Error: message is not defined

// --------------------------------------------------
// 2. Function Parameters are Scoped
// --------------------------------------------------
// Function parameters are also scoped to the function itself.

function greet(name) {
  console.log("Hi", name);
}

greet("Alice");
// Output:
// Hi Alice

// console.log(name); // ❌ Error: name is not defined

// --------------------------------------------------
// 3. Nested Function Scope
// --------------------------------------------------
// Inner functions can access variables from outer functions.

function outer() {
  const outerVar = "I am from outer";

  function inner() {
    const innerVar = "I am from inner";
    console.log(outerVar); // ✅ accessible
    console.log(innerVar); // ✅ accessible
  }

  inner();
  // console.log(innerVar); // ❌ Error: innerVar is not defined
}

outer();
// Output:
// I am from outer
// I am from inner

// --------------------------------------------------
// 4. Scope Isolation per Function Call
// --------------------------------------------------
// Each function call creates a new scope instance.

function counter() {
  let count = 0;
  count++;
  console.log("Current count:", count);
}

counter(); // Output: Current count: 1
counter(); // Output: Current count: 1

// --------------------------------------------------
// 5. Using Global Variables (Not Recommended)
// --------------------------------------------------
// Global variables can be accessed anywhere, but using them is risky.

let globalValue = "I am global";

function printGlobal() {
  console.log(globalValue); // ✅ accessible
}

printGlobal();
// Output:
// I am global

// --------------------------------------------------
// 6. Variable Shadowing
// --------------------------------------------------
// Local variables can shadow global variables with the same name.

let value = "global";

function showValue() {
  let value = "local";
  console.log("Inside function:", value);
}

showValue(); // Output: Inside function: local
console.log("Outside function:", value); // Output: Outside function: global

// --------------------------------------------------
// 7. Closures and Scope
// --------------------------------------------------
// Functions remember the scope in which they were defined.

function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("Double 5:", double(5)); // Output: Double 5: 10
console.log("Triple 5:", triple(5)); // Output: Triple 5: 15

// --------------------------------------------------
// 8. Real-World Case: Encapsulation
// --------------------------------------------------
// Scope helps in hiding variables (private members).

function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      console.log("Incremented count:", count);
    },
    decrement() {
      count--;
      console.log("Decremented count:", count);
    },
    getCount() {
      return count;
    },
  };
}

const myCounter = createCounter();

myCounter.increment(); // Output: Incremented count: 1
myCounter.increment(); // Output: Incremented count: 2
myCounter.decrement(); // Output: Decremented count: 1

console.log("Current count:", myCounter.getCount()); // Output: Current count: 1

// console.log(count); // ❌ Error: count is not defined (private)
