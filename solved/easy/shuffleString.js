// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// s.length == indices.length == n
// 1 <= n <= 100
// s contains only lower-case English letters.
// 0 <= indices[i] < n
// All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1
// - create array sortedArr that is filled with blank elements sized by indices.length
// - iterate through s and indices at the same time
//   - replace elements in sortedArr at indices with char in s
// - return sortedArr

// 2
// - create map
//   - create key/value pair of char in s and num in indices
//   - sort map by value lowest to highest
// - return Object.keys(map).join()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var restoreString = function(s, indices) {
  let sorted = new Array(indices.length)
  for(let i = 0; i < indices.length; i++) { sorted[indices[i]] = s[i] }
  return sorted.join("")
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var restoreString = function(s, indices) {
//   let map = {}
//   for(let i = 0; i < indices.length; i++) { map[indices[i]] = s[i] }
//   return Object.values(map).join("")
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3])) // "leetcode"

// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

console.log(restoreString("abc", [0,1,2])) // "abc"

// Explanation: After shuffling, each character remains in its position.

console.log(restoreString("aiohn", [3,1,4,2,0])) // "nihao"
console.log(restoreString("aaiougrt", [4,0,2,6,7,3,1,5])) // "arigatou"
console.log(restoreString("art", [1,0,2])) // "rat"