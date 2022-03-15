/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    nums.splice(l, 0, target);
    return l;
};