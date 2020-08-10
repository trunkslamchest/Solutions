// Link to problem: https://leetcode.com/problems/lucky-numbers-in-a-matrix/
// Link to blog: https://levelup.gitconnected.com/javascript-problem-solvers-lucky-numbers-in-a-matrix-a2525986cdb4

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

// Constraints:
// - m == mat.length
// - n == mat[i].length
// - 1 <= n, m <= 50
// - 1 <= matrix[i][j] <= 10^5.
// - All elements in the matrix are distinct.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - Write a function called 'luckyNumbers' that accepts an array as an argument

// - Define two empty arrays to keep track of the values in each sub array
//  - An array called 'minRow' to store all the minimum elements from each row vector
//  - An array called 'maxCol' to store all the maximum elements from each column vector

// - Write a for loop or a for..in loop that iterates through each row vector(or sub array)
//   - Find the minimum number in each row by calling Math.min.apply() on a null object,
//     and the row vector (or sub array) we are currently iterating through
//   - Push the result of Math.min.apply() into 'minRow'

// - Write a for loop or a for...in loop that iterates through each subarray
//   - Define a variable called 'max' and set it's value equal to 0

//   - Write a nested for loop or a for...in loop that iterates through each column vector(or corresponding element in each column)
//     - If an element in a column (matrix[j][i]) is greater than 'max'
//       - Replace the value of 'max' with matrix[j][i]
//     - Push 'max' into 'maxCol' at the end of each iteration


// - Iterate through 'minRow' by using .filter()
//   - Set each element equal to 'n'
//   - Call .includes(n) on 'maxCol' to filter any numbers that don't appear in both arrays

// Return the result of the .filter() call on 'minRow'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Final Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var luckyNumbers  = function(matrix) {
  let minRow = [], maxCol = []
  for(let i = 0; i < matrix.length; i++) { minRow.push(Math.min.apply(null, matrix[i])) }
  for(let j = 0; j < matrix[0].length; j++) {
    let max = 0
    for(let k = 0; k < matrix.length; k++){ if(matrix[k][j] > max) max = matrix[k][j] }
    maxCol.push(max)
  }
  return minRow.filter(n => maxCol.includes(n))
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])) // [15]
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]])) // [12]
console.log(luckyNumbers([[7,8],[1,2]])) // [7]
console.log(luckyNumbers([[7,3],[8,9],[1,2]])) // [8]