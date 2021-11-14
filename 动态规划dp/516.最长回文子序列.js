/**
 * @param {string} s
 * @return {number}
 */

 /*
    动态规划 dp[i][j]表示字符串s在[i,j]范围内最长会问子序列的长度为dp[i][j]
    若s[i] == s[j] 则dp[i][j] = dp[i + 1][j - 1] + 2
    若s[i] != s[j] 则s[i]和s[j]同时加入并不能使[i,j]区间回文子串的长度增加，那么分别加入s[i]、s[j]判断哪一个可以组成最长的回文子序列 dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])

    注意！！！
    dp[i][j]与dp[i + 1][j - 1]和dp[i + 1][j]有关，且在矩阵上是下一行的值，则遍历时需从下往上遍历
 */
var longestPalindromeSubseq = function(s) {
    var n = s.length;
    var dp = new Array(n).fill(0).map(() => {return new Array(n).fill(0)});
    for (let i = 0; i < n; ++i) {
        dp[i][i] = 1;
    }
    for (let i = n -1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            if (s[i] == s[j])
                dp[i][j] = dp[i + 1][j - 1] + 2;
            else
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
    }
    return dp[0][n - 1];
};