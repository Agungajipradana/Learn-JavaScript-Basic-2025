// ======================= 1. Basic Concept =======================
// Increment operator (++) increases a variable's value by 1

let count = 0;
count++; // post-increment
console.log("After count++:", count); // Output: 1

++count; // pre-increment
console.log("After ++count:", count); // Output: 2

// ======================= 2. Post-Increment (value++) =======================
// Returns the original value, then increments
let a = 5;
let resultA = a++;
console.log("Post-increment resultA:", resultA); // Output: 5
console.log("Value of a after a++:", a); // Output: 6

// ======================= 3. Pre-Increment (++value) =======================
// Increments first, then returns the new value
let b = 5;
let resultB = ++b;
console.log("Pre-increment resultB:", resultB); // Output: 6
console.log("Value of b after ++b:", b); // Output: 6

// ======================= 4. Use in Loops =======================
// Common use: iterating over an array
let fruits = ["apple", "banana", "cherry"];
let i = 0;

while (i < fruits.length) {
  console.log("Fruit:", fruits[i]);
  i++; // Post-increment inside loop
}
// Output:
// Fruit: apple
// Fruit: banana
// Fruit: cherry

// ======================= 5. Use in for-loops =======================
for (let j = 0; j < 3; j++) {
  console.log("Index using for loop:", j);
}
// Output:
// Index using for loop: 0
// Index using for loop: 1
// Index using for loop: 2

// ======================= 6. Real-World Case: Generating Invoice Numbers =======================
let invoiceNumber = 1000;

function getNextInvoiceNumber() {
  return invoiceNumber++; // each call gives the current, then increments
}

console.log("Invoice #", getNextInvoiceNumber()); // Output: 1000
console.log("Invoice #", getNextInvoiceNumber()); // Output: 1001
console.log("Invoice #", getNextInvoiceNumber()); // Output: 1002

// ======================= 7. Advanced Case: Update Quantity in Cart =======================
let cartItem = {
  name: "T-Shirt",
  quantity: 1,
};

function addToCart(item) {
  item.quantity++; // increase quantity by 1
  console.log(`${item.name} quantity:`, item.quantity);
}

addToCart(cartItem); // Output: T-Shirt quantity: 2
addToCart(cartItem); // Output: T-Shirt quantity: 3
