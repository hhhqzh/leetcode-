// dp
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;
    let l = 0,
        r = 0,
        max = 0;
    // dp[i][j] 表示字符串 s[i ~ j] 是否为回文字符串 i <= j
    let dp = new Array(n).fill(0).map(() => {
        return new Array(n).fill(false)
    });
    for (let i = 0; i < n; ++i)
        dp[i][i] = true;
    for (let i = n - 1; i >= 0; --i) {
        for (let j = i; j < n; ++j) {
            dp[i][j] = (i + 1 <= j - 1 ? dp[i + 1][j - 1] : true) & s.charAt(i) === s.charAt(j);
            if (dp[i][j]) {
                if (max < j - i + 1) {
                    max = j - i + 1;
                    l = i;
                    r = j;
                }
            }
        }
    }
    return s.slice(l, r + 1);
};