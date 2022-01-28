// 升序排序 + 暴力 超时
var numberOfWeakCharacters = function (properties) {
    properties.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    let res = 0;
    for (let i = 0; i < properties.length; ++i) {
        for (let j = properties.length - 1; j > i; --j) {
            if (properties[j][1] > properties[i][1] && properties[j][0] > properties[i][0]) {
                ++res;
                break;
            } else if (properties[j][0] === properties[i][0]) {
                break;
            }
        }
    }
    return res;
};

// 降序排序 + 最大防御值（单调栈思想）
var numberOfWeakCharacters = function (properties) {
    // 按攻击力降序排序
    properties.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    });
    // maxDefense 为当前最大的防御值
    let maxDefense = -1;
    let n = properties.length;
    let res = 0;
    for (let i = 0; i < n; ++i) {
        if (maxDefense > properties[i][1]) {
            ++res;
        }
        maxDefense = Math.max(maxDefense, properties[i][1]);
    }
    return res;
};