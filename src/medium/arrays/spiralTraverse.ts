/* 
    Spiral Traverse
    Write a function that takes in an n * m two-dimensional array(that can be square-shaped when n === m) and returns a one-dimensional
    array of all the array's elements in spiral order.

    Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the
    way until every element has been visited.

    Sample Input:
    array = [

          [. , +]

        [1, 2, 3, 4],
[- , .] [12, 13, 14, 5],  [+ , .]
        [11, 16, 15, 6],
        [10, 9, 8, 7],

          [. , -]
    ]

    Sample Output:
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

export function spiralTraverse(array: number[][]) {
  let rowPointer = 0;
  let columnPointer = 0;

  let leftWall = 0;
  let rightWall = array[rowPointer].length;
  let topWall = 0;
  let bottomWall = array.length;

  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  let direction = Direction.Right;

  let outputArr = [];

  while (leftWall < rightWall && topWall < bottomWall) {
    outputArr.push(array[rowPointer][columnPointer]);
    if (direction === Direction.Right) {
      if (columnPointer >= rightWall - 1) {
        direction = Direction.Down;
        rowPointer++;
        topWall++;
      } else {
        columnPointer++;
      }
    } else if (direction === Direction.Down) {
      if (rowPointer >= bottomWall - 1) {
        direction = Direction.Left;
        columnPointer--;
        rightWall--;
      } else {
        rowPointer++;
      }
    } else if (direction === Direction.Left) {
      if (columnPointer <= leftWall) {
        direction = Direction.Up;
        rowPointer--;
        bottomWall--;
      } else {
        columnPointer--;
      }
    } else if (direction === Direction.Up) {
      if (rowPointer <= topWall) {
        direction = Direction.Right;
        columnPointer++;
        leftWall++;
      } else {
        rowPointer--;
      }
    }
  }

  return outputArr;
}
// O(n) Time | O(n) Space
spiralTraverse(array);
