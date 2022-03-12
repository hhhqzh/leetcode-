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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
 var addOneRow = function (root, val, depth) {
    if (depth === 1) {
        let node = new TreeNode(val);
        node.left = root;
        return node;
    }
    let queue = [root];
    let d = 1;
    while (queue.length && d < depth) {
        let size = queue.length;
        while (size--) {
            let node = queue.shift();
            if (d === depth - 1) {
                let t = new TreeNode(val);
                t.left = node.left;
                node.left = t;
                t = new TreeNode(val);
                t.right = node.right;
                node.right = t;
            } else {
                if (node.left !== null)
                    queue.push(node.left);
                if (node.right !== null)
                    queue.push(node.right);
            }
        }
        ++d;
    }
    return root;
};