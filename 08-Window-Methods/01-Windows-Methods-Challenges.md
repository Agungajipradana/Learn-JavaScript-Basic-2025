# JavaScript Window Methods - Practice Question

## Task Description

Create a simple HTML page with **two buttons**:

### 1. "Start Countdown"

- When this button is clicked:
  - Show an `alert()` message saying that the countdown will start.
  - Use `setInterval()` to display numbers from 5 down to 1 in the browser console, one number per second.
  - After reaching 1, show an `alert("Time's up!")` and stop the interval using `clearInterval()`.

### 2. "Ask User Name"

- When this button is clicked:
  - Use `prompt()` to ask the user to enter their name.
  - If the user enters a name (not null or empty), show an `alert()` with the message: `Hello, [name]!`.
  - If the user cancels or leaves the input blank, show an `alert()` saying: `You didn't enter your name.`

## Objective

This exercise is designed to help you practice and understand the following JavaScript window methods:

- `alert()`
- `prompt()`
- `setInterval()`
- `clearInterval()`

## Example Console Output for "Start Countdown"

5  
4  
3  
2  
1  
// Then an alert box: "Time's up!"

## Notes

- Use `console.log()` to print countdown numbers.
- Use conditions to check if `prompt()` returned a valid name.
- These methods only work in the browser environment and not in Node.js.
