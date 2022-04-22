/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
    let max = 0,
        cur = 0,
        temp = 0,
        n = nums.length;
    for (let i = 0; i < n; ++i) {
        cur += i * nums[i];
        temp += nums[i];
    }
    max = cur;
    for (let i = 1; i < n; ++i) {
        let start = nums[n - i];
        cur += temp - start * n;
        max = Math.max(max, cur);
    }
    return max;
};