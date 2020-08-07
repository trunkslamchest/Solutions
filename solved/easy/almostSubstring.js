// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// You are given a text represented as a string t, and a string s of length 3. Your task is to count the number of indices i, such that titi+2ti+4 = s.

// Example

// For t = "azcabcab" and s = "acb", the output should be almostSubstring(t, s) = 2.

// t0t2t4 = "acb" = s;
// t1t3t5 = "zac" ≠ s;
// t2t4t6 = "cba" ≠ s;
// t3t5t7 = "acb" = s.
// For t = "" and s = "xyz", the output should be almostSubstring(t, s) = 0.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string t

// A text represented as a string consisting of lowercase English letters.

// [input] string s

// A string of length 3 consisting of lowercase English letters.

// [output] integer

// The number of indices i, such that titi+2ti+4 = s.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 0 ≤ t.length ≤ 1000.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function almostSubstring(t, s) {
  let n = 0
  for(let i = 0, j = 2, k = 4; k < t.length; i++, j++, k++){ if( t[i] + t[j] + t[k] === s) n++ }
  return n
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// console.log(almostSubstring("azcabcab", "acb")) // 2
console.log(almostSubstring("aabbcc", "abc")) // 2
// console.log(almostSubstring()) //
// console.log(almostSubstring()) //
// console.log(almostSubstring()) //