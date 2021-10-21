/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function (nums) {
    let preMax, max, preMin;
    preMax = max = preMin = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] < 0) { //如果是负数，那么会导致最大的变最小的，最小的变最大的。因此交换两个的值。
            let t = preMax;
            preMax = preMin;
            preMin = t;
        }
        preMax = Math.max(preMax * nums[i], nums[i]);
        preMin = Math.min(preMin * nums[i], nums[i]);
        max = Math.max(max, preMax);
    }
    return max;
};