/* 
    Array of Products

    Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the
    output array is equal to the product of every other number in the input array.

    In other words, the value at "output[i]" is equal to the product of every number in the input array other than "input[i]".
    Note that you are expected to solve this problem without using division

    Sample Input:
    array = [5, 1, 4, 2]

    Sample Output:
    [8, 40, 10, 20]
    
    // 8 is equal to 1 * 4 * 2
    // 40 is equal to 5 * 4 * 2
    // 10 is equal to 5 * 1 * 2
    // 20 is equal to 5 * 1 * 4

*/

const array = [5, 1, 4, 2];

export function arrayOfProducts(array: number[]) {
  let outerPointer = 0;
  let arrayOfProducts = [];
  while (outerPointer < array.length) {
    let innerPointer = 0;
    let restingNumbers = [];
    while (innerPointer < array.length) {
      if (outerPointer !== innerPointer) {
        restingNumbers.push(array[innerPointer]);
      }
      innerPointer++;
    }
    let tempProduct = restingNumbers.reduce((acc, current) => acc * current);
    arrayOfProducts.push(tempProduct);
    outerPointer++;
  }

  return arrayOfProducts;
}

console.log(arrayOfProducts(array));
