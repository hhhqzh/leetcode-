/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length;
    let arr1 = new Array(n).fill(1);
    for (let i = 0; i < n; ++i) {
        if (i < n - 1) {
            if (ratings[i] > ratings[i + 1] && arr1[i] <= arr1[i + 1]) {
                arr1[i] = arr1[i + 1] + 1;
            }
            if (ratings[i] < ratings[i + 1] && arr1[i + 1] <= arr1[i]) {
                arr1[i + 1] = arr1[i] + 1;
            }
        }
    }
    let arr2 = new Array(n).fill(1);
    for (let i = n - 1; i >= 0; --i) {
        if (i > 0) {
            if (ratings[i] > ratings[i - 1] && arr2[i] <= arr2[i - 1]) {
                arr2[i] = arr2[i - 1] + 1;
            }
            if (ratings[i] < ratings[i - 1] && arr2[i - 1] <= arr2[i]) {
                arr2[i - 1] = arr2[i] + 1;
            }
        }
    }
    for (let i = 0; i < n; ++i) {
        arr1[i] = Math.max(arr1[i], arr2[i]);
    }
    return arr1.reduce((pre, cur) => pre + cur);
};