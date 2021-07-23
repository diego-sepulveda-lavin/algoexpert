/* 
    Smallest Difference

    Write a function that takes in two non-empty arrays of integers, finds the pair of numbers(one from each array), whose
    absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first
    array in the first position.

    Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute
    difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

    You can assume that there will only be one pair of numbers with the smallest difference.

    Sample Input:
    arrayOne = [-1, 5, 10, 20, 28, 3]
    arrayTwo = [26, 134, 135, 15, 17]

    Sample Output:
    [28, 26]
*/
const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

export function smallestDifference(arrayOne: number[], arrayTwo: number[]): number[] {
  const arrOne = [...arrayOne];
  const arrTwo = [...arrayTwo];
  const smallestPair = [];
  let smallestAbsDiff = Infinity;

  for (const numOne of arrOne) {
    for (const numTwo of arrTwo) {
      const currAbsDiff = Math.abs(numOne - numTwo);

      if (currAbsDiff < smallestAbsDiff) {
        smallestAbsDiff = currAbsDiff;
        smallestPair[0] = numOne;
        smallestPair[1] = numTwo;
      }
    }
  }
  return smallestPair;
}

export function smallestDifferenceImp(arrayOne: number[], arrayTwo: number[]): number[] {
  const arrOne = [...arrayOne];
  const arrTwo = [...arrayTwo];

  arrOne.sort((a, b) => a - b);
  arrTwo.sort((a, b) => a - b);

  const smallestPair = [];
  let smallestAbsDiff = Infinity;

  let arrOnePointer = 0;
  let arrTwoPointer = 0;

  while (arrOnePointer < arrOne.length && arrTwoPointer < arrTwo.length) {
    const arrOneNum = arrOne[arrOnePointer];
    const arrTwoNum = arrTwo[arrTwoPointer];
    const currAbsDiff = Math.abs(arrOneNum - arrTwoNum);

    if (currAbsDiff === 0) {
      return [arrOneNum, arrTwoNum];
    }

    if (currAbsDiff <= smallestAbsDiff) {
      smallestAbsDiff = currAbsDiff;
      smallestPair[0] = arrOneNum;
      smallestPair[1] = arrTwoNum;
    }

    if (arrOneNum < arrTwoNum) {
      arrOnePointer++;
    } else {
      arrTwoPointer++;
    }
  }

  return smallestPair;
}

// O(n²) Time | O(n) Space due copy of array or O(1) Space without copy
console.log(smallestDifference(arrayOne, arrayTwo));

// O(nlog(n) + mlog(m)) Time | O(n) Space due copy of array or O(1) Space without copy
console.log(smallestDifferenceImp(arrayOne, arrayTwo));
