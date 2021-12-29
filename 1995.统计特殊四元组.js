/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力
var countQuadruplets = function (nums) {
    let res = 0;
    for (let i = 3; i < nums.length; ++i) {
        let a = nums[i];
        for (let j = i - 1; j >= 0 && j > 1; --j) {
            let b = a - nums[j];
            for (let k = j - 1; k >= 0 && k > 0; --k) {
                let c = b - nums[k];
                for (let l = k - 1; l >= 0; --l) {
                    if (c - nums[l] === 0) {
                        ++res;
                    }
                }
            }
        }
    }
    return res;
};

// 哈希存储 d
var countQuadruplets = function (nums) {
    let res = 0;
    let n = nums.length;
    let cnt = new Array(10010).fill(0);
    for (let c = n - 2; c >= 2; --c) {
        cnt[nums[c + 1]]++;
        for (let a = 0; a < n - 3; ++a) {
            for (let b = a + 1; b < c; ++b) {
                res += cnt[nums[a] + nums[b] + nums[c]];
            }
        }
    }
    return res;
};