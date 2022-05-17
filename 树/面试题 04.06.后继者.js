/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    if (root === null) {
        return null;
    }
    // 若当前节点小于目标节点，则目标节点的后继者必然在当前节点的右子树
    if (p.val >= root.val) {
        return inorderSuccessor(root.right, p);
    }
    // 若当前节点大于目标值，则目标节点的后继者可能为当前节点，也可能在当前节点的左子树中
    let node = inorderSuccessor(root.left, p);
    return node === null ? root : node;
};