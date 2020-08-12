// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var subtractProductAndSum = function(n) {
  let s = 0, p = 1

  function getDigit(place){ return Math.floor(Math.abs(n) / Math.pow(10, place) % 10) }

  function digitCount(num){
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }

  for(let i = 0; i < digitCount(n); i++){
    s += getDigit(i)
    p *= getDigit(i)
  }
  return p - s
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(subtractProductAndSum(234)) // 15
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

console.log(subtractProductAndSum(4421)) // 21
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21
