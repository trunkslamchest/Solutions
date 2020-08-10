// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
// Each character in S is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var numJewelsInStones = function(J, S) {
  let c = {}
  let s = 0

  for(let char in J){ c[J[char]] = 0 }

  for(let k in c){ for(let i = 0; i < S.length; i++){ if(k === S[i]) c[k]++ } }

  for(let j = 0; j < Object.values(c).length; j++){ s += Object.values(c)[j] }

  return s
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const numJewelsInStones = (J, S) => {
  let count = 0
  for (let char of S) { if (J.lastIndexOf(char) > -1) { count++ } }
  return count
};

console.log(numJewelsInStones("aA", "aAAbbbb")) // 3
console.log(numJewelsInStones("aAb", "aAAbbBB")) // 5

console.log(numJewelsInStones('z', 'ZZ')) // 0
console.log(numJewelsInStones('zG', 'GzZgZzG')) // 4

