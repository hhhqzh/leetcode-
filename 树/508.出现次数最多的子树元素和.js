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
 * @return {number[]}
 */
 var findFrequentTreeSum = function(root) {
    let count = new Map();
    let max = 0;
    const postOrder = (root) => {
        if (root === null)
            return 0;
        let res = 0;
        res += postOrder(root.left);
        res += postOrder(root.right);
        res += root.val;
        if (count.has(res))
            count.set(res, count.get(res) + 1);
        else
            count.set(res, 1);
        max = Math.max(max, count.get(res));
        return res;
    }

    postOrder(root);

    let res = [];

    for (const c of count) {
        if (c[1] === max)
            res.push(c[0]);
    }
    return res;
};