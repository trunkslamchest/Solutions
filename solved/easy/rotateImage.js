// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer a

// [output] array.array.integer

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Guaranteed constraints:
// 1 ≤ a.length ≤ 100,
// a[i].length = a.length,
// 1 ≤ a[i][j] ≤ 104.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - since matrix is n x n, we can use the same iteration for rows and columns
// - since 0(1) space complexity, mutate original array
// - adding new array is 0(n * 2)

// - swap numbers on the outermost 'ring' of the matrix and work inwards
// - swap numbers to their position on each iteration
// - track 3 values that will increment/decrement through the iteration
//   - these 2 numbers will be (x, y) coordinates in the matrix

// Iteration 01

  // Nested Iteration 01
    // swap row[i][j] with row[j][y] (row[0][3])
    // swap row[i][j] with row[y][x] (row[3][3])
    // swap row[i][j] with row[x][i] (row[3][0])
    // increment j
    // decrement x

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // Nested Iteration 02
    // swap row[i][j] with row[j][y] (row[1][3])
    // swap row[i][j] with row[y][x] (row[3][2])
    // swap row[i][j] with row[x][i] (row[2][0])
    // increment j
    // decrement x

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // Nested Iteration 03
    // swap row[i][j] with row[j][y] (row[2][3])
    // swap row[i][j] with row[y][x] (row[3][1])
    // swap row[i][j] with row[x][i] (row[1][0])
    // increment j
    // decrement x

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// decrement y

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Iteration 02

  // Nested Iteration 01
    // swap row[i][j] with row[j][y] (row[1][2])
    // swap row[i][j] with row[y][x] (row[2][2])
    // swap row[i][j] with row[x][i] (row[2][1])
    // increment j
    // decrement x

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - repeat until y is less than a.length / 2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// i = 0
// j = i (0)

// x = (a.length - 1) - i
  // => (4 - 1) - 0 = 3

// y = a.length - 1
  // => 3

// swap row[i][j] with row[j][y] (row[0][3])
//          v
//  >[7,3,1,6]
//   [8,-,-,5]
//   [1,-,-,9]
//   [5,7,3,4]
//
// swap row[i][j] with row[y][x] (row[3][3])
//
//  >[4,3,1,6]
//   [8,-,-,5]
//   [1,-,-,9]
//   [5,7,3,7]
//          ^
// swap row[i][j] with row[x][i] (row[3][0])
//
//  >[5,3,1,6]
//   [8,-,-,5]
//   [1,-,-,9]
//   [4,7,3,7]
//    ^

// j++
// x--

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// i = 0
// j = 1
// x = 2
// y = 3

// swap row[i][j] with row[j][y] (row[1][3])
//      v
//   [5,5,1,6]
//   [8,-,-,3]<
//   [1,-,-,9]
//   [4,7,3,7]
//
// swap row[i][j] with row[y][x] (row[3][2])
//      v
//   [5,3,1,6]
//   [8,-,-,3]
//   [1,-,-,9]
//   [4,7,5,7]
//        ^
// swap row[i][j] with row[x][i] (row[2][0])
//      v
//   [5,1,1,6]
//   [8,-,-,3]
//  >[3,-,-,9]
//   [4,7,5,7]
//
// j++
// x--

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// i = 0
// j = 2
// x = 1
// y = 3

// swap row[i][j] with row[j][y] (row[2][3])
//        v
//   [5,1,9,6]
//   [8,-,-,3]
//   [3,-,-,1]<
//   [4,7,5,7]
//
// swap row[i][j] with row[y][x] (row[3][1])
//        v
//   [5,1,7,6]
//   [8,-,-,3]
//   [3,-,-,1]
//   [4,9,5,7]
//      ^
// swap row[i][j] with row[x][i] (row[1][0])
//        v
//   [5,1,8,6]
//  >[7,-,-,3]
//   [3,-,-,1]
//   [4,9,5,7]
//

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// y--

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// i = 1
// j = i (1)

// x = (a.length - 1) - i
  // => (4 - 1) - 1 = 2

// y = 2

