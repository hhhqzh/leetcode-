/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let n = matrix.length;
    for (let i = n - 2; i >= 0; --i) {
        for (let j = 0; j < n; ++j) {
            let min = matrix[i + 1][j];
            if (j < n - 1)
                min = Math.min(min, matrix[i + 1][j + 1]);
            if (j > 0)
                min = Math.min(min, matrix[i + 1][j - 1]);
            matrix[i][j] += min;
        }
    }
    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; ++i)
        res = Math.min(res, matrix[0][i]);
    return res;
};