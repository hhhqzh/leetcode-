/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 不能用滑动窗口，因为 nums 的元素可能为负数，即右指针向右移不能保证区间和一定是增大，左指针向左移也不能保证区间和一定是减小
var subarraySum = function (nums, k) {
    // 用 map 保存每个 sum 的次数
    let map = new Map();
    let sum = 0,
        res = 0;
    map.set(0, 1);
    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            res += map.get(sum - k);
        }
        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
    }
    return res;
};