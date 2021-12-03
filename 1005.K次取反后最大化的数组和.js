/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    let res = 0;
    let min = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => {
        return a - b;
    });
    nums.forEach((num, index) => {
        if (num <= 0 && k > 0) {
            nums[index] = -nums[index];
            --k;
        }
        res += nums[index];
        min = Math.min(min, nums[index]);
    })
    if (k % 2 === 1)
        res -= 2 * min;
    return res;
};