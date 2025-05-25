/**
 * JavaScript String Method: trimStart()
 * --------------------------------------
 * The `trimStart()` method removes whitespace from the **beginning (left side)** of a string.
 * Alias: `trimLeft()` (deprecated but still supported in many environments).
 *
 * Syntax:
 *   str.trimStart()
 */

// Example 1: Basic usage
const text1 = "   Hello World!";
console.log(text1.trimStart()); // Output: "Hello World!"

// Example 2: Difference between trim(), trimStart(), and trimEnd()
console.log(text1.trim()); // Output: "Hello World!"
console.log(text1.trimStart()); // Output: "Hello World!"
console.log(text1.trimEnd()); // Output: "   Hello World!"

// Example 3: Original string remains unchanged
console.log(text1); // Output: "   Hello World!"

// Example 4: Removing leading tabs and newlines
const messy = "\n\t   Clean me!";
const cleaned = messy.trimStart();
console.log(cleaned); // Output: "Clean me!"

// Example 5: Using trimStart() before formatting
let rawInput = "     User123";
let result = rawInput.trimStart() + " is logged in.";
console.log(result); // Output: "User123 is logged in."

// Example 6: Displaying string in a formatted view
const paddedLeft = "     12345";
console.log(">" + paddedLeft.trimStart() + "<"); // Output: ">12345<"

// Example 7: Manually removing both ends using trimStart and trimEnd
const paddedText = "   This is padded   ";
const fullyTrimmed = paddedText.trimStart().trimEnd();
console.log(fullyTrimmed); // Output: "This is padded"

// Example 8: Using alias method (not recommended)
const oldStyle = "   left space";
console.log(oldStyle.trimLeft()); // Output: "left space"

// Summary:
// - `trimStart()` removes only the leading whitespace.
// - Great for cleaning up input, especially when formatting matters.
// - Does not alter the original string (immutable).
