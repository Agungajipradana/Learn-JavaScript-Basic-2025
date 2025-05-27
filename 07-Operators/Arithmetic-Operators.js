// ==================== 1. Addition (+) ====================
// Adds two numbers
let a = 5;
let b = 3;
let sum = a + b;
console.log("5 + 3 =", sum); // Output: 8

// Concatenates strings
let greeting = "Hello, " + "World!";
console.log(greeting); // Output: Hello, World!

// Real use case: Total order price
let itemPrice = 15000;
let shippingFee = 5000;
let totalPrice = itemPrice + shippingFee;
console.log("Total price (item + shipping):", totalPrice); // Output: 20000

// ==================== 2. Subtraction (-) ====================
// Subtracts the right operand from the left
let x = 10;
let y = 4;
let difference = x - y;
console.log("10 - 4 =", difference); // Output: 6

// Real use case: Calculate remaining balance
let balance = 100000;
let spent = 32500;
let remaining = balance - spent;
console.log("Remaining balance:", remaining); // Output: 67500

// ==================== 3. Multiplication (*) ====================
// Multiplies two numbers
let width = 5;
let height = 10;
let area = width * height;
console.log("Area (5 x 10):", area); // Output: 50

// Real use case: Calculate total cost of items
let unitPrice = 2000;
let quantity = 7;
let totalCost = unitPrice * quantity;
console.log("Total cost:", totalCost); // Output: 14000

// ==================== 4. Division (/) ====================
// Divides the left operand by the right
let total = 100;
let parts = 4;
let result = total / parts;
console.log("100 / 4 =", result); // Output: 25

// Real use case: Average score
let score1 = 80;
let score2 = 90;
let score3 = 70;
let average = (score1 + score2 + score3) / 3;
console.log("Average score:", average); // Output: 80

// ==================== 5. Modulus (%) ====================
// Returns the remainder of division
let remainder1 = 10 % 3;
console.log("10 % 3 =", remainder1); // Output: 1

let remainder2 = 15 % 5;
console.log("15 % 5 =", remainder2); // Output: 0

// Real use case: Check if number is even or odd
let number = 7;
let isEven = number % 2 === 0;
console.log("Is 7 even?", isEven); // Output: false

// ==================== 6. Exponentiation (**) ====================
// Raises the left operand to the power of the right
let powerResult = 2 ** 3; // 2 to the power of 3
console.log("2 ** 3 =", powerResult); // Output: 8

// Real use case: Square area from side length
let side = 6;
let squareArea = side ** 2;
console.log("Square area of side 6:", squareArea); // Output: 36

// ==================== Advanced Case: Compound Expression ====================
// Complex price calculation with tax and discount
let basePrice = 100000;
let taxRate = 0.1; // 10%
let discountRate = 0.2; // 20%

let taxedPrice = basePrice + basePrice * taxRate; // Add tax
let finalPrice = taxedPrice - taxedPrice * discountRate; // Subtract discount
console.log("Final price after tax and discount:", finalPrice); // Output: 88000
