/**
 * JavaScript String Method: replaceAll()
 * --------------------------------------
 * The `replaceAll()` method returns a new string with all matches of a pattern replaced by a replacement.
 * Unlike `replace()`, this method replaces **all** occurrences of a string or regular expression with the global flag.
 *
 * Syntax:
 *   str.replaceAll(searchValue, replaceValue)
 *
 * Parameters:
 * - searchValue: The substring or RegExp (with /g flag) to search for.
 * - replaceValue: The string or function to replace the matched substring.
 *
 * Returns:
 * - A new string with all replacements applied.
 *
 * Note:
 * - Introduced in ECMAScript 2021 (ES12)
 * - If `searchValue` is a RegExp, it must have the global `g` flag.
 */

// Example 1: Replace all occurrences of a word using string
const text1 = "apple, apple, apple";
const result1 = text1.replaceAll("apple", "orange");
console.log(result1);
// Output: "orange, orange, orange"

// Example 2: Replace all characters
const text2 = "a-b-c-d";
const result2 = text2.replaceAll("-", "_");
console.log(result2);
// Output: "a_b_c_d"

// Example 3: Using regular expression with global flag
const text3 = "foo1 foo2 foo3";
const result3 = text3.replaceAll(/foo\d/g, "bar");
console.log(result3);
// Output: "bar bar bar"

// Example 4: Replace all whitespace characters with no space
const text4 = "   Remove    all   spaces ";
const result4 = text4.replaceAll(/\s+/g, "");
console.log(result4);
// Output: "Removeallspaces"

// Example 5: Replace all digits with '*'
const text5 = "My number is 123-456-7890";
const result5 = text5.replaceAll(/\d/g, "*");
console.log(result5);
// Output: "My number is ***-***-****"

// Example 6: Dynamic replacement using a function
// This example capitalizes all three-letter words
const text6 = "cat bat rat mat";
const result6 = text6.replaceAll(/\b\w{3}\b/g, (match) => match.toUpperCase());
console.log(result6);
// Output: "CAT BAT RAT MAT"

// Example 7: Replacing special characters
const text7 = "<div>Hello</div><div>World</div>";
const result7 = text7
  .replaceAll("<div>", "[DIV]")
  .replaceAll("</div>", "[/DIV]");
console.log(result7);
// Output: "[DIV]Hello[/DIV][DIV]World[/DIV]"

// Example 8: Using a non-global RegExp will throw an error
try {
  console.log("test test".replaceAll(/test/, "done"));
} catch (err) {
  console.log("Error:", err.message);
  // Output: Error: String.prototype.replaceAll called with a non-global RegExp argument
}

// Summary:
// - `replaceAll()` is useful when you need to replace multiple occurrences of a substring or pattern.
// - You must use the global `/g` flag when using RegExp.
// - Supports both static strings and dynamic replacement functions.
