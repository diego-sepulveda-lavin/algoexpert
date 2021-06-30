/* 
    Sorted Squared Array

    Write a function that takes in a non-empty array of integers that are sorted
    in ascending order and returns a new array of the same length with the squares
    of the original integers also sorted in ascending order.

*/

/* 
    Sample Input
    array = [1, 2, 3, 5, 6, 8, 9]

    Sample output
    [1, 4, 9, 25, 36, 64, 81]
*/

const numbers = [1, 2, 4, 3];

export function sortedSquaredArray(array: number[]): number[] {
  return array.map((number) => number ** 2).sort((a, b) => a - b);
}

export function sortedSquaredArrayManual(array: number[]): number[] {
  let resultArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let squaredNumber = array[i] ** 2;
    resultArray.push(squaredNumber);
  }

  let leftPointer = 0;
  let rightPointer = leftPointer + 1;

  while (leftPointer < resultArray.length) {
    if (rightPointer < resultArray.length) {
      if (resultArray[leftPointer] < resultArray[rightPointer]) {
        rightPointer++;
      } else {
        let tempNumb = resultArray[leftPointer];
        resultArray[leftPointer] = resultArray[rightPointer];
        resultArray[rightPointer] = tempNumb;
        rightPointer++;
      }
    } else {
      leftPointer++;
      rightPointer = leftPointer + 1;
    }
  }

  return resultArray;
}

console.time("sortedSquaredArray");
console.log(sortedSquaredArray(numbers));
console.timeEnd("sortedSquaredArray");

console.log(sortedSquaredArrayManual(numbers));
