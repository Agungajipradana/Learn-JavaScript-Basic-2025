// =====================================================
// FETCH API WITH PROMISES IN JAVASCRIPT
// =====================================================

// -----------------------------------------------------
// 1. Basic Fetch Request (GET)
// -----------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    // Response must be converted into JSON
    return response.json();
  })
  .then((data) => {
    console.log("Basic GET - Post Title:", data.title);
  })
  .catch((error) => {
    console.error("Basic GET - Error:", error);
  });

// Output:
// Basic GET - Post Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit

// -----------------------------------------------------
// 2. Checking Response Status
// -----------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Status Check - Title:", data.title);
  })
  .catch((error) => {
    console.error("Status Check - Error:", error.message);
  });

// Output (on success):
// Status Check - Title: sunt aut facere ...

// Output (if URL is wrong):
// Status Check - Error: Request failed with status 404

// -----------------------------------------------------
// 3. Making a POST Request (Send Data)
// -----------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is a test post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("POST - Created Post ID:", data.id);
  })
  .catch((error) => {
    console.error("POST - Error:", error);
  });

// Output:
// POST - Created Post ID: 101 (JSONPlaceholder always returns 101)

// -----------------------------------------------------
// 4. Making a PUT Request (Update Existing Data)
// -----------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Post",
    body: "This post has been updated",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("PUT - Updated Title:", data.title);
  })
  .catch((error) => {
    console.error("PUT - Error:", error);
  });

// Output:
// PUT - Updated Title: Updated Post

// -----------------------------------------------------
// 5. DELETE Request (Delete Data)
// -----------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("DELETE - Post deleted successfully.");
    } else {
      throw new Error("DELETE failed with status " + response.status);
    }
  })
  .catch((error) => {
    console.error("DELETE - Error:", error.message);
  });

// Output:
// DELETE - Post deleted successfully.

// -----------------------------------------------------
// 6. Using Fetch in a Function (Reusable & Parameterized)
// -----------------------------------------------------

function getUserById(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("User not found.");
      }
      return res.json();
    })
    .then((user) => {
      console.log(`User ${userId} - Name:`, user.name);
    })
    .catch((err) => {
      console.error("User Fetch Error:", err.message);
    });
}

getUserById(1); // Output: User 1 - Name: Leanne Graham
getUserById(999); // Output: User Fetch Error: User not found.

// -----------------------------------------------------
// 7. Combining Multiple Fetch Requests
// -----------------------------------------------------

const postRequest = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => res.json()
);
const userRequest = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
);

Promise.all([postRequest, userRequest])
  .then(([post, user]) => {
    console.log("Combined - Post Title:", post.title);
    console.log("Combined - Author Name:", user.name);
  })
  .catch((err) => {
    console.error("Combined - Error:", err.message);
  });

// Output:
// Combined - Post Title: sunt aut facere ...
// Combined - Author Name: Leanne Graham

// -----------------------------------------------------
// 8. Handling Network Errors Gracefully
// -----------------------------------------------------

fetch("https://invalid-api-endpoint.com/data")
  .then((res) => res.json())
  .then((data) => console.log("Invalid fetch:", data))
  .catch((err) => console.error("Network Error:", err.message));

// Output:
// Network Error: fetch failed (or appropriate network error)
