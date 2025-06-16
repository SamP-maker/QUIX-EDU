/*
======================================
📦 JavaScript Arrays
======================================

An array is a collection of items stored in a single variable.
Each item has an index (starting from 0).
*/



// Declaring arrays
let fruits = ["apple", "banana", "cherry"];
let numbers = [10, 20, 30, 40];
let mixed = [1, "hello", true];

// Alternate ways of creating an array
const cars  = new Array("Volvo", "Mercedes", "Bentley")

// Accessing elements
let firstFruit = fruits[0];    // "apple"
let secondNumber = numbers[1]; // 20

// Changing elements
fruits[1] = "orange";  // banana becomes orange

// Array length
let totalFruits = fruits.length;  // 3

// Adding elements
fruits.push("grape");      // add to end
fruits.unshift("mango");   // add to start

// Removing elements
fruits.pop();     // removes last item ("grape")
fruits.shift();   // removes first item ("mango")

// Looping through arrays
for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    // use fruit here
}

// Checking if an item exists
let hasBanana = fruits.includes("banana");  // true or false

// Finding index of an item
let index = fruits.indexOf("cherry");  // returns index or -1

// Emptying an array
fruits = [];  // resets the array
