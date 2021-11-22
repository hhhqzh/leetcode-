/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    let dp = new Array(target + 1).fill(0);
    nums = nums.sort((a, b) => {
        return a - b;
    });
    dp[0] = 1;
    for (let i = 1; i <= target; ++i) {
        for (let j = 0; j < nums.length && nums[j] <= i; ++j) {
            dp[i] += dp[i - nums[j]]
        }
    }
    return dp[target];
};