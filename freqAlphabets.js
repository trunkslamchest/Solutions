// Given a string s formed by digits ('0' - '9') and '#' .

// We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

// Constraints:
// 1 <= s.length <= 1000
// s[i] only contains digits letters ('0'-'9') and '#' letter.
// s will be valid string such that mapping is always possible.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var freqAlphabets = function(s) {
  let a = []

  for(let i = s.length - 1; i >= 0; i--){
    if(s[i] === '#') {
      a.unshift(String.fromCharCode(parseInt(s[i - 2] + s[i - 1]) + 96))
      i = i - 2
    } else a.unshift(String.fromCharCode(parseInt(s[i]) + 96))
  }

  return a.join('')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(freqAlphabets("10#11#12")) // 'jkab'

// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

console.log(freqAlphabets("1326#")) // 'acz'

console.log(freqAlphabets("25#")) // 'y'

console.log(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#")) // 'abcdefghijklmnopqrstuvwxyz'