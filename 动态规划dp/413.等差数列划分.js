/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i] 表示包含 nums[i] 的等差数列个数
var numberOfArithmeticSlices = function (nums) {
    let n = nums.length;
    if (n <= 2)
        return 0;
    let dp = new Array(n).fill(0);
    let total = 0;
    for (let i = 2; i < n; ++i) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = dp[i - 1] + 1;
        }
        total += dp[i];
    }

    return total;
};

var numberOfArithmeticSlices = function (nums) {
    let total = 0,
        add = 0;
    for (let i = 2; i < n; ++i) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            ++add;
            total += add;
        } else
            add = 0;
    }
    return total;
}