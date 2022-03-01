/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // map 保存每个前缀和的次数
    let map = new Map();
    let prefixSum = 0,
        res = 0;
    // 注意
    map.set(0, 1);
    for (let i = 0; i < nums.length; ++i) {
        prefixSum += nums[i];
        // 若有前缀和为 prefixSum - k
        if (map.has(prefixSum - k)) {
            res += map.get(prefixSum - k);
        }
        if (!map.has(prefixSum)) {
            map.set(prefixSum, 0);
        }
        map.set(prefixSum, map.get(prefixSum) + 1);
    }
    return res;
};