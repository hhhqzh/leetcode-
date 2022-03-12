/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    let res = [];

    const dfs = (root) => {
        if (root === null) {
            return;
        }
        res.push(root.val);
        for (let i = 0; i < root.children.length; ++i) {
            dfs(root.children[i]);
        }
    }

    dfs(root);
    return res;
};

// 迭代
var preorder = function (root) {
    if (root === null) {
        return [];
    }
    let res = [],
        queue = [root];
    while (queue.length !== 0) {
        let temp = queue.shift();
        res.push(temp.val);
        for (let i = temp.children.length - 1; i >= 0; --i) {
            queue.unshift(temp.children[i]);
        }
    }
    return res;
};