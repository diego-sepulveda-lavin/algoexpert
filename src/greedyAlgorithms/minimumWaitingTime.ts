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

export function minimumWaitingTime(queriesSrc: number[], sorted: boolean = false): number {
  let queries = [...queriesSrc]; // copy to avoit mutate source array
  if (!sorted) {
    queries.sort((a, b) => a - b); // first sort queries to assure longest query will be executed at last
  }

  if (queries.length === 0) return 0; // we define a base case where recursion will end

  let sum = 0; // init variable to hold sum

  for (let i = 0; i < queries.length - 1; i++) {
    sum += queries[i]; // iterate over queries less one position, due last query processing time should not be included in sum
  }

  queries.pop(); // decrease length of queries

  return minimumWaitingTime(queries, true) + sum; // return recursive call plus calculated sum
}

export function minimumWaitingTime2(queriesSrc: number[]): number {
  let queries = [...queriesSrc]; // copy to avoit mutate source array

  queries.sort((a, b) => a - b); // first sort queries to assure longest query will be executed at last

  let sum = 0; // init variable to hold sum
  let left = 0; // init left pointer

  // iterate over queries less one position, due last query processing time should not be included in sum
  while (left < queries.length - 1) {
    sum += queries[left]; // add current value to sum
    left++; // move left pointer
    // if last position of array is reached, decrease size and reset pointer to 0
    if (left === queries.length - 1) {
      left = 0;
      queries.pop();
    }
  }
  return sum;
}

// Time: O(n*log(n))
// Space: O(n)
console.log(minimumWaitingTime(queries));

// Time: O(n*log(n))
// Space: O(1) // assuming we do not perform a copy of it
console.log(minimumWaitingTime2(queries));
