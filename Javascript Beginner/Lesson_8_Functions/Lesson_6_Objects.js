/*
===============================
JavaScript Functions
===============================

Functions are reusable blocks of code that perform a specific task.
*/

// Function declaration
function greet() {
    return "Hello!";
}

// Function with parameters
function add(a, b) {
    return a + b;
}

// Calling functions
let message = greet();          // "Hello!"
let sum = add(5, 3);            // 8

// Function expression (anonymous function assigned to a variable)
let multiply = function(x, y) {
    return x * y;
};

let product = multiply(4, 7);   // 28

// Arrow function (shorter syntax)
let square = (n) => {
    return n * n;
};

let sq = square(6);             // 36

// Arrow function with implicit return (for one-liner)
let cube = n => n * n * n;

let cb = cube(3);               // 27


/*
⚠️ WARNING: Avoid creating infinite loops!

An infinite loop happens when the loop's exit condition is never met,
causing the loop to run forever and potentially crash your program.

Example of an infinite loop:

while(true) {
    // no break or exit condition here -> this runs forever!
}

Always ensure your loops have a proper exit condition that will eventually be false.
*/






/*
===============================
Nested Functions in JavaScript
===============================

Functions can be declared inside other functions.
The inner function has access to the outer function’s variables (closure).
*/

// Outer function
function outer() {
    let outerVar = "I'm outside!";

    // Inner function
    function inner() {
        let innerVar = "I'm inside!";
        return outerVar + " And " + innerVar;
    }

    // Call inner function and return its result
    return inner();
}

let result = outer();  // "I'm outside! And I'm inside!"
