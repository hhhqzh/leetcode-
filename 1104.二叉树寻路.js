/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
    var n = 0;
    var t = label;
    var res = [];
    while (t) {
        ++n;
        t = Math.floor(t / 2);
    }
    var flag = true;
    while (label != 1) {
        if (flag) {
            res.push(label);
            flag = false;
        } else {
            sum = Math.pow(2, n - 1) + (Math.pow(2, n) - label - 1);
            res.push(sum);
            flag = true;
        }
        label = Math.floor(label / 2);
        --n;
    }
    res.push(1);
    return res.sort((a, b) => {return a - b;});
};