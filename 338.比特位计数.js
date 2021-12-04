/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let res = new Array(n + 1).fill(0);
    // 异或计算 1 的个数
    for (let i = 1; i <= n; ++i) {
        if ((i - 1) % 2 === 0) {
            res[i] = res[i - 1] + 1;
        } else {
            let t = (i - 1) ^ i;
            let c = 0;
            while (t % 2 === 1) {
                ++c;
                t = Math.floor(t / 2);
            }
            res[i] = res[i - 1] - c + 2;
        }
    }
    return res;
};

var countBits = function (n) {
    let res = new Array(n + 1).fill(0);
    // i & (i - 1) 可以去掉 i 最后面的一个 1
    for (let i = 1; i <= n; ++i) {
        res[i] = res[i & (i - 1)] + 1;
    }
    return res;
};

var countBits = function (n) {
    let res = new Array(n + 1).fill(0);
    // i >> 1 会把最低位去掉，当 i 的最低位是 0，则 i 中 1 的个数与 i >> 1 相同；若是 1， 则比 i >> 1 的个数多 1
    for (let i = 1; i <= n; ++i) {
        res[i] = res[i >> 1] + (i & 1);
    }
    return res;
};