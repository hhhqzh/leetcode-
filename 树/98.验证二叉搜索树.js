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
 * @return {boolean}
 */
/*
    中序遍历，在判断是否严格递增
 */
var isValidBST = function(root) {
    let arr = [];
    const dfs = (root) => {
        if (!root)
            return;
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    };

    dfs(root);
    for (let i = 1; i < arr.length; ++i) {
        if(arr[i] <= arr[i - 1])
            return false;
    }
    return true;
};

/*  二叉搜索树不止roo.val > root.left.val && root.val < root.right.val
    而是 左子树所有节点小于中间节点，右子树所有节点大于中间节点
*/
var isValidBST = function (root) {
    let last = null;
    const dfs = (root) => {
        if (root == null)
            return true;
        if (!dfs(root.left))
            return false;
        if (last != null && last.val >= root.val)
            return false;
        last = root;
        return dfs(root.right)
    }
    return dfs(root);
}