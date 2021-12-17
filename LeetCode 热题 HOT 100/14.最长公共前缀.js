// 纵向扫描，从下标0开始，判断每一个字符串的下标0，判断是否全部相同，直到遇到不全相同的下标。实际复杂度为0(n * m) n为数组长度，m为最小字符串长度
var longestCommonPrefix = function (strs) {
    let res = "";
    let i = 0;
    while (i < strs[0].length) {
        let flag = true;
        for (let j = 1; j < strs.length; ++j) {
            if (i === strs[j].length || strs[j][i] !== strs[j - 1][i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            res += strs[0][i];
            ++i;
        } else {
            break;
        }
    }
    return res;
};


// 横向扫描：前两个字符串找公共子串，将其结果和第三个字符串找公共子串……直到最后一个串。实际复杂度为0(n * m) n为数组长度，mmm 是字符串数组中的字符串的平均长度
var longestCommonPrefix = function (strs) {
    let res = strs[0];
    for (let i = 1; i < strs.length; ++i) {
        let j = 0;
        let len = Math.min(res.length, strs[i].length);
        while (j < len && res[j] === strs[i][j]) {
            ++j;
        }
        res = res.slice(0, j);
    }
    return res;
};