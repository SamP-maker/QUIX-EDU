// ========================================
// Module 4: Intro to Node.js & Express
// ========================================
// - Node.js architecture (event loop)
// - Setting up an Express server
// - Basic routing: GET, POST
// - Middleware: body-parser / static
// - Hands-on: Contact Form Backend API






const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => { 
  console.log(`Server running on http://localhost:${PORT}`);
});



app.post("/submit", (req, res) => {
  res.send("Form submitted!");
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} replaced`);
});

app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ${id} partially updated`);
});


