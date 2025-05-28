# JavaScript Date Object Exercises

## Covering Getting, Setting, and Other Useful Methods

---

## Getting Date/Time Parts

### Exercise 1 (Easy)

Create a Date object for the current date and time.  
Use `.getFullYear()`, `.getMonth()`, and `.getDate()` to print the current year, month (1-12), and day of the month.

---

### Exercise 2 (Easy)

Using the Date object for the current time, print the current hour, minutes, and seconds using `.getHours()`, `.getMinutes()`, and `.getSeconds()`.

---

### Exercise 3 (Medium)

Create an array of weekday names.  
Use `.getDay()` to print the current weekday name.

---

### Exercise 4 (Medium)

Write a function that returns whether today is a weekend or a weekday, using `.getDay()`.

---

### Exercise 5 (Hard)

Calculate how many days have passed since the start of the current month. Use `.getDate()` and create a new Date object for the first day of the month.

---

## Setting Date/Time Parts

### Exercise 6 (Easy)

Create a Date object for the current date/time.  
Change the year to 2022 using `.setFullYear()` and print the new date.

---

### Exercise 7 (Easy)

Using `.setMonth()`, change the month of a Date object to December (month 11). Print the updated date.

---

### Exercise 8 (Medium)

Create a Date object set to January 31.  
Use `.setMonth(1)` to change the month to February and observe what happens to the date. Print the new date.

---

### Exercise 9 (Medium)

Set the time of a Date object to 15:30:45.500 using `.setHours()`. Print the updated date/time.

---

### Exercise 10 (Hard)

Write a function that adds a specified number of days to a given Date object. Use `.setDate()` and `.getDate()`.

---

### Exercise 11 (Challenge)

Create a function that subtracts 90 minutes from a given Date object using `.setMinutes()` and `.getMinutes()`.

---

## Other Useful Methods

### Exercise 12 (Easy)

Print the current date/time as an ISO string using `.toISOString()`.

---

### Exercise 13 (Easy)

Print the current date only using `.toDateString()`.

---

### Exercise 14 (Medium)

Print the current time only using `.toTimeString()`.

---

### Exercise 15 (Medium)

Create two Date objects and calculate the difference between them in milliseconds using `.getTime()`. Convert the difference into hours.

---

### Exercise 16 (Hard)

Write a function that returns the current timestamp as an ISO 8601 string for API usage.

---

### Exercise 17 (Challenge)

Write a function that takes a Date object and prints the date and time separately using `.toDateString()` and `.toTimeString()`.

---

### Bonus Exercise

Explain why `.getTime()` is preferred for date comparison instead of using comparison operators directly on Date objects.
