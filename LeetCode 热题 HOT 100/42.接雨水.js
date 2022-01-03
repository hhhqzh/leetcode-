/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let res = 0;
    let leftHeight = new Array(n).fill(0); // leftHeight[i] 保存下标为i往左的最高柱子高度
    let rightHeight = new Array(n).fill(0); // rightHeight[i] 保存下标为i往右的最高柱子高度
    leftHeight[0] = height[0];
    rightHeight[n - 1] = height[n - 1];
    for (let i = 1; i < n; ++i) {
        leftHeight[i] = leftHeight[i - 1] > height[i] ? leftHeight[i - 1] : height[i];
        rightHeight[n - i - 1] = rightHeight[n - i] > height[n - i - 1] ? rightHeight[n - i] : height[n - i - 1];
    }
    for (let i = 0; i < n; ++i) {
        res += Math.min(leftHeight[i], rightHeight[i]) - height[i];
    }
    return res;
}