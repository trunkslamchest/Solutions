// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string 's' split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Constraints:
// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var balancedStringSplit = function(s) {
	let max = 0, count = {}

	for(char in s){
		count[s[char]] = count[s[char]] ? ++count[s[char]] : 1

		if(count['R'] === count['L']){
			max++
			count = {}
		}
	}

	return max
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(balancedStringSplit('RLRRLLRLRL')) // 4

// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

console.log(balancedStringSplit('RLLLLRRRLR')) // 3

// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

console.log(balancedStringSplit('LLLLRRRR')) // 1

// Explanation: s can be split into "LLLLRRRR".

console.log(balancedStringSplit('RLRRRLLRLL')) // 2

// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'