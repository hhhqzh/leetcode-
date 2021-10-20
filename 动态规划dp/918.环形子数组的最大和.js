/**
 * @param {number[]} nums
 * @return {number}
 */

/**
* 分成两种情况，一是无环的情况下、二是有环的情况下
* 无环情况下和53题一样，直接求子数组的最大和；
* 有环的情况下，用数组的和减去子数组的最小和，即可得到有环情况下的子数组最大和；
* 最后返回两种情况下的最大值，另外需要考虑全部为负数的情况
*/
var maxSubarraySumCircular = function (nums) {
    if (nums === null || nums.length < 1)
        return 0;
    let curMax, max, curMin, min, sum;
    curMax = max = curMin = min = sum = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        sum += nums[i];
        curMax = Math.max(curMax + nums[i], nums[i]);
        curMin = Math.min(curMin + nums[i], nums[i]);
        max = Math.max(max, curMax);
        min = Math.min(min, curMin);
    }
    if (max < 0) // 全部为负数的情况下
        return max; // 返回为数组的最大值
    
    return Math.max(max, sum - min);
};