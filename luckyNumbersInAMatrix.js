// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

// Constraints:
// - m == mat.length
// - n == mat[i].length
// - 1 <= n, m <= 50
// - 1 <= matrix[i][j] <= 10^5.
// - All elements in the matrix are distinct.

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

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])) // [15]

// [ 3, 7, 8]
// [ 9,11,13]
// [15,16,17]

// Explanation:
//  15 is the only lucky number since it is the minimum in its row and the maximum in its column

console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]])) // [12]

// [ 1,10, 4, 2]
// [ 9, 3, 8, 7]
// [15,16,17,12]

// Explanation:
//  12 is the only lucky number since it is the minimum in its row and the maximum in its column.

console.log(luckyNumbers([[7,8],[1,2]])) // [7]

// [7,8]
// [1,2]


console.log(luckyNumbers([[7,3],[8,9],[1,2]])) // [8]

// [7,3]
// [8,9]
// [1,2]