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
 var sortedArrayToBST = function(nums) {
    var n = nums.length;
    
    const createTree = (nums, l, r) => {
        if (l > r)
            return null;
        let mid = Math.floor((l + r + 1) / 2);
        let node = new TreeNode(nums[mid]);
        node.left = createTree(nums, l, mid - 1);
        node.right = createTree(nums, mid + 1, r);
        return node;
    }

    return createTree(nums, 0, n - 1);
};