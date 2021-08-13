/* 
    Island Count
    Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
    The function should return the number of islands on the grid. 
    An island is a vertically or horizontally connected region of land.

    Sample Input:
    grid = [
        ["W", "L", "W", "W", "W"],
        ["W", "L", "W", "W", "W"],
        ["W", "W", "W", "L", "W"],
        ["W", "W", "L", "L", "W"],
        ["L", "W", "W", "L", "L"],
        ["L", "L", "W", "W", "W"],
    ];

    Sample Output:
    3
*/

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const islandCount = (grid: string[][]) => {
  let islandCounter = 0;
  const visited: Set<string> = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (exploreIsland(grid, r, c, visited) === true) {
        islandCounter++;
      }
    }
  }
  return islandCounter;
};

const exploreIsland = (grid: string[][], r: number, c: number, visited: Set<string>) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  exploreIsland(grid, r - 1, c, visited);
  exploreIsland(grid, r + 1, c, visited);
  exploreIsland(grid, r, c - 1, visited);
  exploreIsland(grid, r, c + 1, visited);

  return true;
};

console.log(islandCount(grid));
