// Link to problem: https://leetcode.com/problems/create-target-array-in-the-given-order/
// Link to blog: https://levelup.gitconnected.com/javascript-problem-solvers-create-target-array-33cdb61c7a87

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given two arrays of integers nums and index. Your task is to create a target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 <= nums.length, index.length <= 100
// nums.length == index.length
// 0 <= nums[i] <= 100
// 0 <= index[i] <= i

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - Write a function called createTargetArray that accepts two arrays as arguments (nums, index)
// - Define a variable called target, and initialize it as an empty array

//  Define a for loop to iterate through both the nums array and index array
//    - If a number in the index array is equal to 0
//      - Add the corresponding number in the nums array to the beginning of the target array

//    - If a number in the index array is equal to the length of the index array
//      - Add the corresponding number in the nums array to the end of the target array

//    - If there is a number in the target array at the index we want to insert at
//      - Divide the target array into 3 parts, and create a new array
//        - Slice all the numbers from the beginning of the target array to the index we want to insert at
//        - Add them to the beginning of the new array
//        - Add the number we want to insert from the numbers array to the new array
//        - Slice all the numbers from the index we want to insert at to the end of the target array
//        - Add them after the number we inserted into the new array

//    - Otherwise
//      - Replace the number at the index in the target array we want to insert the number from the numbers array

// - Return the target array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Final Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var createTargetArray = function(nums, index) {
  let a = []

  for(let i = 0; i < nums.length; i++){
    if(index[i] === 0) a.unshift(nums[i])
    else if(index[i] > nums.length) a.push(nums[i])
    else if(!!a[index[i]]) a = [ ... a.slice(0, index[i]), nums[i], ...a.slice(index[i], a[a.length]) ]
    else a[index[i]] = nums[i]
  }

  return a
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(createTargetArray([4,2,4,3,2], [0,0,1,3,1])) // [2,2,4,4,3]
console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1])) // [0,4,1,3,2]
console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0])) // [0,1,2,3,4]
console.log(createTargetArray([1], [0])) // [1]
