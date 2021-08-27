/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    const lac = (root, p, q) => {
        if ((root.val - p.val) * (root.val - q.val) <= 0)
            return root;
        else if (root.val < p.val && root.val < q.val)
            return lac(root.right, p, q);
        else
            return lac(root.left, p, q);
    }

    return lac(root, p, q);
};