/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 摩尔投票法
var majorityElement = function (nums) {
    let res = [];
    let x = 0,
        y = 0,
        cx = 0,
        cy = 0;
    for (let i = 0; i < nums.length; ++i) {
        if ((cx === 0 || nums[i] === x) && nums[i] !== y) {
            ++cx;
            x = nums[i];
        } else if (cy === 0 || nums[i] === y) {
            ++cy;
            y = nums[i];
        } else {
            --cx;
            --cy;
        }
    }
    let count = 0;
    let time = Math.floor(nums.length / 3);
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === x)
            ++count;
    }
    if (count > time)
        res.push(x);
    count = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === y)
            ++count;
    }
    if (count > time && x !== y)
        res.push(y);
    return res;
};