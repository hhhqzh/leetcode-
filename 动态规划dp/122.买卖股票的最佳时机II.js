/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0;
    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] - prices[i - 1] > 0)
            res += prices[i] - prices[i - 1];
    }
    return res;
};

// 当天可以买入和卖出
var maxProfit = function (prices) {
    let pre = prices[0];
    let res = 0;
    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] > pre) {
            res += prices[i] - pre;
            pre = prices[i];
        } else {
            pre = prices[i];
        }
    }
    return res;
};

var maxProfit = function (prices) {
    let n = prices.length;
    if (n === 0)
        return 0;
    // dp[i][0] 表示第i天卖掉时能获得最大的值，dp[i][1] 表示第i天买入时能获得的最大值
    let dp = new Array(n).fill(0).map(() => {
        return new Array(2).fill(0)
    });
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
};