/* 
    Nth Fibonacci
    The Fibonacci sequence is defined as follows: the first number of the sequence is "0", the second number is "1", and the nth number
    is the sum of the (n-1)th and (n-2)th numbers. Write a function that takes in an integer "n" and returns the nth Fibonacci number

    Important note: The Fibonnaci sequence is often defined with its first two numbers as F0=0 and F1=1. For the purpose of this question,
    the first Fibonacci is numer F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc.

    //   n = 1, 2, 3, 4, 5, 6, 7, 8
    // fib = 0, 1, 1, 2, 3, 5, 8, 13   
*/

//   n = 1, 2, 3, 4, 5, 6, 7, 8
// fib = 1, 1, 2, 3, 5, 8, 13, 21

interface MemoI {
  [n: number]: number;
}

export function getNthFib(n: number, memo: MemoI = {}): number {
  // use memo to store results and improve algorithm performance, avoiding unnecessary getNthFib(n) calls
  if (n in memo) return memo[n];
  if (n < 2) return 0; // case n <= 1 should return 0
  if (n == 2) return 1; // case n == 2 should return 1
  // any n greater than 2, should use the formula
  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo); // calculate and store in memo
  return memo[n];
}

console.log(getNthFib(3));
