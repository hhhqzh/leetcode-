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

/*
    使用完全二叉树的高度，可以直接通过不断访问左子树获取
    若左右子树高度相等，则左子树是满二叉树，然后进一步获取右子树的节点数（最后出现的节点一定在右子树）
    若不相等，则右子树为满二叉树，然后进一步判断左子树的节点数（最后出现的节点一定在左子树）
*/

 var countNodes = function(root) {
    if (root == null)
        return 0;
    let ld = getDepth(root.left);
    let rd = getDepth(root.right);
    if (ld == rd)
        return (1 << ld) + countNodes(root.right); // 2^n - 1 (满左子树节点数) + 1 （根节点） + 右子树节点数
    else
        return (1 << rd) + countNodes(root.left);
};

var getDepth = function(root) {
    let depth = 0;
    while (root) {
        ++depth;
        root = root.left;
    }
    return depth;
}