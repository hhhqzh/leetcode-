// dp[i][j]表示word1[1...i]和word2[1...j]之间的最短 编辑距离
// dp[i][j] 可由 dp[i - 1][j - 1] dp[i - 1][j] dp[i][j - 1]来计算出
/**
 * 1. word1[i] == word2[j]
 *      D[i][j]​=min(D[i][j−1]+1,D[i−1][j]+1,D[i−1][j−1])=1+min(D[i][j−1],D[i−1][j],D[i−1][j−1]−1)​
 * 
 * 2. word1[i] != word2[j]
 *      D[i][j]=1+min(D[i][j−1],D[i−1][j],D[i−1][j−1])
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let [n1, n2] = [text1.length, text2.length];
    const dp = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0))
    for (let i = 1; i <= n1; ++i) {
        for (let j = 1; j <= n2; ++j) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1))
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[n1][n2];
};