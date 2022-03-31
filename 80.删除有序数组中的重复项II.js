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
    let flag = true;
    while (r < nums.length) {
        if (nums[r] !== nums[r - 1]) {
            flag = true;
            ++l;
            nums[l] = nums[r];
        } else {
            if (flag) {
                ++l;
                nums[l] = nums[r];
                flag = false;
            }
        }
        ++r;
    }
    return l + 1;
};