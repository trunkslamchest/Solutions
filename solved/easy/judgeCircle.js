// There is a robot starting at position (0, 0), the origin, on a 2D plane.
// Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move.
// Valid moves are R (right), L (left), U (up), and D (down).
// If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant.
// "R" will always make the robot move to the right once,
// "L" will always make it move left, etc.
// Also, assume that the magnitude of the robot's movement is the same for each move.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Walkthrough:
// - start an array with [0, 0] (origin), a[0] represents x axis, a[1] represents y axis
// - loop through string
// - add or subtract 1 from the array based off the character in a string
//   - 'U' adds 1 to a[0]
//   - 'D' subtracts 1 from a[0]
//   - 'R' adds 1 to a[1]
//   - 'L' subreacts 1 from a[1]
// - after loop, check if a[0] and a[1] equals zero
// - return true/false based on check

// Edge Cases:
// - if a character in 'moves' is lowercase

// Psuedo:
// - initialize array 'a' with [0, 0]

// - for loop through string 'moves'
//  - if moves[i] === 'U' a[0]++
//  - if moves[i] === 'D' a[0]--
//  - if moves[i] === 'R' a[1]++
//  - if moves[i] === 'L' a[1]--

// after loop, if a[0] === 0 && a[1] === 1 return true otherwise return false
//  -! ternary statment


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var judgeCircle = function(moves) {
  let x = 0, y = 0

  for(char in moves){
    if (moves[char] === 'U') x++
    if (moves[char] === 'D') x--
    if (moves[char] === 'R') y++
    if (moves[char] === 'L') y--
  }

  return !x && !y
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(judgeCircle('UD')) // true

// Explanation:
// The robot moves up once, and then down once.
// All moves have the same magnitude, so it ended up at the origin where it started.
// Therefore, we return true.

console.log(judgeCircle('LL')) // false

// Explanation:
// The robot moves left twice.
// It ends up two "moves" to the left of the origin.
// We return false because it is not at the origin at the end of its moves.