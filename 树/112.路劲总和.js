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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    let sum = 0;

    const helper = (root, targetSum) => {
        if (root == null)
            return false;
        sum += root.val;
        if (root.left == null && root.right == null && sum == targetSum) {
            return true;
        }
        if (helper(root.left, targetSum) || helper(root.right, targetSum))
            return true;
        sum -= root.val;
        return false;
    }

    return helper(root, targetSum);
};