/**
 * JavaScript String Method: slice()
 * ----------------------------------
 * The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
 *
 * Syntax:
 *   str.slice(start, end)
 *
 * Parameters:
 * - start: The index where the extraction begins.
 * - end (optional): The index before which to end extraction. The character at this index is not included.
 *
 * Notes:
 * - Negative indices count from the end of the string.
 * - If end is omitted, it slices to the end of the string.
 */

// Example 1: Basic usage
const str1 = "JavaScript";
const result1 = str1.slice(0, 4); // From index 0 to index 3 (4 is not included)
console.log(result1); // Output: "Java"

// Example 2: Slice from a specific index to the end
const result2 = str1.slice(4);
console.log(result2); // Output: "Script"

// Example 3: Using negative indices
const result3 = str1.slice(-6); // Start 6 characters from the end
console.log(result3); // Output: "Script"

const result4 = str1.slice(-6, -3); // From "S" (index -6) to "r" (index -3 not included)
console.log(result4); // Output: "Scr"

// Example 4: Slicing a sentence
const sentence = "The quick brown fox jumps over the lazy dog";
const result5 = sentence.slice(16, 19); // Extract "fox"
console.log(result5); // Output: "fox"

// Example 5: Extracting domain from email
const email = "user@example.com";
const domain = email.slice(email.indexOf("@") + 1);
console.log(domain); // Output: "example.com"

// Example 6: Extract username from email
const username = email.slice(0, email.indexOf("@"));
console.log(username); // Output: "user"

// Example 7: Use in conditional check
const extension = "report.pdf";
if (extension.slice(-4) === ".pdf") {
  console.log("This is a PDF file.");
} else {
  console.log("Not a PDF file.");
}
// Output: "This is a PDF file."

// Example 8: Chained with other string methods
const text = "    JavaScript Basics   ";
const cleaned = text.trim().slice(0, 10).toUpperCase();
console.log(cleaned); // Output: "JAVASCRIPT"

// Summary:
// - slice() is useful for extracting substrings without altering the original string.
// - It supports both positive and negative indices.
