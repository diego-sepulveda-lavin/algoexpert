const { binarySearch } = require("../../dist/searching/binarySearch");

test("Test Case #1", () => {
  const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
  const target = 33;
  expect(binarySearch(array, target)).toBe(3);
});

test("Test Case #2", () => {
  const array = [1, 5, 23, 111];
  const target = 111;
  expect(binarySearch(array, target)).toBe(3);
});

test("Test Case #3", () => {
  const array = [1, 5, 23, 111];
  const target = 35;
  expect(binarySearch(array, target)).toBe(-1);
});
