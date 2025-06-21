// ========================================
// Module 6: LocalStorage & SessionStorage
// ========================================
// - Difference between localStorage and sessionStorage
// - Methods: setItem(), getItem(), removeItem()
// - Using JSON.stringify & parse
// - Practice: Theme switcher w/ saved state



localStorage.setItem("theme", "dark");
sessionStorage.setItem("token", "abc123");


const theme = localStorage.getItem("theme");
console.log(theme);  // "dark"


localStorage.removeItem("theme");


sessionStorage.clear();
