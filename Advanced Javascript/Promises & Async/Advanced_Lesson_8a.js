// ========================================
// Module 8: Promises & Async
// ========================================
// - What is a Promise?
// - Promise chaining with .then()
// - Creating custom Promises
// - Callback Hell explained
// - Simulate delay with setTimeout in a Promise



//A Promise is a placeholder for a future value — like a container that will eventually resolve (success) or reject (fail).

const promise = new Promise((resolve, reject) => {
  // async code
  if (success) {
    resolve("Done!");
  } else {
    reject("Error!");
  }
});


