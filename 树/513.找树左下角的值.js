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
 var findBottomLeftValue = function(root) {
    let queue = [root];
    let res;
    while (queue.length) {
        let size = queue.length;
        res = queue[0].val;
        while (size--) {
            let node = queue.shift();
            if (node.left !== null)
                queue.push(node.left);
            if (node.right !== null)
                queue.push(node.right);
        }
    }
    return res;
};