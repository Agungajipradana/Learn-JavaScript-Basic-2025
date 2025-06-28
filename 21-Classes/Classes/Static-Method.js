// =====================================================
// STATIC METHODS IN JAVASCRIPT CLASSES
// =====================================================

/*
  A static method is defined using the `static` keyword.
  It belongs to the class itself, not to instances of the class.

  You call it directly on the class, not on an instance.

  Syntax:
    class MyClass {
      static myMethod() {
        // logic
      }
    }

    MyClass.myMethod(); // ✅
    const obj = new MyClass();
    obj.myMethod();     // ❌ Error
*/

// -----------------------------------------------------
// 1. Basic Example — Static Utility Function
// -----------------------------------------------------
class MathUtil {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

console.log("[Static Square]", MathUtil.square(4)); // 16
console.log("[Static Cube]", MathUtil.cube(3)); // 27

// const util = new MathUtil();
// console.log(util.square(4)); // ❌ Error: util.square is not a function

// -----------------------------------------------------
// 2. Static Method to Compare Instances
// -----------------------------------------------------
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static isCheaper(productA, productB) {
    return productA.price < productB.price;
  }
}

const phone = new Product("Phone", 800);
const tablet = new Product("Tablet", 600);

console.log(
  "[Is Tablet Cheaper Than Phone?]",
  Product.isCheaper(tablet, phone)
); // true

// -----------------------------------------------------
// 3. Static Factory Method — Create Predefined Instance
// -----------------------------------------------------
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  static guestUser() {
    return new User("Guest", "visitor");
  }

  getInfo() {
    return `${this.name} (${this.role})`;
  }
}

const guest = User.guestUser(); // create guest user without `new`
console.log("[Guest User Info]", guest.getInfo()); // Guest (visitor)

// -----------------------------------------------------
// 4. Static Method for Validation
// -----------------------------------------------------
class EmailValidator {
  static isValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

console.log("[Valid Email]", EmailValidator.isValid("user@example.com")); // true
console.log("[Invalid Email]", EmailValidator.isValid("user@.com")); // false

// -----------------------------------------------------
// 5. Real-World Case — Static Config and Utilities
// -----------------------------------------------------
class AppConfig {
  static version = "1.0.0";

  static showVersion() {
    return `App Version: ${this.version}`;
  }

  static parseEnv(envString) {
    const [key, value] = envString.split("=");
    return { [key.trim()]: value.trim() };
  }
}

console.log("[App Version]", AppConfig.showVersion()); // App Version: 1.0.0
console.log("[Parsed ENV]", AppConfig.parseEnv("PORT=3000")); // { PORT: "3000" }

// -----------------------------------------------------
// SUMMARY:
// - `static` methods are attached to the class itself.
// - They are useful for:
//   - Utility/helper functions
//   - Comparisons between objects
//   - Factory methods (object generators)
//   - Validators and config parsing
// - Called directly using ClassName.method()
// -----------------------------------------------------
