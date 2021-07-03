/* 
    Write a function that thakes in an array of integers and returns a sorted version of that array.
    Use the Bubble Sort algorithm to sort the array.

    If you are unfamiliar with Bubble Sort, we recommend watching the Conceptual Overview section of this question's video
    explanation before starting to code

    Sample Input
    array = [8, 5, 2, 9, 5, 6, 3]

    Sample Output
    [2, 3, 5, 5, 6, 8, 9]
*/

const myArr = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8];

export function bubbleSort(array: number[]): number[] {
  let isSorted = false; //assume array is not sorted
  let p1 = 0; // init pointer1 at index 0
  let p2 = p1 + 1; // init pointer 2 at index 1
  let arrLen = array.length;
  let swaps = 0; //init swap counter at 0

  // do while the array is not sorted
  while (!isSorted) {
    //stop when pointer 2 reaches end of array
    while (p2 < arrLen) {
      let p1Number = array[p1];
      let p2Number = array[p2];
      // if first number is greater than second, swap and increase swap counter
      if (p1Number > p2Number) {
        let aux = p1Number;
        array[p1] = p2Number;
        array[p2] = aux;
        swaps++;
      }
      // increase pointers to check following numbers in array
      p1++;
      p2++;
    }
    // if swaps were performed is necessary to start again because we are not sure if array is sorted
    if (swaps > 0) {
      // init pointers to start at the beginning of array and reset swap counter
      p1 = 0;
      p2 = p1 + 1;
      swaps = 0;
    } else {
      //if no swaps were made, our array is sorted so we can finish looping
      isSorted = true;
    }
    // As we compare each number, we can asume the last element of the array is the greatest,
    // so we can avoid to compare the whole array again
    arrLen--;
  }

  return array;
}

// Best: O(n) time | O(1)T
// Average: O(n²) time | O(1)T
// Worst: O(n²) time | O(1)T
console.log(bubbleSort(myArr));
