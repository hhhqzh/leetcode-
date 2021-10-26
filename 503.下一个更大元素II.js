/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let res = new Array(n).fill(-1);
    let stack = [];
    // 循环数组，用两个数组拼接起来
    for (let i = 0; i < 2 * n; ++i) {
        while (stack.length !== 0 && nums[stack[stack.length - 1]] < nums[i % n]) {
            res[stack.pop()] = nums[i % n];
        }
        stack.push(i % n);
    }
    return res;
};