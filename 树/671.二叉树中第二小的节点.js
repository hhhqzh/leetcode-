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
var findSecondMinimumValue = function(root) {
    let res = -1;
    const val = root.val;
    const dfs = (root) => {
        if (root === null)
            return;
        if (res !== -1 && root.val >= res)
            return;
        if (root.val > val)
            res = root.val;
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
};

var findSecondMinimumValue = function (root) {
    const getMin = (root, val) => {
        if (!root)
            return -1;
        if (root.val !== val)
            return root.val;
        if (root.val === val) {
            let l = getMin(root.right, val);
            let r = getMin(root.left, val);
            if (l > val && r > val)
                return Math.min(l, r);
            else
                return Math.max(l, r);
        }
    }

    return getMin(root, root.val);
};