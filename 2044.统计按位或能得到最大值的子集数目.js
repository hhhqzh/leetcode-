/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
    let res = 0,
        max = 0;

    const dfs = (nums, cur, result) => {
        if (cur === nums.length) {
            if (result > max) {
                res = 1;
                max = result;
            } else if (result === max) {
                ++res;
            }
            return;
        }
        dfs(nums, cur + 1, result | nums[cur]);
        dfs(nums, cur + 1, result);
    }

    dfs(nums, 0, 0);
    return res;
};