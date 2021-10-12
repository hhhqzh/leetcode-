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
// var maxAncestorDiff = function (root) {
//     let res = Number.MIN_SAFE_INTEGER;

//     const postOrder = (root) => {
//         if (root.left === null && root.right === null) {
//             return [root.val, root.val];
//         }
//         let m = Number.MIN_SAFE_INTEGER;
//         let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
//         if (root.left) {
//             let [lmin, lmax] = postOrder(root.left);
//             m = Math.max(m, Math.abs(root.val - lmin), Math.abs(root.val - lmax));
//             min = Math.min(min, lmin, root.val);
//             max = Math.max(max, lmax, root.val);
//         }
//         if (root.right) {
//             let [rmin, rmax] = postOrder(root.right);
//             m = Math.max(m, Math.abs(root.val - rmin), Math.abs(root.val - rmax));
//             min = Math.min(min, rmin, root.val);
//             max = Math.max(max, rmax, root.val);
//         }
//         res = Math.max(res, m);
//         return [min, max];
//     }

//     postOrder(root);
//     return res;
// };


var maxAncestorDiff = function (root) {
    let res = 0;

    const dfs = (root, min, max) => {
        if (root === null)
            return;
        max = Math.max(max, root.val);
        min = Math.min(min, root.val);
        dfs(root.left, min, max);
        dfs(root.right, min, max);
        res = Math.max(res, max - min);
    }

    dfs(root, root.val, root.val);
    return res;
}