// ===============================
// Object.create(proto, [propertiesObject])
// ===============================
// Description:
// Object.create() is a static method in JavaScript that creates a new object
// with the specified prototype object and optional properties.
// It allows explicit setting of the prototype and defining properties with descriptors.

// Syntax:
// Object.create(proto, [propertiesObject])

// proto: The object which should be the prototype of the newly-created object.
// propertiesObject (optional): An object whose properties will be added to the new object
//   as own properties, with property descriptors.

// ===============================
// Basic Example: Create an object with a prototype
// ===============================
const animal = {
  speak() {
    console.log("Animal sound");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

dog.speak(); // Output: Animal sound (inherited from prototype)
dog.bark(); // Output: Woof! (own method)

// ===============================
// Example: Checking prototype chain
// ===============================
console.log(Object.getPrototypeOf(dog) === animal);
// Output: true
// Explanation: The prototype of dog is the animal object

// ===============================
// Example: Create object with property descriptors
// ===============================
const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const john = Object.create(personPrototype, {
  name: { value: "John", writable: true, enumerable: true, configurable: true },
  age: { value: 25, writable: false, enumerable: true, configurable: false },
});

john.greet(); // Output: Hello, my name is John
console.log(john.name); // Output: John
console.log(john.age); // Output: 25

// Try to modify non-writable property
john.age = 30;
console.log(john.age); // Output: 25 (unchanged)

// ===============================
// Example: Create object with null prototype (no inheritance)
// ===============================
const dict = Object.create(null);
dict.key = "value";

console.log(dict.key); // Output: value
console.log(dict.toString); // Output: undefined
// Explanation: No prototype means no inherited methods like toString()

// ===============================
// Example: Using Object.create for inheritance
// ===============================
const vehicle = {
  start() {
    console.log(`Starting vehicle: ${this.brand}`);
  },
};

const car = Object.create(vehicle, {
  brand: {
    value: "Toyota",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  wheels: { value: 4, writable: false, enumerable: true, configurable: false },
});

car.start(); // Output: Starting vehicle: Toyota
console.log(car.wheels); // Output: 4

// ===============================
// Example: Override inherited method and call parent method
// ===============================
const advancedCar = Object.create(car);

advancedCar.start = function () {
  console.log("Performing checks before starting...");
  Object.getPrototypeOf(this).start.call(this); // Call parent start method
  console.log("Car started!");
};

advancedCar.brand = "Honda";
advancedCar.start();
// Output:
// Performing checks before starting...
// Starting vehicle: Honda
// Car started!
