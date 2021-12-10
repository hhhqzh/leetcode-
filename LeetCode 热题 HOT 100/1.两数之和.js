/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 用数组 indexOf
var twoSum = function (nums, target) {
    let res = [];
    for (let i = 0; i < nums.length; ++i) {
        let idx = nums.indexOf(target - nums[i]);
        if (idx !== -1 && idx !== i) {
            res.push(i, idx);
            break;
        }
    }
    return res;
};

// 用map
var twoSum = function (nums, target) {
    let res = [];
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        let temp = target - nums[i];
        if (map.has(temp)) {
            res.push(i, map.get(temp));
            break;
        }
        map.set(nums[i], i);
    }
    return res;
};