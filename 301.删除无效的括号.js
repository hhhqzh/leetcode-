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

// DFS 剪枝
// 对于每个 '('或')' 有两种情况，一种是添加，一种是不添加，遇到其他字符则添加。

var removeInvalidParentheses = function (s) {
    let len = 0; // 最后字符串的长度
    let n = s.length;
    let l = 0,
        r = 0; // ( 和 ) 超出的个数
    let c1 = 0,
        c2 = 0; // ( 和 ) 的个数
    for (let c of s) {
        if (c === '(') {
            ++l;
            ++c1;
        } else if (c === ')') {
            if (l) --l;
            else ++r;
            ++c2;
        }
    }
    len = n - l - r;
    let max = Math.min(c1, c2); // 最终字符串中 ( 和 ) 最多的个数。
    let res = new Set();

    // index为当前访问的s的字符， cur当前的字符串，l为还需要去掉的(的个数，r为还需要去掉的)的个数
    const dfs = (index, cur, l, r, score) => {
        if (l < 0 || r < 0 || score < 0 || score > max)
            return;
        if (l === 0 && r === 0 && len === cur.length) {
            res.add(cur);
        }
        if (index === n)
            return;
        let c = s.charAt(index);
        if (c === '(') {
            dfs(index + 1, cur + c, l, r, score + 1); // 添加 (
            dfs(index + 1, cur, l - 1, r, score); // 删除 (
        } else if (c === ')') {
            dfs(index + 1, cur + c, l, r, score - 1); // 添加 )
            dfs(index + 1, cur, l, r - 1, score); // 删除 )
        } else {
            dfs(index + 1, cur + c, l, r, score);
        }
    }
    dfs(0, "", l, r, 0);
    return Array.from(res);
}