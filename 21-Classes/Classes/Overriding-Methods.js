// =====================================================
// OVERRIDING METHODS IN JAVASCRIPT CLASSES
// =====================================================

/*
  Method overriding allows a subclass to provide a different implementation
  of a method that is already defined in its superclass.

  The child method replaces (overrides) the parent method of the same name.

  You can still access the parent method using super.methodName().
*/

// -----------------------------------------------------
// 1. Basic Example — Override speak() Method
// -----------------------------------------------------
class Animal {
  speak() {
    return "The animal makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return "The dog barks.";
  }
}

const animal = new Animal();
const dog = new Dog();

console.log("[Animal Speak]", animal.speak()); // The animal makes a sound.
console.log("[Dog Speak]", dog.speak()); // The dog barks.

// -----------------------------------------------------
// 2. Overriding with super — Extend Parent Method
// -----------------------------------------------------
class Cat extends Animal {
  speak() {
    const parentSpeech = super.speak();
    return `${parentSpeech} The cat meows.`;
  }
}

const cat = new Cat();
console.log("[Cat Speak with super]", cat.speak());
// The animal makes a sound. The cat meows.

// -----------------------------------------------------
// 3. Method Override with Additional Behavior
// -----------------------------------------------------
class Logger {
  log(message) {
    return `[LOG]: ${message}`;
  }
}

class TimestampLogger extends Logger {
  log(message) {
    const now = new Date().toISOString();
    return `[${now}] ${super.log(message)}`;
  }
}

const baseLogger = new Logger();
const timeLogger = new TimestampLogger();

console.log("[Base Logger]", baseLogger.log("System started"));
// [LOG]: System started

console.log("[Timestamp Logger]", timeLogger.log("System started"));
// [2025-06-28T12:00:00.000Z] [LOG]: System started

// -----------------------------------------------------
// 4. Real-World Case — Overriding Permissions Logic
// -----------------------------------------------------
class User {
  constructor(username) {
    this.username = username;
  }

  getPermissions() {
    return ["read"];
  }
}

class Moderator extends User {
  getPermissions() {
    return [...super.getPermissions(), "write"];
  }
}

class Admin extends Moderator {
  getPermissions() {
    return [...super.getPermissions(), "delete"];
  }
}

const guest = new User("guest");
const mod = new Moderator("mod");
const admin = new Admin("admin");

console.log("[Guest Permissions]", guest.getPermissions()); // [ 'read' ]
console.log("[Moderator Permissions]", mod.getPermissions()); // [ 'read', 'write' ]
console.log("[Admin Permissions]", admin.getPermissions()); // [ 'read', 'write', 'delete' ]

// -----------------------------------------------------
// 5. Advanced Case — Shape with area() Override
// -----------------------------------------------------
class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return 0;
  }

  describe() {
    return `${this.name} has an area of ${this.area()}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const rect = new Rectangle(4, 5);
const circle = new Circle(3);

console.log("[Rectangle Info]", rect.describe()); // Rectangle has an area of 20
console.log("[Circle Info]", circle.describe()); // Circle has an area of ~28.27

// -----------------------------------------------------
// SUMMARY:
// - Overriding replaces parent method in child class.
// - `super.methodName()` allows calling the parent version.
// - Use when child needs to customize or extend base behavior.
// - Useful in user roles, logging, rendering, and calculations.
// -----------------------------------------------------
