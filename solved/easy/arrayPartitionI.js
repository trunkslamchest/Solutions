// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given an array of 2n integers, your task is to group these integers into n pairs of integer,
// say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of Math.min(ai, bi) for all i from 1 to n as large as possible.


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 <= n <= 10000
// -10000 <= nums[i] <= 10000

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2n = length of array
// n = half of length of array

// - find the maximum sum for any pair of integers
// - group the integers so that they equal the maximum sum

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var arrayPairSum = function(nums) {
  let sum = 0
  nums.sort((a, b) => a - b)
  for(i = 0; i < nums.length; i += 2){ sum += Math.min(nums[i], nums[i + 1]) }
  return sum
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(arrayPairSum([1,4,3,2])) // 4

// Explanation:
  // n is 2, and the maximum sum of pairs is 4 = Math.min(1, 2) + Math.min(3, 4).

console.log(arrayPairSum([1,1])) // 1

console.log(arrayPairSum([7,3,1,0,0,6])) // 7
