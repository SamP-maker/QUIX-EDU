// ========================================
// Module 1: Advanced ES6+ Features
// ========================================
// - Destructuring (arrays, objects)
// - Spread and Rest operators           
// - Default & Named Parameters                 
// - Arrow Functions: behavior with 'this'    
// - Optional Chaining, Nullish Coalescing          `   <---------------------
// - Live example: refactor ugly functions to ES6-style



const user = {
  profile: {
    name: "Jane"
  }
};

console.log(user.profile?.name);      // ✅ "Jane"
console.log(user.settings?.theme);    // ✅ undefined (no error!)




const name = null;
console.log(name ?? "Anonymous");  // ✅ "Anonymous"

const count = 0;
console.log(count ?? 10);          // ✅ 0 (not 10!)




const user = {
  settings: {
    theme: null
  }
};

const theme = user.settings?.theme ?? "light";
console.log(theme);  // ✅ "light"
