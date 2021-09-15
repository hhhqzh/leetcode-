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
 * @return {string[][]}
 */
 var printTree = function (root) {
    let h = getHeight(root);
    let col = Math.pow(2, h) - 1;
    let res = new Array(h).fill("").map(() => new Array(col).fill(""));

    const preOrder = (root, row, l, r) => {
        if (!root || row === h)
            return;
        let mid = Math.floor((r - l) / 2) + l;
        res[row][mid] = root.val + "";
        preOrder(root.left, row + 1, l, mid - 1);
        preOrder(root.right, row + 1, mid + 1, r);
    }
    
    preOrder(root, 0, 0, col - 1);
    
    return res;
};

var getHeight = function (root) {
    if (!root)
        return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}