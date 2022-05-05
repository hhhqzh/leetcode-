/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let res = 0;
    let opt = [
        [0, 1]
    ];
    nums.unshift(1);
    for (let i = 1; i < nums.length; ++i) {
        let [idx, sum] = opt[i - 1];
        let temp = sum * nums[i];
        while (temp >= k && idx <= i) {
            temp /= nums[idx];
            ++idx;
        }
        opt.push([idx, temp]);
    }
    for (let i = 1; i < opt.length; ++i) {
        let [idx, sum] = opt[i];
        if (idx <= i) {
            res += idx === 0 ? i - idx : i - idx + 1;
        }
    }
    return res;
}

// 双指针
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) {
        return 0;
    }
    let res = 0,
        pre = 1,
        l = 0;
    for (let r = 0; r < nums.length; ++r) {
        pre *= nums[r];
        while (pre >= k) {
            pre /= nums[l];
            ++l;
        }
        res += r - l + 1;
    }
    return res;
}