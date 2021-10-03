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


/**
 * 从后序遍历的第一个叶子节点开始，假设自己有x个金币，剩余x-1个金币都还给父节点，x-1可能为负数、0、正数
 * x-1 < 0说明不够金币，需要从父节点获得，因此子节点有|x-1|个入方向的操作，次数加上|x-1|
 * x-1 == 0说明刚好，无需与父节点有金币的交换，次数加0
 * x-1 > 0 说明有多余的金币，需要交给父节点，因此子节点有x-1个出方向的操作，次数加上|x-1|
 */
var distributeCoins = function (root) {
    let res = 0;

    const postOrder = (root) => {
        if (root === null)
            return 0;
        root.val += postOrder(root.left);
        root.val += postOrder(root.right);
        res += Math.abs(root.val - 1);
        return root.val - 1;
    }

    postOrder(root);
    return res;
};