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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {

    const postorder = (root, target, parent, flag) => {
        if (root === null)
            return;
        postorder(root.left, target, root, 0);
        postorder(root.right, target, root, 1);
        if (root.left === null && root.right === null && root.val === target) {
            if (flag === 0)
                parent.left = null;
            else
                parent.right = null;
        }
    }

    let node = new TreeNode(-1);
    node.right = root;
    postorder(node.right, target, node, 1);

    return node.right;
};


var removeLeafNodes = function (root, target) {
    if (root === null)
        return null;
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    if (root.val === target && root.left === null && root.right === null)
        return null;
    return root;
}