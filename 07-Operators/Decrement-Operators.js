// ======================= 1. Basic Concept =======================
// Decrement operator (--) decreases a variable's value by 1

let counter = 5;
counter--; // post-decrement
console.log("After counter--:", counter); // Output: 4

--counter; // pre-decrement
console.log("After --counter:", counter); // Output: 3

// ======================= 2. Post-Decrement (value--) =======================
// Returns the original value, then decreases it

let a = 10;
let resultA = a--;
console.log("Post-decrement resultA:", resultA); // Output: 10
console.log("Value of a after a--:", a); // Output: 9

// ======================= 3. Pre-Decrement (--value) =======================
// Decreases the value first, then returns it

let b = 10;
let resultB = --b;
console.log("Pre-decrement resultB:", resultB); // Output: 9
console.log("Value of b after --b:", b); // Output: 9

// ======================= 4. Use in Loops (Countdown) =======================
// Example: Countdown from 5 to 1

let i = 5;
while (i > 0) {
  console.log("Countdown:", i);
  i--; // Post-decrement
}
// Output:
// Countdown: 5
// Countdown: 4
// Countdown: 3
// Countdown: 2
// Countdown: 1

// ======================= 5. Use in for-loops (Reversing Index) =======================
for (let j = 3; j > 0; j--) {
  console.log("Reversed index:", j);
}
// Output:
// Reversed index: 3
// Reversed index: 2
// Reversed index: 1

// ======================= 6. Real-World Case: Remove Items from Stock =======================
let stock = 5;

function sellItem() {
  if (stock > 0) {
    stock--;
    console.log("Item sold. Remaining stock:", stock);
  } else {
    console.log("Out of stock.");
  }
}

sellItem(); // Output: Item sold. Remaining stock: 4
sellItem(); // Output: Item sold. Remaining stock: 3
sellItem(); // Output: Item sold. Remaining stock: 2
sellItem(); // Output: Item sold. Remaining stock: 1
sellItem(); // Output: Item sold. Remaining stock: 0
sellItem(); // Output: Out of stock.

// ======================= 7. Advanced Case: User Session Timeout Countdown =======================
let secondsLeft = 5;

function sessionCountdown() {
  if (secondsLeft > 0) {
    console.log(`Session ends in ${secondsLeft} seconds`);
    secondsLeft--; // reduce time each tick
  } else {
    console.log("Session expired.");
  }
}

sessionCountdown(); // Output: Session ends in 5 seconds
sessionCountdown(); // Output: Session ends in 4 seconds
sessionCountdown(); // Output: Session ends in 3 seconds
sessionCountdown(); // Output: Session ends in 2 seconds
sessionCountdown(); // Output: Session ends in 1 seconds
sessionCountdown(); // Output: Session expired.
