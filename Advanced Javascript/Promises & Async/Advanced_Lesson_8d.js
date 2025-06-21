// ========================================
// Module 8: Promises & Async
// ========================================
// - What is a Promise?
// - Promise chaining with .then()
// - Creating custom Promises
// - Callback Hell explained
// - Simulate delay with setTimeout in a Promise



//When you nest too many callbacks → code becomes deeply indented and unreadable.


getData(function (data) {
  process(data, function (result) {
    save(result, function (done) {
      console.log("All done!");
    });
  });
});
