/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    if (root === null) {
        return res;
    }
    let queue = [root];
    while (queue.length) {
        let temp = [];
        let size = queue.length;
        while (size--) {
            let node = queue.shift();
            temp.push(node.val);
            let children = node.children;
            for (let child of children) {
                queue.push(child);
            }
        }
        res.push(temp);
    }
    return res;
};