// =====================================================
// INHERITANCE IN JAVASCRIPT CLASSES
// =====================================================

/*
  Inheritance allows one class (child/subclass) to acquire
  properties and methods from another class (parent/superclass).

  Syntax:
    class ChildClass extends ParentClass {
      // child-specific methods and overrides
    }
*/

// -----------------------------------------------------
// 1. Basic Example — Inheriting a Method
// -----------------------------------------------------
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  // Inherits constructor and speak() from Animal
}

const dog = new Dog("Rex");
console.log("[Dog Speak]", dog.speak()); // Rex makes a sound.

// -----------------------------------------------------
// 2. Adding New Methods in Child Class
// -----------------------------------------------------
class Cat extends Animal {
  meow() {
    return `${this.name} says meow.`;
  }
}

const cat = new Cat("Milo");
console.log("[Cat Meow]", cat.meow()); // Milo says meow.
console.log("[Cat Speak]", cat.speak()); // Milo makes a sound.

// -----------------------------------------------------
// 3. Using super() in Constructor
// -----------------------------------------------------
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  getInfo() {
    return `${this.brand} (${this.year})`;
  }
}

class Car extends Vehicle {
  constructor(brand, year, model) {
    super(brand, year); // Call parent constructor
    this.model = model;
  }

  getDetails() {
    return `${this.getInfo()} - Model: ${this.model}`;
  }
}

const car = new Car("Toyota", 2020, "Corolla");
console.log("[Car Info]", car.getDetails()); // Toyota (2020) - Model: Corolla

// -----------------------------------------------------
// 4. Real-World Case — User and Admin Roles
// -----------------------------------------------------
class User {
  constructor(username) {
    this.username = username;
    this.role = "user";
  }

  getPermissions() {
    return ["read"];
  }
}

class Admin extends User {
  constructor(username) {
    super(username);
    this.role = "admin";
  }

  getPermissions() {
    return ["read", "write", "delete"];
  }
}

const user = new User("basicUser");
const admin = new Admin("superAdmin");

console.log("[User Permissions]", user.username, user.getPermissions()); // basicUser [ 'read' ]
console.log("[Admin Permissions]", admin.username, admin.getPermissions()); // superAdmin [ 'read', 'write', 'delete' ]

// -----------------------------------------------------
// 5. Advanced Case — Shape Hierarchy
// -----------------------------------------------------
class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return 0;
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

const rectangle = new Rectangle(4, 5);
const circle = new Circle(3);

console.log(`[${rectangle.name} Area]`, rectangle.area()); // 20
console.log(`[${circle.name} Area]`, circle.area().toFixed(2)); // ~28.27

// -----------------------------------------------------
// SUMMARY:
// - Inheritance uses `extends` keyword.
// - `super()` is used to call the parent class constructor.
// - Child classes can:
//   - Inherit properties/methods
//   - Add new methods
//   - Override parent methods
// - Common in building hierarchies (Animal, Vehicle, Shape, User)
// -----------------------------------------------------
