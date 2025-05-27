// ======================= 1. AND (&&) =======================
// Returns true if BOTH operands are true
console.log("true && true =>", true && true); // Output: true
console.log("true && false =>", true && false); // Output: false

// Real-world: User login and email verified
let isLoggedIn = true;
let isEmailVerified = false;
let canAccessDashboard = isLoggedIn && isEmailVerified;
console.log("Can access dashboard:", canAccessDashboard); // Output: false

// ======================= 2. OR (||) =======================
// Returns true if AT LEAST one operand is true
console.log("true || false =>", true || false); // Output: true
console.log("false || false =>", false || false); // Output: false

// Real-world: Grant access if user is admin OR moderator
let isAdmin = false;
let isModerator = true;
let hasAccess = isAdmin || isModerator;
console.log("User has access:", hasAccess); // Output: true

// ======================= 3. NOT (!) =======================
// Reverses the truthiness of a value
console.log("!true =>", !true); // Output: false
console.log("!false =>", !false); // Output: true

// Real-world: Check if user is NOT banned
let isBanned = false;
let canPost = !isBanned;
console.log("User can post:", canPost); // Output: true

// ======================= Combined Logical Operations =======================
// Complex condition combining AND, OR, and NOT
let isVerified = true;
let hasSubscription = false;
let hasTrial = true;

let canWatchContent = isVerified && (hasSubscription || hasTrial);
console.log("Can watch content:", canWatchContent); // Output: true

// ======================= Real-World Case: Product Checkout Validation =======================
let hasItemsInCart = true;
let paymentMethodSelected = true;
let shippingAddressProvided = false;

let readyToCheckout =
  hasItemsInCart && paymentMethodSelected && shippingAddressProvided;
console.log("Ready to checkout:", readyToCheckout); // Output: false

// ======================= Real-World Case: Feature Access =======================
// Premium users OR users with more than 100 points can access a feature
let isPremiumUser = false;
let userPoints = 120;

let featureAccess = isPremiumUser || userPoints > 100;
console.log("Feature access granted:", featureAccess); // Output: true

// ======================= Advanced Case: Secure Admin Panel =======================
// Only allow access if user is active, not banned, and has role 'admin'
let user = {
  isActive: true,
  isBanned: false,
  role: "admin",
};

let canAccessAdminPanel =
  user.isActive && !user.isBanned && user.role === "admin";
console.log("Can access admin panel:", canAccessAdminPanel); // Output: true
