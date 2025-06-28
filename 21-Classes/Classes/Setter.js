// =====================================================
// SETTER IN JAVASCRIPT CLASSES
// =====================================================

/*
  A "setter" is a special method that allows you to control how
  a property is assigned. It is defined using the `set` keyword.

  Syntax:
    set propertyName(value) {
      // handle value
    }
*/

// -----------------------------------------------------
// 1. Basic Example — Setter to Modify a Private Property
// -----------------------------------------------------
class Person {
  constructor(name) {
    this._name = name; // use underscore to indicate "private" property
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName.trim(); // auto-trim whitespace
  }
}

const person = new Person("  Alice  ");
console.log("[Initial Name]", person.name); // Alice (trimmed in constructor or manually)
person.name = "  Bob  ";
console.log("[After Setter]", person.name); // Bob

// -----------------------------------------------------
// 2. Setter with Validation Logic
// -----------------------------------------------------
class User {
  constructor(username) {
    this._username = username;
  }

  get username() {
    return this._username;
  }

  set username(newUsername) {
    if (newUsername.length < 4) {
      console.log("[Username Error] Must be at least 4 characters.");
    } else {
      this._username = newUsername;
    }
  }
}

const user = new User("john123");
console.log("[Username]", user.username); // john123
user.username = "jd"; // too short
user.username = "johndoe";
console.log("[Updated Username]", user.username); // johndoe

// -----------------------------------------------------
// 3. Setter in Combination with Getter (e.g. Temperature Unit Conversion)
// -----------------------------------------------------
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(f) {
    this._celsius = ((f - 32) * 5) / 9;
  }

  get celsius() {
    return this._celsius;
  }
}

const temp = new Temperature(0);
console.log("[Initial Celsius]", temp.celsius); // 0
console.log("[Converted Fahrenheit]", temp.fahrenheit); // 32
temp.fahrenheit = 212;
console.log("[Updated Celsius via Setter]", temp.celsius); // 100

// -----------------------------------------------------
// 4. Real-World Case — Bank Account with Limit Validation
// -----------------------------------------------------
class BankAccount {
  _balance = 0;

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (typeof amount !== "number" || amount < 0) {
      console.log("[Balance Error] Invalid amount.");
    } else {
      this._balance = amount;
    }
  }
}

const account = new BankAccount();
account.balance = 500;
console.log("[Bank Balance]", account.balance); // 500

account.balance = -100; // Invalid
console.log("[After Invalid Set]", account.balance); // 500

// -----------------------------------------------------
// 5. Advanced — Updating a Full Object State
// -----------------------------------------------------
class Profile {
  constructor(name, age) {
    this._data = { name, age };
  }

  get info() {
    return `${this._data.name}, Age: ${this._data.age}`;
  }

  set update({ name, age }) {
    if (name) this._data.name = name;
    if (age) this._data.age = age;
  }
}

const profile = new Profile("Daniel", 25);
console.log("[Profile Info]", profile.info); // Daniel, Age: 25

profile.update = { name: "Dan", age: 26 };
console.log("[Updated Profile]", profile.info); // Dan, Age: 26

// -----------------------------------------------------
// SUMMARY:
// - Setters allow custom behavior when a value is assigned.
// - Useful for validation, formatting, or triggering logic.
// - Can be combined with getters to fully manage object state.
// - Accessed like properties, not like functions: `object.prop = value`.
// -----------------------------------------------------
