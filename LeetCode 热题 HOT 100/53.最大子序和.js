/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//     let n = nums.length;
//     // dp[i] 表示以 nums[i] 结尾的连续数组最大和
//     let dp = new Array(n).fill(0)
//     dp[0] = nums[0];
//     for (let i = 1; i < n; ++i) {
//         dp[i] = Math.max(nums[i] + dp[i - 1], nums[i]);
//     }
//     return Math.max(...dp);
// };

var maxSubArray = function (nums) {
    let n = nums.length;
    let pre = nums[0];
    let max = nums[0];
    for (let i = 1; i < n; ++i) {
        pre = Math.max(nums[i] + pre, nums[i]);
        max = Math.max(pre, max);
    }
    return max;
};