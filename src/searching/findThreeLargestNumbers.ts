/* 
    Find Three Largest Numbers
    Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array
    of three largest integers in the input array.

    The function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of
    [10, 5, 9, 10, 12]

    Sample Input
    array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

    Sample Output
    [18, 141, 541]
*/

const array = [55, 7, 8];

export function findThreeLargestNumbers(array: number[]) {
  let resultArr: number[] = []; // init an empty arr
  let currGreaterIdx = 0; // asume the greatest number is at 0 index
  let rightPointer = currGreaterIdx + 1; // init a pointer to the right of index 0

  // do this while the result array has less than 3 elements
  while (resultArr.length < 3) {
    // check if currentElement is smaller than rightPointer
    if (array[currGreaterIdx] < array[rightPointer]) {
      // if so replace current greater index for the index of right pointer
      currGreaterIdx = rightPointer;
    }
    // check if right pointer reached the end of array or beyond limit
    if (rightPointer === array.length - 1 || rightPointer > array.length - 1) {
      //if so, insert the current element to result array
      resultArr.unshift(array[currGreaterIdx]);
      // remove current greater element from input array
      array.splice(currGreaterIdx, 1);
      // reset current greater index and rigth pointer to start again with next number
      currGreaterIdx = 0;
      rightPointer = 0;
    }
    // increase right pointer to continue checking
    rightPointer++;
  }

  return resultArr; // sort array
}

//result = [18, 141, 541];
console.log(findThreeLargestNumbers(array));
