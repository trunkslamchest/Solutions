// Given two arrays of integers nums and index. Your task is to create a target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// Constraints:
// 1 <= nums.length, index.length <= 100
// nums.length == index.length
// 0 <= nums[i] <= 100
// 0 <= index[i] <= i

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

console.log(createTargetArray([4,2,4,3,2], [0,0,1,3,1])) // [2,2,4,4,3]

// Explanation:
// nums       index     target
// 4            0        [4]
// 2            0        [2,4]
// 4            1        [2,4,4]
// 3            3        [2,4,4,3]
// 2            1        [2,2,4,4,3]

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1])) // [0,4,1,3,2]

// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0])) // [0,1,2,3,4]

// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]

console.log(createTargetArray([1], [0])) // [1]
