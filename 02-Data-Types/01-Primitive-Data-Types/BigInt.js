/*
How to Create a BigInt

There are two ways to create a BigInt:
*/

const big1 = 1234567890123456789012345678901234567890n; // Add "n" at the end
const big2 = BigInt("1234567890123456789012345678901234567890"); // Using constructor

/*
Examples and Explanations
*/

/*
1. Basic BigInt Creation

Explanation:
Adding n at the end of a number literal tells JavaScript this is a BigInt.
*/

const big = 123456789012345678901234567890n;
console.log(big); // Output: 123456789012345678901234567890n

/*
2. Comparison with Number.MAX_SAFE_INTEGER

Explanation:
The number 9007199254740993 cannot be accurately represented by regular Number, but BigInt handles it precisely.
*/

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

const b = 9007199254740993n;
console.log(b); // Output: 9007199254740993n

/*
3. BigInt Arithmetic

Explanation:
All operations (+, *, /) work on BigInt, but / always returns the integer part (no decimals).
*/

const a = 10n;
const c = 3n;
console.log(a + c); // Output: 13n
console.log(a * c); // Output: 30n
console.log(a / c); // Output: 3n (division is rounded down)

/*
4. Type Check with typeof

Explanation:
The typeof operator returns "bigint" for BigInt values.
*/

const value = 123n;
console.log(typeof value); // Output: "bigint"

/*
5. Mixing BigInt with Number (❌ Not Allowed)

Explanation:
You cannot mix BigInt and Number types directly. Use BigInt() to convert before operations.
*/

const x = 10n;
const y = 5;

console.log(x + BigInt(y)); // ✅ Convert `y` to BigInt
// console.log(x + y);      // ❌ TypeError: Cannot mix BigInt and other types
