// =====================================================
// CLOSURES IN JAVASCRIPT EXAMPLES
// =====================================================

// -----------------------------------------------------
// 1. Basic Closure Example
// -----------------------------------------------------
function greetUser() {
  const greeting = "Hello from inside!";

  function displayGreeting() {
    console.log("[Closure] Greeting:", greeting);
  }

  return displayGreeting;
}

const sayHello = greetUser();
sayHello(); // Output: Hello from inside!

// -----------------------------------------------------
// 2. Closure with Parameters
// -----------------------------------------------------
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("[Closure with Param] Double 5:", double(5)); // 10
console.log("[Closure with Param] Triple 4:", triple(4)); // 12

// -----------------------------------------------------
// 3. Closure for Data Encapsulation
// -----------------------------------------------------
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log("[Encapsulation] Increment:", counter.increment()); // 1
console.log("[Encapsulation] Increment:", counter.increment()); // 2
console.log("[Encapsulation] Get Count:", counter.getCount()); // 2
console.log("[Encapsulation] Decrement:", counter.decrement()); // 1

// -----------------------------------------------------
// 4. Closure in Asynchronous Code (with var - Pitfall)
// -----------------------------------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("[Async Closure with var] i =", i);
  }, 1000);
}
// Output: i = 3 (three times)

// -----------------------------------------------------
// 5. Closure in Asynchronous Code (Fixed with let)
// -----------------------------------------------------
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("[Async Closure with let] j =", j);
  }, 1000);
}
// Output: j = 0, j = 1, j = 2 (correct)
