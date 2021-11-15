/**
 * @param {number} n
 * @return {number}
 */
// 计算每个数成为 [1~n] 的因数的个数，若是奇数则最后是打开，若是偶数则最后是关闭
// 超时。。。
var bulbSwitch = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; ++i) {
        let count = 0;
        for (let j = 1; j <= n; ++j) {
            if (i % j === 0) {
                ++count;
            }
        }
        if (count % 2 === 1)
            ++sum;
    }
    return sum;
};

// 上面思路等同于：小于等于 n 的完全平方数
var bulbSwitch = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; ++i) {
        if (i * i <= n)
            ++sum;
        else
            break;
    }
    return sum;
};

var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};