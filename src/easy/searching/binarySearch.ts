/* 
    Binary Search
    Write a function that takes in a sorted array of integers as weel as a target integer. The function should use the Binary Search
    algorithm to determine if the target integer is cointained in the array and should return its index if it is, otherwise -1

    If you are unfamiliar with Binary Search, we recommend watching the Conceptual Overview section of this question's video explanation
    before starting to code.

    Sample Input
    array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
    target = 33

    Sample Output
    3
*/
/* const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 33; */

const array = [1, 5, 23, 111];
const target = 111;

export function binarySearch(array: number[], target: number): number {
  let low = 0; // ini a pointer at the start of the array
  let high = array.length - 1; // init a pointer at the end of array
  let mid: number; // declare a mid pointer

  // do while low pointer is smaller or equal than high pointer
  while (low <= high) {
    mid = Math.floor((high + low) / 2); // calculate position in the middle of array an set pointer there

    //if element in that position is equal to target, return possition
    if (target === array[mid]) return mid;
    // if target is smaller to current element, move high pointer to mid -1
    else if (target < array[mid]) {
      high = mid - 1;
    }
    // if target is greater to current element, move low pointer to mid + 1
    else {
      low = mid + 1;
    }
  }
  // in case nothing was returned previously, return - 1 which means target is no in array
  return -1;
}

console.log(binarySearch(array, target)); // O(log(n))T O(1)S
