/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let m = matrix.length,
        n = matrix[0].length;
    // dp[i][j] 表示以第 i 行和第 j 列为右下角所能构成的最大正方形的边长
    // 以 (i, j) 点为右下角的正方形的最大边长，最多比它的上方，左方和左上方为右下角的正方形的边长多1
    let dp = new Array(m + 1).fill(0).map(() => {
        return new Array(n + 1).fill(0)
    });
    let max = 0;
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (matrix[i - 1][j - 1] !== '0') {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                max = Math.max(dp[i][j], max);
            }
        }
    }
    return max * max;
};

//  空间优化
var maximalSquare = function (matrix) {
    let m = matrix.length,
        n = matrix[0].length;
    let dp = new Array(n).fill(0);
    let pre = 0,
        max = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i === 0 || j === 0) {
                pre = dp[j];
                dp[j] = matrix[i][j] - '0';
            } else if (matrix[i][j] === '0') {
                pre = dp[j];
                dp[j] = 0;
            } else {
                let temp = dp[j];
                dp[j] = Math.min(dp[j - 1], pre, dp[j]) + 1;
                pre = temp;
            }
            max = Math.max(max, dp[j]);
        }
    }
    return max * max;
}