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

// - we don't need to worry about iterating through columns
// - since grid[i][j] is sorted with negative numbers as the last elements
//   - we iterate through each sub row from end to start
//    - use Math.sign() for each element grid[i][j] to determine if a number is negative
//    - if Math.sign(grid[i][j]) === -1
//      - count++
//    - else
//      - break
// return count

// OR

// - flatten array
//   - iterate through flattened array
//    - if Math.sign(f[i]) === -1
//      - count++
// return count

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var countNegatives = function(grid) {
  const f = [].concat.apply([], grid)
  let c = 0
  for(i = 0; i < f.length; i++){ if(Math.sign(f[i]) === -1) c++ }
  return c
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var countNegatives = function(grid) {
  let c = 0
  for(i = 0; i < grid.length; i++){
    for(j = grid[i].length - 1; j >= 0; j--){
      if(Math.sign(grid[i][j]) === -1) c++
      else break
    }
  }
  return c
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])) // 8

// Explanation: There are 8 negatives number in the matrix.

console.log(countNegatives([[3,2],[1,0]])) // 0
console.log(countNegatives([[1,-1],[-1,-1]])) // 3
console.log(countNegatives([[-1]])) // 1