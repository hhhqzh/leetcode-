/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp
var canJump = function (nums) {
    let len = nums.length;
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
    let len = nums.length;
    if (len <= 1)
        return true;
    let maxDis = nums[0];
    for (let i = 1; i < len; ++i) {
        if (i <= maxDis) { // 当前位置可达
            maxDis = Math.max(maxDis, nums[i] + i);
            if (maxDis >= len - 1)
                return true;
        }
    }
    return maxDis >= len - 1;
}