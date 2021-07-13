const {
  isValidSubsequence2,
  isValidSubsequenceNotOptimal,
  isValidSubsequence,
} = require("../../dist/arrays/easy/validateSubsequence");

test("Test Case #1", () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  expect(isValidSubsequence2(array, sequence)).toBe(true);
});

test("Test Case #2", () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  expect(isValidSubsequenceNotOptimal(array, sequence)).toBe(true);
});

test("Test Case #3", () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  expect(isValidSubsequence(array, sequence)).toBe(true);
});
