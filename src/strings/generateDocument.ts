/* 
    You're given a string of available characters and a string representing a document that you need to generate. Write a
    function that determines if you can generate the document using the available characters. If you can generate the document,
    your function should return true; otherwise, it should return false.

    You're only able to generate the document if the frequency of unique characters in the characters string is greater than or 
    equal to the frequency of unique characters in the document string. For example, if you're given characters = "abcabc" and
    document = "aabbccc" you cannot generate the document because you're missing one "c".

    The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.
    Note: you can always generate the empty string ("").

    Sample Input
    characters = "Bste!hetsi ogEAxpelrt x "
    document = "AlgoExpert is the Best!"

    Sample Output
    true
*/

const characters = "Bste!hetsi ogEAxpelrt x ";
const document = "AlgoExpert is the Best!";

export function generateDocument(characters: string, document: string): boolean {
  let charsMap: { [char: string]: number } = {}; // init empty obj to map chars
  let documentMap: { [char: string]: number } = {}; // init empty obj to map document chars

  for (let char of characters) {
    char in charsMap ? (charsMap[char] += 1) : (charsMap[char] = 1); // iterate characters string to map charsMap
  }

  for (let char of document) {
    char in documentMap ? (documentMap[char] += 1) : (documentMap[char] = 1); //iterate documents string to map documentMap
  }

  // iterate document map
  for (let char in documentMap) {
    // case there are not enough current char in chars map or char is not present, return false
    if (documentMap[char] > charsMap[char] || !(char in charsMap)) return false;
  }

  // if false wasn't hit before, then is possible to build document with given characters
  return true;
}

export function generateDocumentImp(characters: string, document: string): boolean {
  let charsMap: { [char: string]: number } = {}; // init empty obj to map chars

  for (let char of characters) {
    char in charsMap ? (charsMap[char] += 1) : (charsMap[char] = 1); // iterate characters string to map charsMap
  }

  for (let char of document) {
    if (!(char in charsMap) || charsMap[char] === 0) return false; // check if char is in charsMap or if is equal to zero, if so return false
    charsMap[char]--; // otherwise decrease the count of char in charsMap
  }

  // if false wasn't hit before, then is possible to build document with given characters
  return true;
}

// Time: O(n+m+l) => 0(n)
// Space: O(n+m) => 0(n)
console.log(generateDocument(characters, document));

// Time: O(n+m) => 0(n)
// Space: O(n) => 0(n)
console.log(generateDocumentImp(characters, document));
