// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index.
// In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does.
// If there are no such elements, return -1.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 ≤ a.length ≤ 105,
// 1 ≤ a[i] ≤ a.length.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function firstDuplicate(a) {
//   let map = {}, n = -1, m = a.length

//   for(let i = 0; i < a.length; i++ ){
//     for(let j = i + 1; j < a.length; j++ ){
//       if(a[i] === a[j]){
//         if(map[a[i]]) map[a[i]].push(j)
//         else map[a[i]] = [ j ]
//         break
//       }
//     }
//   }

//   for(let k in map){
//     if (map[k][0] < m){
//       n = k
//       m = map[k][0]
//     }
//   }

//   return parseInt(n)
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function firstDuplicate(a) {
//   for (let i of a) {
//     let pos = Math.abs(i) - 1
//     if (a[pos] < 0) return pos + 1
//     a[pos] = a[pos] * -1
//   }

//   return -1
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function firstDuplicate(a) {
  const map = new Map()

  for(num of a){
    if(map.get(num)) return num
    map.set(num, ( map.get(num) || 0 ) + 1)
  }

  return -1
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(firstDuplicate([2, 1, 3, 5, 3, 2])) // 3
// console.log(firstDuplicate([2, 3, 3])) // 3
// console.log(firstDuplicate([1, 1, 2, 2, 1])) // 1

// console.log(firstDuplicate([2, 1, 3])) // -1
// console.log(firstDuplicate([3, 3, 3])) // 3
// console.log(firstDuplicate([5, 5, 5, 5, 5])) // 5


