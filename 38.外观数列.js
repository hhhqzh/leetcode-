/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function (n) {
    if (n === 1)
        return "1";
    let res = ['1'];
    let i = 2;
    while (i <= n) {
        let ans = [];
        let j = res.length - 2;
        let k = res.length - 1;
        while (j >= 0) {
            if (res[j] !== res[j + 1]) {
                let num = k - j;
                ans.unshift(res[k]);
                ans.unshift(num + '');
                k = j;
            }
            --j;
        }
        ans.unshift(res[k]);
        ans.unshift(k + 1 + '');
        ++i;
        res = [].concat(ans);
    }
    return res.join('');
};