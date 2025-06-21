// ========================================
// Module 1: Advanced ES6+ Features
// ========================================
// - Destructuring (arrays, objects)
// - Spread and Rest operators           
// - Default & Named Parameters                 
// - Arrow Functions: behavior with 'this'    <---------------------
// - Optional Chaining, Nullish Coalescing
// - Live example: refactor ugly functions to ES6-style


//Normal Function
const person = {
  name: "Alice",
  greet: function () {
    setTimeout(function () {
      console.log(`Hello, I am ${this.name}`); // ❌ undefined
    }, 1000);
  }
};
person.greet();


//Arrow Function
const person = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, I am ${this.name}`); // ✅ Alice
    }, 1000);
  }
};
person.greet();




const user = {
  name: "Bob",
  sayHi: () => {
    console.log(`Hi, I am ${this.name}`); // ❌ undefined
  }
};
user.sayHi();

