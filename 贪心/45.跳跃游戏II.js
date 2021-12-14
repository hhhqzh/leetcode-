/**
 * @param {number[]} nums
 * @return {number}
 */
// dp
var jump = function (nums) {
    let len = nums.length;
    let dp = new Array(len).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 1; i < len; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[j] >= i - j) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[len - 1];
};

// 贪心
var jump = function (nums) {
    if (nums.length === 1)
        return 0;
    let reach = 0;
    let nextreach = nums[0];
    let step = 0;
    for (let i = 0; i < nums.length; ++i) {
        nextreach = Math.max(nextreach, i + nums[i]);
        if (nextreach >= nums.length - 1)
            return step + 1;
        if (i === reach) {
            ++step;
            reach = nextreach;
        }
    }
    return step;
}