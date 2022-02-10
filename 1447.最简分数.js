/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
    let res = [];
    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j < i; ++j) {
            if (gcd(i, j) === 1) {
                res.push(j + "/" + i);
            }
        }
    }
    return res;
};

// 计算最大公因数，辗转相除法
var gcd = function (i, j) {
    while (i % j !== 0) {
        let t = i % j;
        i = j;
        j = t;
    }
    return j;
}