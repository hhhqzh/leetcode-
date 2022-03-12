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
 var isCompleteTree = function (root) {
    let queue = [root];
    let flag = 0;
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let node = queue.shift();
            if (node) {
                if (flag === 1)
                    return false;
                queue.push(node.left);
                queue.push(node.right);
            } else {
                flag = 1;
            }
        }
    }
    return true;
};