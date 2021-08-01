/* 
    First Duplicate Value
    
    Given an array of integers between "1" and "n", inclusive, where "n" is the length of the array, write a function that returns
    the first integer that appears more than once (when the array is read from left to right).
    
    In other words, out of all the integers that might occur more than once in the input array, your function should return the one
    whose first duplicate value has the minimum index.

    If no integer appears more than once, your function sould return "-1".
    Note that you're allowed to mutate the input array

    Sample input #1
    array = [2, 1, 5, 2, 3, 3, 4]
    
    Sample output #1
    2 // 2 is the first integer that appears more than once.
    // 3 also appears more than once, but the second 3 appears after the second 2.

    Sample input #2
    array = [2, 1, 5, 3, 3, 2, 4]
    
    Sample output #2
    3 // 3 is the first integer that appears more than once.
    // 2 also appears more than once, but the second 2 appears after the second 3.
*/

const array = [2, 1, 5, 3, 3, 2, 4];

export function firstDuplicateValue(array: number[]) {
  let repetitionsMap: { [number: number]: number } = {};
  let duplicatedMap: { [number: number]: number } = {};

  for (const currNumber of array) {
    currNumber in repetitionsMap ? (repetitionsMap[currNumber] += 1) : (repetitionsMap[currNumber] = 1);
  }

  for (const currDupliNum of array) {
    if (repetitionsMap[currDupliNum] >= 2) {
      currDupliNum in duplicatedMap ? (duplicatedMap[currDupliNum] += 1) : (duplicatedMap[currDupliNum] = 1);
    }
    if (duplicatedMap[currDupliNum] >= 2) return currDupliNum;
  }

  return -1;
}


// O(n) Time | O(n) Space
console.log(firstDuplicateValue(array));
