/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    if (n == 0)
        return 0;
    if (n == 1 || n == 2)
        return 1;
    var a  = 0, b = 1, c = 1;
    var res;
    for (let i = 3; i <= n; ++i) {
        res = a + b + c;
        a = b;
        b = c;
        c = res;
    }
    return res;
};