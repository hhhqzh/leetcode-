/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let n = s.length;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 空字符串可以有 111 种解码方法，解码出一个空字符串。
    for (let i = 0; i < n; ++i) {
        if (s.charAt(i) !== '0')
            dp[i + 1] = dp[i];
        // s[i - 1] 和 s[i] 映射成一个字母
        if (i > 0 && (s.charAt(i - 1) === '1' || (s.charAt(i - 1) === '2' && s.charAt(i) <= '6')))
            dp[i + 1] += dp[i - 1];
    }
    return dp[n];
};