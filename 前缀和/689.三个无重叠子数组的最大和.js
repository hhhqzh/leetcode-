// 暴力超时
var maxSumOfThreeSubarrays = function (nums, k) {
    let max = 0;
    let ans = [];
    // 前缀和
    let sum = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; ++i) {
        sum[i] = sum[i - 1] + nums[i - 1];
    }

    const dfs = (nums, len, index, k, res, resArr) => {
        if (len === 3) {
            if (res > max) {
                max = res;
                ans = [].concat(resArr);
            }
        }
        for (let i = index; i + k - 1 < nums.length; ++i) {
            let s = sum[i + k] - sum[i];
            resArr.push(i);
            dfs(nums, len + 1, i + k, k, res + s, resArr);
            resArr.pop();
        }
    }
    dfs(nums, 0, 0, k, 0, []);
    return ans;
};

var maxSumOfThreeSubarrays = function (nums, k) {
    let maxSum = 0;
    let ans = [];
    let n = nums.length;
    // KSum[i] 保存从 i 开始的 k 个数字之和
    let kSum = new Array(n - k + 1).fill(0);
    // left[i] 保存 i 之前最大的 KSum 的下标。right[i] 保存 i 之后最大的 KSum 的下标。
    /// 有点类似于接雨水
    let left = new Array(kSum.length),
        right = new Array(kSum.length);
    left[0] = 0, right[kSum.length - 1] = kSum.length - 1;
    for (let i = 0; i < k; ++i) {
        kSum[0] += nums[i];
    }
    for (let i = 1; i < kSum.length; ++i) {
        kSum[i] = kSum[i - 1] - nums[i - 1] + nums[i + k - 1];
    }
    for (let i = 1; i < kSum.length; ++i) {
        // 这里用 > 可以保证字典序最小，若 i 左边有相等的最大的和，保证下标最小的那个
        left[i] = kSum[i] > kSum[left[i - 1]] ? i : left[i - 1];
        // 这里用 >= 可以保证字典序最小，若 kSum.length - i - 1 右边有相等的最大的和，保证下标最小的那个
        right[kSum.length - i - 1] = kSum[kSum.length - i - 1] >= kSum[right[kSum.length - i]] ? kSum.length - i - 1 : right[kSum.length - i];
    }
    // 枚举中间长度为 k 的子数组，与其左右两边最大的子数组相加
    for (let i = k; i <= n - 2 * k; ++i) {
        let sum = kSum[left[i - k]] + kSum[i] + kSum[right[i + k]];
        if (sum > maxSum) {
            maxSum = sum;
            ans = [left[i - k], i, right[i + k]];
        }
    }
    return ans;
};

// 滑动窗口
// 先后计算一个子数组最优解，在一个子数组最优解的情况下推算两个子数组最优解，类似推算到三个子数组
var maxSumOfThreeSubarrays = function (nums, k) {
    const ans = [0, 0, 0];
    // maxSum1 维护第二个窗口之前的最大值，maxSum1Idx 对应第一个窗口最大值的下标
    let sum1 = 0,
        maxSum1 = 0,
        maxSum1Idx = 0;
    // maxSum12 维护第三个窗口之前的最大值，maxSum12Idx1 对应第一个窗口最大值的下标，maxSum12Idx2 对应第二个窗口最大值的下标
    let sum2 = 0,
        maxSum12 = 0,
        maxSum12Idx1 = 0,
        maxSum12Idx2 = 0;
    let sum3 = 0,
        maxTotal = 0;
    for (let i = k * 2; i < nums.length; ++i) {
        sum1 += nums[i - k * 2];
        sum2 += nums[i - k];
        sum3 += nums[i];
        if (i >= k * 3 - 1) {
            if (sum1 > maxSum1) {
                maxSum1 = sum1;
                maxSum1Idx = i - 3 * k + 1;
            }
            if (maxSum1 + sum2 > maxSum12) {
                maxSum12 = maxSum1 + sum2;
                maxSum12Idx1 = maxSum1Idx;
                maxSum12Idx2 = i - 2 * k + 1;
            }
            if (maxSum12 + sum3 > maxTotal) {
                maxTotal = maxSum12 + sum3;
                ans[0] = maxSum12Idx1;
                ans[1] = maxSum12Idx2;
                ans[2] = i - k + 1;
            }
            sum1 -= nums[i - k * 3 + 1];
            sum2 -= nums[i - k * 2 + 1];
            sum3 -= nums[i - k + 1];
        }
    }
    return ans;
}