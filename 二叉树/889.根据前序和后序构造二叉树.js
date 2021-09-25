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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var constructFromPrePost = function (preorder, postorder) {

    const creatTree = (preorder, pl, pr, postorder, il, ir) => {
        if (pl > pr || il > ir) {
            return null;
        }
        let node = new TreeNode(preorder[pl]);

        if (pl == pr)
            return node;

        let index = postorder.indexOf(preorder[pl + 1]);
        let len = index - il + 1;

        node.left = creatTree(preorder, pl + 1, pl + len, postorder, il, index);
        node.right = creatTree(preorder, pl + len + 1, pr, postorder, index + 1, ir - 1);

        return node;
    }

    return creatTree(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1);
};