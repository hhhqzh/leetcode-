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
 * @return {number}
 */
 var pathSum = function (root, targetSum) {
    let s = 0;

    const dfs =  (root) => {
        if (root === null)
            return;
        Sum(root, 0);
        dfs(root.left);
        dfs(root.right);
    }

    const Sum = (root, sum) => {
        if (root == null)
            return;
        sum += root.val;
        if (targetSum == sum) {
            ++s;
        }
        Sum(root.left, sum);
        Sum(root.right, sum);
    }

    dfs(root);
    return s;
};