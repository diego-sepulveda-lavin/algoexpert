const arr: number[][] = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(arr: number[][]): number {
  // Write your code here
  let maxSum = -Infinity;

  let rowPointer = 0;
  let colPointer = 0;

  while (true) {
    if (rowPointer >= 4) {
      rowPointer = 0;
      colPointer++;
    }
    if (colPointer >= 4) {
      break;
    }
    const top1 = arr[rowPointer][colPointer];
    const top2 = arr[rowPointer][colPointer + 1];
    const top3 = arr[rowPointer][colPointer + 2];

    const middle = arr[rowPointer + 1][colPointer + 1];

    const bottom1 = arr[rowPointer + 2][colPointer];
    const bottom2 = arr[rowPointer + 2][colPointer + 1];
    const bottom3 = arr[rowPointer + 2][colPointer + 2];

    const total = top1 + top2 + top3 + middle + bottom1 + bottom2 + bottom3;

    total > maxSum && (maxSum = total);

    rowPointer++;
  }

  return maxSum;
}

console.log(hourglassSum(arr));
