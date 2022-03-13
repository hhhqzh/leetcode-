/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let poor = Number.MAX_SAFE_INTEGER,
        res = 0,
        n = nums.length - 1;
    nums.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < n; ++i) {
        let temp = nums[i],
            l = i + 1,
            r = n;
        while (l < r) {
            let sum = nums[l] + nums[r] + temp;
            let p = target - sum;
            if (poor > Math.abs(p)) {
                res = sum;
                poor = Math.abs(p);
            }
            if (p > 0) {
                ++l;
            } else if (p < 0) {
                --r;
            } else {
                return res;
            }
        }
    }
    return res;
};