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