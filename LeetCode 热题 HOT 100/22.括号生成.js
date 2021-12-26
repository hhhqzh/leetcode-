/**
 * @param {number} n
 * @return {string[]}
 */
// dfs
var generateParenthesis = function (n) {
    let res = [];
    let s = [];
    const dfs = (l, r, total) => {
        if (total === n) {
            res.push(s.join(""));
            return;
        }
        if (l < n) {
            s.push('(');
            dfs(l + 1, r, total);
            s.pop();
        }
        if (l > r) {
            s.push(')');
            dfs(l, r + 1, total + 1);
            s.pop();
        }
    }
    dfs(0, 0, 0);
    return res;
};

var generateParenthesis = function (n) {
    let res = [];
    const dfs = (l, r, s) => {
        if (l === 0 && r === 0) {
            res.push(s);
            return;
        }
        if (l > 0) {
            dfs(l - 1, r, s + "(");
        }
        if (r > l) {
            dfs(l, r - 1, s + ")");
        }
    }
    dfs(n, n, "");
    return res;
};