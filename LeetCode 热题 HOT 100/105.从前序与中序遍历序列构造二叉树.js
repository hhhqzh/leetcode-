/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {

    const createTree = (preorder, pl, pr, inorder, il, ir) => {
        if (pl > pr || il > ir) {
            return null;
        }
        let node = new TreeNode(preorder[pl]);

        let index = inorder.indexOf(preorder[pl]);
        let len = index - il;

        node.left = createTree(preorder, pl + 1, pl + len, inorder, il, index - 1);
        node.right = createTree(preorder, pl + len + 1, pr, inorder, index + 1, ir);

        return node;
    };

    return createTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};