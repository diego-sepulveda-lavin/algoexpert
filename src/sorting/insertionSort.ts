/* 
    Write a function that takes in an array of integers and returns a sorted version of that array.
    Use the insertion sort algorithm to sort the array

    If you are unfamiliar with Insertion Sort, we recommend watching the Conceptial Overviews section of this question's video explanation
    before starting to code

    Sample Input
    array = [8, 5, 2, 9, 5, 6, 3]

    Sample Output
    [2, 3, 5, 5, 6, 8, 9]
*/

const array = [8, 5, 2, 9, 5, 6, 3];

export function insertionSort(array: number[]) {
  let p1 = 0; // init pointer1 at beginning of array
  let p2 = p1 + 1; // init pointer2 next position of p1
  let arrLen = array.length; // calculate max length of array

  // iterate p1 from start to end of array less one
  while (p1 < arrLen - 1) {
    // check if the next number to p1 is greater than p1 number
    if (array[p2] < array[p1]) {
      //if greater swap them
      swap(p1, p2, array);
      let p3 = p1; // if you swapped, init a third pointer equal to current p1
      // while that recently swapped number is greater than the previous number in array, continue swapping it
      while (array[p3] < array[p3 - 1]) {
        //array[p3 - 1] will eventually become undefined and will evaluate to false, exiting the while loop
        swap(p3, p3 - 1, array);
        p3--;
      }
    }
    // continue with next numbers in array
    p1++;
    p2++;
  }

  return array;
}

function swap(i: number, j: number, array: number[]) {
  // this swaps two numbers in a given array
  const aux = array[j];
  array[j] = array[i];
  array[i] = aux;
}

// Best: O(n) time | O(1)S
// Average: O(n²) time | O(1)S
// Worst: O(n²) time | O(1)S
console.log(insertionSort(array));
