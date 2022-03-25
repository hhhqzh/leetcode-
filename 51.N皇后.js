/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let res = [],
        col = new Array(n).fill(false), // 记录列是否有皇后
        left = new Array(2 * n - 1).fill(false), // 记录主对角线是否有皇后
        right = new Array(2 * n - 1).fill(false); // 记录次对角线是否有皇
    let queen = new Array(n).fill(0).map(() => {
        return new Array(n).fill('.')
    });
    const dfs = (row, queen) => {
        if (row === n) {
            let temp = [];
            for (let q of queen) {
                temp.push(q.join(''));
            }
            res.push(temp);
            return;
        }
        for (let c = 0; c < n; ++c) {
            // 同行列同主次对角线都没有皇后
            if (!col[c] && !left[row + c] && !right[row - c + n - 1]) {
                queen[row][c] = 'Q';
                col[c] = true;
                left[row + c] = true;
                right[row - c + n - 1] = true;
                dfs(row + 1, queen);
                right[row - c + n - 1] = false;
                left[row + c] = false;
                col[c] = false;
                queen[row][c] = '.';
            }
        }
    }

    dfs(0, queen);
    return res;
};