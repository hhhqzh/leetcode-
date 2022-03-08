/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
// 暴力超时
var platesBetweenCandles = function (s, queries) {
    let res = new Array();
    for (let querie of queries) {
        let str = s.slice(querie[0], querie[1] + 1);
        let l = str.indexOf('|'),
            r = str.lastIndexOf('|');
        let count = 0;
        if (l !== -1 && r !== -1) {
            while (l <= r) {
                if (str.charAt(l) === '*') {
                    ++count;
                }
                if (l !== r && str.charAt(r) === '*') {
                    ++count;
                }
                ++l;
                --r;
            }
        }
        res.push(count);
    }
    return res;
};

// 前缀和
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
    let res = new Array(),
        n = s.length;
    let prefixSum = new Array(s).fill(0);
    prefixSum[0] = s.charAt(0) === '*' ? 1 : 0;
    for (let i = 1; i < s.length; ++i) {
        if (s.charAt(i) === '*') {
            prefixSum[i] = prefixSum[i - 1] + 1;
        } else {
            prefixSum[i] = prefixSum[i - 1];
        }
    }
    for (let querie of queries) {
        let l = s.slice(querie[0], querie[1] + 1).indexOf('|'),
            r = s.slice(querie[0], querie[1] + 1).lastIndexOf('|');
        if (l === -1 || r === -1) {
            res.push(0);
        } else {
            res.push(prefixSum[r + querie[0]] - prefixSum[l + querie[0]]);
        }
    }
    return res;
};

// 前缀和 + dp
var platesBetweenCandles = function (s, queries) {
    let res = new Array(),
        n = s.length,
        leftCandle = new Array(n).fill(-1), // leftCandle[i] 表示在位置i左侧离位置i最近的蜡烛下标
        rightCandle = new Array(n).fill(-1), // rightCandle[i] 表示在位置i右侧离位置i最近的蜡烛下标
        prefixSum = new Array(n).fill(0);
    leftCandle[0] = s.charAt(0) === '|' ? 0 : -1;
    rightCandle[n - 1] = s.charAt(n - 1) === '|' ? n - 1 : -1;
    // leftCandle
    for (let i = 1; i < n; ++i) {
        leftCandle[i] = s.charAt(i) === '|' ? i : leftCandle[i - 1];
    }
    // 计算rightCandle
    for (let i = n - 2; i >= 0; --i) {
        rightCandle[i] = s.charAt(i) === '|' ? i : rightCandle[i + 1];
    }
    // 计算前缀和
    prefixSum[0] = s.charAt(0) === '*' ? 1 : 0;
    for (let i = 1; i < s.length; ++i) {
        prefixSum[i] = s.charAt(i) === '*' ? prefixSum[i - 1] + 1 : prefixSum[i - 1];
    }
    for (let querie of queries) {
        let l = rightCandle[querie[0]],
            r = leftCandle[querie[1]];
        if (l > querie[1] || r < querie[0]) {
            res.push(0);
        } else {
            res.push(prefixSum[r] - prefixSum[l]);
        }
    }
    return res;
};