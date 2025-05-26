// -------------------------------------------
// Math.ceil(x)
// Rounds a number UP to the nearest integer.
// Always rounds *toward positive infinity*.
// -------------------------------------------

// Basic usage
console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.ceil(7.99)); // Output: 8
console.log(Math.ceil(10)); // Output: 10
console.log(Math.ceil(-2.3)); // Output: -2
// Explanation: -2.3 rounds up toward 0

// -------------------------------------------
// Common Use Cases
// -------------------------------------------

// 1. Round up price for billing
const itemPrice = 19.25;
const finalPrice = Math.ceil(itemPrice);
console.log(finalPrice); // Output: 20

// 2. Divide items among groups (e.g., pagination)
const totalItems = 53;
const itemsPerPage = 10;
const totalPages = Math.ceil(totalItems / itemsPerPage);
console.log(totalPages); // Output: 6

// 3. Estimate ceiling of download time
const fileSizeMB = 52.4;
const speedMBps = 5;
const timeInSeconds = Math.ceil(fileSizeMB / speedMBps);
console.log(timeInSeconds); // Output: 11

// 4. Round up to calculate number of transport vehicles needed
const totalPeople = 103;
const busCapacity = 40;
const busesNeeded = Math.ceil(totalPeople / busCapacity);
console.log(busesNeeded); // Output: 3

// 5. Round up on discount calculation
const totalCost = 97.5;
const discountRate = 0.1;
const discount = Math.ceil(totalCost * discountRate);
console.log(discount); // Output: 10

// 6. Round up delivery time in days
function estimatedDelivery(distanceKm) {
  const kmPerDay = 150;
  return Math.ceil(distanceKm / kmPerDay);
}
console.log(estimatedDelivery(550)); // Output: 4

// 7. Force rounding up after floating point operations
const result = 0.1 + 0.2; // 0.30000000000000004 due to float precision
console.log(Math.ceil(result * 10)); // Output: 4

// 8. Rounding up currency conversion
const usd = 49.3;
const rate = 14.5;
const rupiah = Math.ceil(usd * rate);
console.log(rupiah); // Output: 716

// 9. Determine the number of batches for production
const units = 173;
const batchSize = 50;
const totalBatches = Math.ceil(units / batchSize);
console.log(totalBatches); // Output: 4

// 10. Round up user rating to display stars
const averageRating = 3.2;
const starsToDisplay = Math.ceil(averageRating);
console.log(starsToDisplay); // Output: 4
