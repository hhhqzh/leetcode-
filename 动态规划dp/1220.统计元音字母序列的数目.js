/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
    const MOD = 1000000007;
    // dp[i][j] 表示以第j个元音字母为结尾，且长度为i的的字符串的个数
    let dp = new Array(n + 1).fill(0).map(() => {
        return new Array(5).fill(0)
    });
    dp[1][0] = dp[1][1] = dp[1][2] = dp[1][3] = dp[1][4] = 1;
    for (let i = 2; i <= n; ++i) {
        dp[i][0] = dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4];
        dp[i][1] = dp[i - 1][0] + dp[i - 1][2];
        dp[i][2] = dp[i - 1][1] + dp[i - 1][3];
        dp[i][3] = dp[i - 1][2];
        dp[i][4] = dp[i - 1][2] + dp[i - 1][3];
        for (let j = 0; j < 5; ++j) {
            dp[i][j] %= MOD;
        }
    }
    let res = 0;
    for (let i = 0; i < 5; ++i) {
        res = (res + dp[n][i]) % MOD;
    }
    return res;
};