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
 var rightSideView = function(root) {
    if (root == null)
        return [];
    let queue = [root];
    let res = [];
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let t = queue.shift();
            if (size == 0)
                res.push(t.val);
            if (t.left !== null)
                queue.push(t.left);
            if (t.right !== null)
                queue.push(t.right);
        }
    }
    return res;
};