/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0,
        r = nums.length;
    let res = [-1, -1];
    // 找左边界
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (nums[mid] >= target) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    if (nums[l] !== target) {
        return res;
    }
    res[0] = l;
    r = nums.length;
    // 找右边界 + 1
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (nums[mid] <= target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    res[1] = l - 1;
    return res;
};