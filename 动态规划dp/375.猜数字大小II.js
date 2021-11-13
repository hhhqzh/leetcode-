/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
    let dp = new Array(n + 1).fill(0).map(() => {
        return new Array(n + 1).fill(0)
    });
    // dp[i][i] = 0
    for (let i = n - 1; i >= 1; --i) {
        for (let j = i + 1; j <= n; ++j) {
            dp[i][j] = Number.MAX_SAFE_INTEGER;
            for (let k = i; k <= j; ++k) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[i][k - 1], k + 1 > n ? 0 : dp[k + 1][j]) + k);
            }
        }
    }
    return dp[1][n]
};