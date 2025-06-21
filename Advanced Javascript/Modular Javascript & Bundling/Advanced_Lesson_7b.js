// ========================================
// Module 7: Modular JavaScript & Bundling
// ========================================
// - ES6 Modules: export/import syntax
// - Code structuring tips for scaling
// - Intro to bundlers (Webpack / Vite concepts)
// - Task: Break script into modules & simulate bundling




/*

Group related logic (e.g., utils/, components/, api/)

Use meaningful filenames: userController.js, formHandler.js

Keep modules small and single-purpose

Use index files for clean imports:
*/
// utils/index.js
export * from "./math.js";
export * from "./formatter.js";
