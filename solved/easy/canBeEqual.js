// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given two integer arrays of equal length target and arr.
// In one step, you can select any non-empty sub-array of arr and reverse it.
// You are allowed to make any number of steps.
// Return True if you can make arr equal to target, or False otherwise.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// target.length == arr.length
// 1 <= target.length <= 1000
// 1 <= target[i] <= 1000
// 1 <= arr[i] <= 1000

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var canBeEqual = function(target, arr) {
//   let v = true
//   for(let e in target){ if(!arr.includes(target[e])) v = false }
//   return v
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// var canBeEqual = function(target, arr) {
//   let tSum = 0, aSum = 0

//   for(i = 0; i < arr.length; i++){
//     tSum += target[i]
//     aSum += arr[i]
//   }

//   return tSum === aSum ? true : false
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var canBeEqual = function(target, arr) {

//   let v = true

//   for(i = 0; i < target.length; i++){
//     if(target[i] !== arr[i]){
//       for(j = i + 1; j < arr.length; j++){
//         if(arr[j] === target[i]){
//           let t = arr[i]
//           arr[i] = arr[j]
//           arr[j] = t
//         }
//       }
//     }
//   }

//   for(let n in target){
//     if(target[n] !== arr[n]) {
//       v = false
//       break
//     }
//   }

//   return v
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var canBeEqual = function(target, arr) {
  for(i = 0; i < target.length; i++){
    if(target[i] !== arr[i]){
      for(j = i + 1; j < arr.length; j++){
        if(arr[j] === target[i]){
          let t = arr[i]
          arr[i] = arr[j]
          arr[j] = t
        }
      }
      if(target[i] !== arr[i]) return false
    }
  }

  return true
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(canBeEqual([1,2,3,4], [2,4,1,3])) // true

// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
// 3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.

console.log(canBeEqual([7], [7])) // true

// Explanation: arr is equal to target without any reverses.

console.log(canBeEqual([1,12], [12,1])) // true

console.log(canBeEqual([3,7,9], [3,7,11])) // false

// Explanation: arr doesn't have value 9 and it can never be converted to target.

console.log(canBeEqual([1,1,1,1,1], [1,1,1,1,1])) // true

console.log(canBeEqual([1,1,1,1,1], [2,1,1,1,2])) // false

console.log(canBeEqual([1,2,2,3], [1,1,2,3])) // false

console.log(canBeEqual([1,2,3], [2,2,2])) // false

