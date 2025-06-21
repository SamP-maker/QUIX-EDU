// ========================================
// Module 6: LocalStorage & SessionStorage
// ========================================
// - Difference between localStorage and sessionStorage
// - Methods: setItem(), getItem(), removeItem()
// - Using JSON.stringify & parse
// - Practice: Theme switcher w/ saved state

// Save user's choice
localStorage.setItem("theme", "dark");

// Apply on page load
const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.body.classList.add("dark");
}
