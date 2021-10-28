/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; ++i) {
        for (let word of wordDict) {
            let len = word.length;
            if (len <= i && word === s.slice(i - len, i) && dp[i - len]) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
};