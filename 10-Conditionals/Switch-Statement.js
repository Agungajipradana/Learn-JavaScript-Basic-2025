// Basic switch example: Day of the week
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week."); // Output: Start of the work week.
    break;
  case "Friday":
    console.log("Last working day of the week.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Midweek day.");
    break;
}

// Example: Grade evaluation
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Well done!"); // Output: Well done!
    break;
  case "C":
    console.log("Satisfactory.");
    break;
  case "D":
    console.log("Needs improvement.");
    break;
  case "F":
    console.log("Failed.");
    break;
  default:
    console.log("Invalid grade.");
    break;
}

// Real-world case: Role-based access
let userRole = "editor";

switch (userRole) {
  case "admin":
    console.log("Access granted to all sections.");
    break;
  case "editor":
    console.log("Access granted to content editor."); // Output: Access granted to content editor.
    break;
  case "viewer":
    console.log("Access granted to read-only sections.");
    break;
  default:
    console.log("Role not recognized.");
    break;
}

// Multiple values mapping to same outcome
let fruit = "apple";

switch (fruit) {
  case "apple":
  case "banana":
  case "orange":
    console.log("This is a common fruit."); // Output: This is a common fruit.
    break;
  case "dragonfruit":
    console.log("This is a rare fruit.");
    break;
  default:
    console.log("Fruit not listed.");
    break;
}

// Case: Numeric day to weekday
let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday"); // Output: Wednesday
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number.");
    break;
}

// Advanced: Shopping cart shipping options
let shippingMethod = "express";

switch (shippingMethod) {
  case "standard":
    console.log("Delivery in 5–7 business days.");
    break;
  case "express":
    console.log("Delivery in 1–2 business days."); // Output: Delivery in 1–2 business days.
    break;
  case "overnight":
    console.log("Delivery by next day.");
    break;
  default:
    console.log("Unknown shipping method.");
    break;
}
