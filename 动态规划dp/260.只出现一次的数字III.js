/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let xorsum = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        xorsum ^= nums[i]
    }
    let a = 0,
        b = 0;
    const lsb = xorsum & (-xorsum);
    for (let num of nums) {
        if (num & lsb) {
            a ^= num;
        } else {
            b ^= num;
        }
    }
    return [a, b];
};