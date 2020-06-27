// Given an array nums of integers, return how many of them contain an even number of digits.

// Constraints:
// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var findNumbers = function(nums) {
	let c = 0

	function numDigits(n){ return Math.floor(Math.log10(Math.abs(n))) + 1 }

	for(i = 0; i < nums.length; i++){ if(numDigits(nums[i]) % 2 === 0) c++ }

	return c
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(findNumbers([12,345,2,6,7896])) // 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

console.log(findNumbers([555,901,482,1771])) // 1
// Explanation:
// Only 1771 contains an even number of digits.
