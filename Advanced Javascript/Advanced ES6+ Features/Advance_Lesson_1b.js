// ========================================
// Module 1: Advanced ES6+ Features
// ========================================
// - Destructuring (arrays, objects)
// - Spread and Rest operators           <---------------------
// - Default & Named Parameters
// - Arrow Functions: behavior with 'this'
// - Optional Chaining, Nullish Coalescing
// - Live example: refactor ugly functions to ES6-style




//Array Destructuring
const scores = [89,76,91,85]

// --- Usual Way ---
const top1 = scores[0]
const top2 = scores[1]

const [first, second] = scores;

console.log(`Top 2 scores: ${first}, ${second}`);

//Object Destructuring
const user = {
    name:"Alice",
    age:25,
    location: "Tokyo"

};

const {name,age,location} = user

console.log(`${name} is ${age} years old.`);

