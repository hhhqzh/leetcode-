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
 * @return {boolean}
 */
 var isBalanced = function(root) {

    const dfs = (root) => {
        if (root == null)
            return 0;
        if (root.left == null && root.right == null)
            return 1;
        let lHeight = dfs(root.left);
        let rHeight = dfs(root.right);
        if (lHeight == -1 || rHeight == -1)
            return -1;
        if (Math.abs(lHeight - rHeight) > 1) 
            return -1;
        return Math.max(lHeight, rHeight) + 1;
    }

    return dfs(root) != -1;
};