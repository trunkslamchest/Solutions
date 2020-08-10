// Given an array arr,
// replace every element in that array with the greatest element among the elements to its right,
// and replace the last element with -1.

// After doing so, return the array.

// Constraints:
// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var replaceElements = function(arr) {
  for(let i = 0; i < arr.length; i++){
    let max = arr[i + 1]
    for(let j = i + 1; j <= arr.length - 1; j++){ if(arr[j] > max) max = arr[j] }
    arr[i] = max
    if (i === arr.length - 1) arr[i] = -1
  }

  return arr
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(replaceElements([17,18,5,4,6,1])) // [18,6,6,6,1,-1]