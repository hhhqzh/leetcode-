/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
    let cnt = 0;
    let maxScore = 0;
    let n = parents.length;

    const dfs = (son, parent, treeSize) => {
        let remain = treeSize - 1; // 减去当前节点
        let sum = 1;
        for (let s of son[parent]) {
            let size = dfs(son, s, treeSize);
            sum *= size;
            remain -= size;
        }
        sum *= (remain === 0 ? 1 : remain);
        if (maxScore < sum) {
            maxScore = sum;
            cnt = 1;
        } else if (maxScore === sum) {
            ++cnt;
        }
        return treeSize - remain;
    }

    let son = new Array(n).fill();
    for (let i = 0; i < n; ++i)
        son[i] = [];
    for (let i = 1; i < n; ++i) {
        son[parents[i]].push(i);
    }
    dfs(son, 0, n);
    return cnt;
};

// 超时
var countHighestScoreNodes = function (parents) {
    let maxScore = 0,
        n = parents.length,
        cnt = 0;

    const dfs = (root) => {
        let a = parents.indexOf(root),
            b = parents.lastIndexOf(root),
            left = 0,
            right = 0;
        if (a !== -1) {
            left = dfs(a);
        }
        if (b !== -1 && a !== b) {
            right = dfs(b);
        }
        let sum = (left === 0 ? 1 : left) * (right === 0 ? 1 : right) * (n - 1 - left - right === 0 ? 1 : n - 1 - left - right);
        if (maxScore < sum) {
            maxScore = sum;
            cnt = 1;
        } else if (maxScore === sum) {
            ++cnt;
        }
        return left + right + 1;
    }
    dfs(0);
    return cnt;
};