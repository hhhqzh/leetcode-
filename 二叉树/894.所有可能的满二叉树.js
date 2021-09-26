/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var allPossibleFBT = function (n) {
    let res = [];
    if (n % 2 === 0)
        return res;

    if (n === 1) {
        let node = new TreeNode(0);
        res.push(node);
        return res;
    }
    for (let i = 1; i < n; i += 2) {
        let res1 = allPossibleFBT(i);
        let res2 = allPossibleFBT(n - i - 1);
        for (let r1 of res1) {
            for (let r2 of res2) {
                let head = new TreeNode(0);
                head.left = r1;
                head.right = r2;
                res.push(head);
            }
        }
    }

    return res;
};