const { bubbleSort } = require("../../dist/easy/sorting/bubbleSort");

test("Test case #1", () => {
  const myArr = [8, 5, 2, 9, 5, 6, 3];
  const expected = [2, 3, 5, 5, 6, 8, 9];
  expect(bubbleSort(myArr)).toStrictEqual(expected);
});

test("Test case #2", () => {
  const myArr = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8];
  const expected = [-10, -7, -7, -6, -6, -5, -5, -4, -4, -4, -2, -1, 1, 3, 5, 5, 6, 8, 8, 10];
  expect(bubbleSort(myArr)).toStrictEqual(expected);
});
