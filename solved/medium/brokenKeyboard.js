// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// You have a passage of text that needs to be typed out, but some of the letter keys on your keyboard are broken! 
// You're given an array letters representing the working letter keys, as well as a string text, 
// and your task is to determine how many of the words from text can be typed using the broken keyboard. 
// It is guaranteed that all of the non-letter keys are working (including all punctuation and special characters).

// A word is defined as a sequence of consecutive characters which does not contain any spaces. 
// The given text is a string consisting of words, each separated by exactly one space.
//  It is guaranteed that text does not contain any leading or trailing spaces.

// Note that the characters in letters are all lowercase, but since the shift key is working, it's possible to type the uppercase versions also.

// Example

// For text = "Hello, this is CodeSignal!" and letters = ['e', 'i', 'h', 'l', 'o', 's'], the output should be brokenKeyboard(text, letters) = 2.

// "Hello," can be typed since the characters 'h', 'e', 'l' and 'o' are in letters. Note that the symbol ',' also belongs to the current word and can by typed.
// "this" cannot be typed because the character 't' is not in letters.
// "is" can be typed (both 'i' and 's' appear in letters).
// "CodeSignal!" cannot be typed because the character 'c' is not in letters (as well as 'd', 'g', 'n', and 'a').
// For text = "Hi, this is Chris!" and letters = ['r', 's', 't', 'c', 'h'], the output should be brokenKeyboard(text, letters) = 0.

// Each word contains the character 'i' which does not appear in letters and thus cannot be typed on the keyboard.

// For text = "3 + 2 = 5" and letters = [], the output should be brokenKeyboard(text, letters) = 5.

// There are no working letters on the keyboard, but since each of these words consists of numbers and special characters, they can all be typed, and there are 5 of them.


// Guaranteed constraints:
// 1 ≤ text.length ≤ 1000.

// [input] array.char letters

// An array of characters containing lowercase English letters which can be typed using the broken keyboard. It is guaranteed that the given letters are unique.

// Guaranteed constraints:
// 0 ≤ letters.length ≤ 25.

// [output] integer

// The number of words from text which can be typed using the broken keyboard.


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Guaranteed constraints:
// 1 ≤ text.length ≤ 1000.
// 0 ≤ letters.length ≤ 25.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function brokenKeyboard(text, letters) {
//   let n = 0,
//   a = text.toLowerCase(),

//   phrase = ''

//   for(let char in a){ if((a.charCodeAt(char) > 96 && a.charCodeAt(char) < 122) || a.charCodeAt(char) === 32) { phrase += a[char] } }

//   phrase = phrase.split(" ")

//   for(let i = 0; i < phrase.length; i++){
//     let c = ""
//     for(let j = 0; j < letters.length; j++){
//       letters.forEach(letter => {
//         if(letter === phrase[i][j]){
//           c += letter
//         }
//       })
//     }

//     if (c.length === phrase[i].length) n++
//   }

//   return n
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function brokenKeyboard(text, letters) {
  let n = 0, a = text.toLowerCase(), phrase = ''

  for(let char in a){ if((a.charCodeAt(char) > 96 && a.charCodeAt(char) < 122) || a.charCodeAt(char) === 32) { phrase += a[char] } }

  phrase = phrase.split(" ")

  for(word in phrase){
    let c = ""
    for(char in letters){ letters.forEach(letter => { if(letter === phrase[word][char]){ c += letter } }) }
    if (c.length === phrase[word].length) n++
  }

  return n
}


console.log(brokenKeyboard("Hello, this is CodeSignal!", ["e", "i", "h", "l", "o", "s"])) // 2
console.log(brokenKeyboard("Hi, this is Chris!", ["r", "s", "t", "c", "h"])) // 0
console.log(brokenKeyboard("3 + 2 = 5", [] )) // 5