// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  Given an array a of n integers and a number, d
//  perform d left rotations on the array.
//  Return the updated array to be printed as a single line of space-separated integers.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function rotLeft(a, d) {
	for(let i = 0; i < d; i++) a.push(a.shift())
	return a
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(rotLeft([1, 2, 3, 4, 5], 4)) // [5 1 2 3 4]
console.log(rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10)) // [77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77]
console.log(rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13)) // [87 97 33 47 70 37 8 53 13 93 71 72 51 100 60]
