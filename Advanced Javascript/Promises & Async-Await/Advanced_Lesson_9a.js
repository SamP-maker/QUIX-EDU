// ========================================
// Module 9: Promises & Async-Await
// ========================================
// - async/await syntax
// - try/catch for error handling
// - Comparison: .then() vs await
// - Real-world API fetch with await
// - Convert a chain into async/await version




//await pauses the function until a Promise resolves — works only inside an async function.


async function getData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
getData();
