/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    let dp = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0)
    });
    for (let i = 0; i < m; ++i) {
        if (obstacleGrid[i][0] === 1)
            break;
        dp[i][0] = 1;
    }
    for (let i = 0; i < n; ++i) {
        if (obstacleGrid[0][i] === 1)
            break;
        dp[0][i] = 1;
    }
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            if (obstacleGrid[i][j] === 1)
                continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

// 一维空间优化
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    let dp = new Array(n).fill(0);
    dp[0] = (obstacleGrid[0][0] === 0);
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
                continue;
            }
            if (j - 1 >= 0 && obstacleGrid[i][j - 1] === 0)
                dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
}