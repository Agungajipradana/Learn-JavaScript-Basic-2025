# JavaScript Closure Challenges

## Easy Level

1. **Basic closure access**
   Create a function `outer()` that defines a variable and returns an inner function that logs the variable.

2. **Closure with parameter**
   Make a closure that takes a number and returns a function that multiplies any input by that number.

3. **Private counter**
   Create a `createCounter()` function that returns an object with `increment()` and `getCount()` methods using closures.

4. **Simple lexical scope**
   Write a function that returns another function that logs a greeting using a variable from the outer scope.

5. **Multiple closures**
   Create two closures from the same outer function and show that each one maintains its own private state.

6. **Return function that adds**
   Write a function `makeAdder(x)` that returns a new function which adds `x` to its input.

7. **Closure with default state**
   Create a function that uses a closure to maintain a `status` variable (e.g., "active", "inactive") with a getter/setter.

8. **Using closures in `setTimeout`**
   Use a closure inside a `setTimeout()` to correctly log numbers 0 through 2 with a delay.

9. **Encapsulated name storage**
   Create a function that stores a name privately and exposes methods to get and change it.

10. **Greeting with closure**
    Write a function `createGreeter(name)` that returns a function which greets the provided name using closure.

---

## Medium Level

1. **Closure-based calculator**
   Build a `calculator(startValue)` function that returns an object with methods `add`, `subtract`, and `getResult`.

2. **Memoization with closure**
   Create a simple `memoize()` function that caches the results of expensive computations using closure.

3. **Toggle switch with closure**
   Create a function that returns a toggle between `true` and `false` each time it is called.

4. **Factory pattern using closure**
   Use a closure to build a factory that creates objects with private properties and public methods.

5. **Loop closure fix**
   Create a loop using `var` and show how to capture each iteration index using a closure.

6. **Closure for form validation**
   Write a function that returns a validator with private rules and exposes a method to validate inputs.

7. **Store secret using closure**
   Write a function `secretBox(secret)` that returns two functions: `reveal()` and `changeSecret()`.

8. **Closures in event listeners**
   Simulate an event handler setup using closures to preserve contextual data per button.

9. **Once function**
   Create a `once(fn)` function that ensures `fn` is only called once, and then returns the same result.

10. **Timer with closure**
    Create a simple stopwatch using closures that tracks start time and elapsed time.

---

## Hard Level

1. **Recursive closure counter**
   Create a recursive function using closures that counts down from a number and logs each value with delay.

2. **Encapsulated bank account**
   Build a `createAccount()` function with private `balance`, and public `deposit`, `withdraw`, and `getBalance` methods.

3. **Dynamic closure list**
   Create a list of functions using a loop that each return their own index using closures.

4. **Currying with closure**
   Write a function `curry(fn)` that transforms a multi-arg function into a series of unary functions using closure.

5. **Secure login simulation**
   Simulate a login function with closures that allows only 3 attempts and then locks access.

6. **Module pattern**
   Implement a module using IIFE and closures that exposes only selected methods (e.g., for a math library).

7. **Task queue with closure**
   Build a queue manager that uses closures to store and execute tasks in order.

8. **Immutable counter**
   Create a counter with closures that can’t be modified externally but only through controlled methods.

9. **Nested closures**
   Build a series of nested closures that capture values at each level, and return the innermost result.

10. **Custom debounce function**
    Create a debounced function wrapper using closures that delays execution until a pause in input.
