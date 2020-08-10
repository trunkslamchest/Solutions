// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

// Return the number of cells with odd values in the matrix after applying the increment to all indices.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// n = columns
// m = rows

// 1 <= n <= 50
// 1 <= m <= 50
// 1 <= indices.length <= 100
// 0 <= indices[i][0] < n
// 0 <= indices[i][1] < m

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - build matrix based off n and m
// - iterate through indices (i)
//   - iterate through sub arrays (j)
//    - 

// matrix[i] = entire row
// matrix[i][j] = column cell

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var oddCells = function(n, m, indices) {
  const matrix = new Array(n).fill(0).map(cell => new Array(m).fill(0))
  let count = 0

  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < m; j++) { matrix[indices[i][0]][j]++ }
    for (let k = 0; k < n; k++) { matrix[k][indices[i][1]]++ }
  };

  [].concat.apply([], matrix).forEach(num => num % 2 !== 0 && count++ )

  return count
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(oddCells(5, 4, [[0,1],[1,2],[3,3],[3,3],[2,1],[1,0]])) // 6

// [ 2, 3, 2, 3 ]
// [ 3, 4, 3, 4 ]
// [ 2, 3, 2, 3 ]
// [ 3, 4, 3, 4 ]
// [ 1, 2, 1, 2 ]

console.log(oddCells(2, 3, [[0,1],[1,1]])) // 6

// Explanation: Initial matrix = [[0,0,0],[0,0,0]].

// indicies[i] = [ri, ci]
// indices[0] = [0, 1]
// indices[1] = [1, 1]

// rows = [0, 1]

// columns = [1, 1]

// 0,0,0
// 0,0,0

// add 1 to all cells in row[0]
// 1,1,1
// 0,0,0

// add 1 to all cells in column[1]
// 1,2,1
// 0,1,0

// add 1 to all cells in row[1]
// 1,2,1
// 1,2,1

// add 1 to all cells in column[1]
// 1,3,1
// 1,3,1

// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

console.log(oddCells(2, 2, [[1,1],[0,0]])) // 0

// indicies[i] = [ri, ci]
// indices[0] = [1, 1]
// indices[1] = [0, 0]

// add 1 to all cells in row[1]
// 0,0
// 1,1

//add 1 to all cells in column[1]
// 0,1
// 1,2

//add 1 to all cells in row[0]
// 1,2
// 1,2

//add 1 to all cells in column[0]
// 2,2
// 2,2

// Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.