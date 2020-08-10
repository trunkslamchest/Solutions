// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
// For each such pair, there are freq elements with value val concatenated in a sublist.
// Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

// loop through nums
// start i at 1 (constraint)
// i set to every other index (i + 2)
// push to new array based off first index of pairs ([0,1] [2,3])
// return new array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var decompressRLElist = function(nums) {
  let a = []

  for(let i=1; i<nums.length; i+=2){
    for(let j=0; j < nums[i - 1]; j++){ a.push(nums[i]) }
  }

  return a
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var decompressRLElist = function(nums) {
// 	let a = [], b = [], c = {}

// 	for(let i=0; i<nums.length; i += 2){ c[nums[i + 1]] = nums[i] }

// 	for(k in c){ a.push(Array(c[k]).fill(parseInt(k))) }

// 	for(j in a){ b = b.concat(a[j]) }

// 	return b
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(decompressRLElist([1,2,3,4])) // [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

console.log(decompressRLElist([1,1,2,3])) // [1,3,3]

console.log(decompressRLElist([65,44,72,15])) // [44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]

