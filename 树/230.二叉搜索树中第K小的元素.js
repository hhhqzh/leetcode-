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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

    const getCount = (root) => {
        if (root == null)
            return 0;
        return 1 + getCount(root.left) + getCount(root.right);
    }

    while (true) {
        let l = getCount(root.left);
        if (l >= k) {
            root = root.left;
        } else if (l == k - 1)
            return root.val;
        else {
            root = root.right;
            k = k - l - 1;
        }
    }
};

var kthSmallest = function (root, k) {
    let count = 0;
    let res;

    const inorder = (root) => {
        if (root === null)
            return;
        inorder(root.left);
        ++count;
        if (count === k) {
            res = root.val;
            return;
        }
        inorder(root.right);
    }

    inorder(root)
    return res;
}