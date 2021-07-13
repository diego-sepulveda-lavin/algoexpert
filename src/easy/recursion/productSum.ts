/* 
    Product Sum
    Write a function that takes in a "special" array and returns its product sum
    A "special" array is a non-empty array that contains either integers or other "special" arrays.
    The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are 
    summed themselves and then multiplied by their level of depth.

    The depth of a "special" array is how far nested it is. 
    For instance, the depth of "[]" is "1"; the depth of the inner array in "[ [] ]"
    is "2"; the depth of the innermost array in "[ [ [] ] ]" is "3".
    
    Therefore, the product sum of: 
    [x, y] is x + y
    [x, [y, z]] is x + 2 * (y + z)
    [x, [y, [z]]] is x + 2 * (y + 3*z)

    Sample Input
    array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

    Sample Output
    12 // calculated as 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
    12 // calculated as 5 + 2 + 12 + 3 - 10

*/

const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]; // 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4) = 12
const array2 = [5, 2, [7, 2]]; // 5 + 2 + 2*(7+2) = 25
const array3 = [5, 2, [7, [2]]]; // 5 + 2 + 2*(7 + 3*(2) ) = 33
const array4 = [1, 2, 3, 4, 5]; // = 15

type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is an array or an integer.
export function productSum(array: SpecialArray, multiplier: number = 1) {
  let sum = 0; //init sum
  //iterate over array, each element represent a number or an array
  for (const element of array) {
    // if element is array, call the function recursively, increasing multiplier, once it returns, add result to sum
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      //otherwise, just add the number
      sum += element;
    }
  }
  // return the sum with proper multiplier
  return multiplier * sum;
}

//should print 12
console.log(productSum(array));
