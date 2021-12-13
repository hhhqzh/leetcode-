/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    let n = s.length;
    // dp[i][j] 表示子串 s[i ~ j]是否是回文串
    let dp = new Array(n).fill(0).map(() => { return new Array(n).fill(false) });
    let maxLen = 0, start = 0, end = 0;
    for (let i = n - 1; i >= 0; --i) {
        for (let j = i; j < n; ++j) {
            dp[i][j] = (i + 1 <= j - 1 ? dp[i + 1][j - 1] : true) & s.charAt(i) === s.charAt(j);
            if (dp[i][j] && maxLen < (j - i + 1)) {
                maxLen = j - i + 1;
                start = i;
                end = j;
            }
        }
    }
    return s.slice(start, end + 1);
};

// 一维化
var longestPalindrome = function (s) {
    let n = s.length;
    let maxLen = 0, start = 0, end = 0;
    let dp = new Array(n).fill(false);
    dp[n - 1] = true;
    for (let i = n - 2; i >= 0; --i) {
        dp[i] = true;
        for (let j = n - 1; j > i; --j) {
            dp[j] = (i + 1 <= j - 1 ? dp[j - 1] : true) & s.charAt(i) === s.charAt(j);
            if (dp[j] && maxLen < (j - i + 1)) {
                maxLen = j - i + 1;
                start = i;
                end = j;
            }
        }
    }
    return s.slice(start, end + 1);
};