/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = new Array(m).fill(0).map(() => {
        return new Array(n).fill((1))
    });
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

// 回溯超时！！
var uniquePaths = function (m, n) {
    let res = 0;

    const dfs = (m, n, i, j) => {
        if (i === m - 1 && j === n - 1) {
            ++res;
            return;
        }
        if (i + 1 < m)
            dfs(m, n, i + 1, j);
        if (j + 1 < n)
            dfs(m, n, i, j + 1);
    }

    dfs(m, n, 0, 0);
    return res;
};