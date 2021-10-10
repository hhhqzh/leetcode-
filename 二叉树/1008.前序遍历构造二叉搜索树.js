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
 * @return {TreeNode}
 */
 var bstFromPreorder = function (preorder) {

    const buildTree = (preorder, l, r) => {
        if (l > r)
            return null;
        let val = preorder[l];
        let root = new TreeNode(val);
        let [s, e] = [l + 1, r];
        while (s <= e) {
            let mid = Math.floor((e - s) / 2) + s;
            if (preorder[mid] > val) {
                e = mid - 1;
            } else {
                s = mid + 1;
            }
        }
        root.left = buildTree(preorder, l + 1, e);
        root.right = buildTree(preorder, e + 1, r);
        return root;
    }

    return buildTree(preorder, 0, preorder.length - 1);
};