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
var findSecondMinimumValue = function(root) {
    let res = -1;
    const val = root.val;
    const dfs = (root) => {
        if (root === null)
            return;
        if (res !== -1 && root.val >= res)
            return;
        if (root.val > val)
            res = root.val;
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
};