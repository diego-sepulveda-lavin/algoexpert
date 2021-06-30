/*   
    Given two non-empty arrays of integers, write a function that determines
    whether the second array is a subsequence of the first one.
    A subsequence of an array is a set of numbers that aren't necessarily adjacent
    in the array but that are in the same order as they appear in the array. For
    instance, the numbers [1, 3, 4] form a subsequence of the array
    [1, 2, 3, 4], and so do the numbers [2, 4]. Note
    that a single number in an array and the array itself are both valid
    subsequences of the array. 
*/

/* 
    Sample Input
    array = [5, 1, 22, 25, 6, -1, 8, 10]
    sequence = [1, 6, -1, 10]

    Sample Output
    true
*/

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

//passes 22 of 23 tests
export function isValidSubsequenceNotOptimal(array: number[], sequence: number[]): boolean {
  if (sequence.length > array.length) {
    return false;
  }
  const hashTable: { [number: number]: boolean } = {};
  const workingArray = [...array];
  let resultArray: number[] = [];
  for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < workingArray.length; j++) {
      const sequenceNumber = sequence[i];
      const workingArrayNumber = workingArray[j];
      if (!(sequenceNumber in hashTable)) {
        hashTable[workingArrayNumber] = true;
        if (sequenceNumber === workingArrayNumber) {
          const removedNumber = workingArray.splice(j, 1);
          resultArray = [...resultArray, ...removedNumber];
          break;
        }
      }
    }
  }
  if (sequence.length === resultArray.length) {
    return true;
  } else {
    return false;
  }
}

// Let's use pointers to traverse both arrays. With these we can also check the correct order of the subsequence in the sequence
/*
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
*/

export function isValidSubsequence(array: number[], sequence: number[]): boolean {
  let arrayPointer = 0;
  let sequencePointer = 0;
  // iterate over both arrays until both are at the end
  while (sequencePointer < sequence.length && arrayPointer < array.length) {
    // check values in both arrays
    if (sequence[sequencePointer] === array[arrayPointer]) {
      // if value is found on main array, we move to the next number in subsequence and main array
      sequencePointer++;
      arrayPointer++;
    } else {
      //if the value is not the same, we continue with next value in main array
      arrayPointer++;
    }
  }

  // if we managed to iterate the whole subsequence array, it means we found all the values in the main array
  // in the right order
  return sequencePointer === sequence.length;
}

export function isValidSubsequence2(array: number[], sequence: number[]): boolean {
  let sequencePointer = 0;
  array.forEach((number) => sequence[sequencePointer] === number && sequencePointer++);
  return sequencePointer === sequence.length;
}
console.time("isValidSubsequenceNotOptimal");
console.log(isValidSubsequenceNotOptimal(array, sequence)); // O(n²)T at best
console.timeEnd("isValidSubsequenceNotOptimal");

console.time("isValidSubsequence");
console.log(isValidSubsequence(array, sequence)); // O(n)T | O(1)S
console.timeEnd("isValidSubsequence");

console.time("isValidSubsequence2");
console.log(isValidSubsequence2(array, sequence)); // O(n)T | O(1)S
console.timeEnd("isValidSubsequence2");
