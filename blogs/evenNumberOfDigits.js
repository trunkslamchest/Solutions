// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given an array nums of integers, return how many of them contain an even number of digits.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// String Coersion Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  - Write a function called evenNumberOfDigits that accepts an array as an argument
//    - Create a variable called count to keep track of the amount of even numbered digits

//  - Loop through the input array nums with a for loop or a for in loop
//    - Convert each element in the array to a string
//    - If the length of the converted number is even
//      - add 1 to the count variable

//  - Return the count variable

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Math.log10() Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  - Write a function called evenNumberOfDigits that accepts an array as an argument
//    - Create a variable called count to keep track of the amount of even numbered digits

//  - Write a function called numberOfDigits that accepts a number as an argument
//    - Find the Math.log10(number)
//    - Add 1 to Math.log10(number)
//    - Round Math.log10(number) + 1 down to the nearest whole integer
//    - Return Math.floor(Math.log10(number) + 1)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// String Coersion Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var evenNumberOfDigits = function(nums) {
  let count = 0

  for(let number in nums) if (nums[number].toString().length % 2 === 0) count++

  return count
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Math.log10() Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var evenNumberOfDigits = function(nums) {
  let count = 0

  function numberOfDigits(number){ return Math.floor(Math.log10(number)) + 1 }

  for(let number in nums) { if(numberOfDigits(nums[number]) % 2 === 0) count++ }

  return count
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(evenNumberOfDigits([12,345,2,6,7896])) // 2
console.log(evenNumberOfDigits([555,901,482,1771])) // 1