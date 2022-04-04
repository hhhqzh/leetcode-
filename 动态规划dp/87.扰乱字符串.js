/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    let map = new Map();

    const dfs = (s1, s2) => {
        if (s1.join('') === s2.join('')) {
            return true;
        }
        if (s1.length !== s2.length || [].concat(s1).sort().join('') !== [].concat(s2).sort().join('')) {
            return false;
        }
        let str = s1.join('') + ',' + s2.join('');
        if (map.has(str)) {
            return map.get(str);
        }
        for (let i = 1; i < s1.length; ++i) {
            if (dfs(s1.slice(0, i), s2.slice(0, i)) && dfs(s1.slice(i), s2.slice(i))) {
                map.set(str, true);
                return true;
            }
            if (dfs(s1.slice(0, i), s2.slice(-i)) && dfs(s1.slice(i), s2.slice(0, -i))) {
                map.set(str, true);
                return true;
            }
        }
        map.set(str, false);
        return false;
    }

    return dfs(s1.split(''), s2.split(''));
};


var isScramble = function (s1, s2) {
    let n = s1.length,
        m = s2.length;
    if (n !== m) {
        return false;
    }
    let dp = new Array(n).fill(0).map(() => {
        return new Array(n).fill(0).map(() => {
            return new Array(n + 1).fill(false);
        });
    });
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            dp[i][j][0] = true;
            dp[i][j][1] = s1[i] === s2[j];
        }
    }
    for (let len = 2; len <= n; ++len) {
        for (let i = 0; i <= n - len; ++i) {
            for (let j = 0; j <= n - len; ++j) {
                for (let k = 1; k < len; ++k) {
                    if (dp[i][j][k] && dp[i + k][j + k][len - k]) {
                        dp[i][j][len] = true;
                        break;
                    }
                    if (dp[i][j + len - k][k] && dp[i + k][j][len - k]) {
                        dp[i][j][len] = true;
                        break;
                    }
                }
            }
        }
    }
    return dp[0][0][n];
}