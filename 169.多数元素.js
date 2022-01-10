/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let cnt = 1;
    let temp = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        if (temp === nums[i]) {
            ++cnt;
        } else {
            --cnt;
            if (cnt === 0) {
                temp = nums[i];
                cnt = 1;
            }
        }
    }
    return temp;
};