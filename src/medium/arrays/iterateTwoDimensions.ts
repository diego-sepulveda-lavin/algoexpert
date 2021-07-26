const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

export function iterateTwoDimensionsArray(array: number[][]) {
  let rowPointer = 0;
  let colPointer = 0;

  while (rowPointer < array.length && colPointer < array[rowPointer].length) {
    console.log(array[rowPointer][colPointer]);
    if (colPointer < array[rowPointer].length - 1) {
      colPointer++;
    } else {
      colPointer = 0;
      rowPointer++;
    }
  }
}

iterateTwoDimensionsArray(array);
