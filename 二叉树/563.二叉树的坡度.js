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
 var findTilt = function(root) {
    let res = 0;

    const getTilt = (root) => {
        if (!root)
            return 0;
        let l = getTilt(root.left);
        let r = getTilt(root.right);
        res += Math.abs(l - r);
        return l + r + root.val;
    }

    getTilt(root);

    return res;
};