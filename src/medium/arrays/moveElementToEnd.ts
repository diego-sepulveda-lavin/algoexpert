/* 
    Move Element To End

    You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the
    end of the array and returns the array.

    The function should perform this in place(i.e., it should mutate the input array) and doesn't need to maintain the order of
    the other integers.

    Sample Input:
    array = [2, 1, 2, 2, 2, 3, 4, 2]
    toMove = 2

    Sample Output
    [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3 and 4 could be ordered differently
*/

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;

export function moveElementToEnd(array: number[], toMove: number) {
  let pointer = 0;
  for (let i = 0; i < array.length; i++) {
    const num = array[pointer];
    if (num === toMove) {
      let removedNum = array.splice(pointer, 1);
      array.push(...removedNum);
    } else {
      pointer++;
    }
  }

  return array;
}

export function moveElementToEndImp(array: number[], toMove: number) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const leftNum = array[leftPointer];
    const rightNum = array[rightPointer];

    if (leftNum === toMove) {
      if (rightNum === toMove) {
        rightPointer--;
      } else {
        let temp = array[rightPointer];
        array[rightPointer] = array[leftPointer];
        array[leftPointer] = temp;
        rightPointer--;
        leftPointer++;
      }
    } else {
      leftPointer++;
    }
  }

  return array;
}

moveElementToEnd(array, toMove);

// O(n) Time | O(1) Space
moveElementToEndImp(array, toMove);
