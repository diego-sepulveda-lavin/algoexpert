/* 
    Caesar Cipher Encryptor
    
    Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string
    obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

    Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by one returns the letter "a".
    
    Sample Input
    string = "xyz"
    key = 2

    Sample Output
    "zab"
*/

const string = "xyz";
const key = 2;

export function caesarCipherEncryptor(string: string, key: number) {
  //define our alphabet
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // recalculate key so we always get a number between 0 and the lenth of the alphabet - 1
  const newKey = key % alphabet.length;

  // prepare an empty dictionary
  let dictionary: { [index: string]: string } = {};
  let ch1 = 0; // create a pointer to map dictionary
  let ch2 = ch1 + newKey; // create another pointer to map dictionary which is moved key times

  // iterate over alphabet to map dictionary
  while (ch1 <= alphabet.length - 1) {
    // if ch2 reaches end of alphabet go to beginning
    if (ch2 >= alphabet.length) {
      ch2 = 0;
    }
    // insert in dictionary assuming there are no repeated letters in alphabet array
    dictionary[alphabet[ch1]] = alphabet[ch2];

    // increase pointers
    ch1++;
    ch2++;
  }
  // once dictionary is mapped, create empty array where encrypted letters will be pushed to avoid O(n²)
  let encryptedMessage = [];
  // for each letter in the string message, push to encryptedMessage array the corresponding mapped letter
  for (const letter of string) {
    encryptedMessage.push(dictionary[letter]);
  }
  //return joined characters to form a string
  return encryptedMessage.join("");
}

console.log(caesarCipherEncryptor(string, key)); //O(n)Time and O(n)Space
