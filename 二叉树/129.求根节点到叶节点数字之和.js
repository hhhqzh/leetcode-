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
 var sumNumbers = function(root) {
    let res = 0;
    let num = 0;
    const dfs = (root) => {
        if (root === null)
            return;
        num = num * 10 + root.val;
        if (root.left === null && root.right === null)
            res += num;
        dfs(root.left);
        dfs(root.right);
        num = Math.floor(num / 10);

    }

    dfs(root);

    return res;
};