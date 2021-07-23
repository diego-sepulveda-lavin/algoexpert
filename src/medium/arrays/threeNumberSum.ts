/* 
    Three Number Sum
    
    Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
    The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array
    of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves
    should be ordered in ascending order with respect to the numbers they hold.

    If no three numbers sum up to the target sum, the function should return an empty array.

    Sample Input:
    array = [12, 3, 1, 2, -6, 5, -8, 6]
    targetSum = 0

    Sample Output:
    [[-8, 2, 6],[-8, 3, 5],[-6, 1, 5]]

*/

const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // a + b + c = targetSum
  let counter = 0;
  let resultArr: Triplet[] = [];
  let copyArr = [...array];
  copyArr.sort((a, b) => a - b);

  for (let i = 0; i < copyArr.length; i++) {
    const firstNumber = copyArr[i];

    for (let j = i + 1; j < copyArr.length; j++) {
      const secondNumber = copyArr[j];
      if (firstNumber + secondNumber >= targetSum) break;

      for (let k = j + 1; k < copyArr.length; k++) {
        const thirdNumber = copyArr[k];
        counter++;
        if (firstNumber + secondNumber + thirdNumber === targetSum) {
          let arrayToBePushed: Triplet = [firstNumber, secondNumber, thirdNumber];
          resultArr.push(arrayToBePushed);
        }
      }
    }
  }
  console.log(counter);

  return resultArr;
}

export function threeNumberSumImp(array: number[], targetSum: number): Triplet[] {
  let counter = 0;
  const copyArr = [...array];
  copyArr.sort((a, b) => a - b);

  const resultArr: Triplet[] = [];
  for (let i = 0; i < copyArr.length - 2; i++) {
    let left = i + 1;
    let right = copyArr.length - 1;
    while (left < right) {
      counter++;
      const currentSum = copyArr[i] + copyArr[left] + copyArr[right];
      if (currentSum === targetSum) {
        resultArr.push([copyArr[i], copyArr[left], copyArr[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  console.log(counter);

  return resultArr;
}

console.log(threeNumberSum(array, targetSum));

// O(n²) Time | O(n) space
console.log(threeNumberSumImp(array, targetSum));
