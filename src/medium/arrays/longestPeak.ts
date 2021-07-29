/* 
    Longest Peak
    Write a function that takes in an array of integers and returns the length of the longest peak in the array.

    A peak is defined as adjacents integers in the array that are STRICTLY increasing until they reach a tip (the highest value in
    the peak), at wich point they become STRICTLY decreasing. At least three integers are required to form a peak.

    For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither the integers 1, 2, 2 , 0.
    Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after 3.

    Sample input:
    array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

    Sample output:
    6 // 0, 10, 6, 5, -1, -3
*/

const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

export function longestPeak(array: number[]) {
  let maxLengths = [];
  let pointer = 0;

  while (pointer < array.length) {
    let prevHeight = array[pointer - 1];
    let currHeight = array[pointer];
    let nextHeight = array[pointer + 1];

    if (currHeight > prevHeight && currHeight > nextHeight) {
      let currPeakLength = 1;
      let leftPeakPointer = pointer - 1;
      let rightPeakPointer = pointer + 1;

      while (true) {
        if (array[leftPeakPointer + 1] > array[leftPeakPointer]) {
          currPeakLength++;
          leftPeakPointer--;
        } else if (array[rightPeakPointer - 1] > array[rightPeakPointer]) {
          currPeakLength++;
          rightPeakPointer++;
        } else {
          break;
        }
      }

      maxLengths.push(currPeakLength);
    }
    pointer++;
  }

  let currentMaxLength = 0;
  maxLengths.forEach((length) => length > currentMaxLength && (currentMaxLength = length));
  return currentMaxLength;
}

console.log(longestPeak(array));
