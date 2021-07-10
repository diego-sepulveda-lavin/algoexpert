/* 
    First Non-Repeating Character
    
    Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first
    non-repeating character.

    The first non-repeating character is the first character in a string that occurs only once.
    If the input string doesn't have a any non-repeating characters, your function should return -1

    Sample Input
    string = "abcdcaf"

    Sample Output
    1 // The first non-repeating character is "b" and is found at index 1

*/

const string = "aabb";

export function firstNonRepeatingCharacter(string: string): number {
  let charsMap: { [char: string]: number } = {}; //init empty charsMap

  //iterate string to map values into charsMap
  for (const char of string) {
    char in charsMap ? (charsMap[char] += 1) : (charsMap[char] = 1);
  }

  // iterate once again through string and in case you found a key pair with value 1, return current string index
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charsMap[char] == 1) return i;
  }

  // otherwise return -1, meaning there are none non-repeating chars in string
  return -1;
}

// Time: O(n)
// Space: O(1) => English lowercase alphabet has only 26 letters, so it will be constant space
console.log(firstNonRepeatingCharacter(string));
