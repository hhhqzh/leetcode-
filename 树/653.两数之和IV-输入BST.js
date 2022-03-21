/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let map = new Map();
    const dfs = (root, k) => {
        if (root === null) {
            return false;
        }
        if (map.has(k - root.val)) {
            return true;
        }
        map.set(root.val, 1);
        return dfs(root.left, k) || dfs(root.right, k)
    }
    return dfs(root, k);
};