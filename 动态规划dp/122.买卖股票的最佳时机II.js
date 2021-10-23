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