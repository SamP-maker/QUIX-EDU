// ========================================
// Module 11: Testing JS Code
// ========================================
// - What is testing? Unit vs Integration
// - Setup: Jest / Vitest (basic)
// - Writing a test case: math functions
// - Mocking async functions
// - Activity: Write test for a custom validator


// math.js
export const add = (a, b) => a + b;




// math.test.js
import { describe, it, expect } from "vitest";
import { add } from "./math";

describe("Math Utils", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
