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
 var averageOfLevels = function(root) {
    let res = [];
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        let temp = 0;
        let num = 0;
        while (size--) {
            ++num;
            let node = queue.shift();
            temp += node.val;
            if (node.left !== null)
                queue.push(node.left);
            if (node.right !== null)
                queue.push(node.right);
        }
        res.push(temp / num);
    }
    return res;
};