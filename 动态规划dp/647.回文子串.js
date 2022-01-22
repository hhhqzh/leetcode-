// dp[i][j] 表示从s[i]到s[j]是否是一个回文串
var countSubstrings = function (s) {
    let n = s.length;
    let dp = new Array(n).fill(0).map(() => {
        return new Array(n).fill(false);
    });
    let res = 0;
    for (let i = 0; i < n; ++i) {
        dp[i][i] = true;
        ++res;
    }
    for (let i = n - 2; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            if (s.charAt(i) === s.charAt(j)) {
                dp[i][j] = (i + 1 <= j - 1) ? dp[i + 1][j - 1] : true;
            }
            if (dp[i][j]) {
                ++res;
            }
        }
    }
    return res;
};


//以第i位为中间，往两边扩充，回文串长度分为奇数和偶数
var countSubstrings = function (s) {
    let n = s.length;
    let res = 0;

    const helper = (s, start, end) => {
        while (start >= 0 && end < n && s.charAt(start) === s.charAt(end)) {
            ++res;
            ++end;
            --start;
        }
    }

    for (let i = 0; i < n; ++i) {
        helper(s, i, i);
        helper(s, i, i + 1);
    }
    return res;
};