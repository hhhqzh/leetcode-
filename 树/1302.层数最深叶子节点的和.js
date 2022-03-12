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
 var deepestLeavesSum = function(root) {
    let maxHeight = 0, max = 0;

    const dfs = (root, height) => {
        if (root === null)
            return;
        if (root.left === null && root.right === null) {
            if (height === maxHeight) {
                max += root.val;
            } else if (height > maxHeight) {
                max = root.val;
                maxHeight = height;
            }
        }
        dfs(root.left, height + 1);
        dfs(root.right, height + 1);
    }

    dfs(root, 0);
    return max;
};