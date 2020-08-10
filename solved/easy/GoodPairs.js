// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var numIdenticalPairs = function(nums) {
  let goodPairs = 0

  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) goodPairs++
    }
  }

  return goodPairs
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var numIdenticalPairs = function (nums) {
//   let counter = 0
//   const map = {}

//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) counter += map[nums[i]]
//     else map[nums[i]] = 0
//     map[nums[i]]++
//   }

//   return counter
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])) // 4

// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

console.log(numIdenticalPairs([1, 1, 1, 1])) // 6

// Explanation: Each pair in the array are good.

console.log(numIdenticalPairs([1, 2, 3])) // 0
