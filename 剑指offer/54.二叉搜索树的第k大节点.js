/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 中序非递归
var kthLargest = function (root, k) {
    let stack = [];
    while (root !== null || stack.length > 0) {
        while (root !== null) {
            stack.push(root);
            root = root.right;
        }
        if (stack.length > 0) {
            root = stack.pop();
            --k;
            if (k === 0)
                return root.val;
            root = root.left;
        }
    }
};