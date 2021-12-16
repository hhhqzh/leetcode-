/**
 * @param {number[]} height
 * @return {number}
 */
// 单调栈
var maxArea = function (height) {
    let max = 0;
    let idx = new Array(); // 单调栈
    idx.push(0);
    for (let i = 1; i < height.length; ++i) {
        for (let j = 0; j < idx.length; ++j) {
            max = Math.max(max, (i - idx[j]) * Math.min(height[i], height[idx[j]]));
        }
        if (height[idx[idx.length - 1]] < height[i]) {
            idx.push(i)
        }
    }
    return max;
};

var maxArea = function (height) {
    let max = 0;
    let i = 0,
        j = height.length - 1;
    while (i < j) {
        let h = Math.min(height[i], height[j]);
        max = Math.max(max, h * (j - i));
        if (height[i] > height[j])
            --j;
        else {
            ++i;
        }
    }
    return max;
};