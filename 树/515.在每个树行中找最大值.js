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
 * @return {number[]}
 */
 var largestValues = function(root) {
    if (root === null)
        return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        let t = Number.MIN_SAFE_INTEGER;
        while (size--) {
            let node = queue.shift();
            t = Math.max(t, node.val);
            if (node.left !== null)
                queue.push(node.left);
            if (node.right !== null)
                queue.push(node.right);
        }
        res.push(t);
    }
    return res;
};