/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 最长递增子序列超时
var increasingTriplet = function (nums) {
    let n = nums.length;
    // dp[i] 为包含第 nums[i] 的最长递增子序列
    let dp = new Array(n).fill(1);
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            dp[i] = nums[i] > nums[j] ? Math.max(dp[i], dp[j] + 1) : dp[i];
        }
    }
    return Math.max(...dp) >= 3;
};

// a 保存最小的数，b 保存子序列第二小的数
var increasingTriplet = function (nums) {
    let a = Number.MAX_SAFE_INTEGER,
        b = Number.MAX_SAFE_INTEGER;
    for (let num of nums) {
        if (num <= a) {
            a = num;
        } else if (num <= b) {
            b = num;
        } else {
            return true;
        }
    }
    return false;
};