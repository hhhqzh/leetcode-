/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
    let n = nums.length;

    if (n === 1)
        return 1;

    let dp = new Array(n).fill(1);
    let res = 0;
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                }
            }
        }
        res = Math.max(res, dp[i]);
    }

    return res;
};