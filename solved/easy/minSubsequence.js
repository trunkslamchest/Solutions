// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence.

// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements.

// A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.

// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 100

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - sum = 0

// - get total sum of array
// - sort nums

// iterate through nums from high to low
//   - subSum = 0
//   - sub = []

//   - if sum > subSum
//     - subSum += nums[i]
//     - sub.push(nums[i])
//     - sum = sum - subSum
//   - else
//     - return sub

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var minSubsequence = function(nums) {
  let sum = nums.reduce((a, b) => a + b ), subSum = 0, sub = []
  nums.sort((a, b) => a - b)

  for(i = nums.length - 1; i >= 0; i--){
    if(sum >= subSum) {
      subSum += nums[i]
      sum = sum - nums[i]
      sub.push(nums[i])
    } else break
  }

  return sub
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(minSubsequence([4,3,10,9,8])) // [10,9]

// [3,4,8,9,10]
// sum = 34

// Explanation:
// The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included.
// However, the subsequence [10,9] has the maximum total sum of its elements.

console.log(minSubsequence([4,4,7,6,7])) // [7,6,7]

// sum = 28

// Explanation:
// The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6).
// Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to be returned in non-decreasing order.

console.log(minSubsequence([6])) // [6]