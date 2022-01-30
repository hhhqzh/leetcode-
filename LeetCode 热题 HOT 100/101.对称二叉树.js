/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function (root) {
    if (root === null)
        return true;

    const dfs = (root1, root2) => {
        if (root1 === null && root2 === null)
            return true;
        if (root1 === null || root2 === null)
            return false;
        if (root1.val !== root2.val)
            return false;
        return dfs(root1.left, root2.right) && dfs(root1.right, root2.left);
    }

    return dfs(root.left, root.right);
};