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
var maxLevelSum = function (root) {
    let res = Number.MAX_SAFE_INTEGER;
    let sum = Number.MIN_SAFE_INTEGER;
    let level = 0; // 层号
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        let s = 0;
        ++level;
        while (size--) {
            let node = queue.shift();
            s += node.val;
            if (node.left !== null)
                queue.push(node.left);
            if (node.right !== null)
                queue.push(node.right);
        }
        if (s > sum) {
            sum = s;
            res = level;
        } else if (s === sum) {
            res = Math.min(res, level);
        }
    }
    return res;
};