/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let map = new Map();
    let res = 0;
    for (let num of nums) {
        if (!map.has(num)) {
            let left = map.has(num - 1) ? map.get(num - 1) : 0;
            let right = map.has(num + 1) ? map.get(num + 1) : 0;
            let cur = left + right + 1;
            map.set(num, cur);
            map.set(num - left, cur);
            map.set(num + right, cur);
            res = Math.max(res, cur);
        }
    }
    return res;
};


var longestConsecutive = function (nums) {
    let set = new Set();
    let res = 0;
    for (let num of nums) {
        set.add(num);
    }
    for (let num of set) {
        if (!set.has(num - 1)) {
            let curCount = 1;
            let cur = num;
            while (set.has(cur + 1)) {
                ++curCount;
                ++cur;
            }
            res = Math.max(res, curCount);
        }
    }
    return res;
}