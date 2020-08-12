// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Complete the divisibleSumPairs function in the editor below.
// It should return the integer count of pairs meeting the criteria.

// Print the number of (i, j) pairs where i < j and a[i] + a[j] is evenly divisible by k.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function divisibleSumPairs(n, k, ar) {
  let pairs = 0

  for(let i = 0; i < n; i++){
    for(let j = 1; j < n; j++){
      if(((ar[i] + ar[j]) % k === 0) && (i < j)) ++pairs
    }
  }

  return pairs
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])) // 5
console.log(divisibleSumPairs(100, 77, [85, 42, 54, 62, 79, 71, 29, 61, 1, 92, 93, 99, 82, 5, 45, 55, 49, 49, 93, 45, 2, 53, 80, 68, 51, 15, 42, 8, 5, 45, 95, 90, 4, 5, 45, 56, 20, 66, 32, 65, 11, 48, 41, 10, 92, 41, 8, 23, 88, 50, 90, 2, 3, 88, 29, 34, 54, 83, 91, 37, 95, 11, 7, 48, 96, 2, 84, 50, 20, 97, 95, 85, 80, 87, 99, 34, 40, 33, 78, 6, 58, 82, 49, 37, 35, 12, 85, 73, 96, 7, 63, 36, 73, 3, 96, 23, 5, 75, 16, 41,]))
// 44
