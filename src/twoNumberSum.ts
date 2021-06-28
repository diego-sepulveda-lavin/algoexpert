const numbers = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

export function twoNumberSum(array: number[], targetSum: number): [number, number] | [] {
  // Write your code here.
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

console.log(twoNumberSum(numbers, target));

/* Write whatever you want here.

// recieves a NON EMPTY array of DISTINCT
[3, 5,-4, 8, 11, 1, -1, 6]
// recieves a target sum number
10

// if TWO numbers in the array sum to the target (10), return an array with the numbers
[11,-1]
// if there are not two numbers summing to the target, return an empty array
[]

// you can't sum the same number
// you can asumme there will be at most one pair summing to the target

3 + 3 NOT ALLOWED
3 + 5 = 10 ?
3 + -4 = 10 ?
.....
5 + 3 = 10 ? REPEATED CHECK
5 + 5 NOT ALLOWED
....
11 + -1 = 10 ? TRUE RETURN [11, -1]
IF NONE PAIR SUM UP RETURN [] */
