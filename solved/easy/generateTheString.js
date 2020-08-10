// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

// Constraints:
// 1 <= n <= 500

var generateTheString = function(n) {
  let s = ''

  for(let i = 0; i < n - 1; i++){ s += String.fromCharCode(97) }

  if(n % 2 !== 0) s += String.fromCharCode(97)
  else s += String.fromCharCode(98)

  return s
}

console.log(generateTheString(2)) // "xy" / "ab"

console.log(generateTheString(3)) // "aaa"

console.log(generateTheString(4)) // "pppz" / 'aaab'

// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once.
// Note that there are many other valid strings such as "ohhh" and "love".

// console.log(generateTheString(5)) // "aaaaa"

// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once.
// Note that there are many other valid strings such as "ag" and "ur".

// console.log(generateTheString(7)) // "holasss"

// console.log(generateTheString(26)) // "abcdefghijklmnopqrstuvwxyz"
// console.log(generateTheString(27)) // "abcdefghijklmnopqrstuvwxzaa"
// console.log(generateTheString(28)) // "abcdefghijklmnopqrstuvwxzaa"

