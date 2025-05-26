// -------------------------------------------
// Math.random()
// Returns a pseudo-random floating-point number in the range [0, 1).
// It will never return exactly 1, but can return 0.
// -------------------------------------------

// Basic example
console.log(Math.random());
// Output: A random number like 0.7345 (value changes each time you run it)

// -------------------------------------------
// Common use cases
// -------------------------------------------

// 1. Generate random number between 0 and 10
const random0to10 = Math.random() * 10;
console.log(random0to10);
// Output: Random float between 0 (inclusive) and 10 (exclusive)

// 2. Round to nearest integer
const randomInt0to9 = Math.floor(Math.random() * 10);
console.log(randomInt0to9);
// Output: Integer between 0 and 9

// 3. Random integer between min and max (inclusive)
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(5, 15));
// Output: Integer between 5 and 15

// 4. Simulate a coin flip
const coin = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(coin);
// Output: Either "Heads" or "Tails"

// 5. Simulate a dice roll (1 to 6)
const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
// Output: Integer between 1 and 6

// 6. Pick a random item from an array
const fruits = ["apple", "banana", "cherry", "date"];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);
// Output: Random fruit from the list

// 7. Shuffle an array (Fisher-Yates shuffle)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));
// Output: Array shuffled in random order

// 8. Generate a random hexadecimal color
const randomHexColor = `#${Math.floor(Math.random() * 0xffffff)
  .toString(16)
  .padStart(6, "0")}`;
console.log(randomHexColor);
// Output: A color like "#3e92cc"

// 9. Create random boolean value
const randomBoolean = Math.random() > 0.5;
console.log(randomBoolean);
// Output: true or false

// 10. Password generator (example: 6-char alphanumeric)
function generatePassword(length = 6) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}
console.log(generatePassword());
// Output: Random 6-character password

// 11. Random delay simulation (e.g., fake loading)
const delay = Math.floor(Math.random() * 3000);
console.log(`Simulated delay: ${delay}ms`);
setTimeout(() => {
  console.log("Done waiting");
}, delay);

// 12. Weighted random selection (e.g., 70% chance for "A", 30% for "B")
function weightedRandom() {
  const r = Math.random();
  return r < 0.7 ? "A" : "B";
}
console.log(weightedRandom());
// Output: Mostly "A", sometimes "B"

// 13. Random number with fixed decimal places
const fixedRandom = (Math.random() * 100).toFixed(2);
console.log(fixedRandom);
// Output: A float between 0 and 100, like "27.63"

// 14. Random RGB color
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
console.log(`rgb(${r}, ${g}, ${b})`);
// Output: e.g., "rgb(134, 87, 209)"
