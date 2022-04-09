/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let n = t.length,
        m = s.length;
    // dp[i][j]表示在s[j]为结尾的子序列中，子串t[0 ~ i]的个数
    let dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < m; ++i) {
        dp[0][i] = t.charAt(0) === s.charAt(i) ? 1 : 0;
    }
    for (let i = 1; i < n; ++i) {
        for (let j = i; j < m; ++j) {
            if (t.charAt(i) === s.charAt(j)) {
                for (let k = 0; k < j; ++k) {
                    dp[i][j] += dp[i - 1][k];
                }
            }
        }
    }
    return dp[n - 1].reduce((pre, cur) => pre + cur);
};