# Window Methods in JavaScript

In JavaScript (within the browser environment), the `window` object is the global object that represents the browser window. It provides many built-in methods commonly used for interacting with the user or managing timing events.

## Common Window Methods

| Method            | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `alert()`         | Displays an alert dialog with a message.                   |
| `confirm()`       | Displays a confirmation dialog with OK and Cancel buttons. |
| `prompt()`        | Displays a dialog asking the user for input.               |
| `setTimeout()`    | Executes a function after a specified delay.               |
| `setInterval()`   | Repeatedly executes a function with a fixed time delay.    |
| `clearTimeout()`  | Cancels a timeout set with `setTimeout()`.                 |
| `clearInterval()` | Cancels an interval set with `setInterval()`.              |
| `open()`          | Opens a new browser window or tab.                         |
| `close()`         | Closes the window opened by `window.open()`.               |
| `print()`         | Opens the print dialog of the browser.                     |

## Usage Examples

```javascript
// Display an alert message
alert("Welcome to our website!");

// Display a confirmation dialog
const confirmed = confirm("Do you want to continue?");
if (confirmed) {
  alert("You chose to continue.");
} else {
  alert("You canceled the action.");
}

// Display a prompt dialog
const name = prompt("What is your name?");
if (name) {
  alert(`Hello, ${name}!`);
}

// Execute a function after 2 seconds
const timeoutId = setTimeout(() => {
  console.log("2 seconds have passed.");
}, 2000);

// Execute a function every 1 second
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval #${count}`);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 1000);

// Open and close a new window (must be triggered by user action)
function openNewWindow() {
  const newWindow = window.open(
    "https://example.com",
    "_blank",
    "width=600,height=400"
  );
  setTimeout(() => {
    newWindow.close();
    console.log("The new window has been closed.");
  }, 5000);
}
```
