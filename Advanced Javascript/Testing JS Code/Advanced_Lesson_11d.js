// ========================================
// Module 11: Testing JS Code
// ========================================
// - What is testing? Unit vs Integration
// - Setup: Jest / Vitest (basic)
// - Writing a test case: math functions
// - Mocking async functions
// - Activity: Write test for a custom validator




const fetchData = jest.fn(() => Promise.resolve("mocked data"));

test("mocks API call", async () => {
  const data = await fetchData();
  expect(data).toBe("mocked data");
});
