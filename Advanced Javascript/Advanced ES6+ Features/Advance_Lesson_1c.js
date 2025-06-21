// ========================================
// Module 1: Advanced ES6+ Features
// ========================================
// - Destructuring (arrays, objects)
// - Spread and Rest operators           
// - Default & Named Parameters                 <---------------------
// - Arrow Functions: behavior with 'this'
// - Optional Chaining, Nullish Coalescing
// - Live example: refactor ugly functions to ES6-style


//Default & Named Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();             // Hello, Guest!
greet("Perry");      // Hello, Perry!


function createUser({ name = "Anonymous", age = 18 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

createUser({ name: "Jane", age: 25 }); // Name: Jane, Age: 25
createUser();                          // Name: Anonymous, Age: 18
createUser({});                        // Name: Anonymous, Age: 18



function sendEmail({ to = "", subject = "No subject", body = "" } = {}) {
  console.log(`Sending to: ${to}\nSubject: ${subject}\nBody: ${body}`);
}

sendEmail({ to: "test@example.com", body: "Hi there!" });

