/* 

  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.

*/

const numbers = [3, 5, -4, 8, 11, 1, -1, 6, 2, 4, -5, -6, 15, 21, 13, -7, 22, -22, 45, -88, -17, -103, -100];
const target = -203;

/*
DOUBLE FOR LOOP
recieves a NON EMPTY array of DISTINCT [3, 5,-4, 8, 11, 1, -1, 6]
recieves a target sum number 10

if TWO numbers in the array sum to the target (10), return an array with the numbers [11,-1]
if there are not two numbers summing to the target, return an empty array []

you can't sum the same number
you can asumme there will be at most one pair summing to the target

3 + 3 NOT ALLOWED
3 + 5 = 10 ?
3 + -4 = 10 ?
.....
5 + 3 = 10 ? REPEATED CHECK
5 + 5 NOT ALLOWED
....
11 + -1 = 10 ? TRUE RETURN [11, -1]
IF NONE PAIR SUM UP RETURN [] */

export function twoNumberSum(array: number[], targetSum: number): [number, number] | [] {
  for (let i = 0; i < array.length; i++) {
    const currentINumber = array[i];
    for (let j = 0; j < array.length; j++) {
      const currentJNumber = array[j];
      if (i === j) {
        continue;
      } else {
        const sum = currentINumber + currentJNumber;
        if (sum !== targetSum) {
          continue;
        } else if (sum === targetSum) {
          return [currentINumber, currentJNumber];
        }
      }
    }
  }
  return [];
}

export function twoNumberSumImproved(array: number[], targetSum: number) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentINumber = array[i];
      const currentJNumber = array[j];
      const checkSum = currentINumber + currentJNumber === targetSum ? true : false;
      if (checkSum) {
        return [currentINumber, currentJNumber];
      }
    }
  }
  return [];
}

/* 
USING A HASHTABLE AND EQUATION
We know the array [3, 5, -4, 8, 11, 1, -1, 6] and the target sum 10
So we can do the following equation x + y = 10, 
being x the current number in the array we are looping, y the needed number and 10 the target. If we solve the equation, we get
y = 10 - x (with this we know which number we need for a given x)
*/

export function twoNumberSumWithHashTable(array: number[], targetSum: number): [number, number] | [] {
  const hashTable: { [key: number]: boolean } = {};
  for (let number of array) {
    let potencialMatch = targetSum - number;
    if (potencialMatch in hashTable) {
      return [potencialMatch, number];
    } else {
      hashTable[number] = true;
    }
  }
  return [];
}

/* 
USING A SORTED ARRAY WITH 2 POINTERS
first we sort the array and then we create 2 pointers, one starts at index 0 and the other at the end
depending if the number is bigger or smaller than sumTarget, we move the corresponding pointer to the left or right
*/

export function twoNumberSumWithPointers(array: number[], targetSum: number): [number, number] | [] {
  const sortedArr = [...array];
  sortedArr.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = sortedArr.length - 1;

  while (leftPointer !== rightPointer) {
    const leftNumber = sortedArr[leftPointer];
    const rightNumber = sortedArr[rightPointer];
    const checkSum = leftNumber + rightNumber;
    if (checkSum === targetSum) {
      return [leftNumber, rightNumber];
    } else if (checkSum > targetSum) {
      rightPointer -= 1;
    } else {
      leftPointer += 1;
    }
  }
  return [];
}

console.time("twoNumberSum");
console.log(twoNumberSum(numbers, target)); //O(n²)T
console.timeEnd("twoNumberSum");

console.time("twoNumberSumImproved");
console.log(twoNumberSumImproved(numbers, target)); //O(n²)T
console.timeEnd("twoNumberSumImproved");

console.time("twoNumberSumWithHashTable");
console.log(twoNumberSumWithHashTable(numbers, target)); //O(n)T
console.timeEnd("twoNumberSumWithHashTable");

console.time("twoNumberSumWithPointers");
console.log(twoNumberSumWithPointers(numbers, target)); //O(n*log(n))T
console.timeEnd("twoNumberSumWithPointers");
