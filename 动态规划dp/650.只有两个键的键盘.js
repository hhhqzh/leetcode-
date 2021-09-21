/**
 * @param {number} n
 * @return {number}
 */
// var minSteps = function (n) {
//     if (n === 1)
//         return 0;
//     let dp = new Array(n + 1);
//     dp[1] = 0;
//     for (let i = 2; i <= n; ++i) {
//         let factor = getMaxFactor(i);
//         let t = i / factor;
//         dp[i] = dp[factor]  + t;
//     }
//     return dp[n];
// };

// var getMaxFactor = function (n) {
//     for (let i = Math.floor(n / 2); i > 0; --i) {
//         if (n % i === 0)
//             return i;
//     }
//     return 1;
// }

var minSteps = function (n) {
    let res = 0;
    for (let i = 2; i <= n; ++i) {
        while (n % i === 0) {
            res += i;
            n /= i;
        }
    }
    return res;
}