// =====================================================
// ANONYMOUS FUNCTIONS IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. Basic Anonymous Function (assigned to variable)
// -----------------------------------------------------
// A function without a name, assigned to a variable.

const greet = function () {
  console.log("Hello from an anonymous function!");
};

greet();
// Output:
// Hello from an anonymous function!

// -----------------------------------------------------
// 2. Anonymous Function as Callback
// -----------------------------------------------------
// Commonly used as arguments in functions like setTimeout.

setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);
// Output (after 1 second):
// Executed after 1 second

// -----------------------------------------------------
// 3. Anonymous Function Inside Event Listener
// -----------------------------------------------------
// Frequently used for inline event handling (browser environment simulation).

const mockButton = {
  addEventListener: function (event, callback) {
    console.log(`Event "${event}" registered.`);
    callback(); // Simulate a click
  },
};

mockButton.addEventListener("click", function () {
  console.log("Button clicked (anonymous function)");
});
// Output:
// Event "click" registered.
// Button clicked (anonymous function)

// -----------------------------------------------------
// 4. Anonymous Function in Array Iteration
// -----------------------------------------------------
// Used in methods like forEach, map, filter, etc.

const numbers = [1, 2, 3];

numbers.forEach(function (num, index) {
  console.log(`Index ${index}:`, num);
});
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3

// -----------------------------------------------------
// 5. Immediately Invoked Anonymous Function (IIFE)
// -----------------------------------------------------
// Runs immediately without being named.

(function () {
  console.log("Anonymous IIFE executed!");
})();
// Output:
// Anonymous IIFE executed!

// -----------------------------------------------------
// 6. Anonymous Function as Return Value
// -----------------------------------------------------
// Can return anonymous functions from other functions.

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log("Double 4:", double(4)); // Output: Double 4: 8

// -----------------------------------------------------
// 7. Anonymous Function for Dynamic Behavior
// -----------------------------------------------------
// Useful when assigning custom logic at runtime.

const operations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log("Addition:", operations.add(10, 5)); // Output: Addition: 15
console.log("Subtraction:", operations.subtract(10, 5)); // Output: Subtraction: 5

// -----------------------------------------------------
// 8. Anonymous Function vs Named Function (Debugging)
// -----------------------------------------------------
// Anonymous functions do not show up by name in stack traces.

const named = function namedFunc() {
  console.log("Named function");
};

const anonymous = function () {
  console.log("Anonymous function");
};

named(); // Output: Named function
anonymous(); // Output: Anonymous function
