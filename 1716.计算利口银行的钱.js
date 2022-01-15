/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    const MOD = 7;
    let total = 0;
    let week = 0;
    let cur = 0;
    for (let i = 1; i <= n; ++i) {
        // 周一
        if (i % MOD === 1) {
            cur = week;
            ++week;
        }
        ++cur;
        total += cur;
    }
    return total;
};