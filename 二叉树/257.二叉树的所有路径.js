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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let res = [];
    let temp = [];

    const dfs = (root) => {
        if (root == null)
            return;
        if (root.left == null && root.right == null)    {
            temp.push(root.val);
            res.push(temp.join(""));
            temp.pop();
            return;
        }
        temp.push(root.val + "->");
        dfs(root.left);
        dfs(root.right);
        temp.pop();
    }

    dfs(root);

    return res;
};