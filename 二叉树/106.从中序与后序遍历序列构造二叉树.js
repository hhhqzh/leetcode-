/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {

    const creatTree = (inorder, il, ir, postorder, pl, pr) => {
        if (pl > pr || il > ir) {
            return null;
        }
        let node = new TreeNode(postorder[pr]);

        let index = inorder.indexOf(postorder[pr]);
        let len = index - il;

        node.left = creatTree(inorder, il, index - 1, postorder, pl, pl + len - 1);
        node.right = creatTree(inorder, index + 1, ir, postorder, pl + len, pr - 1);

        return node;
    };

    return creatTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};