/* 
    Run-Length Encoding
    
    Write a function that takes in a non-empty string and returns its run-length encoding.
    From wikipedia, "run-length encoding is a dorm of lossless data compression in which runs of data are stored as a single data
    value and count, rather than as the original run". For this problem, a run of data is a any sequence of consecutive, identical
    characters. So the run "AAA" would be run-length-encoded as "3A"

    To make things more complicated, however, the input string can contain all sorts of special characters, including numbers.
    And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run
    "AAAAAAAAAAAA" ("12 a's"), can't naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA".
    Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as 
    "9A3A"

    Sample Input
    string = "AAAAAAAAAAAAABBCCCCDD"
              9A       4A  2B4C  2D

    Sample Output
    "9A4A2B4C2D"
*/
const string = "AAAAAAAAAAAAABBCCCCDD";

export function runLengthEncoding(string: string):string {
  let currentElement = null; // init an element container
  let elementCounter = 0; // init an element counter
  let outputArr: string[] = []; // use an array to avoid n² when string reconstructing is needed inside foor loop

  // iterate through string
  for (let i = 0; i < string.length; i++) {
    currentElement = string[i]; // set currentElement with current element in string
    elementCounter++; // increase counter

    // if end of string is reached or next element in string, or elementcounter is greater or equal to 9:
    if (i >= string.length - 1 || string[i + 1] !== string[i] || elementCounter >= 9) {
      outputArr.push(elementCounter + currentElement); // push to array currentCounter and element
      elementCounter = 0; // reset counter
    }
  }
  return outputArr.join(""); // rebuild string
}

// Time: O(n)
// Space: O(n)
console.log(runLengthEncoding(string));
