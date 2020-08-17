// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - iterate through array
// - build frequency counter for occurances

// - iterate through Object.values(counter)
// - nest iteration to check each value against the rest
//   - if Object.values(counter)[i] === Object.values(counter)[j]
//     - return false

// - build another obj

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var uniqueOccurrences = function(arr) {
  let c = {}
  for(n in arr){ c[arr[n]] = c[arr[n]] ? ++c[arr[n]] : 1 }
  const v = Object.values(c)
  for(i = 0; i < v.length; i++){ for(j = i + 1; j < v.length; j++){ if (v[i] === v[j]) return false } }
  return true
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(uniqueOccurrences([1,2,2,1,1,3])) // true
console.log(uniqueOccurrences([1,2])) // false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])) // true
// console.log() //
// console.log() //