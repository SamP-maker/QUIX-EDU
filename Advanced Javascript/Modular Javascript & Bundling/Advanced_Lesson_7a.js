// ========================================
// Module 7: Modular JavaScript & Bundling
// ========================================
// - ES6 Modules: export/import syntax
// - Code structuring tips for scaling
// - Intro to bundlers (Webpack / Vite concepts)
// - Task: Break script into modules & simulate bundling



// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// OR default export
export default function multiply(a, b) {
  return a * b;
}


// main.js
import { add, sub } from "./math.js";
import multiply from "./math.js";

console.log(add(1, 2));
