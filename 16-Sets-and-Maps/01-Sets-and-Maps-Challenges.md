# JavaScript Sets and Maps Challenges

## Easy Level

1. **Create an empty Set**  
   Create a `Set` and log it to the console.

2. **Convert array to Set**  
   Convert `[1, 2, 2, 3, 4]` into a Set and log the result.

3. **Add values to a Set**  
   Add numbers `5`, `6`, and `6` to a Set and display it.

4. **Check value in a Set**  
   Check if `3` exists in `Set([1, 2, 3, 4])`.

5. **Delete a value from Set**  
   Remove value `2` from `Set([1, 2, 3])`.

6. **Clear a Set**  
   Add a few values to a Set, then use `.clear()` and log the result.

7. **Get Set size**  
   Create a Set from `[1, 1, 2, 3, 3, 4]` and print its size.

8. **Create Map with key-value pairs**  
   Create a `Map` with keys `"name"`, `"age"`, and `"role"`.

9. **Get a value from Map**  
   Use `.get("name")` from a Map and log the result.

10. **Check if a Map contains key**  
    Check if `"email"` exists in the Map using `.has()`.

---

## Medium Level

1. **Union of two Sets**  
   Create a function that returns the union of two Sets.

2. **Intersection of two Sets**  
   Find common elements in `Set([1, 2, 3])` and `Set([2, 3, 4])`.

3. **Difference between Sets**  
   Get values in `Set([1, 2, 3, 4])` that are not in `Set([3, 4, 5])`.

4. **Iterate through Set values**  
   Use `for...of` to print all values in `Set(["a", "b", "c"])`.

5. **Loop through Map entries**  
   Use `for...of` to print all key-value pairs in a Map.

6. **Update Map value**  
   Replace `"role"` in a Map from `"user"` to `"admin"`.

7. **Delete Map entry**  
   Remove the key `"age"` from a Map and log the result.

8. **Convert Map to array**  
   Convert `Map([["a", 1], ["b", 2]])` to array of pairs.

9. **Get all Map keys**  
   Extract all keys from a Map using `map.keys()`.

10. **Get all Set values into array**  
    Convert a `Set` into an array using spread operator.

---

## Hard Level

1. **Count unique elements in array using Set**  
   Write a function that returns how many unique numbers are in an array.

2. **Use Set to remove duplicates from array of strings**  
   Clean up `["apple", "banana", "apple", "orange"]` into a unique list.

3. **Track unique visitors using Set**  
   Simulate a visitor tracking system where each user ID is only stored once.

4. **Use Map to count word frequencies**  
   Count how many times each word appears in `["apple", "banana", "apple", "orange", "banana"]`.

5. **Use object as Map key**  
   Store a user object as a key in a Map and assign it a value.

6. **Chain Set operations: union → intersection**  
   Given three Sets A, B, and C, find values common in (A ∪ B) and C.

7. **Group items by category using Map**  
   Given a list of products with categories, group them by category using a `Map`.

8. **Reverse Map (value → key)**  
   Given a `Map`, reverse it so values become keys.

9. **Compare two Sets for equality**  
   Write a function to check if two Sets have exactly the same elements.

10. **Use Map with function values**  
    Store string commands as keys and functions as values, then call a function based on key input.
