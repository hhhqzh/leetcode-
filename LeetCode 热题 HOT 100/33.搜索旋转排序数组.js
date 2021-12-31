/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < nums[r]) { // 右边有序
            if (nums[mid] < target && nums[r] >= target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else { // 左边有序
            if (nums[mid] > target && nums[l] <= target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return -1;
};