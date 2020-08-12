// Given a 32-bit signed integer, reverse digits of an integer.

// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 

// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var reverse = function(x) {
  let y = x.toString(), z = ''
  for(let i = y.length - 1; i >= 0; i--){ if(y[i] !== '-') z += y[i] }
  if (z > Math.pow(2, 31)) return 0
  return z * Math.sign(x)
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var reverse = function(x) {

// 	let a = []

// 	function getDigit(place){ return Math.floor(Math.abs(x) / Math.pow(10, place) % 10) }

// 	function digitCount(num){
// 		if (num === 0) return 1
// 		return Math.floor(Math.log10(Math.abs(num))) + 1
// 	}

// 	for(let i = 0; i < digitCount(x); i++){ a.push(getDigit(i)) }

// 	let n = parseInt(a.join(''))

// 	if(n > Math.pow(2, 31)) return 0

// 	return n * Math.sign(x)
// }

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120)) // 21
console.log(reverse(1534236469)) // 0
console.log(reverse(901000)) // 109
