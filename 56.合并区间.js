/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let tempArr = [].concat(intervals);
    tempArr.sort((a, b) => {
        return a[0] - b[0];
    })
    let res = [];
    res.push(tempArr[0]);
    let i = 1;
    while (i < tempArr.length) {
        if (tempArr[i][0] > res[res.length - 1][1]) {
            res.push(tempArr[i]);
        } else if (tempArr[i][1] > res[res.length - 1][1]) {
            res[res.length - 1][1] = tempArr[i][1];
        }
        ++i;
    }
    return res;
};

// 双指针
var merge = function (intervals) {
    let tempArr = [].concat(intervals);
    tempArr.sort((a, b) => {
        return a[0] - b[0];
    })
    let res = [];
    let i = 0;
    while (i < tempArr.length) {
        let end = tempArr[i][1];
        let j = i + 1;
        while (j < tempArr.length && tempArr[j][0] <= end) {
            end = Math.max(end, tempArr[j][1]);
            ++j;
        }
        res.push([tempArr[i][0], end]);
        i = j;
    }
    return res;
};