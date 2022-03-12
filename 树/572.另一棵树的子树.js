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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if (!root)
        return false;

    const dfs = (root, subRoot) => {
        if (!root && !subRoot)
            return true;
        if (!root || !subRoot)
            return false;
        if (root.val === subRoot.val) {
            return dfs(root.left, subRoot.left) && dfs(root.right, subRoot.right);
        } else {
            return false;
        }
    }

    return dfs(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};