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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
// var btreeGameWinningMove = function (root, n, x) {
//     let count = 0;
//     let node;
//     const dfs = (root, flag) => {
//         if (root === null)
//             return;
//         if (root.val === x || flag) {
//             if (root.val === x)
//                 node = root;
//             ++count;
//             flag = true;
//         }
//         dfs(root.left, flag);
//         dfs(root.right, flag);
//     }

//     dfs(root, false); // node已保存为值为x的节点，此时count的数量为node + 它的左右字数的数量
//     let _count = count;
//     count = 0;
//     dfs(node.left, true); // 计算节点值为x的节点的左子树节点数量
//     let countl = count;
//     count = 0;
//     dfs(node.right, true); //计算节点值为x的节点的右子树节点数量
//     let countr = count;
//     return n - _count > _count || countl > n - countl || countr > n - countr;
// };


var btreeGameWinningMove = function (root, n, x) {
    let left, right;

    const dfs = (root, x) => {
        if (root === null)
            return 0;
        let l = dfs(root.left, x);
        let r = dfs(root.right, x);
        if (root.val === x) {
            left = l;
            right = r;
        }
        return l + r + 1;
    }

    dfs(root, x);
    return left > n - left || right > n - right || n - 1 - left - right > left + right + 1;
}