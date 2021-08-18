/* 
    Single Cycle Check
    You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer "2"
    represents a jump of two indices FORWARD in the array; the integer "-3" represents a jump of three indices BACKWARD in the array.
    
    If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of "-1" at index "0" brings us
    to the last index in the array. Similarly, a jump of "1" at the last index in the array brings us to the index "0".
    
    Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if,
    starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing
    back on the starting index.

    Sample Input: 
    array = [2, 3, 1, -4, -4, 2]
          //-4  2  2   1   3 -4
    Sample Output:
    true
*/

const array1 = [2, 3, 1, -4, -4, 2];
const array2 = [1, -1, 1, -1];

export function hasSingleCycle(array: number[]) {
  let numElementVisited = 0;
  let currentIdx = 0;

  while (numElementVisited < array.length) {
    if (numElementVisited > 0 && currentIdx === 0) {
      return false;
    }
    numElementVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}

function getNextIdx(currentIdx: number, array: number[]) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

// O(n) time | O(1) space
console.log(hasSingleCycle(array1));
console.log(hasSingleCycle(array2));
