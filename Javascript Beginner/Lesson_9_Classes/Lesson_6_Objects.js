/*
===============================
JavaScript Classes & Constructors
===============================

Classes are templates to create objects. The constructor method
is a special function called automatically when a new object is created.

It sets up initial property values.
*/

// Define a class with a constructor
class Person {
    // Constructor runs when 'new Person()' is called
    constructor(name, age) {
        this.name = name;  // Assign parameter 'name' to property 'name'
        this.age = age;    // Assign parameter 'age' to property 'age'
    }

    // Method to greet
    greet() {
        return "Hello, my name is " + this.name;
    }
}

// Create a new Person object
let person1 = new Person("Alice", 30);

// Access properties and methods
let name = person1.name;      // "Alice"
let greeting = person1.greet();  // "Hello, my name is Alice"


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return this.name + " makes a noise.";
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);            // Call the parent constructor
        this.breed = breed;     // Add new property
    }

    bark() {
        return this.name + " barks!";
    }
}

let myDog = new Dog("Buddy", "Beagle");



class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

let total = MathHelper.add(3, 4); // 7



class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
    }
}



class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
}
