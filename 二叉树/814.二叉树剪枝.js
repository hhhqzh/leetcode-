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
 * @return {TreeNode}
 */
 var pruneTree = function (root) {

    const dfs = (root) => {
        if (root === null)
            return false;
        let l = dfs(root.left);
        let r = dfs(root.right);
        if (l === false && r === false && root.val === 0)
            return false;
        if (l === false)
            root.left = null;
        if (r === false)
            root.right = null;
        return true;
    }

    if (dfs(root))
        return root;
    else
        return null;
};