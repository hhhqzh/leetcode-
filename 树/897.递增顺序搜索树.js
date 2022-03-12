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
 var increasingBST = function (root) {
    const head = new TreeNode(0);
    let cur = head;

    const inorder = (node) => {
        if (node === null)
            return;
        inorder(node.left);
        cur.right = node;
        cur = node;
        cur.left = null;
        inorder(node.right);

    }

    inorder(root);

    return head.right;
};