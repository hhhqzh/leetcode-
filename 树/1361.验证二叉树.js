/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
 var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    let cnt = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        if (leftChild[i] !== -1) {
            ++cnt[leftChild[i]];
        }
        if (rightChild[i] !== -1) {
            ++cnt[rightChild[i]];
        }
    }
    let flag = 0;
    let root = 0;
    for (let i = 0; i < n; ++i) {
        if (cnt[i] > 1)
            return false;
        if (cnt[i] === 0) {
            ++flag;
            root = i;
        }
    }
    // 若有多个入读为0的节点，则不可能是树
    if (flag > 1 || flag === 0)
        return false;
    // 根据 root 根节点遍历整棵树，看是否所有节点都被访问到
    cnt = new Array(n).fill(0);
    // 层次遍历
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        cnt[node] = 1;
        if (leftChild[node] !== -1)
            queue.push(leftChild[node]);
        if (rightChild[node] !== -1)
            queue.push(rightChild[node]);
    }
    return cnt.reduce((pre, cur) => {
        return pre + cur;
    }) === n;
};