
// ========================================
// Module 3: Fetch API + JSON Parsing
// ========================================
// - How fetch() works
// - Parsing JSON data using .json()
// - Catching errors and fallback logic              <---------------------
// - Hands-on: Connect to a public API
// - Assignment: Build a Weather Widget




fetch("https://api.example.com/weather")
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => {
    console.error("Fetch error:", err);
    // Show fallback UI
  });
