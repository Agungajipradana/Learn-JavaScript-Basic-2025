# JavaScript JSON Challenges

## Easy Level

1. **Parse a basic JSON string**
   Use `JSON.parse()` to convert `'{"name":"John","age":25}'` into a JavaScript object and log each property.

2. **Convert object to JSON string**
   Create an object with `name`, `email`, and `isActive`, then convert it using `JSON.stringify()`.

3. **Pretty print a JSON string**
   Use `JSON.stringify()` with indentation to format an object with nested properties.

4. **Filter specific properties**
   Use `JSON.stringify()` with a filter array to convert only the `name` and `email` from an object.

5. **Parse an array of JSON objects**
   Convert a JSON string representing an array of users to a JavaScript array and log each user's name.

6. **Access nested properties**
   Parse a JSON string with a nested structure and access a deeply nested value.

7. **Check data type after parsing**
   Parse a JSON string and use `typeof` or `Array.isArray()` to check the resulting data types.

8. **JSON round-trip**
   Convert an object to a JSON string and back to an object, then compare if the result matches the original.

9. **Invalid JSON string**
   Try parsing an invalid JSON string (like missing quotes) and handle the error using `try...catch`.

10. **Stringify with array value**
    Convert an object with an array as a property using `JSON.stringify()` and log the result.

---

## Medium Level

1. **Use reviver to transform values**
   Use `JSON.parse()` with a reviver function to convert numeric strings to actual numbers.

2. **Reviver to remove sensitive data**
   Use a reviver function to skip `"password"` when parsing a JSON string with login data.

3. **Filter out null values**
   Use a reviver function to remove properties that have `null` values in the parsed result.

4. **Stringify object with Date**
   Convert an object that includes a `Date` property using `JSON.stringify()` and observe the output.

5. **Replacer function for filtering**
   Use a replacer function in `JSON.stringify()` to exclude properties with falsy values.

6. **Transform stringified output**
   Write a function to selectively include and rename properties while stringifying an object.

7. **Handle nested dates**
   Write a reviver function to automatically convert all ISO date strings into `Date` objects.

8. **Deep stringify**
   Create a complex nested object and convert it into a readable JSON string using pretty-print.

9. **Send API payload**
   Create a JavaScript object that resembles an API request body and convert it to JSON for sending.

10. **Receive API response**
    Parse a mock API JSON response and access nested values like `response.data.user.id`.

---

## Hard Level

1. **Reviver for nested structure transformation**
   Convert deeply nested properties (like date strings) using a recursive reviver in `JSON.parse()`.

2. **Selective export using filter array**
   Use a filter array to export only public profile fields from a complex user object to JSON.

3. **Format numbers in stringify**
   Use a replacer function in `JSON.stringify()` to format all numbers (e.g., round prices to 2 decimals).

4. **Stringify with custom class instance**
   Create a class, instantiate it, and convert the instance to JSON — observe which fields are included.

5. **Dynamic reviver based on key type**
   Write a reviver that dynamically transforms values based on the key pattern (e.g., ending with `_at` = date).

6. **Log JSON from complex data**
   Build a log entry object with meta-data, errors, and context, then convert to a JSON string for logging.

7. **Sanitize object before stringify**
   Implement a `sanitize()` function that removes private or sensitive keys before converting to JSON.

8. **Serialize and restore state**
   Save an application's state to JSON and restore it by parsing the string with custom logic.

9. **Detect circular reference**
   Attempt to stringify an object with a circular reference and explain how to fix it.

10. **Build a custom parser**
    Simulate part of what `JSON.parse()` does using `eval()` carefully for learning (⚠️ with caution).
