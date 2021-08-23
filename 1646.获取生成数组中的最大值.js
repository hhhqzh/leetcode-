/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    if (n === 0 || n === 1)
        return n;
    let nums = new Array(n).fill(0);
    nums[1] = 1;
    let max = 0;
    for (let i = 2; i <= n; ++i) {
        if (i % 2 === 0)
            nums[i] = nums[i / 2];
        else 
            nums[i] = nums[Math.floor(i / 2)] + nums[Math.ceil(i / 2)];
        max = Math.max(max, nums[i]);
    }
    return max;
};