/*
======================
JavaScript Modules
======================

Modules help organize code into separate files.
They allow you to export things from one file and import them into another.

Use `export` to make functions, variables, or classes available.
Use `import` to bring them into another file.

Only works in modern browsers or Node.js.
Must run in a module-aware environment or use `<script type="module">` in HTML.
*/

// ----------- math.js -----------
// This file contains math functions

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export let pi = 3.14159;

// OR export all together:
// export { add, multiply, pi };


// ----------- main.js -----------
// This file uses the math functions

import { add, multiply, pi } from "./math.js";

let result1 = add(2, 3);
let result2 = multiply(4, 5);
let circle = pi * 10 * 10;

