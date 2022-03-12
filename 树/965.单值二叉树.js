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
 * @return {boolean}
 */
 var isUnivalTree = function(root) {
    if (root.left && root.right) {
        return isUnivalTree(root.left) && isUnivalTree(root.right) && root.val === root.left.val && root.val === root.right.val;
    } else if (root.left) {
        return isUnivalTree(root.left) && root.val === root.left.val;
    } else if (root.right) {
        return isUnivalTree(root.right) && root.val === root.right.val;
    }
    return true;
};

var isUnivalTree = function(root) {
    if (!root)
        return true;
    if (root.left && root.val !== root.left.val) {
        return false;
    }
    if (root.right && root.val !== root.right.val) {
        return false;
    }
    return isUnivalTree(root.left) && isUnivalTree(root.right);
};