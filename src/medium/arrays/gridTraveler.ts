/* 
    Grid Traveler
    Given a 2D grid, write a function that return the ammount of possible paths between top-left corner and botton-right corner. 
    You may only move down or right.
    In how many ways can you travel to the goal on a grid with dimension m * n ?
    
    # # #
    # # #
    # # #

*/

// Without optimization
export function gridTraveler(m: number, n: number): number {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

// Without optimization
export function gridTravelerOpt(m: number, n: number, memo: { [key: string]: number } = {}): number {
  let key = `${m},${n}`;

  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] = gridTravelerOpt(m - 1, n, memo) + gridTravelerOpt(m, n - 1, memo);
  return memo[key];
}

console.log(gridTravelerOpt(15, 15));
console.log(gridTraveler(15, 15));
