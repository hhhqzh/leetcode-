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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

// bfs
// var isCousins = function (root, x, y) {
//     let height = new Array(101).fill(0);
//     let father = new Array(101).fill(0);
//     let queue = [root];
//     while (queue.length) {
//         let node = queue.shift();
//         if (node.left) {
//             height[node.left.val] = height[node.val] + 1;
//             father[node.left.val] = node.val;
//             queue.push(node.left);
//         }
//         if (node.right) {
//             height[node.right.val] = height[node.val] + 1;
//             father[node.right.val] = node.val;
//             queue.push(node.right);
//         }
//     }
//     return height[x] == height[y] && father[x] != father[y];
// };


// dfs 

var isCousins = function (root, x, y) {
    let xpar, xhei, xFound, ypar, yhei, yFound;

    const dfs = (root, x, y, height, parent) => {
        if (root === null)
            return;
        if (root.val === x) {
            xpar = parent;
            xhei = height;
            xFound = true;
        } else if (root.val === y) {
            ypar = parent;
            yhei = height;
            yFound = true;
        } else {
            if (xFound && yFound)
                return;
            dfs(root.left, x, y, height + 1, root);
            if (xFound && yFound)
                return;
            dfs(root.right, x, y, height + 1, root);
        }
    }

    dfs(root.left, x, y, 1, root);
    dfs(root.right, x, y, 1, root);

    return xpar !== ypar && xhei === yhei;
}