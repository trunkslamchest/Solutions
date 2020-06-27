// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Constraints:
// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var sortArrayByParity = function(A) {
//   let b = [], c = []

//   while(A.length > 0){

//   }

//   return [...b, ...c]
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var sortArrayByParity = function(A) {
//   let b = [], c = []

//   while(A.length > 0){
//     if(A[0] % 2 !== 0) {
//       if (A[0] < c[0]) {
//         c.unshift(A.shift())
//       } else {
//         c.push(A.shift())
//       }
//     } else {
//       // do some magic
//     }
//   }

//   return [...b, ...c]
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var sortArrayByParity = function(A) {
//   let b = [], c = []

//   while(A.length > 0){
//     if(A[0] % 2 !== 0) {
//       if (A[0] < c[0]) {
//         c.unshift(A.shift())
//       } else {
//         c.push(A.shift())
//       }
//     } else {
//       if (A[0] < b[0]) {
//         b.unshift(A.shift())
//       } else {
//         b.push(A.shift())
//       }
//     }
//   }

//   return [...b, ...c]
// }

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var sortArrayByParity = function(A) {
	let b = [], c = []

	while(A.length > 0){
		if(A[0] % 2 !== 0) {
			if (A[0] < c[0]) c.unshift(A.shift())
			else c.push(A.shift())
		} else {
			if (A[0] < b[0]) b.unshift(A.shift())
			else b.push(A.shift())
		}
	}

	return [...b, ...c]
}

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var sortArrayByParity = function(A) {
//   const b = [], c = []

//   // while(A.length > 0){
//   //   if(A[0] % 2 === 0) {
//   //     if (A[0] < b[0]) b.unshift(A.shift())
//   //     else b.push(A.shift())
//   //   } else {
//   //     c.push(A.shift())
//   //   }
//   // }

//   for (let n in A){
//       console.log(A[n])
//     if (A[n] % 2 === 0) {
//       // A.unshift(A[n])
//     //   A = [...A, A[n]]
//     //   A.shift()
//     } else {
//       // A.push(A[n])
//     }
//     console.log(A)
//   }

//   // console.log(b)
//   // return A
// 	// return [...b, ...c]
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(sortArrayByParity([3,1,2,4])) // [2,4,3,1]

// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

console.log(sortArrayByParity([0, 1])) // [0, 1]

console.log(sortArrayByParity([0, 1, 2])) // [0, 2, 1]

console.log(sortArrayByParity([3, 2, 0, 5, 4, 1])) // [0, 2, 4, 3, 5, 1]