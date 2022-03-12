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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null)
        return [];
    let queue = [root];
    let res = [];
    let arr = [];
    let flag = true;
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let temp = queue.shift();
            if (flag)
                arr.push(temp.val);
            else
                arr.unshift(temp.val);
            if (temp.left !== null) {
                queue.push(temp.left);
                newNode = temp.left;
            }
            if (temp.right !== null) {
                queue.push(temp.right);
                newNode = temp.right;
            }
        }
        res.push([].concat(arr));
        arr = [];
        flag = !flag;
    }
    return res;
};