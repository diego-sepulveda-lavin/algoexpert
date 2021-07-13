/* 
    Given an array of positive integers representing the values of coins in your
    possession, write a function that returns the minimum amount of change (the
    minimum sum of money) that you CANNOT create. The given coins can have
    any positive integer value and aren't necessarily unique (i.e., you can have
    multiple coins of the same value).

    For example, if you're given "coins = [1, 2, 5]", the minimum
    amount of change that you can't create is "4". If you're given no
    coins, the minimum amount of change that you can't create is "1".
*/

/* 
    Sample Input:
    coins = [5, 7, 1, 1, 2, 3, 22]
    
    Sample Output:
    20
*/

const coins = [5, 7, 1, 1, 2, 3, 22];
//const coins = [1, 2, 4];

export function nonConstructibleChange(coins: number[]) {
  // we sort the array if we want O(I)S or if we need to copy then we would have O(n)S
  coins.sort((a, b) => a - b);
  //we set the min current change
  let currentChange = 0;
  //iterate over each coin in the coins array
  for (let coin of coins) {
    // if the current coint is bigger than the current possible coin we return due is not possible to create a bigger change
    // with the coins we have
    if (coin > currentChange + 1) {
      return currentChange + 1;
      // otherwise we add the currentcoint to current possible change
    } else {
      currentChange += coin;
    }
  }
  // if we hit the end of the array then is not possible to create a bigger change with the coins we have
  return currentChange + 1;
}

console.log(nonConstructibleChange(coins)); // O(n*log(n)) T and O(I) S
