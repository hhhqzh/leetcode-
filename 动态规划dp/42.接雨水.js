/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    // 两个数组 leftHeight 和 rightHeight，分别代表这对于位置 i 两边最大的高度
    let leftHeight = new Array(n);
    leftHeight[0] = height[0];
    let rightHeight = new Array(n);
    rightHeight[n - 1] = height[n - 1]
    for (let i = 1; i < n; ++i)
        leftHeight[i] = Math.max(leftHeight[i - 1], height[i]);
    for (let i = n - 2; i >= 0; --i)
        rightHeight[i] = Math.max(rightHeight[i + 1], height[i]);
    let res = 0;
    for (let i = 0; i < n; ++i) {
        res += Math.min(leftHeight[i], rightHeight[i]) - height[i];
    }
    return res;
}