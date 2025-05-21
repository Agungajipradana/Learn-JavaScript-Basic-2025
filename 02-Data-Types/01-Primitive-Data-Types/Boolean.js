/*
1. Boolean Literal Values

Explanation:
true and false are the two only values of Boolean type.
*/

let isActive = true;
let isDeleted = false;

console.log(isActive); // Output: true
console.log(isDeleted); // Output: false

/*
 2. Boolean from Comparison

Explanation:
Comparison operators (>, <, ===, etc.) return Boolean values.
*/

let result = 10 > 5;
console.log(result); // Output: true

let isEqual = 5 === 10;
console.log(isEqual); // Output: false

/*
3. Using Boolean() Function

Explanation:
The Boolean() function converts any value to a Boolean.

- Values considered truthy return true

- Values considered falsy return false
*/

console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean("Hello")); // Output: true
console.log(Boolean("")); // Output: false

/*
4. Falsy Values

Values that convert to false in Boolean context:
*/

console.log(Boolean(false)); // Output: false
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false

/*
 5. Truthy Values
*/

console.log(Boolean(true));       // Output: true
console.log(Boolean(100));        // Output: true
console.log(Boolean("JavaScript"));// Output: true
console.log(Boolean([]));         // Output: true (empty array is truthy)
console.log(Boolean({}));         // Output: true (empty object is truthy)

/*
 6. Check Type with typeof
*/

let status = true;
console.log(typeof status); // Output: boolean
