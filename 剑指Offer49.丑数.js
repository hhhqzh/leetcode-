/**
 * @param {number} n
 * @return {number}
 */

/*
    任意一个丑数都是由小于它的某一个丑数*2，*3或者*5得到的
    采用三指针、思路有点像数组的合并
*/
 var nthUglyNumber = function (n) {
    var dp = new Array(n).fill(0);
    dp[0] = 1;
    var a = 0, b = 0, c = 0;
    for (let i = 1; i < n; ++i) {
        let _A = dp[a] * 2;
        let _B = dp[b] * 3;
        let _C = dp[c] * 5;
        dp[i] = Math.min(_A, Math.min(_B, _C));
        if (dp[i] == _A)
            ++a;
        if (dp[i] == _B)
            ++b;
        if (dp[i] == _C)
            ++c;
    }
    return dp[n - 1];
};
