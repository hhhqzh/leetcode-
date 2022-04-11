/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) {
        return 0;
    }
    let dp = new Array(n + 1).fill(0);
    dp[1] = 10;
    for (let i = 2; i <= n; ++i) {
        dp[i] = (i - 1 === 1 ? 9 : dp[i - 1]) * (11 - i);
    }
    return dp.reduce((pre, cur) => pre + cur);
};