/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function (dividend, divisor) {
    if (dividend == Number.MIN_VALUE && divisor == -1) return Number.MAX_VALUE;
    let flag = (dividend ^ divisor) < 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let res = 0;
    for (let i = 31; i >= 0; --i) {
        if ((dividend >> i) >= divisor) {
            res += 1 << i;
            dividend -= divisor << i;
        }
    }
    return flag ? -res : res;
};

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

 const MAX = 2147483647, MIN = -2147483648;

 var divide = function (dividend, divisor) {
     if (dividend == MIN && divisor == -1) return MAX;
     let flag = (dividend ^ divisor) < 0;
     dividend = Math.abs(dividend);
     divisor = Math.abs(divisor);
     let res = 0;
     for (let i = 31; i >= 0; --i) {
         if ((dividend >>> i) >= divisor) {
             // 1<<31 = -2147483648，需特殊处理
             if (i == 31) {
                 dividend -= MAX;
                 dividend -= 1;
                 res -= MIN;
             } else {
                 res += 1 << i;
                 dividend -= divisor << i;
             }
         }
     }
     return flag ? -res : res;
 };