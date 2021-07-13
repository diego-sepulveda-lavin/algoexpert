const { sortedSquaredArrayManual2 } = require("../../dist/easy/arrays/sortedSquaredArray");

test("Test Case #1", () => {
  const numbers = [1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 4, 9, 25, 36, 64, 81];
  expect(sortedSquaredArrayManual2(numbers)).toStrictEqual(expected);
});

test("Test Case #2", () => {
  const numbers = [-3, -2, -1];
  const expected = [1, 4, 9];
  expect(sortedSquaredArrayManual2(numbers)).toStrictEqual(expected);
});

test("Test Case #3", () => {
  const numbers = [-7, -4, -1, 0, 2, 5, 9];
  const expected = [0, 1, 4, 16, 25, 49, 81];
  expect(sortedSquaredArrayManual2(numbers)).toStrictEqual(expected);
});
