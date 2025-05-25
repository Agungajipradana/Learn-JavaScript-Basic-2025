/**
 * JavaScript String Method: padEnd()
 * ----------------------------------
 * The `padEnd()` method pads the current string with another string (repeated if needed)
 * so that the resulting string reaches the given length. The padding is applied to the end.
 *
 * Syntax:
 *   str.padEnd(targetLength [, padString])
 *
 * Parameters:
 * - targetLength: The length of the final string (after padding).
 * - padString (optional): The string to pad with (default is space " ").
 *
 * Returns:
 * - A new string of the specified length with padding added to the end if necessary.
 */

// Example 1: Simple padding with spaces
const name = "John";
console.log(name.padEnd(10));
// Output: "John      " (adds 6 spaces)

// Example 2: Padding with custom character
const code = "AB";
console.log(code.padEnd(6, "."));
// Output: "AB...."

// Example 3: Padding numbers for display
const prices = [5, 10, 100];
prices.forEach((price) => {
  console.log(`$${price.toString().padEnd(6, " ")}|`);
});
// Output:
// $5     |
// $10    |
// $100   |

// Example 4: Pad with repeating pattern
const message = "Hi";
console.log(message.padEnd(10, "-*"));
// Output: "Hi-*-*-*-*"

// Example 5: Pad doesn't truncate if string is already long enough
const longText = "HelloWorld";
console.log(longText.padEnd(5, "."));
// Output: "HelloWorld" (no padding applied)

// Example 6: Pad to align columns
const data = [
  { label: "Name", value: "Alice" },
  { label: "Age", value: "30" },
  { label: "City", value: "Jakarta" },
];

data.forEach((item) => {
  console.log(`${item.label.padEnd(10, " ")}: ${item.value}`);
});
// Output:
// Name      : Alice
// Age       : 30
// City      : Jakarta

// Example 7: Using padEnd in a function to build table rows
function formatRow(label, value) {
  return `${label.padEnd(15, ".")}: ${value}`;
}

console.log(formatRow("Username", "johndoe"));
// Output: Username.......: johndoe

console.log(formatRow("Level", "Admin"));
// Output: Level..........: Admin

// Summary:
// - `padEnd()` is useful for formatting, aligning, or building structured text output.
// - It does not modify the original string but returns a new one.
// - Works great in console UIs, reports, or custom text-based formatting.
