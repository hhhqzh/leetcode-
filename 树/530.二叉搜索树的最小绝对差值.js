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
 var getMinimumDifference = function(root) {
    let stack = [];
    let res = Number.MAX_SAFE_INTEGER;
    let pre = null;
    while (root !== null || stack.length) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        if (stack.length) {
            root = stack.pop();
            if (pre !== null) {
                res = Math.min(res, root.val - pre.val);
            }
            pre = root;
            root = root.right;
        }
    }
    return res;
};