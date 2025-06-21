
// ========================================
// Module 3: Fetch API + JSON Parsing
// ========================================
// - How fetch() works                       <---------------------
// - Parsing JSON data using .json()
// - Catching errors and fallback logic
// - Hands-on: Connect to a public API
// - Assignment: Build a Weather Widget




fetch("https://api.example.com/data")
  .then(response => {
    // Response object — not yet the actual data
    return response.json(); // Parse JSON body
  })
  .then(data => {
    console.log(data); // Parsed JS object
  });
