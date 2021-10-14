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
 * @return {TreeNode}
 */
 var bstToGst = function(root) {
    let sum = 0;

    const rePostorder = (root) => {
        if (root === null)
            return;
        rePostorder(root.right);
        root.val += sum;
        sum = root.val;
        rePostorder(root.left);
    }

    rePostorder(root);
    return root;
};