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
// 保存数组再判断会超时
// 用 set 来存储，偶数次从 set 移除，奇数次加入 set，最后 set 的 size 为 0 / 1 才是回文串
var pseudoPalindromicPaths = function (root) {
    let res = 0;
    let set = new Set();

    const preorder = (root) => {
        if (root === null) {
            return;
        }
        if (root.left === null && root.right === null) {
            if (set.size === 0 || set.size <= 2 && set.has(root.val))
                ++res;
            return;
        }
        if (set.has(root.val))
            set.delete(root.val);
        else
            set.add(root.val);
        preorder(root.left);
        preorder(root.right);
        if (set.has(root.val))
            set.delete(root.val);
        else
            set.add(root.val);
    }

    preorder(root);
    return res;
};

// 位运算！！！！啊啊啊啊啊啊啊啊啊啊
var pseudoPalindromicPaths = function (root) {
    let res = 0;
    let sum

    const preorder = (root, mask) => {
        if (root === null) {
            return;
        }
        mask ^= 1 << root.val;
        if (root.left === null && root.right === null) {
            if (mask === 0 || (mask & (mask - 1)) === 0)
                ++res;
        } else {
            preorder(root.left, mask);
            preorder(root.right, mask);
        }
    }

    preorder(root, 0);
    return res;
};