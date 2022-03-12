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
 var widthOfBinaryTree = function (root) {
    if (!root)
        return 0;
    let queue = [[root, BigInt(0)]];
    let max = BigInt(1);

    while (queue.length) {
        let size = queue.length;
        let arr = [];
        while (size--) {
            let [node, index] = queue.shift();
            arr.push(index);
            if (node.left) {
                queue.push([node.left, BigInt(index * BigInt(2))]);
            }
            if (node.right) {
                queue.push([node.right, BigInt(index * BigInt(2) + BigInt(1))]);
            }
        }
        max = arr[arr.length - 1] - arr[0] + BigInt(1) > max ? arr[arr.length - 1] - arr[0] + BigInt(1) : max;
    }
    return max;
};