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
 var convertBST = function (root) {

    let num = 0;

    const inOrder = (root) => {
        if (root !== null) {
            inOrder(root.right);
            root.val += num;
            num = root.val;
            inOrder(root.left);
            return root;
        }
        return;
    }

    inOrder(root);
    return root;
};