// ========================================
// Module 11: Testing JS Code
// ========================================
// - What is testing? Unit vs Integration
// - Setup: Jest / Vitest (basic)
// - Writing a test case: math functions
// - Mocking async functions
// - Activity: Write test for a custom validator



npm install --save-dev jest




"scripts": {
  "test": "jest"
}




// math.test.js
const { add } = require("./math");

test("adds numbers", () => {
  expect(add(2, 3)).toBe(5);
});



npm install -D vitest



import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { defineVitestConfig } from "vitest/config";

export default defineVitestConfig({
  test: {},
});


npx vitest
