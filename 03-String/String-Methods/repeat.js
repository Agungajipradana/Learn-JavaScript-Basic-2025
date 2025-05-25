/**
 * JavaScript String Method: repeat()
 * ---------------------------------
 * The `repeat()` method constructs and returns a new string
 * which contains the specified number of copies of the string
 * on which it was called, concatenated together.
 *
 * Syntax:
 *   str.repeat(count)
 *
 * Parameters:
 * - count: An integer between 0 and +Infinity, indicating the number of times to repeat the string.
 *
 * Returns:
 * - A new string with the original string repeated `count` times.
 *
 * Throws:
 * - RangeError if count is negative or Infinity.
 */

// Example 1: Repeat a simple string multiple times
const hello = "ha";
console.log(hello.repeat(3));
// Output: "hahaha"

// Example 2: Repeat empty string returns empty string
const empty = "";
console.log(empty.repeat(5));
// Output: ""

// Example 3: Repeat zero times returns empty string
const text = "abc";
console.log(text.repeat(0));
// Output: ""

// Example 4: Repeat a complex string
const pattern = "-*";
console.log(pattern.repeat(5));
// Output: "-*-*-*-*-*"

// Example 5: Repeat with dynamic count
function echo(word, times) {
  return word.repeat(times);
}
console.log(echo("echo", 4));
// Output: "echoechoechoecho"

// Example 6: Using repeat for simple text-based progress bar
function progressBar(percent) {
  const totalBars = 20;
  const filledBars = Math.round((percent / 100) * totalBars);
  const emptyBars = totalBars - filledBars;
  return "[" + "=".repeat(filledBars) + " ".repeat(emptyBars) + "]";
}

console.log(progressBar(25));
// Output: "[=====               ]"

console.log(progressBar(75));
// Output: "[===============     ]"

// Example 7: Invalid counts throw error
try {
  console.log("test".repeat(-1));
} catch (e) {
  console.log(e.message);
  // Output: "Invalid count value: -1"
}

// Summary:
// - `repeat()` duplicates the string a given number of times.
// - It is useful for text formatting, building repeated patterns, and UI elements in console.
// - Throws RangeError if the count is negative or infinite.
