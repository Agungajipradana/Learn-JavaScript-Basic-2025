# JavaScript Promises Challenges

## Easy Level

1. **Create a basic Promise**
   Write a `Promise` that immediately resolves with the message `"Hello from Promise"`.

2. **Handle resolved promise**
   Log the result of a resolved promise using `.then()`.

3. **Handle rejected promise**
   Create a `Promise` that rejects with an error message, and handle it using `.catch()`.

4. **Convert a callback to Promise**
   Rewrite a simple `setTimeout` callback using a `Promise` and `.then()`.

5. **Use `fetch()` to get data**
   Fetch post data from `https://jsonplaceholder.typicode.com/posts/1` and log the title.

6. **Await a delayed promise**
   Create an async function that waits 1 second using a Promise, then logs `"Done"`.

7. **Use `async` function to return value**
   Create an async function that returns `"Resolved"` and log it using `.then()`.

8. **Chain two promises**
   Create two Promises where the second one depends on the result of the first.

9. **Error handling with try...catch**
   Use `try...catch` to handle a `fetch()` call to an invalid URL.

10. **Use `finally()` block**
    Add a `.finally()` after a Promise to log `"Cleanup done"`.

---

## Medium Level

1. **Reusable promise function**
   Build a function `isEven(n)` that returns a Promise: resolves if even, rejects if odd.

2. **Sequential async operations**
   Write an async function that calls 3 Promises in order, each doubling a number.

3. **Chaining fetch calls**
   Fetch a user by ID, then use their `id` to fetch their posts.

4. **Post data using fetch and async/await**
   Send a POST request using `fetch()` with async/await and log the created post ID.

5. **Retry a failing fetch**
   Write a function that tries to fetch a URL, and retries up to 3 times if it fails.

6. **Parallel API requests**
   Fetch three posts in parallel using `Promise.all()` and log all titles.

7. **Wrap `setTimeout` in Promise**
   Write a function `delay(ms)` that returns a Promise that resolves after `ms` milliseconds.

8. **Await multiple users in loop**
   Fetch and log names of users with IDs 1–3 using a `for...of` loop and `await`.

9. **Handle JSON parsing errors with try...catch**
   Simulate receiving a broken JSON string and safely parse it using `try...catch`.

10. **Build a login system with Promise**
    Create a `login(username, password)` function that resolves if correct, rejects otherwise, and handle using async/await.

---

## Hard Level

1. **Create a custom Promise class**
   Write a `TaskQueue` class that stores tasks and runs them sequentially using Promises.

2. **Abort fetch with timeout**
   Use `AbortController` to abort a fetch request if it takes more than 2 seconds.

3. **Debounce API call with async/await**
   Implement a debounced search input handler that uses async/await to fetch results.

4. **Race between async tasks**
   Use `Promise.race()` to return the result of the fastest API call from a list of URLs.

5. **Handle multiple errors in `Promise.all()`**
   Modify a function using `Promise.allSettled()` to handle mixed success and failure from multiple fetch requests.

6. **Build a retry wrapper for any Promise**
   Create a `retry(fn, attempts)` function that retries any promise-returning function on failure.

7. **Queue API requests with rate limiting**
   Create a system that limits requests to 1 per second, even if 5 are triggered quickly.

8. **Async form validation**
   Validate each field in a form using separate Promises and only submit if all pass.

9. **Simulate transaction with rollback**
   Chain 3 async operations (e.g., deduct balance, send item, update log) and revert if one fails.

10. **Build async data preloader**
    Preload data using async functions during page load and expose it globally when complete.

---
