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
 * @return {string}
 */
 var smallestFromLeaf = function (root) {
    let str = "";
    let s = [], res = [];
    const a = 'a'.charCodeAt();

    const preOrder = (root) => {
        if (root === null)
            return;
        s.push(String.fromCodePoint(a + root.val));
        if (root.left === null && root.right === null) {
            let t = [].concat(s).reverse();
            if (str > t.join('') || str === "") {
                str = t.join('');
                res = t;
            }
        } else {
            preOrder(root.left);
            preOrder(root.right);
        }
        s.pop();
    }

    preOrder(root);
    return res.join('');
};