// Link to problem: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var maxProduct = function(nums) {
//   for(let i = 0; i < nums.length;i++){
//     for(let j = i; j < nums.length;j++){
//       if(nums[i] > nums[j]){
//         let temp = nums[i]
//         nums[i] = nums[j]
//         nums[j] = temp
//       }
//     }
//   }

//   return (nums[nums.length - 1]-1)*(nums[nums.length - 2]-1)
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var maxProduct = function(nums) {
  let max1 = 0, max2 = 0

  for(let i = 0; i < nums.length;i++){
    let currentMax = max1
    if(max1 < nums[i]) max1 = nums[i]
    // if(temp < max && temp > nums[i - 1]) max2 = temp

    console.log(max1)
    console.log(currentMax)
    // console.log(max2)
    console.log()
  }

  // console.log(max2)

  // return (nums[nums.length - 1]-1)*(nums[nums.length - 2]-1)
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(maxProduct([3,4,5,2])) // 12

// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

console.log(maxProduct([1,5,4,5])) // 16

// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

console.log(maxProduct([3,7])) // 12

