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

//sortedOne [ -1, 3, 5, 10, 20, 28 ]
//sortedTwo [ 135, 134, 26, 17, 15 ]
//smallest = infinity

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  let arrayOneCopy = [...arrayOne.sort((a, b) => a - b)];
  let arrayTwoCopy = [...arrayTwo.sort((a, b) => b - a)];
  let result = [];
  let currentSmallest = Infinity;

  for (const numberOne of arrayOneCopy) {
    for (const numberTwo of arrayTwoCopy) {
      if (Math.abs(numberOne - numberTwo) < currentSmallest) {
        currentSmallest = Math.abs(numberOne - numberTwo);
        result[0] = numberOne;
        result[1] = numberTwo;
      }
    }
  }

  return result;
}

export function test(arrayOne: number[], arrayTwo: number[]) {
  console.log(Math.abs(-1 - 15));
  console.log(Math.abs(-1 - 17));
}

test(arrayOne, arrayTwo);
