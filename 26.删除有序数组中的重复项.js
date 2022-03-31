/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let l = 0,
        r = 1;
    if (nums.length === 0) {
        return 0;
    }
    while (r < nums.length) {
        if (nums[r] !== nums[r - 1]) {
            ++l;
            nums[l] = nums[r];
        }
        ++r;
    }
    return l + 1;
};