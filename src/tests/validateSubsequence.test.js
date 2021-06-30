const { isValidSubsequence2 } = require("../../dist/arrays/validateSubsequence");

test("Test Case #1", () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  expect(isValidSubsequence2(array, sequence)).toBe(true);
});
