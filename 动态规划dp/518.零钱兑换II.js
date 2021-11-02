/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 完全背包
var change = function (amount, coins) {
    let n = coins.length;
    let dp = new Array(n + 1).fill(0).map(() => {return new Array(amount + 1).fill(0)});
    dp[0][0] = 1;
    for (let i = 1; i <= n; ++i) {
        let coin = coins[i - 1];
        for (let j = 0; j <= amount; ++j) {
            for (let k = 0; k * coin <= j; ++k) {
                dp[i][j] += dp[i - 1][j - k * coin];
            }
        }
    }
    return dp[n][amount];
}

// 完全背包一维化
var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < coins.length; ++i) {
        let coin = coins[i];
        for (let j = coin; j <= amount; ++j) {
            dp[j] += dp[j - coin];
        }
    }
    return dp[amount];
};