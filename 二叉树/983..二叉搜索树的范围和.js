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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// 递归
// var rangeSumBST = function(root, low, high) {
//     if(!root)
//         return 0;
//     if(root.val >= low && root.val <= high)
//         return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
//     else if(root.val < low)
//         return rangeSumBST(root.right, low, high);
//     else
//         return rangeSumBST(root.left, low, high);
// };

// BFS
var rangeSumBST = function (root, low, high) {
    if(!root)
        return 0;
    var queue = [root];
    var sum = 0;
    while (queue.length > 0) {
        var t = queue.shift();
        if(!t)
            continue;
        if (t.val >= low && t.val <= high) {
            sum += t.val;
            queue.push(t.left);
            queue.push(t.right);
        }
        if (t.val < low && t.right)
            queue.push(t.right);
        if (t.val > high && t.left)
            queue.push(t.left);
    }
    return sum;
}