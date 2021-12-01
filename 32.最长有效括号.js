/**
 * @param {string} s
 * @return {number}
 */
/**
 * 用栈模拟一遍，将所有无法匹配的括号的位置全部置1
 * 然后找最长连续 0 的长度
 */
var longestValidParentheses = function (s) {
    let stack = [];
    let mark = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) === '(') {
            stack.push(i);
        } else {
            if (stack.length === 0) {
                mark[i] = 1;
            } else {
                stack.pop();
            }
        }
    }
    while (stack.length > 0) {
        mark[stack.pop()] = 1;
    }
    let res = 0;
    let len = 0;
    for (let i = 0; i < mark.length; ++i) {
        if (mark[i] === 1) {
            len = 0;
        } else {
            ++len;
            res = Math.max(res, len);
        }
    }
    return res;
};

// 一维dp
var longestValidParentheses = function (s) {
    let len = s.length;
    if (len === 0) {
        return 0;
    }
    // dp[i] 為以i結尾的最長有效括號長度
    let dp = new Array(len).fill(0);
    for (let i = 1; i < len; ++i) {
        // 以 ) 結尾才有效
        if (s.charAt(i) === ')') {
            let pre = i - dp[i - 1] - 1;
            // [pre, i] 能構成有效的括號
            if (pre >= 0 && s.charAt(pre) === '(') {
                dp[i] = dp[i - 1] + 2;
                // 是否能與pre之前鏈接起來
                if (pre > 0) {
                    dp[i] += dp[pre - 1];
                }
            }
        }
    }
    return Math.max(...dp);
};

// 左右遍历
var longestValidParentheses = function (s) {
    let l = 0,
        r = 0,
        maxLen = 0;
    for (let c of s) {
        if (c === '(')
            ++l;
        else
            ++r;
        if (l === r)
            maxLen = Math.max(maxLen, l + r);
        else if (r > l)
            l = r = 0;
    }
    l = r = 0;
    for (let i = s.length - 1; i >= 0; --i) {
        if (s.charAt(i) === '(')
            ++l;
        else
            ++r;
        if (l === r)
            maxLen = Math.max(maxLen, l + r);
        else if (l > r)
            l = r = 0;
    }
    return maxLen;
}