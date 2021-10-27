/**
 * @param {string} s
 * @return {string[]}
 */

// BFS 思想，题目说要 最小！！次数
var removeInvalidParentheses = function (s) {

    const isValid = (str) => {
        let cnt = 0;
        for (var s of str) {
            if (s === '(')
                ++cnt;
            else if (s === ')')
                --cnt;
            if (cnt < 0)
                return false;
        }
        return cnt === 0;
    }

    // bfs
    let level = new Set(); // 用 set 反正重复
    level.add(s);
    let res = [];
    while (true) {
        // 判断 res 中是否有合法字符串，若有则结束
        let arr = Array.from(level);
        res = arr.filter((item) => {
            return isValid(item);
        });
        if (res.length > 0)
            return res;
        // 下一层 level
        let nextLevel = new Set();
        for (let item of level) {
            for (let i = 0; i < item.length; ++i) {
                if (item.charAt(i) !== '(' && item.charAt(i) !== ')')
                    continue;
                nextLevel.add(item.slice(0, i) + item.slice(i + 1));
            }
        }
        level = nextLevel;
    }
};