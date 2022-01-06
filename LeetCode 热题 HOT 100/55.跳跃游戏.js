/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp
var canJump = function (nums) {
    let len = nums.length;
    // dp[i] 表示下标 i 能否到达
    let dp = new Array(len);
    dp[0] = true;
    for (let i = 1; i < len; ++i) {
        for (let j = i - 1; j >= 0; --j) {
            dp[i] = dp[j] && nums[j] >= (i - j);
            if (dp[i])
                break;
        }
    }
    return dp[len - 1];
};

// 贪心
var canJump = function (nums) {
    let n = nums.length;
    if (n <= 1)
        return true;
    let maxDis = nums[0]; // 从下标0能到达的最大距离
    for (let i = 1; i < n; ++i) {
        if (maxDis >= i) { // 当前位置可到达
            maxDis = Math.max(maxDis, nums[i] + i);
        }
        if (maxDis >= n - 1) {
            return true;
        }
    }
    return false;
}