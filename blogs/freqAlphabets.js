// Link to problem: https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
// Link to blog: https://levelup.gitconnected.com/javascript-problem-solvers-integer-to-string-decryption-bbb97a83122e

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Given a string s formed by digits ('0' - '9') and '#' .

// We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

// Constraints:
// 1 <= s.length <= 1000
// s[i] only contains digits letters ('0'-'9') and '#' letter.
// s will be valid string such that mapping is always possible.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  - Write a function called freqAlphabets that accepts a string as an argument
//    - Create a variable called convertedArr which initializes as an empty array
//      to keep track of each number we convert into a letter

//  - Iterate over the input string with a for loop starting with the last character in the string
//    - If the character at the current index is a '#'
//      - Convert the next two consecutive characters before the current integer into an integer
//      - Combine the two converted integers into 1 integer (do not add them)
//      - Add 96 to the converted integer
//      - Convert the integer into it's ASCII code character
//      - Add the converted character to convertedArr
//     - Otherwise
//      - Convert the character at the current index into an integer
//      - Add 96 to the converted integer
//      - Convert the integer into it's ASCII code character
//      - Add the converted character to convertedArr

//  - Coerce convertedArr into a string and return it

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Final Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


var freqAlphabets = function(s) {
  const convertedArr = []

  for(let i = s.length - 1; i >= 0; i--){
    if(s[i] === '#') {
      convertedArr.unshift(String.fromCharCode(parseInt(s[i - 2] + s[i - 1]) + 96))
      i = i - 2
    } else convertedArr.unshift(String.fromCharCode(parseInt(s[i]) + 96))
  }

  return convertedArr.join('')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(freqAlphabets("10#11#12"))
console.log(freqAlphabets("1326#"))
console.log(freqAlphabets("25#"))
console.log(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"))