/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
// bfs
var maxDepth = function (root) {
    let queue = new Array();
    if (root !== null)
        queue.push(root)
    let deep = 0;
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let node = queue.shift();
            for (let child of node.children) {
                queue.push(child);
            }
        }
        ++deep;
    }
    return deep;
};

// dfs
var maxDepth = function (root) {
    let max = 0;

    const dfs = (root, deep) => {
        if (root === null)
            return;
        ++deep;
        if (root.children.length === 0) {
            max = Math.max(max, deep);
            return;
        }
        for (let child of root.children) {
            dfs(child, deep);
        }
    }

    dfs(root, 0);

    return max;
}