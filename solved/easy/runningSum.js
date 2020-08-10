// Link to problem: https://leetcode.com/problems/running-sum-of-1d-array/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Solution #1
//  - replace elements of nums with the sum
//    - define sum = 0
//  - for loop
//    - on each iteration
//    - save nums[i] to a temp variable
//    - add temp variable to sum
//    - replace nums[i] with sum

//  - return nums

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Solution #2
//  - push sum to new array
//    - define sum = 0, sumArr = []
//  - for loop
//    - on each iteration
//    - add nums[i] to sum
//    - push sum to sumArr

//  - return sumArr

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var runningSum = function(nums) {
  let sum = 0

  for(let i = 0; i < nums.length; i++){
    sum += nums[i]
    nums[i] = sum
  }

  return nums
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var runningSum = function(nums) {
//   let sum = 0, sumArr = []

//   for(let i = 0; i < nums.length; i++){
//     sum += nums[i]
//     sumArr.push(sum)
//   }

//   return sumArr
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(runningSum([1,2,3,4])) // [1,3,6,10]

// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

console.log(runningSum([1,1,1,1,1])) // [1,2,3,4,5]

// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

console.log(runningSum([3,1,2,10,1])) // [3,4,6,16,17]
