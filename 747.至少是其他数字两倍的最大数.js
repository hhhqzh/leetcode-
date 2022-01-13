/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let index = 0,
        max = nums[0],
        secMax = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > max) {
            index = i;
            secMax = max;
            max = nums[i];
        } else if (nums[i] > secMax) {
            secMax = nums[i];
        }
    }
    console.log(secMax, max)
    return 2 * secMax <= max ? index : -1;
};