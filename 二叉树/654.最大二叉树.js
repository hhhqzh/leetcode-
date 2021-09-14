/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {

    const creatTree = (nums, l, r) => {
        if (l > r)
            return null;
        let index = getMaxIndex(nums, l, r);
        let node = new TreeNode(nums[index]);
        node.left = creatTree(nums, l, index - 1);
        node.right = creatTree(nums, index + 1, r);
        return node;
    }

    const getMaxIndex = (nums, l, r) => {
        let maxIndex = l;
        for (let i = l + 1; i <= r; ++i) {
            maxIndex = nums[maxIndex] < nums[i] ? i : maxIndex;
        }
        return maxIndex;
    }

    return creatTree(nums, 0, nums.length - 1);
};