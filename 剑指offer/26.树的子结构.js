/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    if (A === null || B === null)
        return false;

    const dfs = (root) => {
        if (root === null)
            return false;
        return isSub(root, B) || dfs(root.left) || dfs(root.right);
    }

    const isSub = (A, B) => {
        if (B === null)
            return true;
        if (A === null)
            return false;
        return A.val === B.val && isSub(A.left, B.left) && isSub(A.right, B.right);
    }

    return dfs(A);
};