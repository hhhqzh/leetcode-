/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function (nums) {
    let [i, j] = [0, nums.length - 1];
    while (i < j) {
        if (nums[i] % 2 === 1)
            ++i;
        else {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            --j;
        }
    }
    return nums;
};