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
 * @return {number[]}
 */
 var findMode = function (root) {
    let res = [];
    let pre = null;
    let cur = 1;
    let max = 0;

    const inOrder = (root) => {
        if (root === null)
            return;
        inOrder(root.left);
        if (pre !== null) {
            if (pre.val === root.val)
                ++cur;
            else
                cur = 1;
        }
        if (cur > max) {
            max = cur;
            res = [];
            res.push(root.val);
        } else if (cur === max) {
            res.push(root.val);
        }
        pre = root;
        inOrder(root.right);
    }

    inOrder(root);
    return res;
};