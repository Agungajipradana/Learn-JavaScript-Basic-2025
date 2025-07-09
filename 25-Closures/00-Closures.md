# JavaScript Closure

## What is a Closure?

A **closure** is a feature in JavaScript where an inner function has access to variables from an outer function's scope, even after the outer function has returned.

This includes:

- The function's own scope (its local variables)
- The outer function's variables
- The global scope

Closures are created every time a function is created in JavaScript, at function creation time.

## Syntax Example

```javascript
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable); // Has access to outerVariable
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I am from outer function
```

In this example, `innerFunction` is able to access the variable `outerVariable` even after `outerFunction` has finished executing. This is because `innerFunction` has formed a closure.

## Real-World Use Case: Data Privacy

Closures can be used to create **private variables** or encapsulated state.

```javascript
function Counter() {
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

const counter = Counter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
```

In this case, the variable `count` is not accessible from the outside. It's private, and can only be modified using the methods returned by `Counter`.

## Why Closures Are Important

Closures allow:

- **Data encapsulation** and **privacy**
- **Function factories**
- Maintaining **state** in asynchronous programming
- **Partial application** and **currying**

## Common Pitfall

Be cautious when using closures in loops:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Will log 3 three times
  }, 1000);
}
```

Fix using `let` (block scoping):

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Will log 0, 1, 2
  }, 1000);
}
```

## Summary

- A closure is a function that **remembers** its **lexical scope**, even when the function is executed outside that scope.
- It’s a powerful concept used to create **private variables**, **callbacks**, and **functional programming techniques**.
