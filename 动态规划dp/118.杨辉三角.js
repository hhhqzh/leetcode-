/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1)
        return [
            [1]
        ];
    if (numRows === 2)
        return [
            [1],
            [1, 1]
        ];
    let res = [
        [1],
        [1, 1]
    ];
    for (let i = 2; i < numRows; ++i) {
        let arr = [1];
        let t = res[i - 1];
        for (let i = 1; i < t.length; ++i) {
            arr.push(t[i - 1] + t[i]);
        }
        arr.push(1);
        res.push(arr);
    }
    return res;
};