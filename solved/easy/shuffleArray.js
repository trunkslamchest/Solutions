// Link to problem: https://leetcode.com/problems/shuffle-the-array/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 <= n <= 500
  // n cannot be zero

// nums.length == 2n
  // - minimum nums.length = 2
  //   - n = 1, so 2n = 2

// 1 <= nums[i] <= 10^3

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Solution #1
  // add i to n to access 2nd half of the array
  // use n as upper limit in for loop ( i < n )

  // for loop to iterate through nums
  // push nums[i] and nums[i + n] into separate array on each iteration
  // return separate array

// Solution #2
  // add i to n to access 2nd half of the array
  // use n as upper limit in for loop ( i < n )

  // for loop to iterate through nums
  // 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var shuffle = function(nums, n) {
  let a = []

  for(let i = 0; i < n; i++){
    a.push(nums[i])
    a.push(nums[i + n])
  }

  return a
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var shuffle = function(nums, n) {

// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(shuffle([2,5,1,3,4,7], 3)) // [2,3,5,4,1,7]

  // [2,5,1,3,4,7]

// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

console.log(shuffle([1,2,3,4,4,3,2,1], 4)) // [1,4,2,3,3,2,4,1]

// [1,2,3,4,4,3,2,1]

console.log(shuffle([1,1,2,2], 2)) // [1,2,1,2]

console.log(shuffle([3,7], 1)) // [3,7]
