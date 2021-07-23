/* 
    Monotonic Array
    
    Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

    An array is said to be monotonic if its elements, from left to right, are ENTIRELY non-INCREASING or entirely non-DECREASING.

    Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing
    elements aren't necessarily exclusively increasing; they simply don't decrease.

    Note that empty arrays and arrays of one element are monotonic.

    Sample Input:
    array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

    Sample Output:
    true
*/

//const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
const array = [1, 5, 10, 1100, 1101, 1102, 1102];

export function isMonotonic(array: number[]) {
  if (array.length === 0) return true;
  if (array.length === 1) return true;

  let leftPointer = 0;
  let rightPointer = leftPointer + 1;
  let isDecreasing;

  array[0] > array[array.length - 1] ? (isDecreasing = true) : (isDecreasing = false);

  while (rightPointer < array.length) {
    const firstElement = array[leftPointer];
    const secondElement = array[rightPointer];
    if (secondElement > firstElement && isDecreasing) {
      return false;
    } else if (secondElement < firstElement && !isDecreasing) {
      return false;
    }
    leftPointer++;
    rightPointer++;
  }
  return true;
}
console.log(isMonotonic(array));
