/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    // dp[i] 为由i个节点组成的不同二叉搜索树的个数
    let dp = new Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            dp[i] += dp[j - 1] * dp[i - j]; // 左子树个数剩右子树个数
        }
    }
    return dp[n];
};