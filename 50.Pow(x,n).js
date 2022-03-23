/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/**
 * 使用折半计算，每次把n缩小一半
 * 我们让i初始化为n，然后看i是否是2的倍数，是的话x乘以自己，否则res乘以x，i每次循环缩小一半，直到为0停止循环 
 */
var myPow = function (x, n) {
    let res = 1;
    let flag = n < 0 ? false : true;
    n = Math.abs(n);
    for (let i = n; i !== 0; i = Math.floor(i / 2)) {
        if (i % 2 !== 0) {
            res *= x;
        }
        x *= x;
    }
    return flag ? res : 1 / res;
};