// ========================================
// Module 9: Promises & Async-Await
// ========================================
// - async/await syntax
// - try/catch for error handling
// - Comparison: .then() vs await
// - Real-world API fetch with await
// - Convert a chain into async/await version




//se try/catch blocks to handle errors with async/await just like synchronous code.

async function getUser() {
  try {
    const res = await fetch("https://api.example.com/user");
    if (!res.ok) throw new Error("Fetch failed");
    const user = await res.json();
    console.log(user);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
