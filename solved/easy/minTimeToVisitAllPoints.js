// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Problem
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// On a plane there are n points with integer coordinates points[i] = [xi, yi]. 

// Your task is to find the minimum time in seconds to visit all points.

// You can move according to the next rules:

// In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as they appear in the array.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Constraints
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// points.length == n
// 1 <= n <= 100
// points[i].length == 2
// -1000 <= points[i][0], points[i][1] <= 1000

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pseudo Code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - if points[i][0] < points[i + 1][0]
//   - add 1 to points[i][0] until 

// - if points[i][1] < points[i + 1][1]
//   - add 1 to points[i][1] until 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// - iterate until i < points.length - 1
// - find distance between points[i][0] and points[i + 1][0]
// - find distance between points[i][1] and points[i + 1][1]
// - find Math.max of difference
// - add Math.max of difference to total
// - return total

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solutions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var minTimeToVisitAllPoints = function(points) {
  let xDist = 0, yDist = 0, totalDist = 0

  for(i = 0; i < points.length - 1; i++){
    xDist = Math.abs(points[i][0] - points[i + 1][0])
    yDist = Math.abs(points[i][1] - points[i + 1][1])
    totalDist += Math.max(xDist, yDist)
  }

  return totalDist
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test Cases
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(minTimeToVisitAllPoints( [[1,1], [3,4], [-1,0]] )) // 7

// Explanation:
// [1, 1] -> [2, 2] -> [3, 3] -> [3, 4] -> [2, 3] -> [1, 2] -> [0, 1] -> [-1, 0]
//  0         1         2         3         4         5         6         7

// [1, 1] -> [2, 2] -> [3, 3] -> [3, 4]
//  0         1         2         3

// [3, 4] -> [2, 3] -> [1, 2] -> [0, 1] -> [-1, 0]
//  0         1         2         3         4

// Time from [1,1] to [3,4] = 3 seconds
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

console.log(minTimeToVisitAllPoints( [[3,2], [-2,2]] )) // 5

// [3, 2] -> [2, 2] -> [1, 2] -> [0, 2] -> [-1, 2] -> [-2, 2]
//  0         1         2         3         4          5

console.log(minTimeToVisitAllPoints( [[0,4], [5,2], [6, 8], [8,4]] )) // 15

// [0, 4] -> [1, 3] -> [2, 2] -> [3, 2] -> [4, 2] -> [5, 2] -> [6, 3] -> [6, 4] -> [6, 5] -> [6, 6] -> [6, 7] -> [6, 8] -> [7, 7] -> [8, 6] -> [8, 5] -> [8, 4]
//  0         1         2         3         4         5         6         7         8         9         10        11        12        13        14        15

// [0, 4] -> [1, 3] -> [2, 2] -> [3, 2] -> [4, 2] -> [5, 2]
//  0         1         2         3         4         5

// [5, 2] -> [6, 3] -> [6, 4] -> [6, 5] -> [6, 6] -> [6, 7] -> [6, 8]
//  0         1         2         3         4         5         6

// [6, 8] -> [7, 7] -> [8, 6] -> [8, 5] -> [8, 4]
//  0         1         2         3         4

// 5 + 6 + 4 = 15