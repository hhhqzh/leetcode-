// 从最外圈开始旋转，每遍历一层就往里缩一个矩阵
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let m = matrix.length - 1,
        n = matrix[0].length - 1;
    let row = m,
        col = n;
    for (let i = 0; i < m; ++i) {
        for (let j = i; j < n; ++j) {
            [matrix[i][j], matrix[j][col - i]] = [matrix[j][col - i], matrix[i][j]];
            [matrix[i][j], matrix[row - j][i]] = [matrix[row - j][i], matrix[i][j]];
            [matrix[row - j][i], matrix[row - i][col - j]] = [matrix[row - i][col - j], matrix[row - j][i]];
        }
        --m;
        --n;
    }
};

// 解法二：先转置再翻转
var rotate = function (matrix) {
    // 先转置，再翻转
    let m = matrix.length,
        n = matrix[0].length;
    // 转置
    for (let i = 0; i < m; ++i) {
        for (let j = i; j < n; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // 翻转
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < Math.floor(n / 2); ++j) {
            [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]];
        }
    }
};