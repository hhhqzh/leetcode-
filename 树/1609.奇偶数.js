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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    let level = 0; // 当前层数
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        let pre = null;
        while (size--) {
            let node = queue.shift();
            if (level % 2 === node.val % 2)
                return false
            if (pre !== null) {
                if (level % 2 === 0 && node.val <= pre.val) {
                    return false
                } else if (level % 2 === 1 && node.val >= pre.val) {
                    return false;
                }
            }
            if (node.left !== null)
                queue.push(node.left);
            if (node.right !== null)
                queue.push(node.right);
            pre = node;
        }
        ++level;
    }
    return true;
};
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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    let level = 0; // 当前层数
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        let pre = null;
        while (size--) {
            let node = queue.shift();
            if (level % 2 === node.val % 2)
                return false
            if (pre !== null) {
                if (level % 2 === 0 && node.val <= pre.val) {
                    return false
                } else if (level % 2 === 1 && node.val >= pre.val) {
                    return false;
                }
            }
            if (node.left !== null)
                queue.push(node.left);
            if (node.right !== null)
                queue.push(node.right);
            pre = node;
        }
        ++level;
    }
    return true;
};