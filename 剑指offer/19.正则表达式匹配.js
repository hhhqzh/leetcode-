/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function (s, p) {
    let m = s.length;
    let n = p.length;

    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));
    dp[0][0] = true;

    const matches = (i, j) => {
        if (i === 0)
            return false;
        if (p.charAt(j - 1) === '.')
            return true;
        return s.charAt(i - 1) === p.charAt(j - 1);
    }

    for (let i = 0; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (p.charAt(j - 1) === '*') {
                dp[i][j] = dp[i][j - 2];
                if (matches(i, j - 1))
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
            } else {
                if (matches(i, j)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
    }
    return dp[m][n];
};