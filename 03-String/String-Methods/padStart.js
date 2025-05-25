/**
 * JavaScript String Method: padStart()
 * ------------------------------------
 * The `padStart()` method pads the current string with another string (repeated if needed)
 * so that the resulting string reaches the given length. The padding is applied to the beginning.
 *
 * Syntax:
 *   str.padStart(targetLength [, padString])
 *
 * Parameters:
 * - targetLength: The desired length of the final string (after padding).
 * - padString (optional): The string to pad with. Default is a space " ".
 *
 * Returns:
 * - A new string of the specified length with padding added to the start if needed.
 */

// Example 1: Pad a string with spaces
const name = "Tom";
console.log(name.padStart(10));
// Output: "       Tom" (7 spaces added)

// Example 2: Pad with a specific character
const code = "AB";
console.log(code.padStart(6, "."));
// Output: "....AB"

// Example 3: Pad numbers for fixed width formatting
const invoiceNumbers = [1, 25, 300];
invoiceNumbers.forEach((num) => {
  console.log(`INV-${num.toString().padStart(5, "0")}`);
});
// Output:
// INV-00001
// INV-00025
// INV-00300

// Example 4: Pad using a pattern
const signal = "!";
console.log(signal.padStart(8, "-*"));
// Output: "-*-*-*-!"

// Example 5: No padding if the string is already longer
const full = "JavaScript";
console.log(full.padStart(5, "*"));
// Output: "JavaScript" (no change)

// Example 6: Align text to the right in a column
const items = ["apple", "banana", "grape"];
items.forEach((item) => {
  console.log(item.padStart(10, " "));
});
// Output:
//     apple
//    banana
//     grape

// Example 7: Pad values in custom label formatting
function formatValue(label, value) {
  return `${label}: ${value.toString().padStart(8, "0")}`;
}

console.log(formatValue("User ID", 27));
// Output: User ID: 00000027

console.log(formatValue("Order", 1450));
// Output: Order: 00001450

// Summary:
// - `padStart()` is useful for aligning text, formatting fixed-length strings, or left-padding numbers.
// - It returns a new string, the original remains unchanged.
// - Helpful for invoices, serial codes, console layouts, etc.
