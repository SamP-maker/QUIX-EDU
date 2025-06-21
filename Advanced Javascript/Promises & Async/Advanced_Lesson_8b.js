// ========================================
// Module 8: Promises & Async
// ========================================
// - What is a Promise?
// - Promise chaining with .then()
// - Creating custom Promises
// - Callback Hell explained
// - Simulate delay with setTimeout in a Promise



//Once a Promise resolves, you can chain .then() to handle each step of the result.

fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => {
    console.log("Got data:", data);
    return data.id;
  })
  .then(id => console.log("User ID:", id))
  .catch(err => console.error("Something broke:", err));
