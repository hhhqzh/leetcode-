/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
    // 保存 X 和 O 的数量
    let xCount = 0,
        oCount = 0;
    let t1 = ["", "", ""];
    let t2 = ["", "", ""]
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (board[i].charAt(j) === 'X') {
                ++xCount;
            }
            if (board[i].charAt(j) === 'O') {
                ++oCount;
            }
            t1[i] += board[i].charAt(j);
            t2[j] += board[i].charAt(j);
        }
    }
    // O 的数量大于 X，表示 O 比 X 先放，返回 false
    // 两个字符的数量相差 > 1，则有一个数放了多次，返回 false
    if (oCount > xCount || xCount - oCount > 1) {
        return false;
    }
    let t = board[0][0] + board[1][1] + board[2][2];
    t1.push(t);
    t = board[0][2] + board[1][1] + board[2][0];
    t2.push(t);
    // 保存 X 和 O 赢的数量
    let xFinish = 0,
        oFinish = 0;
    for (let i = 0; i < 4; ++i) {
        let t = new Set(t1[i].split(""));
        if (t1[i].length === 3 && t.size === 1 && t1[i][0] === 'X') {
            ++xFinish;
        } else if (t1[i].length === 3 && t.size === 1 && t1[i][0] === 'O') {
            ++oFinish;
        }
        t = new Set(t2[i].split(""));
        if (t2[i].length === 3 && t.size === 1 && t2[i][0] === 'X') {
            ++xFinish;
        } else if (t2[i].length === 3 && t.size === 1 && t2[i][0] === 'O') {
            ++oFinish;
        }
    }
    // X 和 O 不能同时是赢家
    if (xFinish > 0 && oFinish > 0)
        return false;
    // X 赢的时候，X 的数量必须比 O 多1
    if (xFinish > 0 && xCount === oCount)
        return false
    // O 赢的时候，O 的数量必须与 X 相等
    if (oFinish > 0 && xCount !== oCount)
        return false;
    return true;
};