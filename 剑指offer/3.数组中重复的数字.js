/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function(nums) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; ++i) {
//         if (map.has(nums[i]))
//             return nums[i];
//         else
//             map.set(nums[i], 1);
//     }
// };

// 时间复杂度为O(N)， 空间复杂度为O(1)

var findRepeatNumber = function(nums) {
    for (let i = 0; i < nums.length;) {
        if (i == nums[i]) {
            ++i;
            continue;
        }
        if (nums[i] == nums[nums[i]])
            return nums[i];
        let t = nums[i];
        nums[i] = nums[nums[i]];
        nums[t] = t;
    }
}