/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    // arr[i] 表示第i个求处于第 arr[i] 列
    let arr = new Array(n).fill(0).map((val, idx) => {
        return idx;
    });
    // 每次遍历处理一行
    for (let row = 0; row < m; ++row) {
        for (let i = 0; i < n; ++i) {
            // 卡住
            if (arr[i] === -1) {
                continue;
            }
            let col = arr[i];
            // 往右偏
            if (grid[row][col] === 1) {
                if (col === n - 1 || grid[row][col + 1] === -1) {
                    arr[i] = -1;
                    continue;
                } else {
                    // 下一列向右
                    arr[i] = col + 1;
                }
            } else { // 往左偏
                if (col === 0 || grid[row][col - 1] === 1) {
                    arr[i] = -1;
                    continue;
                } else {
                    // 下一列向左
                    arr[i] = col - 1;
                }
            }
        }
    }
    return arr;
};