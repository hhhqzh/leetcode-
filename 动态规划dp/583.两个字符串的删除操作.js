/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

 var minDistance = function (word1, word2) {
    let n1 = word1.length, n2 = word2.length;

    const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0))
    for (let i = 0; i <= n1; ++i)
        dp[i][0] = i;
    for (let i = 0; i <= n2; ++i)
        dp[0][i] = i;

    for (let i = 1; i <= n1; ++i) {
        for (let j = 1; j <= n2; ++j) {
            if (word1.charAt(i - 1) === word2.charAt(j - 1))
                dp[i][j] = dp[i - 1][j - 1];
            else
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
    }
    return dp[n1][n2];
};