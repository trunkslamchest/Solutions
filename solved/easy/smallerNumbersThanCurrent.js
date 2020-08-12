// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.

// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Constraints:
// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var smallerNumbersThanCurrent = function(nums) {
  let a = [...nums]

  for(i = 0; i < nums.length; i++){
    let c = 0
    for(j = 0; j < nums.length; j++){ if (nums[i] > nums[j]) c++ }
    a[i] = c
  }

  return a
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3])) // [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

console.log(smallerNumbersThanCurrent([6,5,4,8])) // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7,7,7,7])) // [0,0,0,0]