/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    /** 
     * 遍历一次数组把 大于等于1的和小于数组大小的值 放到原数组对应位置，
     * 然后再遍历一次数组查当前下标是否和值对应，如果不对应那这个下标就是答案，否则遍历完都没出现那么答案就是数组长度加1。
     */
    for (let i = 0; i < nums.length; ++i) {
        while (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[nums[i] - 1]) {
            let t = nums[i];
            nums[i] = nums[nums[i] - 1];
            nums[t - 1] = t;
        }
    }
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};