// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]

// Constraints:
// 1 <= S.length <= 10000
// S only contains characters "I" or "D"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var diStringMatch = function(S) {
  let i = 0, d = S.length, arr = []

  for(let char of S){
    if(char === 'I'){
      arr.push(i)
      i++
    }
    if(char === 'D') {
      arr.push(d)
      d--
    }
  }
  arr.push(i)

  return arr
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(diStringMatch("IDID")) // [0,4,1,3,2]
console.log(diStringMatch("III")) // [0,1,2,3]
console.log(diStringMatch("DDI")) // [3,2,0,1]
