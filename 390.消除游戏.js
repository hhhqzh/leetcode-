// 超时
var lastRemaining = function (n) {
    let arr = new Array(n).fill(0).map((a, index) => {
        return index + 1;
    });
    let i = 0,
        flag = true;
    while (arr.length > 1) {
        arr.splice(i, 1);
        if (flag) {
            ++i;
        } else {
            i -= 2;
        }
        if (i >= arr.length) {
            flag = false;
            i = arr.length - 1;
        }
        if (i < 0) {
            flag = true;
            i = 0;
        }
    }
    return arr[0];
};

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    let flag = true;
    let res = 1; // 保存从左到右的第一个数
    let step = 1; // 每次走的步数
    while (n > 1) {
        if (flag || n % 2 === 1) {
            res += step;
        }
        flag = !flag;
        step *= 2;
        n = Math.floor(n / 2);
    }
    return res;
};


var lastRemaining = function (n) {
    let a1 = 1,
        an = n; // 每一轮的第一个数和最后一个数
    let k = 0,
        cnt = n,
        step = 1; // k为第几轮，cnt为剩余数，step为每次删除走的步数
    while (cnt > 1) {
        if (k % 2 === 0) { // 从左往右
            a1 = a1 + step;
            an = cnt % 2 === 0 ? an : an - step;
        } else { // 从右往左 
            a1 = cnt % 2 === 0 ? a1 : a1 + step;
            an = an - step;
        }
        ++k;
        step *= 2;
        cnt = Math.floor(cnt / 2);
    }
    return a1;
}