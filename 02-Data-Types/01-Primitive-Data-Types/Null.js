/*
1. Declaring and Assigning null to a Variable

Explanation:
Here, myVar is explicitly assigned the value null, indicating that it has no value.
*/

let myVar = null;
console.log(myVar); // Output: null

/*
2. typeof with null

Explanation:
Despite null being a primitive value, typeof null returns "object", which is considered a JavaScript bug. This is an inconsistent behavior in JavaScript.
*/

let myVar1 = null;
console.log(typeof myVar1); // Output: "object"

/*
3. null in Comparison to undefined

Explanation:
== checks for equality with type coercion, so null == undefined is true.

=== checks for strict equality (without type conversion), so null === undefined is false.
*/

let myVar2 = null;
let anotherVar;

console.log(myVar2 == anotherVar);  // Output: true
console.log(myVar2 === anotherVar); // Output: false

/*
4. null in Conditions (Falsy value)

null is considered a falsy value, meaning it evaluates to false in a Boolean context (like an if statement).

Explanation:
null is falsy, so the else block runs.
*/

let myVar3 = null;

if (myVar3) {
    console.log("This won't run");
} else {
    console.log("This will run because null is falsy.");
}
// Output: "This will run because null is falsy."

/*
5. null and Objects

null is often used to explicitly indicate that a variable that is expected to hold an object has no object value.

Explanation:
In this example, user is assigned null, meaning it is expected to be an object later, but for now, it explicitly has no value.
*/

let user = null;

console.log(user); // Output: null
console.log(user === null); // Output: true


