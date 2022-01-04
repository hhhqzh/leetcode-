/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    let n = nums.length - 1;
    const permutation = (nums, k, n) => {
        if (k === n) {
            res.push([...nums]);
            return;
        }
        for (let i = k; i <= n; ++i) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            permutation(nums, k + 1, n);
            [nums[k], nums[i]] = [nums[i], nums[k]];
        }
    }

    permutation(nums, 0, n);
    return res;
};