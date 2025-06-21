
// ========================================
// Module 3: Fetch API + JSON Parsing
// ========================================
// - How fetch() works
// - Parsing JSON data using .json()             <---------------------
// - Catching errors and fallback logic
// - Hands-on: Connect to a public API
// - Assignment: Build a Weather Widget




fetch("url")
  .then(res => res.json())   // returns a Promise
  .then(data => {
    // Use the parsed data here
  });
