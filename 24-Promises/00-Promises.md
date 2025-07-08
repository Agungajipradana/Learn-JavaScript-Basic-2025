# JavaScript Promises: A Complete Guide

## 1. Callbacks

Before Promises, JavaScript used callbacks to handle asynchronous operations. A **callback** is a function passed as an argument to another function, and it is executed after the main function completes.

### Example

```javascript
function getData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

getData((message) => {
  console.log(message); // "Data received!"
});
```

### Drawbacks

- Callback Hell (nested callbacks)
- Hard to read and maintain
- Error handling is more complex

---

## 2. Promise Constructor

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation. It has three states:

- `pending`: initial state
- `fulfilled`: the operation completed successfully
- `rejected`: the operation failed

### Syntax

```javascript
const promise = new Promise((resolve, reject) => {
  // async operation
  if (/* success */) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

### Example

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
};

fetchData()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
```

---

## 3. Fetch API

The **Fetch API** is a modern way to make network requests and returns a Promise.

### Basic Usage

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));
```

- `fetch()` returns a Promise that resolves to the `Response` object.
- You usually need to call `.json()` or `.text()` on the response.

---

## 4. Async and Await

**Async/Await** is syntactic sugar over Promises, making asynchronous code easier to read and write.

### Syntax

- `async` declares an asynchronous function
- `await` pauses the function execution until the Promise resolves

### Example

```javascript
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPost();
```

### Benefits

- Cleaner syntax
- Easier to read and debug
- Handles errors using `try...catch`

---

## Summary

| Feature     | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| Callbacks   | Functions passed as arguments for async handling, but can lead to nested code |
| Promise     | Represents a value that may be available now, later, or never                 |
| Fetch API   | Uses Promises to make HTTP requests                                           |
| Async/Await | Simplifies Promise-based code for better readability and error handling       |

---

## References

- [MDN Web Docs - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Web Docs - Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
