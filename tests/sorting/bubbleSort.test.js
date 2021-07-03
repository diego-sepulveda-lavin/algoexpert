const { bubbleSort } = require("../../dist/sorting/bubbleSort");

test("Test case #1", () => {
  const myArr = [8, 5, 2, 9, 5, 6, 3];
  const expected = [2, 3, 5, 5, 6, 8, 9];
  expect(bubbleSort(myArr)).toStrictEqual(expected);
});
