# JavaScript Web Storage Challenges

## Easy Level

1. **Save user theme to localStorage**
   Store the value `"dark"` under the key `"theme"` using `localStorage.setItem()`.

2. **Retrieve and log stored theme**
   Retrieve the `"theme"` value from localStorage and log it to the console.

3. **Save temporary user session name**
   Use `sessionStorage` to store a username like `"guest123"` under the key `"username"`.

4. **Remove an item from localStorage**
   Remove the `"theme"` key from localStorage using `removeItem()`.

5. **Clear sessionStorage**
   Clear all data from `sessionStorage` using the appropriate method.

6. **Check if key exists in localStorage**
   Use `getItem()` to check if `"userId"` exists, and if it does, log `"User found"`.

7. **List all keys in localStorage**
   Use a loop and `localStorage.key()` to log all stored keys.

8. **Store a number as string**
   Save the number `12345` in localStorage. Then retrieve and log its type.

9. **Store and retrieve a boolean value**
   Save `true` as a string in localStorage, then convert it back to a boolean on retrieval.

10. **Handle missing data gracefully**
    Retrieve a key from localStorage that may not exist and handle it without error.

---

## Medium Level

1. **Store an object in localStorage**
   Save an object like `{ name: "Alice", age: 30 }` by converting it to a JSON string.

2. **Retrieve and parse stored object**
   Get the object stored in localStorage, parse it back into an object, and access the `name` property.

3. **Implement manual expiration logic**
   Save an item with a timestamp and custom expiration (e.g., 1 minute). Check on retrieval if it is still valid.

4. **Store an array in localStorage**
   Save the array `["React", "Vue", "Svelte"]` and retrieve the second element.

5. **Save user preferences temporarily**
   Save a language preference to `sessionStorage` and display it when the page loads.

6. **Build reusable save/get functions**
   Create `saveData(key, value)` and `getData(key)` functions for working with localStorage.

7. **Track page visits using localStorage**
   Use localStorage to count how many times the user has opened the page.

8. **Sync form input to localStorage**
   Auto-save input field values to localStorage and refill them on page reload.

9. **Validate stored JSON**
   Try to parse a stored JSON string safely using `try...catch` and log if it fails.

10. **Use localStorage for dark mode toggle**
    Implement a dark mode switch that remembers the choice using localStorage.

---

## Hard Level

1. **Create a Web Storage wrapper class**
   Build a class `StorageHelper` with methods like `set()`, `get()`, `remove()`, and support for expiration.

2. **Migrate session data to localStorage**
   Move all items from `sessionStorage` to `localStorage` and delete the originals.

3. **Backup and restore localStorage**
   Export all localStorage data to a downloadable JSON string, then reload it later into localStorage.

4. **Handle JSON parsing errors globally**
   Create a utility function to safely parse any JSON string from storage with detailed error logs.

5. **Limit localStorage capacity**
   Simulate max size behavior: store increasing data and stop before exceeding \~5MB (test browser limits).

6. **Create expiration cleanup routine**
   Periodically check and delete expired entries from localStorage using timestamps.

7. **Secure localStorage data format**
   Encode stored data (e.g., base64 or AES) before saving and decode it after retrieving.

8. **Detect storage availability**
   Build a utility to test if localStorage and sessionStorage are available and usable in the browser.

9. **Build a cross-tab sync system**
   Use the `storage` event to sync data changes across multiple browser tabs.

10. **Build a namespaced storage manager**
    Create a manager that stores all keys under a specific namespace (e.g., `"myapp:user"`), and filters based on that.

---
