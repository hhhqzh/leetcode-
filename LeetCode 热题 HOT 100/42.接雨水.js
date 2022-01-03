/**
 * @param {number[]} height
 * @return {number}
 */
// dp记录当前下标左右的最大高度
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

// 单调栈
var trap = function (height) {
    let n = height.length;
    let stack = new Array(); // 单调栈
    let res = 0;
    for (let i = 0; i < n; ++i) {
        while (stack.length > 1 && height[i] > height[stack[stack.length - 1]]) {
            let top = stack.pop();
            let left = stack[stack.length - 1];
            let minHeight = Math.min(height[left], height[i]);
            res += (minHeight - height[top]) * (i - left - 1);
        }
        if (stack.length === 1 && height[i] > height[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(i);
    }
    return res;
}