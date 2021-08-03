/* 
    Kadane's Algorithm

    Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up
    all of the integers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers (numbers next to each
    other in the input array).

    Sample Input:
    array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]

    Sample Output:
    19 // [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]
*/

const array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

export function kadanesAlgorithm(array: number[]): number {
  let mainPointer = 0;
  let maxSum = -Infinity;

  while (mainPointer < array.length) {
    let subArrayEndIdx = mainPointer + 1;

    while (subArrayEndIdx <= array.length) {
      let subArray = array.slice(mainPointer, subArrayEndIdx);
      let currSum = subArray.reduce((accu, currVal) => accu + currVal);

      currSum > maxSum && (maxSum = currSum);
      subArrayEndIdx++;
    }

    mainPointer++;
  }

  return maxSum;
}

// O(n²) time || O(1) Space
kadanesAlgorithm(array);
