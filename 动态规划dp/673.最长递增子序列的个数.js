/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 
 * @param {*} nums 
 * @returns 
 * 
 * dp[i]表示 0 ~ i 中以nums[i]为结尾的最长上升子序列的长度，combination[i]表示以nums[i]为结尾的最长上升子序列的个数
 * 
 */
var findNumberOfLIS = function (nums) {
    let n = nums.length;

    if (n === 0)
        return 0;

    let dp = new Array(nums.length).fill(1);
    let combination = new Array(nums.length).fill(1);

    let max = 1,
        res = 0;
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    combination[i] = combination[j];
                } else if (dp[j] + 1 === dp[i]) {
                    combination[i] += combination[j];
                }
            }
        }
        max = Math.max(max, dp[i]);
    }

    for (let i = 0; i < n; ++i) {
        if (dp[i] === max)
            res += combination[i];
    }

    return res;
};