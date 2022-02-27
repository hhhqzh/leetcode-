/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length,
        dp = new Array(n).fill(0); // dp[i] 表示前i个家能获得的最大价值
    if (n === 1) {
        return nums[0];
    }
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]);
    for (let i = 2; i < n; ++i) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[n - 1];
};