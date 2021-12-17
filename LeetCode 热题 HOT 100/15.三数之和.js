// 排序后，固定一位数进行双指针
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < nums.length - 2 && nums[i] <= 0; ++i) {
        // 去重
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        let l = i + 1,
            r = nums.length - 1;
        while (l < r) {
            if (nums[r] < 0) {
                break;
            }
            if (nums[i] + nums[l] + nums[r] === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                // 去重
                while (l + 1 < r && nums[l] === nums[l + 1]) {
                    ++l;
                }
                ++l;
                while (r - 1 > l && nums[r] === nums[r - 1]) {
                    --r;
                }
                --r;
            } else if (nums[i] + nums[l] + nums[r] > 0) {
                --r;
            } else {
                ++l;
            }
        }
    }
    return res;
};