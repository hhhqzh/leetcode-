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
 * @return {number}
 */
var maxProduct = function (root) {
    let subSums = [];
    const MOD = 1000000007;

    const treeSum = (root) => {
        if (root === null)
            return 0;
        let sum = treeSum(root.left) + treeSum(root.right) + root.val;
        subSums.push(sum);
        return sum;
    }

    let max = 0;

    let sum = treeSum(root);
    for (let subSum of subSums) {
        max = Math.max(max, (sum - subSum) * subSum);
    }
    return max % MOD;
};