/**
 * JavaScript String Method: trimEnd()
 * ------------------------------------
 * The `trimEnd()` method removes whitespace from the **end (right side)** of a string.
 * Also known as `trimRight()` (alias).
 * 
 * Syntax:
 *   str.trimEnd()
 */

// Example 1: Basic usage
const text1 = "  Hello World!   ";
console.log(text1.trimEnd()); // Output: "  Hello World!"

// Example 2: Difference with trim()
console.log(text1.trim());     // Output: "Hello World!"
console.log(text1.trimEnd());  // Output: "  Hello World!"

// Example 3: Showing immutability
console.log(text1); // Output: "  Hello World!   " (original string remains unchanged)

// Example 4: Trimming multiple trailing new lines and tabs
const messyLine = "Some data here\t\n\n";
const cleanLine = messyLine.trimEnd();
console.log(cleanLine); // Output: "Some data here"

// Example 5: Using trimEnd() before appending text
let sentence = "Welcome user   ";
let message = sentence.trimEnd() + ", your session is ready.";
console.log(message); // Output: "Welcome user, your session is ready."

// Example 6: Useful in formatting
const paddedRight = "12345     ";
console.log(">" + paddedRight.trimEnd() + "<"); // Output: ">12345<"

// Example 7: Combining trimStart and trimEnd manually
const padded = "   Trim this text   ";
const fullyTrimmed = padded.trimStart().trimEnd();
console.log(fullyTrimmed); // Output: "Trim this text"

// Example 8: Aliased method (not recommended, but supported in most environments)
const alias = "some value   ";
console.log(alias.trimRight()); // Output: "some value"

// Summary:
// - `trimEnd()` is useful when you only want to remove trailing whitespace.
// - It's helpful for formatting, cleaning data, or preparing strings for output.
// - Does not modify the original string.
