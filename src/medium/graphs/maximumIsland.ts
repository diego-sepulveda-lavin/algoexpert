/* 
    maximum island
    Write a function, maximumIsland, that takes in a grid containing Ws and Ls. 
    W represents water and L represents land. The function should return the size of the largest island. 
    An island is a vertically or horizontally connected region of land.

    You may assume that the grid contains at least one island.

    Sample Input
    grid = [
            0    1    2    3    4
        0 ['W', 'L', 'W', 'W', 'W'],
        1 ['W', 'L', 'W', 'W', 'W'],
        2 ['W', 'W', 'W', 'L', 'W'],
        3 ['W', 'W', 'L', 'L', 'W'],
        4 ['L', 'W', 'W', 'L', 'L'],
        5 ['L', 'L', 'W', 'W', 'W'],
    ];

    Sample Output
    maximumIsland(grid); // -> 5
*/

export const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const maximumIsland = (grid: string[][]) => {
  let biggestIsland = -Infinity;
  const visited: Set<string> = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const currBiggest = exploreIsland(grid, r, c, visited);
      if (currBiggest > biggestIsland) {
        biggestIsland = currBiggest;
      }
    }
  }
  return biggestIsland;
};

const exploreIsland = (grid: string[][], r: number, c: number, visited: Set<string>): number => {
  const rowInBounds = r >= 0 && r < grid.length;
  const colInBounds = c >= 0 && c < grid[0].length;

  if (!rowInBounds || !colInBounds) return 0;
  if (grid[r][c] === "W") return 0;

  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  const up = exploreIsland(grid, r - 1, c, visited);
  const left = exploreIsland(grid, r, c - 1, visited);
  const down = exploreIsland(grid, r + 1, c, visited);
  const right = exploreIsland(grid, r, c + 1, visited);
  const sum = up + left + down + right;
  return sum + 1;
};

console.log(maximumIsland(grid));
