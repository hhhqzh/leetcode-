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
 * @param {number} val
 * @return {TreeNode}
 */

// 递归
var insertIntoBST = function (root, val) {
    if (root !== null) {
        if (root.val > val) {
            root.left = insertIntoBST(root.left, val);
        } else {
            root.right = insertIntoBST(root.right, val);
        }
        return root;
    } else {
        return new TreeNode(val);
    }
};

// 迭代
var insertIntoBST = function (root, val) {
    if (root === null)
        return new TreeNode(val);
    let parent = root,
        p = root;
    while (p !== null) {
        parent = p;
        p = p.val > val ? p.left : p.right;
    }
    if (parent.val > val) {
        parent.left = new TreeNode(val);
    } else {
        parent.right = new TreeNode(val);
    }
    return root;
}