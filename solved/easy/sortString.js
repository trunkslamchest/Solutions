// Given a string s. You should re-order the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.

// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.

// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.

var sortString = function(s) {
  let a = Array(26).fill(0), b = '', c = {}

  for(let i = 0; i < s.length; i++){ c[s[i]] = ( c[s[i]] || 0 ) + 1 }

  for(k in c){ a[k.charCodeAt() - 97] = [k, c[k]] }

  while(b.length < s.length){
    for(let i = 0; i < a.length; i++){
      if(a[i][1]){
        b += a[i][0]
        a[i][1]--
      }
    }
    for(let j = a.length - 1; j >= 0; j--){
      if(a[j][1]){
        b += a[j][0]
        a[j][1]--
      }
    }
  }

  return b
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(sortString("aaaabbbbcccc")) // "abccbaabccba"

// Explanation:
// After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

console.log(sortString("rat")) // "art"

// Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.

console.log(sortString("leetcode")) // "cdelotee"

// After steps 1, 2 and 3 of the first iteration, result = "cde"
// After steps 4, 5 and 6 of the first iteration, result = "cdelot"
// First iteration is done. Now s = "ee" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "cdelote"
// After steps 4, 5 and 6 of the second iteration, result = "cdelotee"

console.log(sortString("ggggggg")) // "ggggggg"
console.log(sortString("spo")) // "ops"
