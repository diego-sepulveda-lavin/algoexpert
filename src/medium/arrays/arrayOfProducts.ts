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
    let product = 1;

    while (innerPointer < array.length) {
      if (outerPointer !== innerPointer) {
        product = product * array[innerPointer];
      }
      innerPointer++;
    }

    arrayOfProducts[outerPointer] = product;
    outerPointer++;
  }

  return arrayOfProducts;
}

export function arrayOfProductsImp(array: number[]) {
  let leftProductsArr = new Array(array.length).fill(1);
  let rightProductsArr = new Array(array.length).fill(1);
  let productArr = [];

  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < array.length; i++) {
    const currNumber = array[i];
    leftProductsArr[i] = leftProduct;
    leftProduct *= currNumber;
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const currNumber = array[i];
    rightProductsArr[i] = rightProduct;
    rightProduct *= currNumber;
  }

  for (let i = 0; i < array.length; i++) {
    const leftProduct = leftProductsArr[i];
    const rightProduct = rightProductsArr[i];
    productArr[i] = leftProduct * rightProduct;
  }

  return productArr;
}

// O(n²) time | O(n) space
console.log(arrayOfProducts(array));

// O(n) time | O(n) space
console.log(arrayOfProductsImp(array));
