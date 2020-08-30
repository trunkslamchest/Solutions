// Link to problem: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// Link to blog: 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.

// Return the number of negative numbers in grid.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Solution #1: Backwards Nested Iteration

// - define a variable count to keep track of the amount of negative numbers in grid
//   - count = 0

// - define a for loop to iterate through grid that starts at the last element in grid
//   - i = grid.length - 1, i >= 0, i--

//   - define a nested for loop to iterate through grid[i] that starts at the last element in grid[i]
//     - j = grid[i].length - 1, j >= 0, j--

//    - use Math.sign() for each element grid[i][j] to determine if a number is negative
//      - Math.sign(grid[i][j]) === -1

//    - if so, increment the count variable
//        - count++

//    - otherwise, break out of the iteration
//      - else
//        - break

// - return the amount of negative numbers in grid
//   - return count

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Solution #2: Flattened Single Iteration

// - define a variable count to keep track of the amount of negative numbers in grid
//   - count = 0

// - define a variable flatGrid that flattens grid without using .flat()
//   - flatGrid = [].concat.apply([], grid)

// - define a for in loop that iterates through flatGrid
//   - num in flatGrid

//   - use Math.sign() for each element flatGrid[num] to determine if a number is negative
//    - Math.sign(flatGrid[num]) === -1

//   - if so, increment the count variable
//    - count++

// - return the amount of negative numbers in grid
//   - return count

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var countNegatives = function(grid) {
  let count = 0
  const flatGrid = [].concat.apply([], grid)
  for(num in flatGrid){ if(Math.sign(flatGrid[num]) === -1) count++ }
  return count
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var countNegatives = function(grid) {
  let count = 0
  for(i = grid.length - 1; i >= 0; i--){
    for(j = grid[i].length - 1; j >= 0; j--){
      if(Math.sign(grid[i][j]) === -1) count++
      else break
    }
  }
  return count
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])) // 8

// Explanation: There are 8 negatives number in the matrix.

console.log(countNegatives([[3,2],[1,0]])) // 0
console.log(countNegatives([[1,-1],[-1,-1]])) // 3
console.log(countNegatives([[-1]])) // 1