// ======================= 1. What is Operator Precedence? =======================
// Operator precedence determines the order in which parts of an expression are evaluated.
// Operators with higher precedence are evaluated before operators with lower precedence.

// ======================= 2. Simple Example =======================
let result1 = 3 + 4 * 5;
// Multiplication (*) has higher precedence than addition (+), so multiplication happens first.
// Equivalent to 3 + (4 * 5) = 3 + 20 = 23
console.log("3 + 4 * 5 =", result1); // Output: 23

// ======================= 3. Using Parentheses to Change Precedence =======================
let result2 = (3 + 4) * 5;
// Parentheses have highest precedence and evaluated first.
// Equivalent to (3 + 4) * 5 = 7 * 5 = 35
console.log("(3 + 4) * 5 =", result2); // Output: 35

// ======================= 4. Example with Multiple Operators =======================

let result3 = 10 - 4 + 2;
// Addition and subtraction have the same precedence and are evaluated left to right.
// Equivalent to (10 - 4) + 2 = 6 + 2 = 8
console.log("10 - 4 + 2 =", result3); // Output: 8

// ======================= 5. Precedence with Logical Operators =======================

let a = true,
  b = false,
  c = true;

let result4 = (a && b) || c;
// && has higher precedence than ||
// So evaluated as (a && b) || c = false || true = true
console.log("true && false || true =", result4); // Output: true

// ======================= 6. Complex Expression =======================

let x = 5,
  y = 10,
  z = 15;

let result5 = x + (y * z) / (x - 3);
// Precedence order:
// 1. Parentheses (x - 3) = 2
// 2. Multiplication and division left to right: y * z = 150, then 150 / 2 = 75
// 3. Addition: x + 75 = 80
console.log("5 + 10 * 15 / (5 - 3) =", result5); // Output: 80

// ======================= 7. Operator Associativity =======================
// When operators have the same precedence, associativity determines the order.
// Most operators are left-to-right associative, except assignment which is right-to-left.

let result6 = 100 / 10 / 2;
// Division is left-to-right associative
// Equivalent to (100 / 10) / 2 = 10 / 2 = 5
console.log("100 / 10 / 2 =", result6); // Output: 5

let a1, a2, a3;
a1 = a2 = a3 = 10; // Assignment is right-to-left associative
console.log("a1:", a1, "a2:", a2, "a3:", a3); // Output: a1: 10 a2: 10 a3: 10

// ======================= 8. Real-World Case: Calculating Final Price =======================

let price = 100;
let taxRate = 0.1;
let discount = 20;

let finalPrice = price - discount + price * taxRate;
// Multiplication first, then subtraction and addition left to right
// price * taxRate = 10
// Then price - discount = 80
// Then 80 + 10 = 90
console.log("Final price:", finalPrice); // Output: 90

// Using parentheses to clarify intention:
let finalPriceWithParentheses = price - discount + price * taxRate;
console.log("Final price with parentheses:", finalPriceWithParentheses); // Output: 90

// ======================= 9. Summary Table (partial) =======================
// 1. Parentheses ()
// 2. Member access (.), function call ()
// 3. Unary operators (+, -, !, ++, --)
// 4. Multiplication (*), Division (/), Remainder (%)
// 5. Addition (+), Subtraction (-)
// 6. Relational operators (<, <=, >, >=)
// 7. Equality operators (==, !=, ===, !==)
// 8. Logical AND (&&)
// 9. Logical OR (||)
// 10. Conditional (ternary) operator (?:)
// 11. Assignment (=, +=, -=, etc.)

// Understanding operator precedence helps write correct and predictable code.
