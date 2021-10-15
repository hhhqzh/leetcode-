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
 * @param {number} limit
 * @return {TreeNode}
 */
 var sufficientSubset = function (root, limit) {
    const postorder = (root, parent, flag, sum) => {
        if (root === null)
            return false;
        sum += root.val;
        if (root.left === null && root.right === null) {
            if (sum >= limit)
                return true;
            else {
                if (flag === 0)
                    parent.left = null;
                else
                    parent.right = null;
                return false;
            }
        } else {
            let l = postorder(root.left, root, 0, sum);
            let r = postorder(root.right, root, 1, sum);
            if (l || r)
                return true;
            else {
                if (flag === 0)
                    parent.left = null;
                else
                    parent.right = null;
                return false;
            }
        }
    }

    let node = new TreeNode(-1);
    node.right = root;
    postorder(root, node, 1, 0);
    return node.right;
};