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
  let maxPossibleChange = 0;
  let sortedCoins = [...coins].sort((a, b) => a - b);

  for (let coin of sortedCoins) {
    if (coin > maxPossibleChange + 1) {
      return maxPossibleChange + 1;
    } else {
      maxPossibleChange += coin;
    }
  }
  return maxPossibleChange + 1;
}

console.log(nonConstructibleChange(coins)); // O(n*log(n)) T and O(I) S
