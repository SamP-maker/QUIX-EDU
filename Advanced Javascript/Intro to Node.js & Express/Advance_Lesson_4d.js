// ========================================
// Module 4: Intro to Node.js & Express
// ========================================
// - Node.js architecture (event loop)
// - Setting up an Express server
// - Basic routing: GET, POST
// - Middleware: body-parser / static
// - Hands-on: Contact Form Backend API



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static("public"));  // `public/` folder
