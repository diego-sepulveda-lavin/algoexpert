const findStart = (grid: string[][], startSymbol: string) => {
  let coords = [-1, -1];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === startSymbol) {
        coords = [r, c];
        return coords;
      }
    }
  }

  return coords;
};

const hasPath = (grid: string[][], startSymbol: string, endSymbol: string) => {
  const start = findStart(grid, startSymbol);
  const visited: Set<string> = new Set();
  const [r, c] = start;
  const pathFound = explore(grid, r, c, visited, endSymbol);

  return pathFound;
};

const explore = (grid: string[][], r: number, c: number, visited: Set<string>, endSymbol: string): boolean => {
  const rowInBounds = r >= 0 && r < grid.length;
  const colInBounds = c >= 0 && c < grid[0].length;

  if (!rowInBounds || !colInBounds) return false;

  if (grid[r][c] === "W") return false;
  if (grid[r][c] === endSymbol) return true;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  const up = explore(grid, r - 1, c, visited, endSymbol);
  const right = explore(grid, r, c + 1, visited, endSymbol);
  const down = explore(grid, r + 1, c, visited, endSymbol);
  const left = explore(grid, r, c - 1, visited, endSymbol);

  return up || right || down || left;
};

export const grid1 = [
  ["W", "W", "W", " ", " ", " ", " "],
  [" ", "W", "W", " ", "W", " ", " "],
  ["S", " ", "W", " ", "W", " ", " "],
  [" ", "W", "W", " ", "W", "W", " "],
  [" ", "W", " ", " ", "W", " ", "E"],
  [" ", "W", "W", " ", "W", " ", " "],
  [" ", " ", " ", " ", "W", " ", " "],
];

export const grid2 = [
  ["W", "W", "W", " ", " ", " ", " "],
  [" ", "W", "W", " ", "W", " ", " "],
  ["S", " ", "W", " ", "W", " ", " "],
  [" ", "W", "W", "W", "W", "W", " "],
  [" ", "W", " ", " ", "W", " ", "E"],
  [" ", "W", "W", " ", "W", " ", " "],
  [" ", " ", " ", " ", "W", " ", " "],
];

console.log(hasPath(grid1, "S", "E")); // true
console.log(hasPath(grid2, "S", "E")); // false
