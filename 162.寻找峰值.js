/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (nums[mid] > nums[mid + 1])
            r = mid;
        else if (nums[mid] < nums[mid +1])
            l = mid + 1;
    }
    return l;
};