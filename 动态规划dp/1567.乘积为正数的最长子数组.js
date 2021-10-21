/**
 * @param {number[]} nums
 * @return {number}
 */
 var getMaxLen = function (nums) {
    let positive, negative, maxLen;
    positive = nums[0] > 0 ? 1 : 0;
    negative = nums[0] < 0 ? 1 : 0;
    maxLen = positive;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > 0) {
            ++positive;
            negative = negative > 0 ? negative + 1 : 0;
        } else if (nums[i] < 0) {
            let newpo = negative > 0 ? negative + 1 : 0;
            let newne = positive + 1;
            positive = newpo;
            negative = newne;
        } else {
            positive = 0;
            negative = 0;
        }
        maxLen = Math.max(maxLen, positive);
    }
    return maxLen;
};