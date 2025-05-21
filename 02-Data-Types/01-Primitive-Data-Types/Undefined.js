/*
1. Declared but not assigned

Explanation:
x is declared but not assigned any value, so JavaScript assigns undefined by default.
*/

let x;
console.log(x); // Output: undefined

/*
2. Function with no return statement

Explanation:
Since the function greet() has no return, the result is automatically undefined.
*/

function greet() {
  console.log("Hello!");
}

let result = greet(); // The function doesn't return anything
console.log(result);  // Output: undefined

/*
3. Accessing a non-existent object property

Explanation:
The object person has no age property, so trying to access it returns undefined.
*/

let person = {
  name: "John"
};

console.log(person.age); // Output: undefined

/*
4. Function parameter not passed

Explanation:
No argument was passed to the name parameter, so it becomes undefined.
*/

function sayName(name) {
  console.log(name);
}

sayName(); // Output: undefined

/*
5. Using typeof with undefined

Explanation:
typeof correctly identifies that data is undefined.
*/

let data;
console.log(typeof data); // Output: "undefined"

/*
Comparison Between undefined and null

Explanation:
undefined == null is true because both mean “no value” loosely.

undefined === null is false because their types are different.
*/

let a;
let b = null;

console.log(a == b);  // Output: true  (loose comparison)
console.log(a === b); // Output: false (strict comparison)

/*
 Falsy Value

undefined is a falsy value, so in a conditional statement it behaves like false.
*/

let y;
if (y) {
  console.log("y has value");
} else {
  console.log("y is undefined or falsy");
}
// Output: "y is undefined or falsy"

