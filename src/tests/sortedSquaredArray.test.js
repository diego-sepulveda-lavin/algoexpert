const { sortedSquaredArray } = require("../../dist/arrays/sortedSquaredArray");

test("Test Case #1", () => {
  const numbers = [1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 4, 9, 25, 36, 64, 81];
  expect(sortedSquaredArray(numbers)).toStrictEqual(expected);
});

test("Test Case #2", () => {
  const numbers = [-3, -2, -1];
  const expected = [1, 4, 9];
  expect(sortedSquaredArray(numbers)).toStrictEqual(expected);
});
