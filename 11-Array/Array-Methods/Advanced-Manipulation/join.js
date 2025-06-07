// ============================================
// ARRAY METHOD: join()
// ============================================
// The `join()` method joins all elements of an array into a single string.
// You can specify a separator, or it defaults to a comma.

// ============================================
// Example 1: Basic usage with default separator
// ============================================
const fruits = ['apple', 'banana', 'cherry'];
const result1 = fruits.join();

console.log("Joined (default separator):", result1);
// Output: "apple,banana,cherry"

// ============================================
// Example 2: Using a custom separator
// ============================================
const colors = ['red', 'green', 'blue'];
const result2 = colors.join(' | ');

console.log("Joined with pipe separator:", result2);
// Output: "red | green | blue"

// ============================================
// Example 3: Joining with no separator (empty string)
// ============================================
const letters = ['H', 'e', 'l', 'l', 'o'];
const result3 = letters.join('');

console.log("Joined with no separator:", result3);
// Output: "Hello"

// ============================================
// Example 4: Joining numbers
// ============================================
const numbers = [1, 2, 3, 4, 5];
const result4 = numbers.join('-');

console.log("Joined numbers with dash:", result4);
// Output: "1-2-3-4-5"

// ============================================
// Example 5: Creating CSV (Comma-Separated Values) string
// ============================================
const headers = ['Name', 'Age', 'Country'];
const values = ['Alice', 25, 'Indonesia'];

const csvRow = headers.join(',') + '\n' + values.join(',');

console.log("CSV Output:\n" + csvRow);
// Output:
// Name,Age,Country
// Alice,25,Indonesia

// ============================================
// Example 6: Joining nested array (flat first if needed)
// ============================================
const nested = [1, [2, 3], 4];
const flatJoined = nested.flat().join(',');

console.log("Flat and joined nested array:", flatJoined);
// Output: "1,2,3,4"

// ============================================
// Example 7: Rebuilding a sentence from words
// ============================================
const words = ['JavaScript', 'is', 'fun'];
const sentence = words.join(' ');

console.log("Reconstructed sentence:", sentence);
// Output: "JavaScript is fun"

// ============================================
// Example 8: Generating HTML list items
// ============================================
const items = ['Home', 'About', 'Contact'];

const htmlList = '<ul>\n' + items.map(item => `  <li>${item}</li>`).join('\n') + '\n</ul>';

console.log("Generated HTML:\n" + htmlList);
// Output:
// <ul>
//   <li>Home</li>
//   <li>About</li>
//   <li>Contact</li>
// </ul>
