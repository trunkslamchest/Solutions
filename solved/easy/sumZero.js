// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Constraints:
// 1 <= n <= 1000

var sumZero = function(n) {
  let a = []

  if(n % 2 !== 0) a.push(0)

  for(let i = 1; i <= n / 2; i++){
    a.push(i)
    a.push(-i)
  }

  return a
};

console.log(sumZero(7)) // [-3,-2,-1,0,1,2,3]

console.log(sumZero(6)) // [-3,-2,-1,1,2,3]

console.log(sumZero(5)) // [-7,-1,1,3,4] / [-2, -1, 0, 1, 2]

// // Explanation:
// // These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

console.log(sumZero(4)) // [-2,-1,1,2]

console.log(sumZero(3)) // [-1,0,1]
console.log(sumZero(2)) // [-1, 1]
console.log(sumZero(1)) // [0]
