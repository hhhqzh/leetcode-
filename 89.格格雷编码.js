/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let res = [0];
    let map = new Map();
    let arr = new Array(16).fill(0);
    map.set([...arr].join('', 1));
    for (let i = 1; i < Math.pow(2, n); ++i) {
        let s;
        for (let j = 15; j >= 0; --j) {
            arr[j] = arr[j] === 0 ? 1 : 0;
            s = [...arr].join("");
            if (map.has(s)) {
                arr[j] = arr[j] === 0 ? 1 : 0;
            } else {
                map.set(s, 1);
                break;
            }
        }
        res.push(parseInt(s, 2));
    }
    return res;
};

// 对称性构造
var grayCode = function (n) {
    let res = [0];
    while (n-- > 0) {
        let m = res.length;
        for (let i = m - 1; i >= 0; --i) {
            res[i] = res[i] << 1;
            res.push(res[i] + 1);
        }
    }
    return res;
}

//  G(i) = i ^ (i/2);
var grayCode = function (n) {
    let res = [];
    for (let i = 0; i < 1 << n; ++i) {
        res.push(i ^ i >> 1);
    }
    return res;
}