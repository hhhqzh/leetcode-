/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

/*
    dfs(i, r)返回序列[l,r]生成的所有可执行的二叉搜索树。
*/
 var generateTrees = function(n) {
    const dfs = (l, r) =>{
        let res = [];
        if (l > r) {
            return [null];
        }
        for (let i = l; i <= r; ++i) {
            let leftArray = dfs(l, i - 1);
            let rightArray = dfs(i + 1, r);
            for (const _left of leftArray) {
                for (const _right of rightArray) {
                    let node = new TreeNode(i);
                    node.left = _left;
                    node.right = _right;
                    res.push(node);
                }
            }
        }
        return res;
    }
    if (n == 0) return [];
    return dfs(1, n);
};