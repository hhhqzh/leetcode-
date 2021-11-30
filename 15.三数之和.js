/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });
    let res = [];
    // 固定一位数，再使用双指针，细节条件就是去重处理。
    for (let i = 0; i < nums.length - 2; ++i) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        let t = nums[i];
        let l = i + 1,
            r = nums.length - 1;
        while (l < r) {
            if (nums[r] < 0) {
                break;
            }
            if (t + nums[l] + nums[r] === 0) {
                res.push([t, nums[l], nums[r]]);
                while (l + 1 < r && nums[l] === nums[l + 1]) {
                    ++l;
                }
                ++l;
                while (r - 1 > l && nums[r - 1] === nums[r]) {
                    --r;
                }
                --r;
            } else {
                if (t + nums[l] + nums[r] > 0) {
                    --r;
                } else {
                    ++l;
                }
            }
        }
    }
    return res;
};