// swap row[i][j] with row[j][y] (row[1][2])
//      v
//   [-,-,-,-]
//   [-,4,2,-]<
//   [-,6,2,-]
//   [-,-,-,-]
//
// swap row[i][j] with row[y][x] (row[2][2])
//      v
//   [-,-,-,-]
//   [-,2,2,-]
//   [-,6,4,-]
//   [-,-,-,-]
//        ^
// swap row[i][j] with row[x][i] (row[2][1])
//      v
//   [-,-,-,-]
//   [-,6,2,-]
//  >[-,2,4,-]
//   [-,-,-,-]
//

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function rotateImage(a) {
  let y = a.length - 1
  for(let i = 0; i < a.length / 2; i++){
    let x = (a.length - 1) - i
    for(let j = i; j < y; j++){
      let t = a[i][j]
      a[i][j] = a[j][y]
      a[j][y] = t
      t = a[i][j]
      a[i][j] = a[y][x]
      a[y][x] = t
      t = a[i][j]
      a[i][j] = a[x][i]
      a[x][i] = t
      t = a[i][j]
      x--
    }
    y--
  }
  return a
}

console.log(rotateImage(
  [
    [10,9,6,3,7],
    [6,10,2,9,7],
    [7,6,3,8,2],
    [8,9,7,9,9],
    [6,8,6,8,2]
  ]
))

// [
//   [6,8,7,6,10],
//   [8,9,6,10,9],
//   [6,7,3,2,6],
//   [8,9,8,9,3],
//   [2,9,2,7,7]
// ]


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// console.log(rotateImage(
//   [
//     [6,3,1,7],
//     [8,2,4,5],
//     [1,6,2,9],
//     [5,7,3,4],
//   ]
// ))


// [
//   [5,1,8,6],
//   [7,6,2,3],
//   [3,2,4,1],
//   [4,9,5,7],
// ]

// [
//   [6,3,1,7],
//   [8,2,4,5],
//   [1,6,2,9],
//   [5,7,3,4],
// ]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(rotateImage(
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
))

// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(rotateImage([[1]]))

// [[1]]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// console.log(rotateImage(
//   [
//     [40,12,15,37,33,11,45,13,25,3],
//     [37,35,15,43,23,12,22,29,46,43],
//     [44,19,15,12,30,2,45,7,47,6],
//     [48,4,40,10,16,22,18,36,27,48],
//     [45,17,36,28,47,46,8,4,17,3],
//     [14,9,33,1,6,31,7,38,25,17],
//     [31,9,17,11,29,42,38,10,48,6],
//     [12,13,42,3,47,24,28,22,3,47],
//     [38,23,26,3,23,27,14,40,15,22],
//     [8,46,20,21,35,4,36,18,32,3]
//   ]
// ))

// [
//   [8,38,12,31,14,45,48,44,37,40],
//   [46,23,13,9,9,17,4,19,35,12],
//   [20,26,42,17,33,36,40,15,15,15],
//   [21,3,3,11,1,28,10,12,43,37],
//   [35,23,47,29,6,47,16,30,23,33],
//   [4,27,24,42,31,46,22,2,12,11],
//   [36,14,28,38,7,8,18,45,22,45],
//   [18,40,22,10,38,4,36,7,29,13],
//   [32,15,3,48,25,17,27,47,46,25],
//   [3,22,47,6,17,3,48,6,43,3]
// ]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// console.log(rotateImage(
//   [
//     [33,35,8,24,19,1,3,1,4,5],
//     [25,27,40,25,17,35,20,3,19,3],
//     [9,1,9,30,9,25,32,12,15,22],
//     [30,47,25,10,18,1,19,17,43,17],
//     [40,46,42,34,18,48,29,40,31,39],
//     [37,42,37,19,45,1,4,46,48,13],
//     [8,26,31,46,44,24,34,29,12,25],
//     [45,48,36,12,33,12,4,45,22,37],
//     [33,15,34,25,34,8,50,48,30,28],
//     [18,19,22,29,15,43,38,30,8,47]
//   ]
// ))

// [
//   [18,33,45,8,37,40,30,9,25,33],
//   [19,15,48,26,42,46,47,1,27,35],
//   [22,34,36,31,37,42,25,9,40,8],
//   [29,25,12,46,19,34,10,30,25,24],
//   [15,34,33,44,45,18,18,9,17,19],
//   [43,8,12,24,1,48,1,25,35,1],
//   [38,50,4,34,4,29,19,32,20,3],
//   [30,48,45,29,46,40,17,12,3,1],
//   [8,30,22,12,48,31,43,15,19,4],
//   [47,28,37,25,13,39,17,22,3,5]
// ]