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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    let stack = [];
    while (root != null || stack.length) {
        while(root != null) {
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop();
        let temp = node.right;
        node.right = node.left;
        node.left = null;
        while(node.right != null)
            node = node.right;
        node.right = temp;
        root = temp;
    }
};

 var flatten = function (root) {
    let stack = [];
    while (root != null || stack.length) {
        while (root != null) {
            if (root.right)
                stack.push(root.right);
            if (root.left) {
                root.right = root.left;
                root.left = null;
                root = root.right;
            } else {
                break;
            }
        }
        if (stack.length) {
            root.right = stack.pop();
            root = root.right
        } else
            root = null;
    }
}