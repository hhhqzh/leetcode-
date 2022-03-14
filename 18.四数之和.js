/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [];
    nums.sort((a, b) => {
        return a - b;
    });

    // k数之和
    const caculateNSum = (nums, k, target, temp) => {
        if (nums.length < k) {
            return;
        }
        if (k === 2) {
            let l = 0,
                r = nums.length - 1;
            while (l < r) {
                if (nums[l] + nums[r] === target) {
                    res.push([].concat(temp, nums[l], nums[r]))
                    // 去重
                    while (l + 1 < r && nums[l] === nums[l + 1]) {
                        ++l;
                    }
                    ++l;
                    while (r - 1 > l && nums[r] === nums[r - 1]) {
                        --r;
                    }
                    --r;
                } else if (nums[l] + nums[r] > target) {
                    --r;
                } else {
                    ++l;
                }
            }
        } else {
            for (let i = 0; i <= nums.length - k; ++i) {
                // 去重
                if (i > 0 && nums[i - 1] === nums[i]) {
                    continue;
                }
                temp.push(nums[i]);
                caculateNSum(nums.slice(i + 1), k - 1, target - nums[i], temp);
                temp.pop();
            }
        }
    }

    caculateNSum(nums, 4, target, []);
    return res;
};