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
 * @param {number[]} voyage
 * @return {number[]}
 */
 var flipMatchVoyage = function (root, voyage) {
    let res = [];
    let flag = true;
    const preOrder = (root) => {
        if (root === null) {
            return;
        }
        if (root.val !== voyage[0]) {
            flag = false;
            return;
        }
        voyage = voyage.slice(1);
        if (root.left || root.right) {
            if (root.left && root.left.val !== voyage[0]) {
                let t = root.left;
                root.left = root.right;
                root.right = t;
                res.push(root.val);
            }
            preOrder(root.left);
            preOrder(root.right);
        }
    }

    preOrder(root)
    if (!flag)
        return [-1];
    return res;
};