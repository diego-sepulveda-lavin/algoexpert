/* 
    Write a function that takes in an array of integers and returns a sorted version of that array.
    Use the selection sort algorithm to sort the array

    If you are unfamiliar with selection Sort, we recommend watching the Conceptial Overviews section of this question's video explanation
    before starting to code

    Sample Input
    array = [8, 5, 2, 9, 5, 6, 3]

    Sample Output
    [2, 3, 5, 5, 6, 8, 9]
*/

const array = [8, 5, 2, 9, 5, 6, 3];

export function selectionSort(array: number[]) {
  let arrangedI = 0;
  let currI = 0;
  let smallestNumI = 0;
  let arrLen = array.length;

  // Loop until currI reaches the end of the array and the arranged pointer reaches the end of array
  while (currI < arrLen && arrangedI < arrLen) {
    // Check whether current iterated number is smaller than smallest, if so, save this new smallest index
    array[currI] < array[smallestNumI] && (smallestNumI = currI);

    // if currI reaches end of array, swap the smallest number found, for the current number of arrangedI
    if (currI === arrLen - 1) {
      swap(arrangedI, smallestNumI, array);
      arrangedI++;
      currI = arrangedI;
      smallestNumI = arrangedI;
    }
    currI++;
  }
  return array;
}

function swap(i: number, j: number, array: number[]) {
  let aux = array[i];
  array[i] = array[j];
  array[j] = aux;
}

console.log(selectionSort(array));
