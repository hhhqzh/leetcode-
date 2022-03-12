/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (root === null) {
        return [];
    }
    let res = [];

    const dfs = (root) => {
        let children = root.children;
        for (let child of children) {
            dfs(child);
        }
        res.push(root.val);
    }

    dfs(root);
    return res;
};