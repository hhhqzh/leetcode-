/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    if (n == 0)
        return 0;
    if (n == 1)
        return nums[0];
    if (n == 2)
        return Math.max(nums[0], nums[1]);
    // dp[i]表示前i个房子可偷窃的最大金额
    // 分成两个问题，一个为区间[1, n - 1]，另一个为区间[2, n]
    let dp1 = new Array(n - 1).fill(0);
    let dp2 = new Array(n - 1).fill(0);
    dp1[0] = nums[0]; dp1[1] = Math.max(nums[0], nums[1]);
    dp2[0] = nums[1]; dp2[1] = Math.max(nums[1], nums[2]);
    for (let i = 2; i < n - 1; ++i) {
        dp1[i] = Math.max(dp1[i - 2] + nums[i], dp1[i - 1]);
    }

    for (let i = 3; i < n; ++i) {
        dp2[i - 1] = Math.max(dp2[i - 2 - 1] + nums[i], dp2[i - 1 - 1]);
    }

    return Math.max(dp1[n - 2], dp2[n - 2]);
};