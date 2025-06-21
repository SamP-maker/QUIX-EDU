
// ========================================
// Module 3: Fetch API + JSON Parsing
// ========================================
// - How fetch() works
// - Parsing JSON data using .json()
// - Catching errors and fallback logic
// - Hands-on: Connect to a public API               <---------------------
// - Assignment: Build a Weather Widget




fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then(res => res.json())
  .then(data => {
    console.log(`Bitcoin: $${data.bpi.USD.rate}`);
  });
