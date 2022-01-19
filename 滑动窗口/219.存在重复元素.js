/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// map
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i]) <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
};

// 滑动窗口 + set
var containsNearbyDuplicate = function (nums, k) {
    let set = new Set();
    let n = nums.length;
    let l = 0,
        r = 0;
    while (r < n) {
        if (r > k) {
            set.delete(nums[l]);
            ++l;
        }
        if (set.has(nums[r])) {
            return true;
        }
        set.add(nums[r]);
        ++r;
    }
    return false;
};