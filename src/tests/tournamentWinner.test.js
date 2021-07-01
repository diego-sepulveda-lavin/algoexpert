const { tournamentWinner } = require("../../dist/arrays/tournamentWinner");

test("Test Case #1", () => {
  const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ];
  const results = [0, 0, 1];
  const expected = "Python";
  expect(tournamentWinner(competitions, results)).toBe(expected);
});
