/**
 * @param {number[]} nums
 * @return {number}
 */

// sum + (n - 1) * k = n * x, sum 为原数组的和，k 为操作次数，x 为最后数组元素都相等的值
// 又∵ 原数组的最小值 minval + k = x
// 代入地 k = sum - minval * n;
// var minMoves = function (nums) {
//     let sum = nums.reduce((pre, cur, index, arr) => {return pre + cur;});
//     return sum - Math.min(...nums) * nums.length;
// };

//  n-1个数同时加一，就好比每次有一个数自身减一，因为只能做减法，所以数组最后的数只能是最小值。这样的话每个元素减去最小值求其和就是答案。
var minMoves = function (nums) {
    let minVal = Math.min(...nums);
    let sum = 0;
    for (let num of nums) {
        sum += num - minVal;
    }
    return sum;
}