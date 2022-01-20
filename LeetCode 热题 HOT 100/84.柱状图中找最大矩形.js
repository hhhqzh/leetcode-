// 计算每个柱子所能组成的最大矩形

// 暴力超时
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let res = 0;
    for (let i = 0; i < n; ++i) {
        let w = 1;
        let j = i - 1;
        // 找到左边第一个比当前柱子小的
        while (j >= 0 && heights[j] >= heights[i]) {
            ++w;
            --j;
        }
        j = i + 1;
        // 找到右边第一个比当前柱子小的
        while (j < n && heights[j] >= heights[i]) {
            ++w;
            ++j
        }
        res = Math.max(res, w * heights[i]);
    }
    return res;
};

// 单调栈（递增）模拟
var largestRectangleArea = function (heights) {
    let res = 0;
    let stack = new Array();
    heights.unshift(0);
    heights.push(0);
    for (let i = 0; i < heights.length; ++i) {
        // 栈中的下一个柱体就是其「左边第一个小于自身的柱体」；
        // 若当前柱体 i 的高度小于栈顶，说明当前柱体是栈顶柱体右边第一个小于栈顶柱体的柱体
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            res = Math.max(res, h * (i - stack[stack.length - 1] - 1));
        }
        stack.push(i);
    }
    return res;
};