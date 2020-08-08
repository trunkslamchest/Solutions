// Given an array of integers 'A' sorted in non-decreasing order,
// return an array of the squares of each number,
// also in sorted non-decreasing order.

// Constraints:
// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Walkthrough
// - loop through array
// - multiply A[i] by A[i]
// - replace A[i] with A[i] times A[i]
// OR
// - get absolute value of A[i] if A[i] is negative
// - sort A[i]

// Edge Cases


// Psuedo

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// var sortedSquares = function(A) {
//   let b = A.map(n => n * n)

//   for(let i = 1; i < b.length; i++){
//     let current = b[i]
//     for(var j = i - 1; j >= 0 && b[j] > current; j--){
//       b[j + 1] = b[j]
//     }
//     b[j + 1] = current
//   }

//   return b
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var sortedSquares = function(A) {
//   let squares = A.map(n => n * n)

//   for(let i = 0; i < squares.length;i++){
//     for(let j = i; j < squares.length;j++){
//       if(squares[i] > squares[j]){
//         let temp = squares[i]
//         squares[i] = squares[j]
//         squares[j] = temp
//       }
//     }
//   }

//   return squares

var sortedSquares = function(A) {
  let b = A.map(n => n * n)

  let maxDigitCount = mostDigits(b)

  function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
  }

  function digitCount(num){
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }

  function mostDigits(arr){
    let max = 0
    for(let i = 0; i < arr.length; i++){
      max = Math.max(max, digitCount(arr[i]))
    }
    return max
  }

  for(let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => [])

    for(let i = 0; i < b.length; i++){
      let digit = getDigit(b[i], k)
      digitBuckets[digit].push(b[i])
    }
    b = [].concat(...digitBuckets)
  }

  return b
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]

console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]
