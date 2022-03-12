/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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

/*  后续遍历。
    要注意：二叉搜索树不止roo.val > root.left.val && root.val < root.right.val
    而是 左子树所有节点小于中间节点，右子树所有节点大于中间节点
*/

// 保存当前子树的信息
function node(flag, minVal, maxVal, curSum) {
    this.flag = flag; // 是否为BST
    this.minVal = minVal; // 当前树的最小值
    this.maxVal = maxVal; // 当前树的最大值
    this.curSum = curSum; // 当前树的和
}

var maxSumBST = function (root) {
    let res = 0;

    const isBST = (root) => {
        if (root === null) {
            return new node(true, 0, 0, 0);
        }
        let l = isBST(root.left);
        let r = isBST(root.right);

        if (!l.flag || !r.flag || (root.left !== null && root.val <= l.maxVal) || (root.right !== null && root.val >= r.minVal))
            return new node(false, 0, 0, 0);

        let curMin = root.left === null ? root.val : l.minVal;
        let curMax = root.right === null ? root.val : r.maxVal;
        let sum = root.val + l.curSum + r.curSum;
        res = Math.max(res, sum);
        return new node(true, curMin, curMax, sum);
    }

    isBST(root);

    return res;
};

// 超时。。。
var maxSumBST = function (root) {
    let res = 0;

    const dfs = (root) => {
        if (root === null)
            return;

        let last = null;

        const isBST = (root) => {
            if (root === null) {
                return [0, true];
            }
            let l = isBST(root.left);
            if (!l[1])
                return [0, false];
            if (last !== null && last.val >= root.val)
                return [0, false];
            last = root;
            let r = isBST(root.right);
            if (r[1]) {
                let sum = root.val + l[0] + r[0];
                res = Math.max(res, sum);
                return [sum, true];
            } else {
                return [0, false];
            }
        }

        isBST(root);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);

    return res;
};