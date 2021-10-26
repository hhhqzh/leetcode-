/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 单调栈
var nextGreaterElement = function (nums1, nums2) {
    let res = [];
    let stack = [];
    let map = new Map();
    for (let num of nums2) {
        while (stack.length !== 0 && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }
    for (let num of nums1) {
        res.push(map.has(num) ? map.get(num) : -1);
    }
    return res;
};