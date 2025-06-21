// ========================================
// Module 8: Promises & Async
// ========================================
// - What is a Promise?
// - Promise chaining with .then()
// - Creating custom Promises
// - Callback Hell explained
// - Simulate delay with setTimeout in a Promise




// Great for simulating network delays in mock APIs:
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
  console.log("Waited 2 seconds!");
});
