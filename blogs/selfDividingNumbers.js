// Link to problem: https://leetcode.com/problems/self-dividing-numbers/
// Link to blog: https://levelup.gitconnected.com/javascript-problem-solvers-self-dividing-number-6f3d77499df8

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Constraints:
// The boundaries of each input argument are 1 <= left <= right <= 10000

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - loop through numbers from left to right (i)
//  - for loop
//  - do not need to store set of numbers

// - if i < 10
//    -push i to return array
// - if i > 10
//  - separate digits of i > 10 by either string coersion or radix split
//    -! skip digits containing zero
//      - modulo digits of i by 10, check strict equality to 0
//        => dig(i) % 10 === 0

//  - modulo digits of i by 2, check strict equality to 0
//    -! possibly need nested loop or helper function
//      - if true, push to return array

// - return array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Final Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var selfDividingNumbers = function(left, right) {
  let a = []

  for(let i = left; i <= right; i++){
    let b = []

    if (i < 10) a.push(i)
    else {
      b = [ ...i.toString().split('') ]

      for(let j = 0; j < b.length; j++){
        if (i % b[j] !== 0) break
        if (j === b.length - 1) a.push(i)
      }
    }

  }

  return a
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(selfDividingNumbers(1, 22)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
