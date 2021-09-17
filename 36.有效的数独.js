/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function (board) {
    let map;

    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            map = new Map();
            for (let r = i * 3; r < (i + 1) * 3; ++r) {
                for (let c = j * 3; c < (j + 1) * 3; ++c) {
                    if (board[r][c] !== "." && map.has(board[r][c])) {
                        return false;
                    } else if (board[r][c] !== ".")
                        map.set(board[r][c], 1);
                }
            }
        }
    }
    for (let i = 0; i < 9; ++i) {
        let map1 = new Map();
        let map2 = new Map();
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] !== "." && map1.has(board[i][j])) {
                return false;
            } else if (board[i][j] !== ".")
                map1.set(board[i][j], 1);

            if (board[j][i] !== "." && map2.has(board[j][i])) {
                return false;
            } else if (board[j][i] !== ".")
                map2.set(board[j][i], 1);
        }
    }
    return true;
};