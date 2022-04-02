/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    let m = s1.length,
        n = s2.length;
    // dp[i][j] 表示 s1[0~i-1] 和 s2[0~j-1] 能否交错组成s3[0~i+j-1]
    let dp = new Array(m + 1).fill(0).map(() => {
        return new Array(n + 1).fill(false)
    });
    dp[0][0] = true;
    for (let i = 1; i <= m; ++i) {
        dp[i][0] = dp[i - 1][0] && (s3[i - 1] === s1[i - 1])
    }
    for (let i = 1; i <= n; ++i) {
        dp[0][i] = dp[0][i - 1] && (s3[i - 1] === s2[i - 1]);
    }
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            dp[i][j] = dp[i - 1][j] && (s3[i + j - 1] === s1[i - 1]) || dp[i][j - 1] && (s3[i + j - 1] === s2[j - 1]);;;
        }
    }
    return dp[m][n];
};