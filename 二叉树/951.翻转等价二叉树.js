/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var flipEquiv = function(root1, root2) {
    if (!root1 && !root2)
        return true;
    if ((!root1 || !root2) || (root1.val !== root2.val))
        return false;
    if (!((root1.left && root2.left && root1.left.val === root2.left.val) || (!root1.left && !root2.left))) {
        let temp = root1.left;
        root1.left = root1.right;
        root1.right = temp;
    }
    return flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
};


// var flipEquiv = function (root1, root2) {
//     if (!root1 && !root2)
//         return true;
//     if (!root1 || !root2)
//         return false;
//     if (root1.val === root2.val) {
//         return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) || (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
//     }
//     return false;
// }