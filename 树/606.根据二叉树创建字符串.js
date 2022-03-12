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
 * @return {string}
 */
var tree2str = function (root) {

    let res = "";

    const preOrder = (root) => {
        if (!root)
            return;
        res += root.val;
        if (root.left || root.right) {
            res += "(";
            preOrder(root.left);
            res += ")";
            if (root.right) {
                res += "(";
                preOrder(root.right);
                res += ")";
            }
        }
    }

    preOrder(root);

    return res;
};