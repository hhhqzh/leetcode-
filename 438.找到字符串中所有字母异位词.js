/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 暴力
var findAnagrams = function (s, p) {
    let n = p.length;
    let charArr = new Array(26).fill(0);
    for (let i = 0; i < p.length; ++i) {
        ++charArr[p.charCodeAt(i) - 97];
    }
    let res = [];
    let l = 0,
        r = n;
    while (r <= s.length) {
        let tempArr = [].concat(charArr);
        let i = l;
        while (i < r) {
            if (tempArr[s.charCodeAt(i) - 97] > 0)
                --tempArr[s.charCodeAt(i) - 97];
            else
                break;
            ++i;
        }
        if (tempArr.reduce((pre, cur) => {
                return pre + cur;
            }) === 0)
            res.push(l);
        ++r;
        ++l;
    }
    return res;
};

// 滑动窗口
var findAnagrams = function (s, p) {
    let res = [];
    let charArrP = new Array(26).fill(0);
    let charArrS = new Array(26).fill(0);
    let l = r = 0;
    // 初始化
    for (let i = 0; i < p.length; ++i) {
        ++charArrP[p.charCodeAt(i) - 97];
    }
    while (r < s.length) {
        if (r - l + 1 > p.length) {
            --charArrS[s.charCodeAt(l++) - 97];
        }
        ++charArrS[s.charCodeAt(r++) - 97];
        if (charArrP.toString() === charArrS.toString()) {
            res.push(l);
        }
    }
    return res;
};