/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */

// 超时。。。
var longestSubsequence = function (arr, difference) {
    let n = arr.length;
    let dp = new Array(n).fill(1);
    let res = 1;
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (arr[i] - arr[j] === difference) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                res = Math.max(res, dp[i]);
            }
        }
    }
    return res;
};

// 用 ，ap 记录各个数字的索引
var longestSubsequence = function (arr, difference) {
    let n = arr.length;
    let dp = new Array(n).fill(1);
    let map = new Map();
    let res = 1;
    for (let i = 0; i < n; ++i) {
        if (map.has(arr[i] - difference)) {
            let j = map.get(arr[i] - difference);
            dp[i] = Math.max(dp[i], dp[j] + 1);
            res = Math.max(res, dp[i]);
        }
        map.set(arr[i], i);
    }
    return res;
};

// 用 map 作为 dp
var longestSubsequence = function (arr, difference) {
    let n = arr.length;
    let map = new Map();
    let res = 1;
    // map 保存 i 之前所有元素的最长子序列
    for (let i = 0; i < n; ++i) {
        if (map.has(arr[i] - difference)) {
            let val = map.get(arr[i] - difference);
            map.set(arr[i], val + 1);
            res = Math.max(res, val + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    return res;
};