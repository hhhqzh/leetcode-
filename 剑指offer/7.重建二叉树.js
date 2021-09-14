/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    let n = preorder.length - 1;
    return creatTree(preorder, 0, n, inorder, 0, n);
};

var creatTree = function(preorder, pl, pr, inorder, il, ir) {
    if (pl > pr || il > ir)
        return null;
    let mid = inorder.indexOf(preorder[pl]);
    let node = new TreeNode(preorder[pl]);
    let len = mid - il;
    node.left = creatTree(preorder, pl + 1, pl + len, inorder, il, mid - 1);
    node.right = creatTree(preorder, pl + len + 1, pr, inorder, mid + 1, ir);
    return node;
}