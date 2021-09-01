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


 var sumOfLeftLeaves = function (root) {
    let sum = 0;

    const dfs = (root) => {
        if (root === null)
            return;
        if (isLeaf(root.left))
            sum += root.left.val;
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return sum;
};

const isLeaf = (root) => {
    if (root === null)
        return false;
    if (root.left === null && root.right === null) {
        return true;
    }
    return false;
}