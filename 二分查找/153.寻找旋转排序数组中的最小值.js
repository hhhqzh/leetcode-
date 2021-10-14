/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let [l, r] = [0, nums.length - 1];
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (nums[mid] < nums[r]) { // 右半部分是有序的
            r = mid;
        } else { // 左半部分是有序的
            l = mid + 1;
        }
    }
    return nums[l];
};