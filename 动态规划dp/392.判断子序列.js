/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length === 0)
        return true;
    if (t.length === 0)
        return false;
    let i = 0,
        j = 0;
    while (i < s.length && j < t.length) {
        if (s.charAt(i) === t.charAt(j)) {
            ++i;
        }
        ++j;
    }
    return i === s.length;
};

// 自己写的dp，有点蠢
var isSubsequence = function (s, t) {
    if (s.length === 0)
        return true;
    if (t.length === 0)
        return false;
    let n = s.length;
    // dp[i] 表示以 s[i] 为结尾的字符串是否是 字符串 t 的子序列
    let dp = new Array(n).fill(false);
    let j = 0; // 当前访问字符串 t 的下标
    for (let i = 0; i < n && j < t.length; ++i) {
        while (j < t.length) {
            if (s.charAt(i) === t.charAt(j)) {
                ++j;
                dp[i] = i > 1 ? dp[i - 1] : true;
                break;
            }
            ++j;
        }
    }
    return dp[n - 1];
};

// 题解的dp，有点类似于 KMP，虽然我不会 KMP。。。
// dp[i][j] 表示 字符串t 中在第 i 个字符后，字符 j 出现的下标
var isSubsequence = function (s, t) {
    let n = s.length,
        m = t.length;

    let dp = new Array(m + 1).fill(0).map(() => {
        return new Array(26).fill(m)
    });

    for (let i = m - 1; i >= 0; --i) {
        for (let j = 0; j < 26; ++j) {
            if (t.charCodeAt(i) == j + 97)
                dp[i][j] = i;
            else
                dp[i][j] = dp[i + 1][j];
        }
    }
    let add = 0;
    for (let i = 0; i < n; ++i) {
        // 在 t 中不存在字符 s[i]，则 s 不可能是 t 的子序列
        if (dp[add][s.charCodeAt(i) - 97] == m)
            return false;
        add = dp[add][s.charCodeAt(i) - 97] + 1;
    }
    return true;
};