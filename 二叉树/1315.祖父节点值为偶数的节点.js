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
// var sumEvenGrandparent = function (root) {
//     let res = 0;

//     const dfs = (root, grandparent, parent) => {
//         if (root === null)
//             return;
//         if (grandparent !== null && grandparent.val % 2 === 0) {
//             res += root.val;
//         }
//         dfs(root.left, parent, root);
//         dfs(root.right, parent, root);
//     }

//     dfs(root, null, null);

//     return res;
// };


var sumEvenGrandparent = function (root) {
    if (root === null)
        return 0;
    let temp = 0;
    if (root.val % 2 === 0) {
        if (root.left !== null) {
            if (root.left.left !== null)
                temp += root.left.left.val;
            if (root.left.right !== null)
                temp += root.left.right.val;
        }
        if (root.right !== null) {
            if (root.right.left !== null)
                temp += root.right.left.val;
            if (root.right.right !== null)
                temp += root.right.right.val;
        }
    }
    return temp + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right);
}
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
var sumEvenGrandparent = function (root) {
    let res = 0;

    const dfs = (root, grandparent, parent) => {
        if (root === null)
            return;
        if (grandparent !== null && grandparent.val % 2 === 0) {
            res += root.val;
        }
        dfs(root.left, parent, root);
        dfs(root.right, parent, root);
    }

    dfs(root, null, null);

    return res;
};

var sumEvenGrandparent = function (root) {
    if (root === null)
        return 0;
    let temp = 0;
    if (root.val % 2 === 0) {
        if (root.left !== null) {
            if (root.left.left !== null)
                temp += root.left.left.val;
            if (root.left.right !== null)
                temp += root.left.right.val;
        }
        if (root.right !== null) {
            if (root.right.left !== null)
                temp += root.right.left.val;
            if (root.right.right !== null)
                temp += root.right.right.val;
        }
    }
    return temp + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right);
}