/**
 * @param {number[]} nums
 * @return {number}
 */
// dp
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

/**
 * 思路： 求最大值，可以看成求被0拆分的各个子数组的最大值。

 * 当一个数组中没有0存在，则分为两种情况：

 * 1.负数为偶数个，则整个数组的各个值相乘为最大值；

 * 2.负数为奇数个，则从左边开始，乘到最后一个负数停止有一个“最大值”，从右边也有一个“最大值”，比较，得出最大值。
 */
var maxProduct = function (nums) {
    let a = 1;
    let max = nums[0];

    for (let i = 0; i < nums.length; ++i) {
        a = a * nums[i];
        max = Math.max(max, a);
        if (nums[i] == 0) a = 1;
    }
    a = 1;
    for (let i = nums.length - 1; i >= 0; --i) {
        a = a * nums[i];
        max = Math.max(max, a);
        if (nums[i] == 0) a = 1;
    }
    return max;
}