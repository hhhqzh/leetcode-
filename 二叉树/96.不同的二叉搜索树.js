/**
 * @param {number} n
 * @return {number}
 */
/*
    dp[i]为有i个节点的二叉搜索树的个数。
*/
 var numTrees = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= n; ++i) {
        for (let j = 0; j < i; ++j) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n];
};