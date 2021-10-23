/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxPrice = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; ++i) {
        maxPrice = Math.max(maxPrice, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return maxPrice;
};