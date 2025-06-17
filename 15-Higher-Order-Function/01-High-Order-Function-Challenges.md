# JavaScript Higher-Order Function (HOF) Challenges

## Easy Level

1. **Use forEach to log values**
   Print all names in `['Alice', 'Bob', 'Charlie']` using `forEach()`.

2. **Use map to double values**
   Transform `[1, 2, 3]` into `[2, 4, 6]` using `map()`.

3. **Use filter to get even numbers**
   Extract only even numbers from `[1, 2, 3, 4, 5, 6]`.

4. **Use find to get a specific value**
   Find the first number greater than 10 in `[3, 7, 11, 20]`.

5. **Use reduce to sum values**
   Sum all elements in `[5, 10, 15]`.

6. **Use some to check condition**
   Check if any value in `[1, 3, 5, 6]` is even.

7. **Use every to check condition**
   Verify if all elements in `[2, 4, 6]` are even.

8. **Use map to extract property**
   Get names from `[{name: 'John'}, {name: 'Jane'}]`.

9. **Use filter to remove falsy values**
   Remove falsy values from `[0, "hello", false, 42, ""]`.

10. **Use forEach to print index**
    Log the index and value of `["a", "b", "c"]`.

---

## Medium Level

1. **Use map to format strings**
   Convert `["john", "JANE"]` into `['John', 'Jane']`.

2. **Use filter with objects**
   Get users older than 18 from an array of user objects.

3. **Use reduce to get max value**
   Find the largest number in `[4, 10, 99, 23]`.

4. **Use find to get matching object**
   Find user with username 'admin' in an array of users.

5. **Use some on object properties**
   Check if any product has price > 100.

6. **Use every to validate fields**
   Ensure all users have a valid email field.

7. **Use reduce to calculate average**
   Get the average of `[10, 20, 30, 40]`.

8. **Use filter + map chain**
   Filter odd numbers then square them from `[1, 2, 3, 4, 5]`.

9. **Use forEach with custom logic**
   Count how many names start with 'A' in `['Alice', 'Bob', 'Andrew']`.

10. **Use reduce to flatten array**
    Flatten `[ [1, 2], [3, 4] ]` into `[1, 2, 3, 4]`.

---

## Hard Level

1. **Use reduce to count occurrences**
   Count frequency of items in `['a', 'b', 'a', 'c', 'b', 'a']`.

2. **Use map with nested objects**
   Extract city names from `[{user: {city: 'NY'}}, {user: {city: 'LA'}}]`.

3. **Use filter + reduce for conditional sum**
   Sum only even numbers from `[1, 2, 3, 4, 5]`.

4. **Use every + some in array of objects**
   Check if all users are active and some are admins.

5. **Use chain: filter -> map -> reduce**
   Get total price of items over \$50.

6. **Use reduce to group by category**
   Group products by category from product list.

7. **Use map with default values**
   Normalize user data and set missing age to 0.

8. **Use findIndex with complex condition**
   Find index of the first user with status 'inactive' and age > 30.

9. **Create dynamic HOF (function returning function)**
   Create a function that returns a filter function based on a threshold.

10. **Implement debounce using closure**
    Create a `debounce` function that limits how often another function is called.
