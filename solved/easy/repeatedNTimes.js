// In a array A of size 2N,
// there are N+1 unique elements,
// and exactly one of these elements is repeated N times.

// Return the element repeated N times.

// Constraints:
// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

// Edge Cases:

// Psuedo:
// find n
//  - A.length / 2 = n

// count frequency of numbers
// - loop through array
//    - build object with number frequencies
//    -! could use multiple pointers

// after object is built
// - loop through object and check if any values equals n
// - if a value equals n, return/break

// return the key where it's value equals n

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var repeatedNTimes = function(A) {
  let n = A.length / 2, c = {}
  for(let i = 0; i < A.length; i++){ c[A[i]] = ( c[A[i]] || 0 ) + 1 }
  for(k in c){ if(c[k] === n) return k }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(repeatedNTimes([1,2,3,3])) // 3

// A.length = 4
//  2n = 4
// /2   /2
//  n = 2

// n + 1 = unique elements; 2 + 1 = 3 unique elements

// which element is repeated n times?; if n = 2, 3 is repeated 2 times

console.log(repeatedNTimes([2,1,2,5,3,2])) // 2

// A.length = 6
//  2n = 6
// /2   /2
//  n = 3

// n + 1 = unique elements; 3 + 1 = 4 unique elements

// which element is repeated n times?; if n = 3, 2 is repeated 3 times

console.log(repeatedNTimes([5,1,5,2,5,3,5,4])) // 5

// A.length = 8
//  2n = 8
// /2   /2
//  n = 4

// n + 1 = unique elements; 4 + 1 = 5 unique elements

// which element is repeated n times?; if n = 4, 5 is repeated 4 times
