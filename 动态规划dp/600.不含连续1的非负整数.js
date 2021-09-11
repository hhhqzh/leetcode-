/**
 * @param {number} n
 * @return {number}
 */

// 暴力超时
 var findIntegers = function (n) {
    let res = 0;
    for (let i = 0; i <= n; ++i) {
        if ((i & (i >> 1)) === 0)
            ++res;
    }
    return res;
};

// dfs
/**
 * @param {number} n
 * @return {number}
 */
 var findIntegers = function (n) {
    let res = 0;

    const dfs = (cur) => {
        if (cur > n)
            return;
        ++res;
        if (cur & 1)
            dfs(cur << 1);
        else {
            dfs(cur << 1);
            dfs((cur << 1) + 1);
        }
    }

    dfs(1);

    return res;
};
