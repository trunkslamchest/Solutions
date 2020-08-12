// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given an array of numbers arr.
// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 <= arr.length <= 1000
// -10^6 <= arr[i] <= 10^6

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var canMakeArithmeticProgression = function(arr) {
  for(i = 0; i < arr.length; i++){
    for(j = i; j < arr.length; j++){
      if(arr[j] < arr[i] ){
        let t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
      }
    }
  }

  let diff = Math.abs(arr[0] - arr[1])

  for(k = 0; k < arr.length - 1; k++){ if(Math.abs(arr[k] - arr[k+1]) !== diff ) return false }

  return true
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(canMakeArithmeticProgression([3,5,1])) // true

// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

console.log(canMakeArithmeticProgression([1,2,4])) // false

// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

console.log(canMakeArithmeticProgression([3,5,1,9,4,2,0,7,6,8])) // true

// console.log() //
// console.log() //
// console.log() //