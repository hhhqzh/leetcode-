/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    // dp[i] 为长度为i的最大拆分乘积
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j < i; ++j) {
            // 把长度为j分成一段
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
};