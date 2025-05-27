// ========== 1. Basic Assignment (=) ==========
let x = 10;
// Assigns the value 10 to variable x
console.log('x =', x); // Output: x = 10

// ========== 2. Add and Assign (+=) ==========
let total = 50;
total += 25;
// Equivalent to: total = total + 25
console.log('total += 25 =>', total); // Output: total += 25 => 75

// ========== 3. Subtract and Assign (-=) ==========
let balance = 100;
balance -= 30;
// Equivalent to: balance = balance - 30
console.log('balance -= 30 =>', balance); // Output: balance -= 30 => 70

// ========== 4. Multiply and Assign (*=) ==========
let price = 20;
price *= 3;
// Equivalent to: price = price * 3
console.log('price *= 3 =>', price); // Output: price *= 3 => 60

// ========== 5. Divide and Assign (/=) ==========
let distance = 100;
distance /= 4;
// Equivalent to: distance = distance / 4
console.log('distance /= 4 =>', distance); // Output: distance /= 4 => 25

// ========== 6. Modulus and Assign (%=) ==========
let remainder = 17;
remainder %= 5;
// Equivalent to: remainder = remainder % 5
console.log('remainder %= 5 =>', remainder); // Output: remainder %= 5 => 2

// ========== 7. Exponentiation and Assign (**=) ==========
let power = 2;
power **= 3;
// Equivalent to: power = power ** 3 (2^3 = 8)
console.log('power **= 3 =>', power); // Output: power **= 3 => 8

// ====== Real World Case 1: Shopping Cart ======
let cartTotal = 0;
let itemPrice = 15;
let itemCount = 3;

// Add total item price to cart using +=
cartTotal += itemPrice * itemCount;
console.log('Cart total after adding items:', cartTotal); // Output: 45

// Apply a discount using -=
let discount = 5;
cartTotal -= discount;
console.log('Cart total after discount:', cartTotal); // Output: 40

// ====== Real World Case 2: Compound Calculation ======
let baseSalary = 5000;

// Increase salary with bonus (10%)
baseSalary += baseSalary * 0.1; // 10% bonus
console.log('Salary after bonus:', baseSalary); // Output: 5500

// Deduct tax (20%)
baseSalary -= baseSalary * 0.2; // 20% tax
console.log('Salary after tax:', baseSalary); // Output: 4400

// ====== Real World Case 3: Tracking Game Score ======
let score = 0;

// Gain points
score += 100; // first level
score += 150; // second level
console.log('Score after two levels:', score); // Output: 250

// Lose points
score -= 50; // penalty
console.log('Score after penalty:', score); // Output: 200

// Double score for bonus round
score *= 2;
console.log('Score after bonus round:', score); // Output: 400
