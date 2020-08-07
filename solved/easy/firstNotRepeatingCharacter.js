// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.


// [execution time limit] 4 seconds (js)

// [input] string s

// A string that contains only lowercase English letters.

// [output] char

// The first non-repeating character in s, or '_' if there are no characters that do not repeat.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 ≤ s.length ≤ 105

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function firstNotRepeatingCharacter(s) {
  if(s.length === 1) return s

  const map = {}
  let ex = ''

  for(char in s){
    if(map[s[char]]) {
      delete map[s[char]]
      ex += s[char]
    }
    if(!ex.includes(s[char])) map[s[char]] = 1
  }

  return Object.entries(map).length > 0 ? Object.entries(map)[0][0] : '_'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(firstNotRepeatingCharacter("abacabad")) // c
console.log(firstNotRepeatingCharacter("abacabaabacaba")) // _
console.log(firstNotRepeatingCharacter("z")) // z
console.log(firstNotRepeatingCharacter("bcb")) // c
console.log(firstNotRepeatingCharacter("bcccccccb")) // _
console.log(firstNotRepeatingCharacter("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe")) // d
console.log(firstNotRepeatingCharacter("zzz")) // _
console.log(firstNotRepeatingCharacter("bcccccccccccccyb")) // y
console.log(firstNotRepeatingCharacter("xdnxxlvupzuwgigeqjggosgljuhliybkjpibyatofcjbfxwtalc")) // d
console.log(firstNotRepeatingCharacter("ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof")) // g



