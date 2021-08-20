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
 var minDepth = function (root) {

    // const dfs = (root) => {
    //     if (root == null)
    //         return -1;
    //     if (root.left == null && root.right == null)
    //         return 1;
    //     let lHeight = dfs(root.left);
    //     let rHeight = dfs(root.right);
    //     if (lHeight == -1 || rHeight == -1)
    //         return 1 + (lHeight == -1 ? rHeight : lHeight);
    //     return 1 + Math.min(lHeight, rHeight);
    // }
    // if (root == null)
    //     return 0;
    // return dfs(root);

    if (root == null)
        return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    if (left == 0 || right == 0)
        return left + right + 1;
    return Math.min(left, right) + 1;
};