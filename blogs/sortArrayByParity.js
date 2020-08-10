// Link to problem: https://leetcode.com/problems/sort-array-by-parity/
// Link to blog: https://levelup.gitconnected.com/javascript-problem-solvers-sort-array-by-parity-b9c2debc14f

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given an array A of non-negative integers,
// return an array consisting of all the even elements of A,
// followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Constraints:
// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - Define a function called sortArrayByParity which accepts an array as an argument
// - Define two arrays (even and odd) and initialize them as empty arrays

// - Define a while loop that iterates through A while A.length is greater than 0
//   - If the first element in A is even,
//     - push shift the first element in A into the even array
//   - Otherwise,
//     - push shift the first element in A into the odd array

// - Combine the even and odd array and return it

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Final Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var sortArrayByParity = function(A) {
  let b = [], c = []
  while(A.length > 0){
    if(A[0] % 2 !== 0) {
      if (A[0] < c[0]) c.unshift(A.shift())
      else c.push(A.shift())
    } else {
      if (A[0] < b[0]) b.unshift(A.shift())
      else b.push(A.shift())
    }
  }
  return [...b, ...c]
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(sortArrayByParity([3,1,2,4])) // [2,4,3,1]
console.log(sortArrayByParity([0, 1])) // [0, 1]
console.log(sortArrayByParity([0, 1, 2])) // [0, 2, 1]
console.log(sortArrayByParity([3, 2, 0, 5, 4, 1])) // [0, 2, 4, 3, 5, 1]