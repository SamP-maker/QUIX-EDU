// ========================================
// Module 6: LocalStorage & SessionStorage
// ========================================
// - Difference between localStorage and sessionStorage
// - Methods: setItem(), getItem(), removeItem()
// - Using JSON.stringify & parse
// - Practice: Theme switcher w/ saved state




const user = { name: "Jane", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem("user"));
console.log(saved.name);  // "Jane"


