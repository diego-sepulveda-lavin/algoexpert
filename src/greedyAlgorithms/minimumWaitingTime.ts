/* 
    Minimum Waiting Time
    
    You are given a non-empty array of positive integers representing the amounts of time that specific queries takes to execute.
    Only one query can be executed at a time, but the queries can be executed in any order.

    A query's waiting time is defined as the amount of time that it must wait before it's execution starts. In other words, if a
    query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time
    is the sum of the durations of the first two queries.
    
    Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries
    of durations [1, 4, 5], then the total waiting time if the queries were executed were executed in the order of [5, 1, 4] would be
    (0) + (5) + (5 + 1) = 11. The first query of duration "5" would be executed immediately, so its waiting time would be "0", the second
    query of duration "1" would have to wait "5" seconds (the duration of the first query) to be executed, and the last query would have to
    wait the duration of the first two queries before being executed.

    Note: you are allowed to mutate de input array

    Sample Input:
    queries = [3, 2, 1, 2, 6]
    0 + 3 + (3+2) + (3+2+1) + (3+2+1+2) = 22
    but
    queries = [1, 2, 2, 3, 6]
    0 + 1 + (1+2) + (1+2+2) + (1+2+2+3)

    Sample Output:
    17
*/

const queries = [3, 2, 1, 2, 6];
const queries2 = [1, 2, 3];

export function minimumWaitingTime(array: number[]): number {
  array.sort((a, b) => a - b); // first sort array to assure longest query will be executed at last

  if (array.length === 0) return 0; // we define a base case where recursion will end

  let sum = 0; // init variable to hold sum

  for (let i = 0; i < array.length - 1; i++) {
    sum += array[i]; // iterate over array less one position, due last query processing time should not be included in sum
  }

  array.pop(); // decrease length of array

  return minimumWaitingTime(array) + sum; // return recursive call plus calculated sum
}

console.log(minimumWaitingTime(queries2));
