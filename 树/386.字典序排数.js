/**
 * @param {number} n
 * @return {number[]}
 */
// 10叉树先序遍历
var lexicalOrder = function (n) {
    let res = [];

    const dfs = (cur, n) => {
        if (cur > n) {
            return;
        }
        res.push(cur);
        for (let i = 0; i < 10; ++i) {
            dfs(cur * 10 + i, n);
        }
    }

    for (let i = 1; i < 10; ++i) {
        dfs(i, n);
    }
    return res;
};

var lexicalOrder = function (n) {
    let res = [];
    let cur = 1;
    for (let i = 0; i < n; ++i) {
        res.push(cur);
        if (cur * 10 <= n) {
            cur *= 10;
        } else {
            while (cur % 10 === 9 || cur + 1 > n) {
                cur = Math.floor(cur / 10);
            }
            ++cur;
        }
    }
    return res;
};