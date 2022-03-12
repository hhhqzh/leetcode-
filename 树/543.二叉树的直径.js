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
 var diameterOfBinaryTree = function (root) {

    let max = 0;

    const maxDepth = (root) => {
        if (!root)
            return 0;
        let l = maxDepth(root.left);
        let r = maxDepth(root.right);
        max = Math.max(max, l + r);
        return Math.max(l, r) + 1;
    }

    maxDepth(root);
    return max;
};