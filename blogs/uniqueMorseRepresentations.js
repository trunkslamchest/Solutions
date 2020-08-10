// Link to problem: https://leetcode.com/problems/unique-morse-code-words/
// Link to blog:

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes,
// as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter.

// For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-").

// We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Edge Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Final Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var uniqueMorseRepresentations = function(words) {
  if(words.length === 0) return 0
  const alpha = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let count = {}, str = words.join(' '), fullCode = ''
  for(char in str) {
    if(str[char] !== ' ') fullCode += alpha[(str.charCodeAt(char) - 96) - 1]
    else fullCode += ' '
  }
  fullCode.split(' ').forEach(phrase => count[phrase] = count[phrase] ? ++count[phrase] : 1)
  return Object.values(count).length
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])) // 2

// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

console.log(uniqueMorseRepresentations(["zocd","gjkl","hzqk","hzgq","gjkl"])) // 2

console.log(uniqueMorseRepresentations(["yxmine","yxzd","eljys","uiaopi","pwlk"])) // 3

console.log(uniqueMorseRepresentations([])) // 0
