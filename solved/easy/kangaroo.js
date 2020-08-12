// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// You are choreographing a circus show with various animals.
// For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
// If it is possible, return YES, otherwise return NO.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function kangaroo(x1, v1, x2, v2) {
  if(x1 < x2 && v1 < v2) return 'NO'
  if ((x1 - x2) % (v2 - v1) == 0) return 'YES'
  else return 'NO'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// x1 < x2 && v1 < v2
console.log(kangaroo(0, 2, 5, 3)) // NO

// x1 > x2 && v1 > v2
console.log(kangaroo(2, 3, 1, 2)) // NO

// x1 < x2 && v1 > v2
console.log(kangaroo(0, 3, 4, 2)) // YES

// x1 > x2 && v1 < v2
console.log(kangaroo(4, 3, 3, 5)) // NO

