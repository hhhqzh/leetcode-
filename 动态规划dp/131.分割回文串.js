/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let n = s.length;
    if (n === 0) {
        return [
            []
        ];
    }
    let res = [];
    // dp[i][j] 表示s[i~j]是否为回文串
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    for (let i = 0; i < n; ++i) {
        dp[i][i] = true;
    }
    for (let i = n - 2; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            if (s[i] === s[j]) {
                dp[i][j] = j - i + 1 <= 2 ? true : dp[i + 1][j - 1];
            }
        }
    }

    const dfs = (s, temp, start) => {
        if (s.length === start) {
            res.push([].concat(temp));
            return;
        }
        for (let i = start; i < s.length; ++i) {
            if (dp[start][i]) {
                temp.push(s.substring(start, i + 1));
                dfs(s, temp, i + 1);
                temp.pop();
            }
        }
    }

    dfs(s, [], 0);
    return res;
};