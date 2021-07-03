const { nonConstructibleChange } = require("../../dist/arrays/nonConstructibleChange");

test("Test Case #1", () => {
  const coins = [];
  const expected = 1;
  expect(nonConstructibleChange(coins)).toBe(expected);
});

test("Test Case #2", () => {
  const coins = [2];
  const expected = 1;
  expect(nonConstructibleChange(coins)).toBe(expected);
});

test("Test Case #3", () => {
  const coins = [10];
  const expected = 1;
  expect(nonConstructibleChange(coins)).toBe(expected);
});

test("Test Case #4", () => {
  const coins = [5, 7, 1, 1, 2, 3, 22];
  const expected = 20;
  expect(nonConstructibleChange(coins)).toBe(expected);
});
