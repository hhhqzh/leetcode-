/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    let n = prices.length;
    let dp = new Array(n).fill(0).map(() => { return new Array(2).fill(0) });
    dp[0][1] = -prices[0] - fee;
    for (let i = 1; i < n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
    }
    return dp[n - 1][0];
};

var maxProfit = function (prices, fee) {
    let n = prices.length;
    let buy = -prices[0] - fee;
    let sell = 0;
    for (let i = 1; i < n; ++i) {
        let a = buy + prices[i];
        let b = sell - prices[i] - fee;
        sell = Math.max(sell, a);
        buy = Math.max(buy, b);
    }
    return sell;
}; 