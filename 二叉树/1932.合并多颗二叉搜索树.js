/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode[]} trees
 * @return {TreeNode}
 */

// 超时
var canMerge = function (trees) {
    // 题目说存在值相同的两个根节点，则用 map 来保存每个值对应的 BST
    let map = new Map();
    for (let tree of trees) {
        map.set(tree.val, tree);
    }

    const dfs = (root, parent) => {
        if (root === null)
            return null;
        if (root.left === null && root.right === null) {
            // 存在于叶子节点值相同的根节点
            if (map.has(root.val) && map.get(root.val) !== parent) {
                let t = map.get(root.val);
                // 把 t 从 trees 中删去
                let idx = trees.indexOf(t);
                trees.splice(idx, 1);
                map.delete(root.val);
                i = trees.indexOf(parent) - 1;
                return t;
            }
        }
        root.left = dfs(root.left, parent);
        root.right = dfs(root.right, parent);
        return root;
    }

    let i = 0;
    while (i < trees.length && trees.length > 1) {
        dfs(trees[i], trees[i]);
        ++i;
    }
    if (trees.length > 1)
        return null;

    // 判断 root 是否为 BFT
    let last = null;

    const isBST = (root) => {
        if (root === null)
            return true;
        if (!isBST(root.left))
            return false;
        if (last !== null && root.val <= last.val)
            return false;
        last = root;
        return isBST(root.right);
    }

    if (isBST(trees[0]))
        return trees[0];
    return null
};