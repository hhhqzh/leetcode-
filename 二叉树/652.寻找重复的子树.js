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
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function (root) {
    let map = new Map();
    let res = [];

    const dfs = (root) => {
        if (!root)
            return;
        let s = getTreeOrder(root);
        if (!map.has(s))
            map.set(s, 1);
        else if(map.get(s) === 1) {
            res.push(root);
            map.set(s, map.get(s) + 1);
        }
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return res;
};

var getTreeOrder = function (root) {
    let s = "";

    const dfs = (root) => {
        if (!root) {
            s += "#";
            return;
        }
        s += root.val + " ";
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return s;
}