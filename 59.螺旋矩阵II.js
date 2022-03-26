/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let res = new Array(n).fill(0).map(() => new Array(n));
    let cur = 1;
    let l = 0,
        r = n - 1,
        t = 0,
        b = n - 1; // 上下左右边界
    let i = t,
        j = l;
    while (l <= r) {
        while (j <= r) {
            res[i][j] = cur;
            ++cur;
            ++j;
        }
        ++i;
        --j;
        ++t;
        while (i <= b) {
            res[i][j] = cur;
            ++cur;
            ++i;
        }
        --j;
        --i;
        --r;
        while (j >= l) {
            res[i][j] = cur;
            ++cur;
            --j;
        }
        ++j;
        --i;
        --b;
        while (i >= t) {
            res[i][j] = cur;
            ++cur;
            --i;
        }
        ++j;
        ++i;
        ++l;

    }

    return res;
};