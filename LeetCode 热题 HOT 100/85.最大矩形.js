// 把每一行都看成一个柱形图，遍历84题的算法
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return 0;
    }
    let res = 0;
    let m = matrix.length,
        n = matrix[0].length;
    let heights = new Array(n).fill(0);
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] === '1') {
                ++heights[j];
            } else {
                heights[j] = 0;
            }
        }
        res = Math.max(res, largestRectangleArea(heights));
    }
    return res;

};

var largestRectangleArea = function (heights) {
    let res = 0;
    let stack = new Array();
    let temp = [...heights];
    temp.unshift(0);
    temp.push(0);
    for (let i = 0; i < temp.length; ++i) {
        // 栈中的下一个柱体就是其「左边第一个小于自身的柱体」；
        // 若当前柱体 i 的高度小于栈顶，说明当前柱体是栈顶柱体右边第一个小于栈顶柱体的柱体
        while (stack.length > 0 && temp[i] < temp[stack[stack.length - 1]]) {
            let h = temp[stack.pop()];
            res = Math.max(res, h * (i - stack[stack.length - 1] - 1));
        }
        stack.push(i);
    }
    return res;
};


// left[i][j] 表示 matrix[i][j]的左边连续1的数量
// 对于矩阵中的每一个点 matrix[i][j]，枚举以该点为右下角的全1矩形
var maximalRectangle = function (matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return 0;
    }
    let m = matrix.length,
        n = matrix[0].length;
    let left = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0);
    });
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] === '1') {
                left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
            }
        }
    }

    let res = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            // 计算以 matrix[i][j] 为右下角的矩阵的最大面积
            if (matrix[i][j] === '1') {
                let width = left[i][j];
                let area = width; // width  * 1
                for (let k = i - 1; k >= 0; --k) {
                    width = Math.min(width, left[k][j]);
                    area = Math.max(area, width * (i - k + 1));
                }
                res = Math.max(res, area);
            }
        }
    }
    return res;
}