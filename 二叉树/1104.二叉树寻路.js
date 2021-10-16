/**
 * @param {number} label
 * @return {number[]}
 */
 var pathInZigZagTree = function (label) {
    let height = 0;
    let t = label;
    while (t) {
        ++height;
        t = Math.floor(t / 2);
    }
    let res = [];
    let flag = true;
    while (label) {
        if (flag) {
            res.push(label);
        } else {
            res.push(Math.pow(2, height - 1) + Math.pow(2, height) - 1 - label);
        }
        flag = !flag;
        label = Math.floor(label / 2);
        --height;
    }
    return res.reverse();
};