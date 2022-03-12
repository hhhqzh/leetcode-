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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let sum = 0;
    let res = [];
    let arr = [];

    const helper = (root, targetSum) => {
        if (root == null)
            return; 
        sum += root.val;
        arr.push(root.val);
        if (root.left == null && root.right == null && sum == targetSum) {
            res.push([].concat(arr));
        }
        helper(root.left, targetSum);
        helper(root.right, targetSum);
        arr.pop();
        sum -= root.val;
    }

    helper(root, targetSum);
    return res;
};