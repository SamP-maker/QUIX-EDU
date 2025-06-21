// ========================================
// Module 11: Testing JS Code
// ========================================
// - What is testing? Unit vs Integration
// - Setup: Jest / Vitest (basic)
// - Writing a test case: math functions
// - Mocking async functions
// - Activity: Write test for a custom validator




export function isEmail(str) {
  return /\S+@\S+\.\S+/.test(str);
}





import { isEmail } from "./validators";

test("valid email", () => {
  expect(isEmail("test@email.com")).toBe(true);
});

test("invalid email", () => {
  expect(isEmail("invalid-email")).toBe(false);
});
