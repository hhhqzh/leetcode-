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
var longestZigZag = function (root) {

    let res = 0;

    // 返回以当前 root 为根的最长交错路径
    const maxZigZag = (root, isLeft) => {
        if (root === null) {
            return 0;
        }
        let l = maxZigZag(root.left, true);
        let r = maxZigZag(root.right, false);
        res = Math.max(res, l, r);
        if (isLeft) {
            return r + 1;
        } else {
            return l + 1;
        }

    }

    maxZigZag(root, true);
    return res;
};

// 超时。。。
var longestZigZag = function (root) {

    let res = 0;

    const maxZigZag = (root, cnt, flag) => {
        if (root === null) {
            res = Math.max(res, cnt);
            return;
        }
        if (flag === 0) {
            maxZigZag(root.right, cnt + 1, 1);
        } else if (flag === 1) {
            maxZigZag(root.left, cnt + 1, 0);
        } else if (flag === -1) {
            maxZigZag(root.left, cnt + 1, 0);
            maxZigZag(root.right, cnt + 1, 1);
        }
        maxZigZag(root.left, 0, -1);
        maxZigZag(root.right, 0, -1);
    }

    maxZigZag(root, 0, -1);
    return res - 1;
};