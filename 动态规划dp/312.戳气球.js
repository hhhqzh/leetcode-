/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    let n = nums.length;
    nums.push(1);
    nums.unshift(1);
    let dp = new Array(n + 2).fill(0).map(() => {
        return new Array(n + 2).fill(0)
    });
    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 2; j <= n + 1; ++j) {
            for (let k = i + 1; k < j; ++k) {
                let sum = dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j];
                dp[i][j] = Math.max(dp[i][j], sum);
            }
        }
    }
    return dp[0][n + 1];
};