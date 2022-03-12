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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    let newRoot = new TreeNode(-1);
    newRoot.right = root;
    let res = [newRoot];

    const dfs = (root, parent, flag, to_delete) => {
        if (root === null)
            return;
        if (to_delete.indexOf(root.val) !== -1) {
            if (flag === 0)
                parent.left = null;
            else
                parent.right = null;
            if (root.left !== null) {
                let node = new TreeNode(-1);
                node.right = root.left;
                res.push(node);
            }
            if (root.right !== null) {
                let node = new TreeNode(-1);
                node.right = root.right;
                res.push(node);
            }
            return;
        }
        dfs(root.left, root, 0, to_delete);
        dfs(root.right, root, 1, to_delete);
    }

    for (let i = 0; i < res.length; ++i) {
        dfs(res[i].right, res[i], 1, to_delete);
    }

    let ans = [];
    for (let r of res) {
        if (r.right !== null)
            ans.push(r.right);
    }
    return ans;
};

// 后序遍历
var delNodes = function (root, to_delete) {
    let res = [];
    let newRoot = new TreeNode(0);
    newRoot.right = root;
    to_delete.push(0);

    const dfs = (root, parent, to_delete) => {
        if (root === null)
            return;
        dfs(root.left, root, to_delete);
        dfs(root.right, root, to_delete);

        if (to_delete.indexOf(root.val) !== -1) {
            if (parent !== null && parent.left === root)
                parent.left = null;
            if (parent !== null && parent.right === root)
                parent.right = null;
            if (root.left !== null)
                res.push(root.left);
            if (root.right !== null)
                res.push(root.right);
        }
    }

    dfs(newRoot, null, to_delete);
    return res;
}