/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    let n = nums.length;
    if (n <= 2)
        return true;
    /* 
        dp[i] 表示以 nums[i] 为结尾的最大摆动序列长度
        但是摆动序列可能前一个差值是负数，也可能是正数，所以需两个 dp
    */
    let positive = new Array(n).fill(1);
    let negative = new Array(n).fill(1);
    let maxp = 1,
        maxn = 1;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                positive[i] = Math.max(positive[i], negative[j] + 1);
                maxp = Math.max(positive[i], maxp);
            } else if (nums[i] < nums[j]) {
                negative[i] = Math.max(negative[i], positive[j] + 1);
                maxn = Math.max(negative[i], maxn);
            }
        }
    }
    return Math.max(maxp, maxn);
};

var wiggleMaxLength = function (nums) {
    let n = nums.length;
    if (n <= 2)
        return true;
    /* 
        dp[i] 表示以 nums[i] 为结尾的最大摆动序列长度
        但是摆动序列可能前一个差值是负数，也可能是正数，所以需两个 dp
    */
    let positive = new Array(n).fill(1);
    let negative = new Array(n).fill(1);
    let maxp = 1,
        maxn = 1;
    for (let i = 0; i < n; ++i) {
        if (nums[i] > nums[i - 1]) {
            positive[i] = maxn + 1;
            maxp = Math.max(positive[i], maxp);
        } else if (nums[i] < nums[i - 1]) {
            negative[i] = maxp + 1;
            maxn = Math.max(negative[i], maxn);
        }
    }
    return Math.max(maxp, maxn);
};

var wiggleMaxLength = function (nums) {
    let n = nums.length;
    if (n <= 2)
        return true;
    let maxp = 1,
        maxn = 1;
    for (let i = 0; i < n; ++i) {
        if (nums[i] > nums[i - 1]) {
            maxp = Math.max(maxn + 1, maxp);
        } else if (nums[i] < nums[i - 1]) {
            maxn = Math.max(maxp + 1, maxn);
        }
    }
    return Math.max(maxp, maxn);
};