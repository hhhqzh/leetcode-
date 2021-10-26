/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//     let row = matrix.length - 1,
//         col = 0;
//     while (row >= 0 && col < matrix[0].length) {
//         if (target === matrix[row][col])
//             return true;
//         else if (target < matrix[row][col])
//             --row;
//         else
//             ++col;
//     }
//     return false;
// };

var searchMatrix = function (matrix, target) {
    let row = 0;
    let r = matrix.length, c = matrix[0].length - 1;
    while (row < r && target > matrix[row][c]) {
        ++row;
    }
    if (row === matrix.length)
        return false;
    let left = 0, right = c;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2)  + left;
        if (matrix[row][mid] === target)
            return true;
        else if (matrix[row][mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }
    return false;
}