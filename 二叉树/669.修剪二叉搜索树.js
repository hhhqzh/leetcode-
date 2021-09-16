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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {

    const preorder = (root, low, high) => {
        if (!root)
            return null;
        if (root.val >= low && root.val <= high) {
            root.left = preorder(root.left, low, high);
            root.right = preorder(root.right, low, high);
            return root;
        } else if (root.val < low) {
            return preorder(root.right, low, high);
        } else if (root.val > high) {
            return preorder(root.left, low, high);
        }
    }

    return preorder(root, low, high);
};