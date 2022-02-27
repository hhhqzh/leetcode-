/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
    let res = [nums[0]];
    for (let i = 1; i < nums.length; ++i) {
        res.push('/');
        res.push(nums[i]);
    }
    if (nums.length > 2) {
        res.splice(2, 0, '(');
        res.push(')')
    }
    return res.join('');
};