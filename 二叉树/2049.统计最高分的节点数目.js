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