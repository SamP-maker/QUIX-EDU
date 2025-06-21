// ========================================
// Module 9: Promises & Async-Await
// ========================================
// - async/await syntax
// - try/catch for error handling
// - Comparison: .then() vs await
// - Real-world API fetch with await
// - Convert a chain into async/await version




fetch("url")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));



  async function loadData() {
  try {
    const res = await fetch("url");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
