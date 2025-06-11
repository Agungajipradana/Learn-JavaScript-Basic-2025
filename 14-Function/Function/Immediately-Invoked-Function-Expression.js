// ============================================================
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) IN JAVASCRIPT
// ============================================================

// ------------------------------------------------------------
// 1. Basic IIFE
// ------------------------------------------------------------
// A function that runs immediately after it's defined.

(function () {
  console.log("This function runs immediately!");
})();
// Output:
// This function runs immediately!

// ------------------------------------------------------------
// 2. IIFE with Parameters
// ------------------------------------------------------------
// You can pass arguments into an IIFE.

(function (name) {
  console.log("Hello", name);
})("Alice");
// Output:
// Hello Alice

// ------------------------------------------------------------
// 3. Named IIFE (rare, for debugging)
// ------------------------------------------------------------
// Naming is optional and not commonly used.

(function greetUser(name) {
  console.log("Greetings,", name);
})("Bob");
// Output:
// Greetings, Bob

// ------------------------------------------------------------
// 4. IIFE Using Arrow Function
// ------------------------------------------------------------
// You can use ES6 arrow syntax for shorter functions.

(() => {
  console.log("Arrow function IIFE!");
})();
// Output:
// Arrow function IIFE!

// ------------------------------------------------------------
// 5. IIFE Returning a Value
// ------------------------------------------------------------
// IIFE can return a value and store it in a variable.

const result = (function () {
  const num = 5;
  return num * num;
})();

console.log("Result from IIFE:", result);
// Output:
// Result from IIFE: 25

// ------------------------------------------------------------
// 6. IIFE to Avoid Global Variables
// ------------------------------------------------------------
// Helps isolate variables from polluting the global scope.

(function () {
  const secret = "hidden value";
  console.log("Access inside IIFE:", secret);
})();

// console.log(secret); // ❌ Error: secret is not defined
// Output:
// Access inside IIFE: hidden value

// ------------------------------------------------------------
// 7. IIFE for Initialization
// ------------------------------------------------------------
// Useful for initializing config or setup code.

const appConfig = (function () {
  const API_KEY = "123-abc";
  const MODE = "development";
  return {
    key: API_KEY,
    mode: MODE,
  };
})();

console.log("App Config:", appConfig);
// Output:
// App Config: { key: '123-abc', mode: 'development' }

// ------------------------------------------------------------
// 8. IIFE with Event Listener Simulation
// ------------------------------------------------------------
// Wrapping logic inside IIFE to run setup once.

(function () {
  const mockButton = {
    addEventListener: function (event, handler) {
      console.log(`Event '${event}' registered.`);
      handler();
    },
  };

  mockButton.addEventListener("click", function () {
    console.log("Button clicked!");
  });
})();
// Output:
// Event 'click' registered.
// Button clicked!

// ------------------------------------------------------------
// 9. IIFE in Loop to Capture Variable Scope (pre-ES6)
// ------------------------------------------------------------
// IIFE was used to capture loop variables before let/const existed.

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log("Captured value:", j);
    }, 100);
  })(i);
}
// Output:
// Captured value: 0
// Captured value: 1
// Captured value: 2

// ------------------------------------------------------------
// 10. IIFE for Module Pattern (pre-ES6 modules)
// ------------------------------------------------------------
// Used to simulate private and public members in modules.

const CounterModule = (function () {
  let count = 0;

  function increment() {
    count++;
    console.log("Count incremented:", count);
  }

  function decrement() {
    count--;
    console.log("Count decremented:", count);
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
})();

CounterModule.increment(); // Output: Count incremented: 1
CounterModule.increment(); // Output: Count incremented: 2
CounterModule.decrement(); // Output: Count decremented: 1
console.log("Final count:", CounterModule.getCount()); // Output: Final count: 1
