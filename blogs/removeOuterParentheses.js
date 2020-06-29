// Link to problem: https://leetcode.com/problems/remove-outermost-parentheses/
// Link to blog: https://levelup.gitconnected.com/javascript-problem-solvers-remove-outermost-parentheses-90381c24b2c6

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// A valid parentheses string is either empty (""), "(" + A + ")",
// or A + B, where A and B are valid parentheses strings,
// and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty,
// and there does not exist a way to split it into S = A+B,
// with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S,
// consider its primitive decomposition: S = P_1 + P_2 + ... + P_k,
// where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - Write a function called removeOuterParentheses that accepts a string as an argument (S)
// - Define 3 variables
//   - count as an empty object to count the frequencies of left and right parentheses
//   - num as an integer to keep track of the iterator when we find a valid parentheses primative
//   - primativesArr as an array to store the valid parentheses primatives we find in a string (S)

// - Define a for loop to iterate through the given string
//    - Add the parentheses found to the frequency counter (count)
//       - If a parentheses is not currently in the frequency counter
//         - Add it to the frequency counter and set it's value to 1
//       - Otherwise
//         - Add 1 to the value of the parentheses found
//    - If the value of both keys in the frequency counter are equal
//      - Slice the string from the value of num to the character that is immidiately after the character the iterator is currently on
//      - Reset the frequency counter to an empty object
//      - Set the value of num to the value of the iterator plus 1

// - Define a for loop or a for in loop to iterate through the array that stores the valid parentheses primatives
//    - Remove the outer parentheses of each element in primativesArr
//      - We can do this by reassigning the current element we are iterating through
//        to the same element that has been sliced from the 2nd character in the string
//        to the 2nd to last character in the string

// - Join all of the elements in primativesArr and return it

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Final Solution
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var removeOuterParentheses = function(S) {
  let count = {}, num = 0
  const primativesArr = []

  for(let i = 0; i < S.length; i++){
    count[S[i]] = count[S[i]] ? ++count[S[i]] : 1

    if(count['('] === count[')']){
      primativesArr.push(S.slice(num, i + 1))
      count = {}
      num = i + 1
    }

  }

  for(let primative in primativesArr){ primativesArr[primative] = primativesArr[primative].slice(1, primativesArr[primative].length - 1) }

  return primativesArr.join('')
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(removeOuterParentheses("(()(()))")) // "()(())"
console.log(removeOuterParentheses("(()())(())")) // "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")) // "()()()()(())"
console.log(removeOuterParentheses("()()")) // ""
