const { findThreeLargestNumbers } = require("../../dist/easy/searching/findThreeLargestNumbers");

test("Test Case #1", () => {
  const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  const result = [18, 141, 541];
  expect(findThreeLargestNumbers(array)).toEqual(result);
});

test("Test Case #2", () => {
  const array = [55, 7, 8];
  const result = [7, 8, 55];
  expect(findThreeLargestNumbers(array)).toEqual(result);
});

test("Test Case #3", () => {
  const array = [55, 43, 11, 3, -3, 10];
  const result = [11, 43, 55];
  expect(findThreeLargestNumbers(array)).toEqual(result);
});

test("Test Case #4", () => {
  const array = [10, 5, 9, 10, 12];
  const result = [10, 10, 12];
  expect(findThreeLargestNumbers(array)).toEqual(result);
});
