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
// var sumRootToLeaf = function (root) {
//     let res = 0;
//     let s = [];

//     const preOrder = (root) => {
//         if (root === null) {
//             return;
//         }
//         s.push(root.val);
//         if (root.left === null && root.right === null) {
//             res += parseInt(s.join(''), 2);
//         } else {
//             preOrder(root.left);
//             preOrder(root.right);
//         }
//         s.pop();
//     }

//     preOrder(root);
//     return res;
// };


var sumRootToLeaf = function (root) {
    const preOrder = (root, num) => {
        let sum = 0;
        num = (num << 1) + root.val;
        if (root.left === null && root.right === null)
            return num;
        if (root.left !== null)
            sum += preOrder(root.left, num);
        if (root.right !== null)
            sum += preOrder(root.right, num);
        return sum;
    }

    return root === null ? 0 : preOrder(root, 0);
}