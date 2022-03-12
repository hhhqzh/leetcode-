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
var goodNodes = function (root) {
    let res = 0;

    const preorder = (root, max) => {
        if (root === null)
            return;
        if (root.val >= max) {
            ++res;
            max = root.val;
        }
        preorder(root.left, max);
        preorder(root.right, max);
    }

    preorder(root, root.val);
    return res;
};