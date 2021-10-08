/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let a = Number.MIN_SAFE_INTEGER;
    let b = Number.MIN_SAFE_INTEGER;
    let c = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > a) {
            c = b;
            b = a;
            a = nums[i];
        } else if (a > nums[i] && nums[i] > b) {
            c = b;
            b = nums[i];
        } else if (b > nums[i] && nums[i] > c) {
            c = nums[i];
        }
    }
    return c === Number.MIN_SAFE_INTEGER ? a : c;
};