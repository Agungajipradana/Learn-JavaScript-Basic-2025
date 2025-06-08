// =======================================
// LOOPS IN JAVASCRIPT
// =======================================

// 1. for Loop
// ------------------------
// Used when you know how many times you want to run the block.
for (let i = 0; i < 5; i++) {
  console.log("for loop iteration:", i);
}
// Output:
// for loop iteration: 0
// for loop iteration: 1
// for loop iteration: 2
// for loop iteration: 3
// for loop iteration: 4

// 2. while Loop
// ------------------------
// Executes the block while the condition is true.
let j = 0;
while (j < 5) {
  console.log("while loop iteration:", j);
  j++;
}
// Output:
// while loop iteration: 0
// while loop iteration: 1
// while loop iteration: 2
// while loop iteration: 3
// while loop iteration: 4

// 3. do...while Loop
// ------------------------
// Executes the block at least once before checking the condition.
let k = 0;
do {
  console.log("do...while loop iteration:", k);
  k++;
} while (k < 5);
// Output:
// do...while loop iteration: 0
// do...while loop iteration: 1
// do...while loop iteration: 2
// do...while loop iteration: 3
// do...while loop iteration: 4

// 4. for...of Loop
// ------------------------
// Iterates over iterable objects like arrays or strings.
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("for...of loop value:", color);
}
// Output:
// for...of loop value: red
// for...of loop value: green
// for...of loop value: blue

// 5. for...in Loop
// ------------------------
// Iterates over the enumerable properties of an object.
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (const key in person) {
  console.log(`for...in loop - ${key}: ${person[key]}`);
}
// Output:
// for...in loop - name: John
// for...in loop - age: 30
// for...in loop - city: New York

// 6. break Statement
// ------------------------
// Exits the loop entirely when the condition is met.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking at i =", i);
    break;
  }
  console.log("break example - i:", i);
}
// Output:
// break example - i: 0
// break example - i: 1
// break example - i: 2
// break example - i: 3
// break example - i: 4
// Breaking at i = 5

// 7. continue Statement
// ------------------------
// Skips the current iteration and continues with the next one.
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Skipping i =", i);
    continue;
  }
  console.log("continue example - i:", i);
}
// Output:
// continue example - i: 0
// continue example - i: 1
// Skipping i = 2
// continue example - i: 3
// continue example - i: 4
