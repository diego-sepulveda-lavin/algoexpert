/* 
    Palindrome Check
    Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
    A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

    Sample Input
    string = "abcdcba"

    Sample Output
    true // it's written the same forward and backward
*/

const string = "abcdcba"; // true
const string2 = "a"; // true
const string3 = "aa"; // true
const string4 = "ab"; // false

// O(n)T and O(1)S
export function isPalindrome(string: string): boolean {
  let left = 0; // init left pointer
  let right = string.length - 1; // init right pointer at last string's position

  //iterate until both pointers reach center of the string
  while (left <= right) {
    //if current char at left is not equal to current chat at right, is not a palindrome so return false
    if (string[left] !== string[right]) {
      return false;
    }
    left++; //increase left pointer
    right--; // decrease right pointer
  }
  // if no return was hit before, then is a palindrome
  return true;
}

// O(n²)T because you need to loop and recreate reversedString for every iteration. O(n)S
export function isPalindromeNotOptimal(string: string): boolean {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString === string;
}

console.log(isPalindrome(string));
console.log(isPalindromeNotOptimal(string));
