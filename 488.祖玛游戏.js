/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */

// 超时。。。
var findMinStep = function (board, hand) {
    let res = 0;
    let minRes = Number.MAX_SAFE_INTEGER;

    board = board.split('');
    hand = hand.split('');

    const check = (board) => {
        let l = 0,
            r = 0;
        while (r < board.length) {
            if (board[r] !== board[l]) {
                if (r - l >= 3) {
                    board.splice(l, r - l);
                    return check(board);
                }
                l = r;
            } else {
                ++r;
            }
        }
        if (r - l >= 3) {
            board.splice(l, r - l);
        }
        return board;
    }

    const dfs = (board, hand) => {
        if (board.length === 0) {
            minRes = Math.min(minRes, res);
            return;
        }
        if (hand.length === 0) {
            return;
        }

        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < hand.length; ++j) {
                let tempBoard = [].concat(board);
                let tempHand = [].concat(hand);
                let c = tempHand[j];
                ++res;
                tempBoard.splice(i, 0, c);
                tempHand.splice(j, 1);
                dfs(check(tempBoard), tempHand);
                --res;
            }
        }
    }

    dfs(board, hand);

    return minRes === Number.MAX_SAFE_INTEGER ? -1 : minRes;
};

// 记忆化搜索
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
 const combine = board => {
    for (let slow = fast = 0; fast <= board.length; fast++) {
        if (board[slow] === board[fast]) continue
        if (fast - slow > 2) {
            board = board.substring(0, slow) + board.substring(fast)
            fast = 0
        }
        slow = fast
    }
    return board
}

var findMinStep = function (board, hand) {
    const visited = new Set
    let r = Number.MAX_SAFE_INTEGER
    const d = (board, hand, count) => {
        if (board.length === 0) return r = Math.min(r, count)
        if (hand.length === 0 || visited.has(board + count)) return
        visited.add(board + count)
        for (let i = 0; i < board.length; i++)
            for (let j = 0; j < hand.length; j++)
                d(combine(board.substring(0, i) + hand[j] + board.substring(i)), hand.substring(0, j) + hand.substring(j + 1), count + 1)
    }
    d(board, hand, 0)
    return r === Number.MAX_SAFE_INTEGER ? - 1 : r
};