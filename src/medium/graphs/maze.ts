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

const findPath = (grid: string[][], startSymbol: string, endSymbol: string) => {
  const start = findStart(grid, startSymbol);
  const visited: Set<string> = new Set();
  const [r, c] = start;
  let dist = 0;
  const pathFound = explore(grid, r, c, visited, endSymbol, dist);

  return pathFound;
};

const explore = (
  grid: string[][],
  r: number,
  c: number,
  visited: Set<string>,
  endSymbol: string,
  dist: number
): { hasPath: boolean; distance: number } => {
  const rowInBounds = r >= 0 && r < grid.length;
  const colInBounds = c >= 0 && c < grid[0].length;

  if (!rowInBounds || !colInBounds) return { hasPath: false, distance: 0 };

  if (grid[r][c] === "W") return { hasPath: false, distance: 0 };

  const pos = r + "," + c;
  if (visited.has(pos)) return { hasPath: false, distance: 0 };
  visited.add(pos);

  if (grid[r][c] === endSymbol) return { hasPath: true, distance: dist };

  const { hasPath: up, distance: upDist } = explore(grid, r - 1, c, visited, endSymbol, dist + 1);
  const { hasPath: right, distance: rightDist } = explore(grid, r, c + 1, visited, endSymbol, dist + 1);
  const { hasPath: down, distance: downDist } = explore(grid, r + 1, c, visited, endSymbol, dist + 1);
  const { hasPath: left, distance: leftDist } = explore(grid, r, c - 1, visited, endSymbol, dist + 1);

  return { hasPath: up || right || down || left, distance: upDist + rightDist + downDist + leftDist };
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

console.log(findPath(grid1, "S", "E")); // true - 20
console.log(findPath(grid2, "S", "E")); // false - 0
