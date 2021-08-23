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
 * @return {number}
 */
 var maxPathSum = function(root) {
    let res = Number.MIN_VALUE;

    const dfs = (root) => {
        if (root == null)
            return 0;
        let left = Math.max(0, dfs(root.left));
        let right = Math.max(0, dfs(root.right));
        res = Math.max(res, left + right +root.val);
        return root.val + Math.max(left, right);
    }

    dfs(root);

    return res;
};