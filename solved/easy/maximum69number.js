// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Constraints:
// 1 <= num <= 10^4
// num's digits are 6 or 9.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var maximum69Number = function(num) {
  let n = num.toString(), m = num, x = '', s = false

  for(char in n){
    if(n[char] === '6' && !s){
      x += 9
      s = true
    } else x += n[char]

    if (parseInt(x) > m) m = x
  }

  return m
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(maximum69Number(9669)) // 9969

// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

console.log(maximum69number(9996)) // 9999

// Explanation: Changing the last digit 6 to 9 results in the maximum number.

console.log(maximum69number(9999)) // 9999

// Explanation: It is better not to apply any change.
