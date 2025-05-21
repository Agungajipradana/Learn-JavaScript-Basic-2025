/*
1. Integer (Whole Number)

Explanation:
A simple whole number without decimal places.
*/

let age = 30;
console.log(age); // Output: 30

/*
2. Floating-Point Number (Decimal)

Explanation:
Used for decimal or fractional values.
*/

let pi = 3.14159;
console.log(pi); // Output: 3.14159

/*
3. Negative Number

Explanation:
Negative numbers are represented with a minus - sign.
*/

let temperature = -10;
console.log(temperature); // Output: -10

/*
4. NaN (Not-a-Number)

Explanation:
NaN appears when a numeric operation fails or involves invalid data.
*/

let result = "hello" * 5;
console.log(result); // Output: NaN

/*
5. Infinity

Explanation:
Dividing by zero results in Infinity.
*/

let inf = 1 / 0;
console.log(inf); // Output: Infinity

/*
6. -Infinity

Explanation:
Negative division by zero gives -Infinity.
*/

let negInf = -1 / 0;
console.log(negInf); // Output: -Infinity

/*
7. Hexadecimal (Base 16)

Explanation:
Hexadecimal values start with 0x.
*/

let hex = 0x1A; // 1A in hex = 26 in decimal
console.log(hex); // Output: 26

/*
8. Octal (Base 8)

Explanation:
Octal numbers start with 0o.
*/

let oct = 0o10; // Octal 10 = Decimal 8
console.log(oct); // Output: 8

/*
9. Binary (Base 2)

Explanation:
Binary numbers start with 0b.
*/

let bin = 0b1010; // Binary 1010 = Decimal 10
console.log(bin); // Output: 10

/*
Check Type with typeof

Explanation:
All numbers (integer, float, Infinity, NaN) are of type "number".
*/

let num = 123.45;
console.log(typeof num); // Output: "number"
