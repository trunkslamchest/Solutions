// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var numberOfSteps = function(num) {
  let i = num, steps = 0

  while(i > 0){
    if(i % 2 === 0){
      i = i / 2
      steps++
    } else {
      i--
      steps++
    }
  }

  return steps
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(numberOfSteps(14)) // 6
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

console.log(numberOfSteps(8)) // 4
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.

console.log(numberOfSteps(7)) // 5
// Step 1) 7 is odd; subtract 1 and obtain 6.
// Step 2) 6 is even; divide by 2 and obtain 3.
// Step 3) 3 is odd; subtract 1 and obtain 2.
// Step 4) 2 is even; divide by 2 and obtain 1.
// Step 5) 1 is odd; subtract 1 and obtain 0.

console.log(numberOfSteps(123)) // 12

