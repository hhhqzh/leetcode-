/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
 var chalkReplacer = function (chalk, k) {
    let i = 0, n = chalk.length;
    let sum = 0;
    for (let i = 0; i < n; ++i)
        sum += chalk[i];
    k %= sum;
    for (let i = 0; i < n; ++i){
        if (chalk[i] > k)
            return i;
        k -= chalk[i];
    }
    return -1;
};