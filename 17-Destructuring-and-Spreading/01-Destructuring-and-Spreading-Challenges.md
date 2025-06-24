# JavaScript Destructuring & Spread Challenges

## Easy Level

1. **Destructure array values**
   Extract `first` and `second` from `[1, 2, 3]` using array destructuring.

2. **Destructure object values**
   Extract `name` and `age` from `{ name: 'john', age: 25 }`.

3. **Use rest in array destructuring**
   Extract first value and the rest from `[10, 20, 30]`.

4. **Use rest in object destructuring**
   Extract `id` and the rest from `{ id: 1, title: 'JS', views: 100 }`.

5. **Destructure in function parameter**
   Create a function that logs `name` from a user object.

6. **Copy array with spread**
   Copy `[1, 2, 3]` into a new array using spread operator.

7. **Copy object with spread**
   Copy `{ theme: 'dark' }` into a new object using spread operator.

8. **Pass array with spread into function**
   Pass `[1, 2, 3]` into a function that accepts individual arguments.

9. **Merge two arrays using spread**
   Merge `[1, 2]` and `[3, 4]`.

10. **Merge two objects using spread**
    Merge `{ a: 1 }` and `{ b: 2 }`.

---

## Medium Level

1. **Destructure in loop**
   Loop through array of objects and extract `name` property.

2. **Rename while destructuring**
   Rename `fullName` to `name` from `{ fullName: 'john doe' }`.

3. **Destructure nested object**
   Extract `email` from `{ user: { profile: { email: 'a@b.com' } } }`.

4. **Use rest in function parameter**
   Create a function that sums all arguments using `...numbers`.

5. **Destructure during map iteration**
   Map through list of products and extract `price`.

6. **Clone array before sorting**
   Use spread to copy then sort `[5, 3, 8]` without mutating original.

7. **Clone object before updating**
   Copy `{ age: 30 }`, change age to 31 in new object.

8. **Use rest and spread in same block**
   Extract `theme`, then spread remaining and overwrite `fontSize`.

9. **Function that returns combined object**
   Write a function that accepts multiple objects and combines them.

10. **Extract multiple elements and rest**
    Extract first two elements, get the rest from an array `[1,2,3,4]`.

---

## Hard Level

1. **Filter and copy object with spread**
   Extract specific properties while copying rest into a new object.

2. **Destructure deeply nested object**
   From `{ user: { details: { contact: { phone: '123' } } } }`, get `phone`.

3. **Combine multiple spreads and destructuring**
   Merge two objects and extract specific values from result.

4. **Use destructuring with default values**
   Extract `country = 'ID'` from `{ name: 'john' }`.

5. **Destructure array inside object**
   Extract `firstCourse` from `{ name: 'john', courses: ['JS', 'React'] }`.

6. **Rest parameter to log all but first argument**
   Create function `logOthers(first, ...others)`.

7. **Rebuild object from destructured pieces**
   Destructure `user`, then reconstruct `newUser` with modified value.

8. **Create a flexible merge utility**
   Write a function that merges any number of objects.

9. **Destructure in arrow function parameter**
   Write an arrow function that logs `name` from `{ name, age }`.

10. **Use spread to dynamically add keys**
    Combine dynamic key-values into object using spread + computed keys.
